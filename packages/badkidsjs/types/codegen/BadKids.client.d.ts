/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { QueryRegisteredQueryResponse, Coin, TransferNftResponse } from "./BadKids.types";
export interface BadKidsReadOnlyInterface {
    contractAddress: string;
    transferNft: ({ queryId }: {
        queryId: number;
    }) => Promise<TransferNftResponse>;
    getRegisteredQuery: ({ queryId }: {
        queryId: number;
    }) => Promise<QueryRegisteredQueryResponse>;
}
export declare class BadKidsQueryClient implements BadKidsReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    transferNft: ({ queryId }: {
        queryId: number;
    }) => Promise<TransferNftResponse>;
    getRegisteredQuery: ({ queryId }: {
        queryId: number;
    }) => Promise<QueryRegisteredQueryResponse>;
}
export interface BadKidsInterface extends BadKidsReadOnlyInterface {
    contractAddress: string;
    sender: string;
    mintNft: ({ tokenId }: {
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    registerTransferNftQuery: ({ connectionId, contractAddress, minHeight, recipient, sender, tokenId, updatePeriod }: {
        connectionId: string;
        contractAddress: string;
        minHeight: number;
        recipient: string;
        sender: string;
        tokenId: string;
        updatePeriod: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeInterchainQuery: ({ queryId }: {
        queryId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    unlockNft: ({ destination, tokenId }: {
        destination: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class BadKidsClient extends BadKidsQueryClient implements BadKidsInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    mintNft: ({ tokenId }: {
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    registerTransferNftQuery: ({ connectionId, contractAddress, minHeight, recipient, sender, tokenId, updatePeriod }: {
        connectionId: string;
        contractAddress: string;
        minHeight: number;
        recipient: string;
        sender: string;
        tokenId: string;
        updatePeriod: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeInterchainQuery: ({ queryId }: {
        queryId: number;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    unlockNft: ({ destination, tokenId }: {
        destination: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}