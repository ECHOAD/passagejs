/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ContractBase, IContractConstructor } from "./contractContextBase";
import { BadKidsClient, BadKidsQueryClient } from "./BadKids.client";
import { BadKidsMessageComposer } from "./BadKids.message-composer";
export declare class BadKids extends ContractBase<BadKidsClient, BadKidsQueryClient, BadKidsMessageComposer> {
    constructor({ address, cosmWasmClient, signingCosmWasmClient }: IContractConstructor);
}