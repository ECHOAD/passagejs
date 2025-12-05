# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.3] - 2024-12-05

### Changed
- Regenerated all CosmWasm contract clients with latest schemas
- Updated contract type definitions to match current contract schemas

### Fixed
- Fixed all TypeScript compilation errors after regeneration
- Added missing response types for all contracts:
  - NftMinter: MintableNumTokensResponse, StartTimeResponse, MintPriceResponse, MintCountResponse
  - NftMinterMetadataOnchain: NumMintedResponse, NumRemainingResponse, StartTimeResponse, MintPriceResponse, MintCountResponse, TokenMintResponse, TokenMintsResponse
  - NftMarketplaceV2: BidsByTokenPriceResponse, BidsByBidderExpiryResponse, CollectionBidsByPriceResponse, CollectionBidsByExpiryResponse
- Corrected all import statements in client files
- Fixed property declaration issues in class definitions

## [0.0.2] - 2024-12-05

### Added
- Comprehensive README.md with detailed usage examples for all contracts
- Quick start guide and installation instructions
- Code examples for:
  - NFT Marketplace V2 (buying, selling, bidding)
  - NFT Minter (creating and managing collections)
  - NFT Staking Vault (staking NFTs and claiming rewards)
  - PG721 NFT Standard (transfers, approvals, queries)
  - English Auction (creating auctions, bidding)
  - Whitelist Management (managing access control)
  - Royalty Groups (distributing royalties)
- Complete contract reference table organized by category
- Documentation for query-only vs signing clients
- Keywords in package.json for better npm discoverability
- Professional .gitignore with comprehensive coverage

### Changed
- Enhanced package.json with relevant keywords (passage, cosmos, cosmwasm, nft, etc.)
- Improved .gitignore to cover all TypeScript/Node.js development scenarios

### Fixed
- All documentation now accurately reflects the generated contracts
- Import paths corrected in all examples

## [0.0.1] - 2024-12-05

### Added
- Initial release of @echoad/passagejs
- TypeScript SDK for Passage blockchain
- Passage3D proto types and query clients
- CosmWasm contract clients for all Passage NFT contracts:
  - **NFT Contracts**: NftPg721, NftPg721Legacy, NftPg721MetadataOnchain
  - **Minting**: NftMinter, NftMinterMetadataOnchain
  - **Marketplace**: NftMarketplaceV2, NftMarketplaceLegacy
  - **Auctions**: NftAuctionEnglish
  - **Staking**: StakingNftVault, StakingStakeRewards, StakingVaultFactory
  - **Utilities**: NftWhitelist, NftRoyaltyGroup, NftNftVault
- Cosmos SDK types (bank, staking, gov, authz, feegrant, etc.)
- IBC types for inter-blockchain communication
- Full TypeScript type definitions
- Both CommonJS and ES module builds
- Comprehensive documentation and examples

### Fixed
- All TypeScript compilation errors resolved
- Property overwrite issues in client classes
- Missing type definitions added for all contract responses

### Technical Details
- Generated from Passage contract schemas using @cosmwasm/ts-codegen
- Proto types generated using @cosmology/telescope
- Supports both query-only and signing clients for all contracts
- Compatible with @cosmjs/cosmwasm-stargate and cosmos-kit
