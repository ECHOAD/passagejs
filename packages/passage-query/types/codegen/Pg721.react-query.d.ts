/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions } from "@tanstack/react-query";
import { AllNftInfoResponse, OwnerOfResponse, AllOperatorsResponse, AllTokensResponse, ApprovalResponse, ApprovalsResponse, CollectionInfoResponse, ContractInfoResponse, MinterResponse, NftInfoResponse, NumTokensResponse, TokensResponse } from "./Pg721.types";
import { Pg721QueryClient } from "./Pg721.client";
export interface Pg721ReactQuery<TResponse, TData = TResponse> {
    client: Pg721QueryClient;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface Pg721CollectionInfoQuery<TData> extends Pg721ReactQuery<CollectionInfoResponse, TData> {
}
export declare function usePg721CollectionInfoQuery<TData = CollectionInfoResponse>({ client, options }: Pg721CollectionInfoQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721MinterQuery<TData> extends Pg721ReactQuery<MinterResponse, TData> {
}
export declare function usePg721MinterQuery<TData = MinterResponse>({ client, options }: Pg721MinterQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721AllTokensQuery<TData> extends Pg721ReactQuery<AllTokensResponse, TData> {
    args: {
        limit?: number;
        startAfter?: string;
    };
}
export declare function usePg721AllTokensQuery<TData = AllTokensResponse>({ client, args, options }: Pg721AllTokensQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721TokensQuery<TData> extends Pg721ReactQuery<TokensResponse, TData> {
    args: {
        limit?: number;
        owner: string;
        startAfter?: string;
    };
}
export declare function usePg721TokensQuery<TData = TokensResponse>({ client, args, options }: Pg721TokensQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721AllNftInfoQuery<TData> extends Pg721ReactQuery<AllNftInfoResponse, TData> {
    args: {
        includeExpired?: boolean;
        tokenId: string;
    };
}
export declare function usePg721AllNftInfoQuery<TData = AllNftInfoResponse>({ client, args, options }: Pg721AllNftInfoQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721NftInfoQuery<TData> extends Pg721ReactQuery<NftInfoResponse, TData> {
    args: {
        tokenId: string;
    };
}
export declare function usePg721NftInfoQuery<TData = NftInfoResponse>({ client, args, options }: Pg721NftInfoQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721ContractInfoQuery<TData> extends Pg721ReactQuery<ContractInfoResponse, TData> {
}
export declare function usePg721ContractInfoQuery<TData = ContractInfoResponse>({ client, options }: Pg721ContractInfoQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721NumTokensQuery<TData> extends Pg721ReactQuery<NumTokensResponse, TData> {
}
export declare function usePg721NumTokensQuery<TData = NumTokensResponse>({ client, options }: Pg721NumTokensQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721AllOperatorsQuery<TData> extends Pg721ReactQuery<AllOperatorsResponse, TData> {
    args: {
        includeExpired?: boolean;
        limit?: number;
        owner: string;
        startAfter?: string;
    };
}
export declare function usePg721AllOperatorsQuery<TData = AllOperatorsResponse>({ client, args, options }: Pg721AllOperatorsQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721ApprovalsQuery<TData> extends Pg721ReactQuery<ApprovalsResponse, TData> {
    args: {
        includeExpired?: boolean;
        tokenId: string;
    };
}
export declare function usePg721ApprovalsQuery<TData = ApprovalsResponse>({ client, args, options }: Pg721ApprovalsQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721ApprovalQuery<TData> extends Pg721ReactQuery<ApprovalResponse, TData> {
    args: {
        includeExpired?: boolean;
        spender: string;
        tokenId: string;
    };
}
export declare function usePg721ApprovalQuery<TData = ApprovalResponse>({ client, args, options }: Pg721ApprovalQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface Pg721OwnerOfQuery<TData> extends Pg721ReactQuery<OwnerOfResponse, TData> {
    args: {
        includeExpired?: boolean;
        tokenId: string;
    };
}
export declare function usePg721OwnerOfQuery<TData = OwnerOfResponse>({ client, args, options }: Pg721OwnerOfQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;