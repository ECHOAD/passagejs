/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Expiration, Timestamp, Uint64, AllNftInfoResponse, OwnerOfResponse, Approval, NftInfoResponseForEmpty, Empty, AllOperatorsResponse, AllTokensResponse, ApprovalResponse, ApprovalsResponse, Decimal, CollectionInfoResponse, RoyaltyInfoResponse, ContractInfoResponse, ExecuteMsgForEmpty, Binary, MintMsgForEmpty, InstantiateMsg, CollectionInfoForRoyaltyInfoResponse, MinterResponse, NftInfoResponse, NumTokensResponse, OperatorsResponse, QueryMsg, TokensResponse } from "./Pg721.types";
import { Pg721QueryClient } from "./Pg721.client";
export interface Pg721ReactQuery<TResponse, TData = TResponse> {
  client: Pg721QueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface Pg721CollectionInfoQuery<TData> extends Pg721ReactQuery<CollectionInfoResponse, TData> {}
export function usePg721CollectionInfoQuery<TData = CollectionInfoResponse>({
  client,
  options
}: Pg721CollectionInfoQuery<TData>) {
  return useQuery<CollectionInfoResponse, Error, TData>(["pg721CollectionInfo", client.contractAddress], () => client.collectionInfo(), options);
}
export interface Pg721MinterQuery<TData> extends Pg721ReactQuery<MinterResponse, TData> {}
export function usePg721MinterQuery<TData = MinterResponse>({
  client,
  options
}: Pg721MinterQuery<TData>) {
  return useQuery<MinterResponse, Error, TData>(["pg721Minter", client.contractAddress], () => client.minter(), options);
}
export interface Pg721AllTokensQuery<TData> extends Pg721ReactQuery<AllTokensResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function usePg721AllTokensQuery<TData = AllTokensResponse>({
  client,
  args,
  options
}: Pg721AllTokensQuery<TData>) {
  return useQuery<AllTokensResponse, Error, TData>(["pg721AllTokens", client.contractAddress, JSON.stringify(args)], () => client.allTokens({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface Pg721TokensQuery<TData> extends Pg721ReactQuery<TokensResponse, TData> {
  args: {
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function usePg721TokensQuery<TData = TokensResponse>({
  client,
  args,
  options
}: Pg721TokensQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>(["pg721Tokens", client.contractAddress, JSON.stringify(args)], () => client.tokens({
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }), options);
}
export interface Pg721AllNftInfoQuery<TData> extends Pg721ReactQuery<AllNftInfoResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function usePg721AllNftInfoQuery<TData = AllNftInfoResponse>({
  client,
  args,
  options
}: Pg721AllNftInfoQuery<TData>) {
  return useQuery<AllNftInfoResponse, Error, TData>(["pg721AllNftInfo", client.contractAddress, JSON.stringify(args)], () => client.allNftInfo({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface Pg721NftInfoQuery<TData> extends Pg721ReactQuery<NftInfoResponse, TData> {
  args: {
    tokenId: string;
  };
}
export function usePg721NftInfoQuery<TData = NftInfoResponse>({
  client,
  args,
  options
}: Pg721NftInfoQuery<TData>) {
  return useQuery<NftInfoResponse, Error, TData>(["pg721NftInfo", client.contractAddress, JSON.stringify(args)], () => client.nftInfo({
    tokenId: args.tokenId
  }), options);
}
export interface Pg721ContractInfoQuery<TData> extends Pg721ReactQuery<ContractInfoResponse, TData> {}
export function usePg721ContractInfoQuery<TData = ContractInfoResponse>({
  client,
  options
}: Pg721ContractInfoQuery<TData>) {
  return useQuery<ContractInfoResponse, Error, TData>(["pg721ContractInfo", client.contractAddress], () => client.contractInfo(), options);
}
export interface Pg721NumTokensQuery<TData> extends Pg721ReactQuery<NumTokensResponse, TData> {}
export function usePg721NumTokensQuery<TData = NumTokensResponse>({
  client,
  options
}: Pg721NumTokensQuery<TData>) {
  return useQuery<NumTokensResponse, Error, TData>(["pg721NumTokens", client.contractAddress], () => client.numTokens(), options);
}
export interface Pg721AllOperatorsQuery<TData> extends Pg721ReactQuery<AllOperatorsResponse, TData> {
  args: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function usePg721AllOperatorsQuery<TData = AllOperatorsResponse>({
  client,
  args,
  options
}: Pg721AllOperatorsQuery<TData>) {
  return useQuery<AllOperatorsResponse, Error, TData>(["pg721AllOperators", client.contractAddress, JSON.stringify(args)], () => client.allOperators({
    includeExpired: args.includeExpired,
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }), options);
}
export interface Pg721ApprovalsQuery<TData> extends Pg721ReactQuery<ApprovalsResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function usePg721ApprovalsQuery<TData = ApprovalsResponse>({
  client,
  args,
  options
}: Pg721ApprovalsQuery<TData>) {
  return useQuery<ApprovalsResponse, Error, TData>(["pg721Approvals", client.contractAddress, JSON.stringify(args)], () => client.approvals({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface Pg721ApprovalQuery<TData> extends Pg721ReactQuery<ApprovalResponse, TData> {
  args: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  };
}
export function usePg721ApprovalQuery<TData = ApprovalResponse>({
  client,
  args,
  options
}: Pg721ApprovalQuery<TData>) {
  return useQuery<ApprovalResponse, Error, TData>(["pg721Approval", client.contractAddress, JSON.stringify(args)], () => client.approval({
    includeExpired: args.includeExpired,
    spender: args.spender,
    tokenId: args.tokenId
  }), options);
}
export interface Pg721OwnerOfQuery<TData> extends Pg721ReactQuery<OwnerOfResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function usePg721OwnerOfQuery<TData = OwnerOfResponse>({
  client,
  args,
  options
}: Pg721OwnerOfQuery<TData>) {
  return useQuery<OwnerOfResponse, Error, TData>(["pg721OwnerOf", client.contractAddress, JSON.stringify(args)], () => client.ownerOf({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}