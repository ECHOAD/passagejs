# @passage-zone/contracts

<p align="center" width="100%">
    <img height="90" src="https://avatars.githubusercontent.com/u/160188595?s=200&v=4" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/ECHOAD/passagejs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

Passage smart contract bindings

```
npm install @passage-zone/contracts
```

### Passage contracts

#### clients

All contracts are scoped under the `contracts` object:

```js
import { contracts } from '@passage-zone/contracts';
const {
    Pg721,
    Minter,
    MarketplaceV2,
    Whitelist
} = contracts;
```

Then each contract will have clients, for example for `Whitelist`:

```ts
const {
    WhitelistClient,
    WhitelistMessageComposer,
    WhitelistQueryClient
} = Whitelist;
```

#### Queries 

```js
const queryClient = new WhitelistQueryClient(wasmClient, contractAddress);

const hasStarted = await queryClient.hasStarted()
const members = await queryClient.members({limit: 10})
```
#### Mutations

```js
const client = new WhitelistClient(signingWasmClient, sender, contractAddress);

await client.addMembers({
    toAdd: ['name1', 'name2']
})
```

## Credits 


Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
