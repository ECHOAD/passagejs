/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.11.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Expiration, AllNftInfoResponse, OwnerOfResponse, Metadata, ApprovalResponse, ApprovalsResponse, ContractInfoResponse, Binary, MinterResponse, NftInfoResponse, NumTokensResponse, TokensResponse } from "./PG721Legacy.types";
export interface PG721LegacyReadOnlyInterface {
    contractAddress: string;
    ownerOf: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<OwnerOfResponse>;
    approval: ({ includeExpired, spender, tokenId }: {
        includeExpired?: boolean;
        spender: string;
        tokenId: string;
    }) => Promise<ApprovalResponse>;
    approvals: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<ApprovalsResponse>;
    allOperators: ({ includeExpired, limit, owner, startAfter }: {
        includeExpired?: boolean;
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<AllOperatorsResponse>;
    numTokens: () => Promise<NumTokensResponse>;
    contractInfo: () => Promise<ContractInfoResponse>;
    nftInfo: ({ tokenId }: {
        tokenId: string;
    }) => Promise<NftInfoResponse>;
    allNftInfo: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<AllNftInfoResponse>;
    tokens: ({ limit, owner, startAfter }: {
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<TokensResponse>;
    allTokens: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<AllTokensResponse>;
    minter: () => Promise<MinterResponse>;
}
export declare class PG721LegacyQueryClient implements PG721LegacyReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    ownerOf: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<OwnerOfResponse>;
    approval: ({ includeExpired, spender, tokenId }: {
        includeExpired?: boolean;
        spender: string;
        tokenId: string;
    }) => Promise<ApprovalResponse>;
    approvals: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<ApprovalsResponse>;
    allOperators: ({ includeExpired, limit, owner, startAfter }: {
        includeExpired?: boolean;
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<AllOperatorsResponse>;
    numTokens: () => Promise<NumTokensResponse>;
    contractInfo: () => Promise<ContractInfoResponse>;
    nftInfo: ({ tokenId }: {
        tokenId: string;
    }) => Promise<NftInfoResponse>;
    allNftInfo: ({ includeExpired, tokenId }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<AllNftInfoResponse>;
    tokens: ({ limit, owner, startAfter }: {
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<TokensResponse>;
    allTokens: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<AllTokensResponse>;
    minter: () => Promise<MinterResponse>;
}
export interface PG721LegacyInterface extends PG721LegacyReadOnlyInterface {
    contractAddress: string;
    sender: string;
    transferNft: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    sendNft: ({ contract, msg, tokenId }: {
        contract: string;
        msg: Binary;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    approve: ({ expires, spender, tokenId }: {
        expires?: Expiration;
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    revoke: ({ spender, tokenId }: {
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    approveAll: ({ expires, operator }: {
        expires?: Expiration;
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    revokeAll: ({ operator }: {
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    mint: ({ extension, owner, tokenId, tokenUri }: {
        extension?: Metadata;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    burn: ({ tokenId }: {
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class PG721LegacyClient extends PG721LegacyQueryClient implements PG721LegacyInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    transferNft: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    sendNft: ({ contract, msg, tokenId }: {
        contract: string;
        msg: Binary;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    approve: ({ expires, spender, tokenId }: {
        expires?: Expiration;
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    revoke: ({ spender, tokenId }: {
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    approveAll: ({ expires, operator }: {
        expires?: Expiration;
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    revokeAll: ({ operator }: {
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    mint: ({ extension, owner, tokenId, tokenUri }: {
        extension?: Metadata;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    burn: ({ tokenId }: {
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}