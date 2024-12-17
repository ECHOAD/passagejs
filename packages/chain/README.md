# @stargaze-zone/chain

<p align="center" width="100%">
    <img height="90" src="https://avatars.githubusercontent.com/u/160188595?s=200&v=4" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/stargazejs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/@stargaze-zone/chain"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/stargaze-zone?filename=packages%2Fchain%2Fpackage.json"></a>
</p>

Chain Registry info for Passage, including asset lists.

```
npm install @stargaze-zone/chain
```

```js
import { chain, assets, asset_list } from '@passage-zone/chain';
```

### assets

```js
console.log(assets);
{
  '$schema': '../assetlist.schema.json',
  chain_name: 'passage',
  assets: [
    {
      description: 'The native token of Passage',
      denom_units: [Array],
      base: 'upasg',
      name: 'Passage',
      display: 'passage',
      symbol: 'PASG',
      logo_URIs: [Object],
      coingecko_id: 'passage'
    }
  ]
}
```

### chain

```js
console.log(chain);
{
 "$schema": "../chain.schema.json",
  "chain_name": "passage",
  "chain_type": "cosmos",
  "chain_id": "passage-2",
  "pre_fork_chain_name": "passage1",
  "pretty_name": "Passage",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://passage3d.com/",
  "bech32_prefix": "pasg",
  "daemon_name": "passage",
  "node_home": "$HOME/.passage",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "upasg",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0.001,
        "average_gas_price": 0.0025,
        "high_gas_price": 0.01
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "upasg"
      }
    ]
  },

  codebase: { },
  apis: {
    rpc: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    rest: [ [Object], [Object], [Object], [Object], [Object] ],
    grpc: [ [Object] ]
  },
  explorers: [
     {
      "kind": "aneka",
      "url": "https://passage.aneka.io",
      "tx_page": "https://passage.aneka.io/txs/${txHash}",
      "account_page": "https://passage.aneka.io/accounts/${accountAddress}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/passage",
      "tx_page": "https://www.mintscan.io/passage/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/passage/accounts/${accountAddress}"
    },
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/passage",
      "tx_page": "https://ezstaking.app/passage/txs/${txHash}",
      "account_page": "https://ezstaking.app/passage/account/${accountAddress}"
    },
  ]
}
```

## Credits

Code built with the help of these related projects:

* [chain-registry](https://github.com/cosmology/chain-registry) an npm module for the official Cosmos chain-registry
