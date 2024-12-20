/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { Expiration, Metadata, Binary } from "./PG721MetadataOnChain.types";
export interface PG721MetadataOnChainMsg {
    contractAddress: string;
    sender: string;
    transferNft: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    sendNft: ({ contract, msg, tokenId }: {
        contract: string;
        msg: Binary;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    approve: ({ expires, spender, tokenId }: {
        expires?: Expiration;
        spender: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    revoke: ({ spender, tokenId }: {
        spender: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    approveAll: ({ expires, operator }: {
        expires?: Expiration;
        operator: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    revokeAll: ({ operator }: {
        operator: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    mint: ({ extension, owner, tokenId, tokenUri }: {
        extension?: Metadata;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    burn: ({ tokenId }: {
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class PG721MetadataOnChainMsgComposer implements PG721MetadataOnChainMsg {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    transferNft: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    sendNft: ({ contract, msg, tokenId }: {
        contract: string;
        msg: Binary;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    approve: ({ expires, spender, tokenId }: {
        expires?: Expiration;
        spender: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    revoke: ({ spender, tokenId }: {
        spender: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    approveAll: ({ expires, operator }: {
        expires?: Expiration;
        operator: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    revokeAll: ({ operator }: {
        operator: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    mint: ({ extension, owner, tokenId, tokenUri }: {
        extension?: Metadata;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    burn: ({ tokenId }: {
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
