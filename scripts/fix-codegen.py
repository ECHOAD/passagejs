#!/usr/bin/env python3
"""
Automated fix script for CosmWasm codegen TypeScript errors.

Run this after `npm run codegen:cosmwasm` to fix common TypeScript errors.

Usage:
    python3 scripts/fix-codegen.py
"""

import re
import glob
import os
import sys

def add_missing_types():
    """Add missing type definitions to .types.ts files"""

    os.chdir('src/cosmwasm')

    # Map of files and the types that need to be added
    # Format: 'filename': [(base_type, [alias_names]) or (None, [(name, definition)])]
    type_additions = {
        'NftAuctionEnglish.types.ts': {
            'marker': 'export interface AuctionsResponse',
            'types': [
                ('AuctionsResponse', [
                    'AuctionsByStartTimeResponse',
                    'AuctionsByEndTimeResponse',
                    'AuctionsByHighestBidPriceResponse',
                    'AuctionsBySellerEndTimeResponse',
                    'AuctionsByBidderEndTimeResponse'
                ])
            ]
        },
        'NftMarketplaceV2.types.ts': {
            'marker': 'export interface BidsResponse',
            'types': [
                ('BidsResponse', [
                    'BidsByTokenPriceResponse',
                    'BidsByBidderExpiryResponse'
                ]),
                ('CollectionBidsResponse', [
                    'CollectionBidsByPriceResponse',
                    'CollectionBidsByExpiryResponse'
                ])
            ]
        },
        'NftMinter.types.ts': {
            'marker': 'export interface',
            'types': [
                (None, [
                    ('MintableNumTokensResponse', '{\n  count: number;\n  [k: string]: unknown;\n}'),
                    ('StartTimeResponse', '{\n  start_time: string;\n  [k: string]: unknown;\n}'),
                    ('MintPriceResponse', '{\n  mint_price?: Coin | null;\n  [k: string]: unknown;\n}'),
                    ('MintCountResponse', '{\n  address: string;\n  count: number;\n  [k: string]: unknown;\n}')
                ])
            ]
        },
        'NftMinterMetadataOnchain.types.ts': {
            'marker': 'export interface',
            'types': [
                (None, [
                    ('NumMintedResponse', '{\n  num_minted: number;\n  [k: string]: unknown;\n}'),
                    ('NumRemainingResponse', '{\n  num_remaining: number;\n  [k: string]: unknown;\n}'),
                    ('StartTimeResponse', '{\n  start_time: string;\n  [k: string]: unknown;\n}'),
                    ('MintPriceResponse', '{\n  mint_price?: Coin | null;\n  [k: string]: unknown;\n}'),
                    ('MintCountResponse', '{\n  address: string;\n  count: number;\n  [k: string]: unknown;\n}'),
                    ('TokenMintResponse', '{\n  minter: string;\n  token_id: string;\n  [k: string]: unknown;\n}'),
                    ('TokenMintsResponse', '{\n  token_mints: TokenMintResponse[];\n  [k: string]: unknown;\n}')
                ])
            ]
        },
        'NftPg721Legacy.types.ts': {
            'marker': 'export interface TokensResponse',
            'types': [
                ('OperatorsResponse', ['AllOperatorsResponse']),
                ('TokensResponse', ['AllTokensResponse'])
            ]
        },
        'NftWhitelist.types.ts': {
            'marker': 'export interface MembersResponse',
            'types': [
                (None, [
                    ('HasStartedResponse', '{\n  has_started: boolean;\n  [k: string]: unknown;\n}'),
                    ('HasEndedResponse', '{\n  has_ended: boolean;\n  [k: string]: unknown;\n}'),
                    ('IsActiveResponse', '{\n  is_active: boolean;\n  [k: string]: unknown;\n}'),
                    ('HasMemberResponse', '{\n  has_member: boolean;\n  [k: string]: unknown;\n}')
                ])
            ]
        },
        'NftRoyaltyGroup.types.ts': {
            'marker': 'export interface TotalWeightResponse',
            'types': [
                ('MemberListResponse', ['ListMembersResponse']),
                (None, [
                    ('HooksResponse', '{\n  hooks: string[];\n  [k: string]: unknown;\n}')
                ])
            ]
        },
        'NftNftVault.types.ts': {
            'marker': 'export interface ConfigResponse',
            'types': [
                (None, [
                    ('VaultToken', '{\n  owner: Addr;\n  stake_timestamp: Timestamp;\n  token_id: string;\n  unstake_timestamp?: Timestamp | null;\n  [k: string]: unknown;\n}'),
                    ('VaultTokenResponse', '{\n  vault_token?: VaultToken | null;\n  [k: string]: unknown;\n}'),
                    ('VaultTokensByOwnerResponse', '{\n  tokens: VaultToken[];\n  [k: string]: unknown;\n}'),
                    ('VaultTokensByStakeTimestampResponse', '{\n  tokens: VaultToken[];\n  [k: string]: unknown;\n}'),
                    ('VaultTokensByUnstakeTimestampResponse', '{\n  tokens: VaultToken[];\n  [k: string]: unknown;\n}'),
                    ('StakeHooksResponse', '{\n  hooks: string[];\n  [k: string]: unknown;\n}'),
                    ('UnstakeHooksResponse', '{\n  hooks: string[];\n  [k: string]: unknown;\n}'),
                    ('WithdrawHooksResponse', '{\n  hooks: string[];\n  [k: string]: unknown;\n}')
                ])
            ]
        },
        'StakingNftVault.types.ts': {
            'marker': 'export type ArrayOfStakedNft',
            'types': [
                (None, [
                    ('ConfigResponse', '{\n  config: ConfigForAddr;\n  [k: string]: unknown;\n}'),
                    ('RewardAccountsResponse', '{\n  accounts: Addr[];\n  [k: string]: unknown;\n}'),
                    ('UsersStakedNftsResponse', '{\n  nfts: StakedNft[];\n  [k: string]: unknown;\n}'),
                    ('UsersCollectionStakedAmountsResponse', '{\n  amounts: [string, number][];\n  [k: string]: unknown;\n}'),
                    ('TotalStakedAmountAtHeightResponse', '{\n  total: number;\n  [k: string]: unknown;\n}'),
                    ('ClaimsResponse', 'ArrayOfClaim')
                ])
            ]
        },
        'StakingStakeRewards.types.ts': {
            'marker': 'export interface CumulativeRewards',
            'types': [
                (None, [
                    ('ConfigResponse', '{\n  config: Config;\n  [k: string]: unknown;\n}'),
                    ('RewardsResponse', '{\n  cumulative_rewards: CumulativeRewards;\n  [k: string]: unknown;\n}'),
                    ('UserRewardResponse', 'NullableUserReward'),
                    ('LatestUserRewardResponse', '{\n  user_reward?: UserReward | null;\n  [k: string]: unknown;\n}')
                ])
            ]
        },
        'StakingVaultFactory.types.ts': {
            'marker': 'export interface QueryOptionsForUint64',
            'types': [
                ('QueryOptionsForUint64', ['QueryOptions_for_uint64']),
                (None, [
                    ('VaultsResponse', '{\n  vaults: [number, string][];\n  [k: string]: unknown;\n}')
                ])
            ]
        }
    }

    fixed_files = []

    for filename, config in type_additions.items():
        if not os.path.exists(filename):
            continue

        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()

        additions = []

        for item in config['types']:
            if item[0] is None:
                # Interface definitions
                for name, definition in item[1]:
                    if name not in content:
                        if definition.startswith('{'):
                            additions.append(f'export interface {name} {definition}')
                        else:
                            additions.append(f'export type {name} = {definition};')
            else:
                # Type aliases
                base_type, alias_names = item
                for alias in alias_names:
                    if alias not in content:
                        additions.append(f'export type {alias} = {base_type};')

        if additions:
            content = content.rstrip() + '\n' + '\n'.join(additions) + '\n'
            with open(filename, 'w', encoding='utf-8', newline='') as f:
                f.write(content)
            fixed_files.append(filename)
            print(f"✓ Fixed types in {filename}")

    os.chdir('../..')
    return fixed_files


