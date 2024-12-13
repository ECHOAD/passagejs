import { join, resolve } from "path";
import codegen from "@cosmwasm/ts-codegen";

const contractsDir = resolve(
  join(__dirname, "/../../../passage-contracts/contracts")
);

const contracts = [
  {
    name: "AuctionEnglish",
    dir: join(contractsDir, "nft", "auction-english"),
  },
  {
    name: "MarketplaceLegacy",
    dir: join(contractsDir, "nft", "marketplace-legacy"),
  },
  {
    name: "MarketplaceV2",
    dir: join(contractsDir, "nft", "marketplace-v2"),
  },
  {
    name: "MinterMetadataOnChain",
    dir: join(contractsDir, "nft", "minter-metadata-onchain"),
  },
  {
    name: "Minter",
    dir: join(contractsDir, "nft", "nft-vault"),
  },
  {
    name: "PG721Legacy",
    dir: join(contractsDir, "nft", "pg721-legacy"),
  },
  {
    name: "PG721Legacy",
    dir: join(contractsDir, "nft", "pg721-legacy"),
  },
  {
    name: "PG721MetadataOnChain",
    dir: join(contractsDir, "nft", "pg721-metadata-onchain"),
  },
  {
    name: "PG721",
    dir: join(contractsDir, "nft", "pg721"),
  },
  {
    name: "RoyaltyGroup",
    dir: join(contractsDir, "nft", "royalty-group"),
  },
  {
    name: "Whitelist",
    dir: join(contractsDir, "nft", "whitelist"),
  },
];

codegen({
  contracts,
  outPath: join(__dirname, "../src/codegen"),
  options: {
    bundle: {
      enabled: true,
      bundleFile: "index.ts",
      scope: "contracts",
    },
    types: {
      enabled: true,
    },
    client: {
      enabled: true,
    },
    messageComposer: {
      enabled: true,
    },
  },
})
  .then(() => {
    console.log("✨ all done!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
