/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { MarketplaceLegacyClient, MarketplaceLegacyQueryClient } from "./MarketplaceLegacy.client";
import { MarketplaceLegacyMsgComposer } from "./MarketplaceLegacy.message-composer";
export class MarketplaceLegacy extends ContractBase<MarketplaceLegacyClient, MarketplaceLegacyQueryClient, MarketplaceLegacyMsgComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, MarketplaceLegacyClient, MarketplaceLegacyQueryClient, MarketplaceLegacyMsgComposer);
  }

}