/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { ConfigResponse, Coin, MembersResponse } from "./Whitelist.types";
import { WhitelistQueryClient, WhitelistClient } from "./Whitelist.client";
export interface WhitelistReactQuery<TResponse, TData = TResponse> {
    client: WhitelistQueryClient;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface WhitelistConfigQuery<TData> extends WhitelistReactQuery<ConfigResponse, TData> {
}
export declare function useWhitelistConfigQuery<TData = ConfigResponse>({ client, options }: WhitelistConfigQuery<TData>): import("@tanstack/react-query").DefinedUseQueryResult<TData, Error>;
export interface WhitelistHasMemberQuery<TData> extends WhitelistReactQuery<HasMemberResponse, TData> {
    args: {
        member: string;
    };
}
export declare function useWhitelistHasMemberQuery<TData = HasMemberResponse>({ client, args, options }: WhitelistHasMemberQuery<TData>): import("@tanstack/react-query").DefinedUseQueryResult<TData, Error>;
export interface WhitelistMembersQuery<TData> extends WhitelistReactQuery<MembersResponse, TData> {
    args: {
        limit?: number;
        startAfter?: string;
    };
}
export declare function useWhitelistMembersQuery<TData = MembersResponse>({ client, args, options }: WhitelistMembersQuery<TData>): import("@tanstack/react-query").DefinedUseQueryResult<TData, Error>;
export interface WhitelistIsActiveQuery<TData> extends WhitelistReactQuery<IsActiveResponse, TData> {
}
export declare function useWhitelistIsActiveQuery<TData = IsActiveResponse>({ client, options }: WhitelistIsActiveQuery<TData>): import("@tanstack/react-query").DefinedUseQueryResult<TData, Error>;
export interface WhitelistHasEndedQuery<TData> extends WhitelistReactQuery<HasEndedResponse, TData> {
}
export declare function useWhitelistHasEndedQuery<TData = HasEndedResponse>({ client, options }: WhitelistHasEndedQuery<TData>): import("@tanstack/react-query").DefinedUseQueryResult<TData, Error>;
export interface WhitelistHasStartedQuery<TData> extends WhitelistReactQuery<HasStartedResponse, TData> {
}
export declare function useWhitelistHasStartedQuery<TData = HasStartedResponse>({ client, options }: WhitelistHasStartedQuery<TData>): import("@tanstack/react-query").DefinedUseQueryResult<TData, Error>;
export interface WhitelistIncreaseMemberLimitMutation {
    client: WhitelistClient;
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useWhitelistIncreaseMemberLimitMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistIncreaseMemberLimitMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, WhitelistIncreaseMemberLimitMutation, unknown>;
export interface WhitelistUpdatePerAddressLimitMutation {
    client: WhitelistClient;
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useWhitelistUpdatePerAddressLimitMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistUpdatePerAddressLimitMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, WhitelistUpdatePerAddressLimitMutation, unknown>;
export interface WhitelistRemoveMembersMutation {
    client: WhitelistClient;
    msg: {
        toRemove: string[];
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useWhitelistRemoveMembersMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistRemoveMembersMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, WhitelistRemoveMembersMutation, unknown>;
export interface WhitelistAddMembersMutation {
    client: WhitelistClient;
    msg: {
        toAdd: string[];
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useWhitelistAddMembersMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistAddMembersMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, WhitelistAddMembersMutation, unknown>;
export interface WhitelistUpdateEndTimeMutation {
    client: WhitelistClient;
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useWhitelistUpdateEndTimeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistUpdateEndTimeMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, WhitelistUpdateEndTimeMutation, unknown>;
export interface WhitelistUpdateStartTimeMutation {
    client: WhitelistClient;
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useWhitelistUpdateStartTimeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, WhitelistUpdateStartTimeMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, WhitelistUpdateStartTimeMutation, unknown>;