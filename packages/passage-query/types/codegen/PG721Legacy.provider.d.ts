/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ContractBase, IContractConstructor } from "./contractContextBase";
import { PG721LegacyClient, PG721LegacyQueryClient } from "./PG721Legacy.client";
import { PG721LegacyMsgComposer } from "./PG721Legacy.message-composer";
export declare class PG721Legacy extends ContractBase<PG721LegacyClient, PG721LegacyQueryClient, PG721LegacyMsgComposer> {
    constructor({ address, cosmWasmClient, signingCosmWasmClient }: IContractConstructor);
}