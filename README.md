# @echoad/passagejs

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/106354199?s=200&v=4" width="80"><br />
  TypeScript SDK for Passage blockchain - Proto types and CosmWasm contract clients
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@echoad/passagejs"><img src="https://img.shields.io/npm/v/@echoad/passagejs.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@echoad/passagejs"><img src="https://img.shields.io/npm/dm/@echoad/passagejs.svg" alt="npm downloads"></a>
  <a href="https://github.com/echoad/passagejs"><img src="https://img.shields.io/github/license/echoad/passagejs.svg" alt="license"></a>
</p>

## Install

```sh
npm install @echoad/passagejs
```

## Overview

This package provides TypeScript types and clients for the Passage blockchain ecosystem:

- **Passage3D Proto Types** - Generated from `passage3d/claim` module protos
- **CosmWasm Contract Clients** - TypeScript clients for NFT, Marketplace, Minter, and Staking contracts
- **Cosmos SDK Types** - Standard cosmos modules (bank, staking, gov, authz, feegrant, etc.)
- **IBC Types** - Inter-blockchain communication types

## Table of Contents

- [Install](#install)
- [Overview](#overview)
- [Quick Start](#quick-start)
- [Usage](#usage)
  - [Passage3D Claim Module](#passage3d-claim-module)
  - [CosmWasm Contracts](#cosmwasm-contracts)
    - [NFT Marketplace V2](#nft-marketplace-v2)
    - [NFT Minter](#nft-minter)
    - [NFT Staking Vault](#nft-staking-vault)
    - [PG721 NFT Standard](#pg721-nft-standard)
    - [English Auction](#english-auction)
    - [Whitelist Management](#whitelist-management)
    - [Royalty Groups](#royalty-groups)
- [Available Contracts](#available-contracts)
- [Code Generation](#code-generation)
- [Project Structure](#project-structure)
- [Development](#development)
- [Related Projects](#related-projects)
- [License](#license)

## Quick Start

```typescript
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { NftMarketplaceV2Client } from '@echoad/passagejs/cosmwasm';

// Connect to Passage blockchain
const client = await SigningCosmWasmClient.connect('https://rpc.passage.vitwit.com:443');

// Initialize marketplace client
const marketplaceClient = new NftMarketplaceV2Client(
  client,
  'pasg1...', // Your address
  'pasg1...'  // Marketplace contract address
);

// Query marketplace asks
const asks = await marketplaceClient.asks({
  collection: 'pasg1...',
  limit: 10
});
```

## Usage

### Passage3D Claim Module

Query claim records and module parameters from the Passage3D claim module:

```typescript
import { passage3d } from '@echoad/passagejs';

// Create RPC query client
const { createRPCQueryClient } = passage3d.ClientFactory;
const client = await createRPCQueryClient({
  rpcEndpoint: 'https://rpc.passage.vitwit.com:443'
});

// Query claim record for an address
const claimRecord = await client.passage3d.claim.v1beta1.claimRecord({
  address: 'pasg1...'
});

console.log('Claimable amount:', claimRecord.claimRecord?.claimableAmount);

// Query module params
const params = await client.passage3d.claim.v1beta1.params();
console.log('Airdrop start time:', params.params?.airdropStartTime);
```

### CosmWasm Contracts

#### NFT Marketplace V2

The marketplace allows buying, selling, and bidding on NFTs:

```typescript
import { NftMarketplaceV2Client, NftMarketplaceV2QueryClient } from '@echoad/passagejs/cosmwasm';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';

// Query-only client (no signing needed)
const queryClient = new NftMarketplaceV2QueryClient(
  await SigningCosmWasmClient.connect('https://rpc.passage.vitwit.com:443'),
  'pasg1...' // Contract address
);

// Query all asks for a collection
const asks = await queryClient.asks({
  collection: 'pasg1...',
  limit: 30
});

// Query specific ask
const ask = await queryClient.ask({
  collection: 'pasg1...',
  tokenId: '1'
});

// Signing client (for transactions)
const signingClient = new NftMarketplaceV2Client(
  signingCosmWasmClient,
  senderAddress,
  contractAddress
);

// Set an ask (list NFT for sale)
await signingClient.setAsk({
  collection: 'pasg1...',
  tokenId: '1',
  price: { denom: 'upasg', amount: '1000000' }, // 1 PASG
  fundsRecipient: 'pasg1...', // Optional
  reserveFor: 'pasg1...', // Optional - reserve for specific buyer
  expiresAt: '1735689600000000000' // Optional - expiration timestamp
});

// Buy an NFT
await signingClient.buy({
  collection: 'pasg1...',
  tokenId: '1'
}, 'auto', undefined, [
  { denom: 'upasg', amount: '1000000' }
]);

// Set a bid
await signingClient.setBid({
  collection: 'pasg1...',
  tokenId: '1',
  price: { denom: 'upasg', amount: '900000' },
  expiresAt: '1735689600000000000' // Optional
}, 'auto', undefined, [
  { denom: 'upasg', amount: '900000' }
]);

// Accept a bid (seller)
await signingClient.acceptBid({
  collection: 'pasg1...',
  tokenId: '1',
  bidder: 'pasg1...'
});

// Remove an ask
await signingClient.removeAsk({
  collection: 'pasg1...',
  tokenId: '1'
});
```

#### NFT Minter

Create and manage NFT collections:

```typescript
import { NftMinterClient } from '@echoad/passagejs/cosmwasm';

const minterClient = new NftMinterClient(
  signingClient,
  senderAddress,
  contractAddress
);

// Mint a new NFT
await minterClient.mint({
  tokenId: '1',
  owner: 'pasg1...',
  tokenUri: 'ipfs://...',
  extension: {
    name: 'My NFT',
    description: 'A cool NFT',
    image: 'ipfs://...'
  }
});

// Query minter config
const config = await minterClient.config();
console.log('Collection name:', config.name);
console.log('Symbol:', config.symbol);

// Batch mint NFTs
await minterClient.batchMint({
  tokens: [
    { tokenId: '1', owner: 'pasg1...', tokenUri: 'ipfs://...' },
    { tokenId: '2', owner: 'pasg1...', tokenUri: 'ipfs://...' }
  ]
});
```

#### NFT Staking Vault

Stake NFTs and earn rewards:

```typescript
import { StakingNftVaultClient } from '@echoad/passagejs/cosmwasm';

const vaultClient = new StakingNftVaultClient(
  signingClient,
  senderAddress,
  contractAddress
);

// Stake NFTs
await vaultClient.stake({
  nfts: [
    { collection: 'pasg1...', tokenId: '1' },
    { collection: 'pasg1...', tokenId: '2' }
  ]
});

// Query staked NFTs
const stakedNfts = await vaultClient.usersStakedNfts({
  staker: 'pasg1...',
  queryOptions: { limit: 100 }
});

// Claim rewards
await vaultClient.claimRewards({
  recipient: 'pasg1...' // Optional
});

// Unstake NFTs
await vaultClient.unstake({
  nfts: [
    { collection: 'pasg1...', tokenId: '1' }
  ]
});

// Query vault config
const config = await vaultClient.config();
console.log('Unstaking duration:', config.config.unstakingDurationSec, 'seconds');

// Query total staked amount at height
const total = await vaultClient.totalStakedAmountAtHeight({
  height: 12345 // Optional
});
```

#### PG721 NFT Standard

Interact with PG721 (Passage CW721) NFT contracts:

```typescript
import { NftPg721Client, NftPg721QueryClient } from '@echoad/passagejs/cosmwasm';

const nftClient = new NftPg721Client(
  signingClient,
  senderAddress,
  contractAddress
);

// Query NFT info
const nftInfo = await nftClient.nftInfo({ tokenId: '1' });
console.log('Token URI:', nftInfo.tokenUri);
console.log('Metadata:', nftInfo.extension);

// Query owner
const owner = await nftClient.ownerOf({ tokenId: '1' });
console.log('Owner:', owner.owner);

// Transfer NFT
await nftClient.transferNft({
  recipient: 'pasg1...',
  tokenId: '1'
});

// Approve address to transfer
await nftClient.approve({
  spender: 'pasg1...',
  tokenId: '1'
});

// Query all tokens
const tokens = await nftClient.allTokens({ limit: 100 });
console.log('All token IDs:', tokens.tokens);

// Query tokens owned by address
const ownerTokens = await nftClient.tokens({
  owner: 'pasg1...',
  limit: 100
});
```

#### English Auction

Create and manage English-style auctions for NFTs:

```typescript
import { NftAuctionEnglishClient } from '@echoad/passagejs/cosmwasm';

const auctionClient = new NftAuctionEnglishClient(
  signingClient,
  senderAddress,
  contractAddress
);

// Set up an auction
await auctionClient.setAuction({
  tokenId: '1',
  startTime: '1735689600000000000',
  endTime: '1735776000000000000',
  startingPrice: { denom: 'upasg', amount: '1000000' },
  reservePrice: { denom: 'upasg', amount: '5000000' }, // Optional
  fundsRecipient: 'pasg1...' // Optional
});

// Place a bid
await auctionClient.setAuctionBid({
  tokenId: '1',
  price: { denom: 'upasg', amount: '1100000' }
}, 'auto', undefined, [
  { denom: 'upasg', amount: '1100000' }
]);

// Query auction
const auction = await auctionClient.auction({ tokenId: '1' });
console.log('Current highest bid:', auction.auction?.highestBid);
console.log('Auction status:', auction.auctionStatus);

// Close auction (seller)
await auctionClient.closeAuction({
  tokenId: '1',
  acceptHighestBid: true
});

// Query auctions by start time
const auctions = await auctionClient.auctionsByStartTime({
  queryOptions: { limit: 10 }
});
```

#### Whitelist Management

Manage whitelists for minting or access control:

```typescript
import { NftWhitelistClient } from '@echoad/passagejs/cosmwasm';

const whitelistClient = new NftWhitelistClient(
  signingClient,
  senderAddress,
  contractAddress
);

// Check if whitelist is active
const isActive = await whitelistClient.isActive();
console.log('Whitelist active:', isActive.isActive);

// Check if address is member
const hasMember = await whitelistClient.hasMember({
  member: 'pasg1...'
});

// Query config
const config = await whitelistClient.config();
console.log('Member limit:', config.memberLimit);
console.log('Per address limit:', config.perAddressLimit);
console.log('Unit price:', config.unitPrice);

// Add members (admin only)
await whitelistClient.addMembers({
  toAdd: ['pasg1...', 'pasg2...']
});

// Remove members (admin only)
await whitelistClient.removeMembers({
  toRemove: ['pasg1...']
});

// Update times (admin only)
await whitelistClient.updateStartTime('1735689600000000000');
await whitelistClient.updateEndTime('1735776000000000000');
```

#### Royalty Groups

Manage royalty distribution for NFT sales:

```typescript
import { NftRoyaltyGroupClient } from '@echoad/passagejs/cosmwasm';

const royaltyClient = new NftRoyaltyGroupClient(
  signingClient,
  senderAddress,
  contractAddress
);

// Query members
const members = await royaltyClient.listMembers({ limit: 100 });
console.log('Royalty members:', members.members);

// Query total weight
const totalWeight = await royaltyClient.totalWeight();

// Distribute funds
await royaltyClient.distribute({
  funds: { denom: 'upasg', amount: '1000000' }
}, 'auto', undefined, [
  { denom: 'upasg', amount: '1000000' }
]);

// Update members (admin only)
await royaltyClient.updateMembers({
  add: [
    { addr: 'pasg1...', weight: 50 },
    { addr: 'pasg2...', weight: 30 }
  ],
  remove: ['pasg3...']
});
```

## Available Contracts

All contracts are available as both query-only and signing clients:

| Contract | Description | Import Path |
|----------|-------------|-------------|
| **NFT Contracts** |
| `NftPg721` | CW721-compatible NFT standard for Passage | `@echoad/passagejs/cosmwasm` |
| `NftPg721Legacy` | Legacy version of PG721 | `@echoad/passagejs/cosmwasm` |
| `NftPg721MetadataOnchain` | PG721 with on-chain metadata | `@echoad/passagejs/cosmwasm` |
| **Minting** |
| `NftMinter` | NFT minting contract | `@echoad/passagejs/cosmwasm` |
| `NftMinterMetadataOnchain` | Minter with on-chain metadata | `@echoad/passagejs/cosmwasm` |
| **Marketplace** |
| `NftMarketplaceV2` | NFT marketplace with bid/ask system | `@echoad/passagejs/cosmwasm` |
| `NftMarketplaceLegacy` | Legacy marketplace | `@echoad/passagejs/cosmwasm` |
| `NftAuctionEnglish` | English auction for NFTs | `@echoad/passagejs/cosmwasm` |
| **Staking** |
| `StakingNftVault` | Stake NFTs and earn rewards | `@echoad/passagejs/cosmwasm` |
| `StakingStakeRewards` | Staking rewards distribution | `@echoad/passagejs/cosmwasm` |
| `StakingVaultFactory` | Factory for creating staking vaults | `@echoad/passagejs/cosmwasm` |
| **Utilities** |
| `NftWhitelist` | Whitelist management | `@echoad/passagejs/cosmwasm` |
| `NftRoyaltyGroup` | Royalty distribution | `@echoad/passagejs/cosmwasm` |
| `NftNftVault` | NFT vault for escrow | `@echoad/passagejs/cosmwasm` |

### Query vs Signing Clients

Each contract has two client types:

- **QueryClient** (`*QueryClient`) - Read-only queries, no wallet needed
- **Client** (`*Client`) - Full functionality including transactions, requires signing wallet

```typescript
// Query only - no signing needed
import { NftMarketplaceV2QueryClient } from '@echoad/passagejs/cosmwasm';
const queryClient = new NftMarketplaceV2QueryClient(cosmWasmClient, contractAddress);

// Signing client - requires wallet
import { NftMarketplaceV2Client } from '@echoad/passagejs/cosmwasm';
const signingClient = new NftMarketplaceV2Client(signingCosmWasmClient, senderAddress, contractAddress);
```

## Code Generation

This package uses code generation from proto files and CosmWasm schemas.

### Proto Codegen

Generates TypeScript from proto files using [@cosmology/telescope](https://github.com/cosmology-tech/telescope).

```bash
npm run codegen
```

**Configuration:** `scripts/codegen.js`

Proto files are sourced from:
- `proto/passage3d/` - Passage3D claim module
- `proto/cosmos/` - Cosmos SDK v0.45.16
- `proto/tendermint/`, `proto/gogoproto/`, etc. - Dependencies

### CosmWasm Codegen

Generates TypeScript clients from CosmWasm contract schemas using [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen).

```bash
npm run codegen:cosmwasm
```

**Configuration:** `scripts/cosmwasm-codegen.js`

Schemas are sourced from:
- `contracts/contracts/nft/` - NFT contracts (marketplace, minter, pg721, etc.)
- `nft-staking/contracts/` - Staking contracts (nft-vault, stake-rewards)

### Run Both

```bash
npm run codegen:all
```

## Project Structure

```
@echoad/passagejs/
├── proto/                    # Proto files for telescope
│   ├── passage3d/           # Passage3D claim module
│   ├── cosmos/              # Cosmos SDK v0.45.16
│   ├── tendermint/          # Tendermint protos
│   └── ...
├── contracts/               # Git submodule: Passage-Chain/contracts
├── nft-staking/             # Git submodule: Passage-Chain/nft-staking
├── Passage3D/               # Git submodule: envadiv/Passage3D
├── cosmos-sdk/              # Git submodule: cosmos/cosmos-sdk @ v0.45.16
├── scripts/
│   ├── codegen.js           # Proto codegen configuration
│   ├── cosmwasm-codegen.js  # CosmWasm codegen configuration
│   └── aminos.js            # Amino type mappings
├── src/
│   ├── codegen/             # Generated proto TypeScript
│   │   ├── passage3d/       # Passage3D types
│   │   ├── cosmos/          # Cosmos types
│   │   └── ...
│   └── cosmwasm/            # Generated CosmWasm clients
│       ├── NftMarketplaceV2.client.ts
│       ├── NftMarketplaceV2.types.ts
│       ├── StakingNftVault.client.ts
│       ├── StakingNftVault.types.ts
│       └── ...
├── dist/                    # Compiled JavaScript (CJS + ESM)
└── package.json
```

## Development

> **📚 For detailed development instructions, see [DEVELOPMENT.md](./DEVELOPMENT.md)**
>
> The development guide includes:
> - How to regenerate contracts and fix TypeScript errors
> - Common issues and solutions after codegen
> - Publishing workflow
> - Automated fix scripts

### Initial Setup

```bash
git clone --recurse-submodules https://github.com/echoad/passagejs
cd passagejs
npm install
npm run codegen:all
npm run build
```

### After Regenerating Contracts

If you run `npm run codegen:cosmwasm`, use the automated fix script:

```bash
npm run codegen:cosmwasm
python3 scripts/fix-codegen.py
npm run build
```

See [DEVELOPMENT.md](./DEVELOPMENT.md) for details.

### Build

```bash
npm run build
```

Builds both CommonJS and ES modules to `dist/`.

### Test

```bash
npm test
```

### Lint

```bash
npm run lint
```

### Clean

```bash
npm run clean
```

## Related Projects

- [@cosmology/telescope](https://github.com/cosmology-tech/telescope) - Proto to TypeScript codegen
- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) - CosmWasm to TypeScript codegen
- [@cosmjs/cosmwasm-stargate](https://github.com/cosmos/cosmjs) - CosmWasm client library
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) - Wallet connection for Cosmos
- [chain-registry](https://github.com/cosmology-tech/chain-registry) - Chain metadata registry

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

- **Documentation**: [GitHub Repository](https://github.com/echoad/passagejs)
- **Issues**: [GitHub Issues](https://github.com/echoad/passagejs/issues)
- **Passage Blockchain**: [passage.io](https://passage.io)

## License

SEE LICENSE IN LICENSE
