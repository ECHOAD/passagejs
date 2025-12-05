const { join } = require('path');
const codegen = require('@cosmwasm/ts-codegen').default;
const { readdirSync, existsSync } = require('fs');

// Contract directories containing schema folders
const contractSources = [
  // Passage-Chain/contracts - NFT contracts
  { dir: join(__dirname, '../contracts/contracts/nft'), prefix: 'nft' },
  // Passage-Chain/contracts - Relationship contracts
  { dir: join(__dirname, '../contracts/contracts/relationship'), prefix: 'relationship' },
  // nft-staking contracts - use schema/raw for individual JSON files
  { dir: join(__dirname, '../nft-staking/contracts'), prefix: 'staking', useRaw: true }
];

const outPath = join(__dirname, '../src/cosmwasm');

// Find all contracts with schema directories
function findContractsWithSchemas(sources) {
  const contracts = [];
  const seenNames = new Set();

  for (const { dir, prefix, useRaw } of sources) {
    if (!existsSync(dir)) {
      console.log(`Warning: Directory not found: ${dir}`);
      continue;
    }

    const subdirs = readdirSync(dir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const subdir of subdirs) {
      // Check for raw schema directory if useRaw is true, otherwise regular schema
      const schemaDir = useRaw
        ? join(dir, subdir, 'schema', 'raw')
        : join(dir, subdir, 'schema');

      if (existsSync(schemaDir)) {
        // Create unique contract name with prefix
        let contractName = `${prefix}_${subdir}`.replace(/-/g, '_');

        // If name already exists, make it more unique
        if (seenNames.has(contractName)) {
          contractName = `${prefix}_v2_${subdir}`.replace(/-/g, '_');
        }
        seenNames.add(contractName);

        contracts.push({
          name: contractName,
          dir: schemaDir
        });
        console.log(`Found contract: ${contractName} -> ${schemaDir}`);
      }
    }
  }

  return contracts;
}

async function main() {
  console.log('Finding contracts with schemas...');
  const contracts = findContractsWithSchemas(contractSources);

  if (contracts.length === 0) {
    console.log('No contracts with schemas found!');
    return;
  }

  console.log(`\nGenerating TypeScript for ${contracts.length} contracts...`);

  await codegen({
    contracts,
    outPath,
    options: {
      bundle: {
        bundleFile: 'index.ts',
        scope: 'contracts'
      },
      types: {
        enabled: true
      },
      client: {
        enabled: true
      },
      reactQuery: {
        enabled: false
      },
      recoil: {
        enabled: false
      },
      messageComposer: {
        enabled: true
      },
      messageBuilder: {
        enabled: false
      },
    }
  });

  console.log('\n✨ CosmWasm TypeScript generation complete!');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