def fix_client_imports():
    """Add missing imports to .client.ts files"""

    os.chdir('src/cosmwasm')

    # Map of client files and the types they need to import
    imports_to_add = {
        'NftAuctionEnglish.client.ts': [
            'AuctionsByStartTimeResponse', 'AuctionsByEndTimeResponse',
            'AuctionsByHighestBidPriceResponse', 'AuctionsBySellerEndTimeResponse',
            'AuctionsByBidderEndTimeResponse'
        ],
        'NftNftVault.client.ts': [
            'StakeHooksResponse', 'UnstakeHooksResponse', 'WithdrawHooksResponse',
            'VaultTokenResponse', 'VaultTokensByOwnerResponse',
            'VaultTokensByStakeTimestampResponse', 'VaultTokensByUnstakeTimestampResponse'
        ],
        'NftPg721Legacy.client.ts': ['AllOperatorsResponse', 'AllTokensResponse'],
        'NftWhitelist.client.ts': [
            'HasStartedResponse', 'HasEndedResponse', 'IsActiveResponse', 'HasMemberResponse'
        ],
        'NftRoyaltyGroup.client.ts': ['ListMembersResponse', 'HooksResponse'],
        'NftMinter.client.ts': [
            'MintableNumTokensResponse', 'StartTimeResponse', 'MintPriceResponse', 'MintCountResponse'
        ],
        'NftMinterMetadataOnchain.client.ts': [
            'NumMintedResponse', 'NumRemainingResponse', 'StartTimeResponse',
            'MintPriceResponse', 'MintCountResponse', 'TokenMintResponse', 'TokenMintsResponse'
        ],
        'NftMarketplaceV2.client.ts': [
            'BidsByTokenPriceResponse', 'BidsByBidderExpiryResponse',
            'CollectionBidsByPriceResponse', 'CollectionBidsByExpiryResponse'
        ],
        'StakingNftVault.client.ts': [
            'ConfigResponse', 'RewardAccountsResponse', 'UsersStakedNftsResponse',
            'UsersCollectionStakedAmountsResponse', 'TotalStakedAmountAtHeightResponse', 'ClaimsResponse'
        ],
        'StakingStakeRewards.client.ts': [
            'ConfigResponse', 'RewardsResponse', 'UserRewardResponse', 'LatestUserRewardResponse'
        ],
        'StakingVaultFactory.client.ts': ['QueryOptions_for_uint64', 'VaultsResponse']
    }

    fixed_files = []

    for filename, types_list in imports_to_add.items():
        if not os.path.exists(filename):
            continue

        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find the import line for types
        types_file = filename.replace('.client.ts', '.types')
        import_pattern = rf'(import\s*{{[^}}]+}}\s*from\s*["\']\./{types_file}["\'];)'

        match = re.search(import_pattern, content)
        if match:
            old_import = match.group(1)
            imports_match = re.search(r'import\s*{([^}]+)}', old_import)

            if imports_match:
                current_imports = [t.strip() for t in imports_match.group(1).split(',')]

                # Add new types
                updated = False
                for new_type in types_list:
                    if new_type not in current_imports:
                        current_imports.append(new_type)
                        updated = True

                if updated:
                    new_import = f"import {{ {', '.join(current_imports)} }} from \"./{types_file}\";"
                    content = content.replace(old_import, new_import)

                    with open(filename, 'w', encoding='utf-8', newline='') as f:
                        f.write(content)
                    fixed_files.append(filename)
                    print(f"✓ Fixed imports in {filename}")

    os.chdir('../..')
    return fixed_files


