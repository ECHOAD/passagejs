# Development Guide

This guide explains how to maintain and develop this package, especially after regenerating code.

## Table of Contents

- [Project Overview](#project-overview)
- [Initial Setup](#initial-setup)
- [Code Generation](#code-generation)
- [After Regenerating Contracts](#after-regenerating-contracts)
- [Common Issues and Fixes](#common-issues-and-fixes)
- [Publishing Workflow](#publishing-workflow)
- [Project Structure](#project-structure)

## Project Overview

This package generates TypeScript types and clients for:
1. **Passage3D Proto Types** - From proto files using @cosmology/telescope
2. **CosmWasm Contract Clients** - From contract schemas using @cosmwasm/ts-codegen

## Initial Setup

```bash
# Clone with submodules
git clone --recurse-submodules <repo-url>
cd passagejs

# Install dependencies
npm install

# Generate all code
npm run codegen:all

# Build
npm run build
```

## Code Generation

### Proto Codegen

Generates TypeScript from proto files:

```bash
npm run codegen
```

This usually works without issues. Proto types are well-defined.

### CosmWasm Codegen

Generates TypeScript clients from CosmWasm contract schemas:

```bash
npm run codegen:cosmwasm
```

⚠️ **IMPORTANT**: This will regenerate all contract clients and **remove** manual fixes. You'll need to reapply fixes after running this command.

### Generate Everything

```bash
npm run codegen:all
```

## After Regenerating Contracts

When you run `npm run codegen:cosmwasm`, the generated code will have TypeScript errors. Follow these steps to fix them:

### Step 1: Run the Build to See Errors

```bash
npm run build
```

This will show all TypeScript compilation errors that need fixing.

### Step 2: Fix Missing Type Definitions

The codegen often doesn't generate all response types referenced in the client files. You'll need to add them manually.

#### Common Pattern

If you see errors like:
```
error TS2304: Cannot find name 'SomeResponse'
```

You need to:

1. **Add the type definition** in the corresponding `.types.ts` file
2. **Add the import** in the corresponding `.client.ts` file

#### Example: Adding Missing Response Types

For example, if `NftMarketplaceV2.client.ts` references `BidsByTokenPriceResponse` but it's not defined:

**1. Add to `NftMarketplaceV2.types.ts`:**

```typescript
// At the end of the file
export type BidsByTokenPriceResponse = BidsResponse;
export type BidsByBidderExpiryResponse = BidsResponse;
```

**2. Add import in `NftMarketplaceV2.client.ts`:**

Find the import line:
```typescript
import { ... } from "./NftMarketplaceV2.types";
```

Add the new types:
```typescript
import { ..., BidsByTokenPriceResponse, BidsByBidderExpiryResponse } from "./NftMarketplaceV2.types";
```

### Step 3: Fix Property Overwrite Errors

The codegen creates classes that extend base classes, causing property conflicts.

#### Error Pattern

```
error TS2612: Property 'client' will overwrite the base property in 'QueryClient'.
error TS2612: Property 'contractAddress' will overwrite the base property in 'QueryClient'.
```

#### Fix

In the **class** definition (not the interface), add `declare` modifier:

**Before:**
```typescript
export class NftMarketplaceV2Client extends NftMarketplaceV2QueryClient {
  client: ISigningCosmWasmClient;
  sender: string;
  contractAddress: string;
```

**After:**
```typescript
export class NftMarketplaceV2Client extends NftMarketplaceV2QueryClient {
  declare client: ISigningCosmWasmClient;
  sender: string;
  declare contractAddress: string;
```

⚠️ **IMPORTANT**: Only add `declare` in **classes**, never in **interfaces**.

### Step 4: Automated Fix Script

For convenience, here's a Python script that fixes most common issues:

Create a file `scripts/fix-codegen.py`:

```python
import re
import glob
import os

os.chdir('src/cosmwasm')

# Map of known missing types (update as needed)
missing_types = {
    'NftAuctionEnglish.types.ts': [
        ('AuctionsResponse', [
            'AuctionsByStartTimeResponse',
            'AuctionsByEndTimeResponse',
            'AuctionsByHighestBidPriceResponse',
            'AuctionsBySellerEndTimeResponse',
            'AuctionsByBidderEndTimeResponse'
        ])
    ],
    'NftMarketplaceV2.types.ts': [
        ('BidsResponse', [
            'BidsByTokenPriceResponse',
            'BidsByBidderExpiryResponse'
        ]),
        ('CollectionBidsResponse', [
            'CollectionBidsByPriceResponse',
            'CollectionBidsByExpiryResponse'
        ])
    ],
    'NftMinter.types.ts': [
        (None, [
            ('MintableNumTokensResponse', '{ count: number; [k: string]: unknown; }'),
            ('StartTimeResponse', '{ start_time: string; [k: string]: unknown; }'),
            ('MintPriceResponse', '{ mint_price?: Coin | null; [k: string]: unknown; }'),
            ('MintCountResponse', '{ address: string; count: number; [k: string]: unknown; }')
        ])
    ],
    # Add more as needed
}

# Fix type definitions
for type_file, types_to_add in missing_types.items():
    if not os.path.exists(type_file):
        continue

    with open(type_file, 'r', encoding='utf-8') as f:
        content = f.read()

    additions = []
    for base_type, new_types in types_to_add:
        if base_type:
            # Type aliases
            for new_type in new_types:
                if new_type not in content:
                    additions.append(f"export type {new_type} = {base_type};")
        else:
            # Interface definitions
            for new_type, definition in new_types:
                if new_type not in content:
                    additions.append(f"export interface {new_type} {definition}")

    if additions:
        content = content.rstrip() + '\n' + '\n'.join(additions) + '\n'
        with open(type_file, 'w', encoding='utf-8', newline='') as f:
            f.write(content)
        print(f"Fixed {type_file}")

# Fix imports in client files
for client_file in glob.glob("*.client.ts"):
    type_file = client_file.replace('.client.ts', '.types.ts')

    with open(client_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find missing types from error messages or code
    # This is a simplified version - adjust based on actual errors

    # Fix declare modifiers
    lines = content.split('\n')
    result = []
    in_class = False

    for line in lines:
        if 'export class' in line and 'Client' in line:
            in_class = True
            result.append(line)
        elif in_class and line.strip() == '}':
            in_class = False
            result.append(line)
        elif in_class and '  client: ISigningCosmWasmClient;' in line:
            result.append('  declare client: ISigningCosmWasmClient;')
        elif in_class and '  contractAddress: string;' in line and 'declare' not in line:
            result.append('  declare contractAddress: string;')
        else:
            result.append(line)

    with open(client_file, 'w', encoding='utf-8', newline='') as f:
        f.write('\n'.join(result))
    print(f"Fixed {client_file}")

print("\nAll fixes applied! Run 'npm run build' to verify.")
```

Run it after codegen:

```bash
python3 scripts/fix-codegen.py
npm run build
```

## Common Issues and Fixes

### Issue 1: Missing Response Types

**Symptoms:**
```
error TS2304: Cannot find name 'XyzResponse'
```

**Fix:**
1. Check which contract has the error
2. Open the corresponding `.types.ts` file
3. Add the missing type (usually as a type alias to an existing interface)
4. Update imports in the `.client.ts` file

### Issue 2: Property Overwrite

**Symptoms:**
```
error TS2612: Property 'client' will overwrite the base property
```

**Fix:**
Add `declare` modifier to the property in the **class** (not interface):
```typescript
declare client: ISigningCosmWasmClient;
declare contractAddress: string;
```

### Issue 3: Declare in Interface

**Symptoms:**
```
error TS1070: 'declare' modifier cannot appear on a type member
```

**Fix:**
Remove `declare` from interface definitions. Only use it in classes.

### Issue 4: Type Not Exported

**Symptoms:**
Type is defined but not found during import.

**Fix:**
Ensure the type is exported:
```typescript
export interface MyResponse { ... }
// or
export type MyResponse = SomeOtherType;
```

## Publishing Workflow

### 1. Make Changes

Edit source files, update contracts, etc.

### 2. Regenerate (if needed)

```bash
npm run codegen:cosmwasm  # Only if contract schemas changed
```

### 3. Apply Fixes

```bash
python3 scripts/fix-codegen.py  # If you created the script
# Or manually fix TypeScript errors
npm run build  # Verify no errors
```

### 4. Update Version

Edit `package.json`:
```json
{
  "version": "0.0.4"  // Increment version
}
```

### 5. Update CHANGELOG

Add entry to `CHANGELOG.md`:
```markdown
## [0.0.4] - 2024-12-05

### Changed
- Description of changes

### Fixed
- Description of fixes
```

### 6. Build and Publish

```bash
npm run build
npm publish
```

### 7. Verify

```bash
npm view @echoad/passagejs version
```

## Project Structure

```
passagejs/
├── src/
│   ├── codegen/              # Generated proto types
│   │   ├── passage3d/        # Passage3D types
│   │   ├── cosmos/           # Cosmos SDK types
│   │   └── ...
│   └── cosmwasm/             # Generated CosmWasm clients
│       ├── *.client.ts       # Client classes (Query + Signing)
│       ├── *.types.ts        # Type definitions
│       └── *.message-composer.ts  # Message composers
├── scripts/
│   ├── codegen.js            # Proto codegen config
│   ├── cosmwasm-codegen.js   # CosmWasm codegen config
│   └── fix-codegen.py        # Fix script (create this)
├── proto/                    # Proto files
├── contracts/                # Contract submodule
├── nft-staking/              # Staking contracts submodule
├── dist/                     # Build output
├── package.json
├── tsconfig.json
├── README.md                 # User documentation
├── CHANGELOG.md              # Version history
└── DEVELOPMENT.md            # This file
```

## Quick Reference: Fix Checklist

After running `npm run codegen:cosmwasm`:

- [ ] Run `npm run build` to see errors
- [ ] For each "Cannot find name" error:
  - [ ] Add type definition in `.types.ts`
  - [ ] Add import in `.client.ts`
- [ ] For each "Property will overwrite" error:
  - [ ] Add `declare` modifier in class definition
  - [ ] Make sure NOT in interface definition
- [ ] Run `npm run build` again
- [ ] Repeat until build succeeds
- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md`
- [ ] Run `npm publish`

## Tips

1. **Keep a backup** of your fixes before regenerating
2. **Document new patterns** you discover in this file
3. **Update the fix script** when you find new common issues
4. **Test thoroughly** after regeneration before publishing
5. **Use semantic versioning**:
   - Patch (0.0.x): Bug fixes, small changes
   - Minor (0.x.0): New features, backwards compatible
   - Major (x.0.0): Breaking changes

## Getting Help

If you encounter new errors not covered here:

1. Check the TypeScript error message carefully
2. Look at similar fixes in other contract files
3. Update this document with your solution
4. Consider adding to the automated fix script

## Maintaining This Document

Please update this document when you:
- Discover new common issues
- Create new fix patterns
- Change the build process
- Add new tools or scripts

Keep it practical and example-focused for future developers!
