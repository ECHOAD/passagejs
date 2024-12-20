/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { Pg721Client, Pg721QueryClient } from "./Pg721.client";
import { Pg721MsgComposer } from "./Pg721.message-composer";
export class Pg721 extends ContractBase<Pg721Client, Pg721QueryClient, Pg721MsgComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, Pg721Client, Pg721QueryClient, Pg721MsgComposer);
  }

}