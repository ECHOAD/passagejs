# Passage

<p align="center" width="100%"> 
    <img height="140" src="https://avatars.githubusercontent.com/u/160188595?s=200&v=4"  />
</p>

<p align="center" width="100%">
   <a href="https://github.com/pyramation/badkidsjs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

Typescript libraries for the Passage ecosystem.

## Packages

#### [contracts](packages/contracts)
#### [passagejs](packages/passagejs)
#### [passage-query](packages/passage-query)

TS library with Cosmos SDK and Passage smart contracts.

## Developing

When first cloning the repo:

```
yarn
yarn build
```

And then get all submodules if necessary:

```
git submodule update --init
```

### Building

```sh
yarn build
```
### Publishing

```
lerna publish
# lerna publish minor
# lerna publish major
```
## Credits


Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@cosmology/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [chain-registry](https://github.com/cosmology/chain-registry) an npm module for the official Cosmos chain-registry
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️