def fix_declare_modifiers():
    """Fix declare modifiers in client classes"""

    os.chdir('src/cosmwasm')

    fixed_files = []

    for filename in glob.glob("*.client.ts"):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()

        lines = content.split('\n')
        result = []
        in_class = False
        in_interface = False
        updated = False

        for line in lines:
            # Track if we're in a class or interface
            if 'export interface' in line and 'Interface' in line:
                in_interface = True
                in_class = False
            elif 'export class' in line and 'Client' in line:
                in_class = True
                in_interface = False
            elif line.strip() == '}':
                in_class = False
                in_interface = False

            # Fix declare in classes
            if in_class:
                if '  client: ISigningCosmWasmClient;' in line:
                    result.append('  declare client: ISigningCosmWasmClient;')
                    updated = True
                    continue
                elif '  contractAddress: string;' in line and 'declare' not in line:
                    result.append('  declare contractAddress: string;')
                    updated = True
                    continue

            # Remove declare from interfaces
            if in_interface and 'declare' in line:
                result.append(line.replace('declare ', ''))
                updated = True
                continue

            result.append(line)

        if updated:
            with open(filename, 'w', encoding='utf-8', newline='') as f:
                f.write('\n'.join(result))
            fixed_files.append(filename)
            print(f"✓ Fixed declare modifiers in {filename}")

    os.chdir('../..')
    return fixed_files


def main():
    print("🔧 Fixing CosmWasm codegen TypeScript errors...\n")

    # Check if we're in the right directory
    if not os.path.exists('src/cosmwasm'):
        print("❌ Error: Must run from project root directory")
        print("   Current directory:", os.getcwd())
        sys.exit(1)

    try:
        # Step 1: Add missing types
        print("📝 Step 1: Adding missing type definitions...")
        type_files = add_missing_types()
        if type_files:
            print(f"   Added types to {len(type_files)} files\n")
        else:
            print("   No missing types found\n")

        # Step 2: Fix imports
        print("📦 Step 2: Fixing imports in client files...")
        import_files = fix_client_imports()
        if import_files:
            print(f"   Fixed imports in {len(import_files)} files\n")
        else:
            print("   No import fixes needed\n")

        # Step 3: Fix declare modifiers
        print("🔨 Step 3: Fixing declare modifiers...")
        declare_files = fix_declare_modifiers()
        if declare_files:
            print(f"   Fixed declare modifiers in {len(declare_files)} files\n")
        else:
            print("   No declare modifier fixes needed\n")

        print("✅ All fixes applied successfully!")
        print("\n💡 Next steps:")
        print("   1. Run 'npm run build' to verify")
        print("   2. If errors remain, check DEVELOPMENT.md for manual fixes")

    except Exception as e:
        print(f"\n❌ Error occurred: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
