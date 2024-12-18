import { join, resolve } from "path";
import codegen from "@cosmwasm/ts-codegen";

const contractsDir = resolve(
  join(__dirname, "/../../../passage-contracts/contracts")
);

const contracts = [
  {
    name: 'PG721',
    dir: join(contractsDir,'nft', 'pg721')
  },
  {
    name: 'PG721MetadataOnChain',
    dir: join(contractsDir, 'nft','pg721-metadata-onchain')
  },
  {
    name: 'Minter',
    dir: join(contractsDir,'nft', 'minter')
  },
  {
    name: 'Whitelist',
    dir: join(contractsDir,'nft', 'whitelist')
  },
  {
    name: 'Marketplace',
    dir: join(contractsDir,'nft', 'marketplace-legacy')
  },
  {
    name: 'MarketplaceV2',
    dir: join(contractsDir,'nft', 'marketplace-v2')
  }
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
