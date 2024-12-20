/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Expiration, Timestamp, Uint64, AllNftInfoResponse, OwnerOfResponse, Approval, NftInfoResponseForEmpty, Empty, AllOperatorsResponse, AllTokensResponse, ApprovalResponse, ApprovalsResponse, Decimal, CollectionInfoResponse, RoyaltyInfoResponse, ContractInfoResponse, ExecuteMsgForNullable_Metadata, Binary, MintMsgForNullable_Metadata, Metadata, Trait, InstantiateMsg, CollectionInfoForRoyaltyInfoResponse, MinterResponse, NftInfoResponse, NumTokensResponse, OperatorsResponse, QueryMsg, TokensResponse } from "./PG721MetadataOnChain.types";
import { PG721MetadataOnChainQueryClient, PG721MetadataOnChainClient } from "./PG721MetadataOnChain.client";
export interface PG721MetadataOnChainReactQuery<TResponse, TData = TResponse> {
  client: PG721MetadataOnChainQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface PG721MetadataOnChainCollectionInfoQuery<TData> extends PG721MetadataOnChainReactQuery<CollectionInfoResponse, TData> {}
export function usePG721MetadataOnChainCollectionInfoQuery<TData = CollectionInfoResponse>({
  client,
  options
}: PG721MetadataOnChainCollectionInfoQuery<TData>) {
  return useQuery<CollectionInfoResponse, Error, TData>(["pG721MetadataOnChainCollectionInfo", client.contractAddress], () => client.collectionInfo(), options);
}
export interface PG721MetadataOnChainMinterQuery<TData> extends PG721MetadataOnChainReactQuery<MinterResponse, TData> {}
export function usePG721MetadataOnChainMinterQuery<TData = MinterResponse>({
  client,
  options
}: PG721MetadataOnChainMinterQuery<TData>) {
  return useQuery<MinterResponse, Error, TData>(["pG721MetadataOnChainMinter", client.contractAddress], () => client.minter(), options);
}
export interface PG721MetadataOnChainAllTokensQuery<TData> extends PG721MetadataOnChainReactQuery<AllTokensResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function usePG721MetadataOnChainAllTokensQuery<TData = AllTokensResponse>({
  client,
  args,
  options
}: PG721MetadataOnChainAllTokensQuery<TData>) {
  return useQuery<AllTokensResponse, Error, TData>(["pG721MetadataOnChainAllTokens", client.contractAddress, JSON.stringify(args)], () => client.allTokens({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface PG721MetadataOnChainTokensQuery<TData> extends PG721MetadataOnChainReactQuery<TokensResponse, TData> {
  args: {
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function usePG721MetadataOnChainTokensQuery<TData = TokensResponse>({
  client,
  args,
  options
}: PG721MetadataOnChainTokensQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>(["pG721MetadataOnChainTokens", client.contractAddress, JSON.stringify(args)], () => client.tokens({
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }), options);
}
export interface PG721MetadataOnChainAllNftInfoQuery<TData> extends PG721MetadataOnChainReactQuery<AllNftInfoResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function usePG721MetadataOnChainAllNftInfoQuery<TData = AllNftInfoResponse>({
  client,
  args,
  options
}: PG721MetadataOnChainAllNftInfoQuery<TData>) {
  return useQuery<AllNftInfoResponse, Error, TData>(["pG721MetadataOnChainAllNftInfo", client.contractAddress, JSON.stringify(args)], () => client.allNftInfo({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface PG721MetadataOnChainNftInfoQuery<TData> extends PG721MetadataOnChainReactQuery<NftInfoResponse, TData> {
  args: {
    tokenId: string;
  };
}
export function usePG721MetadataOnChainNftInfoQuery<TData = NftInfoResponse>({
  client,
  args,
  options
}: PG721MetadataOnChainNftInfoQuery<TData>) {
  return useQuery<NftInfoResponse, Error, TData>(["pG721MetadataOnChainNftInfo", client.contractAddress, JSON.stringify(args)], () => client.nftInfo({
    tokenId: args.tokenId
  }), options);
}
export interface PG721MetadataOnChainContractInfoQuery<TData> extends PG721MetadataOnChainReactQuery<ContractInfoResponse, TData> {}
export function usePG721MetadataOnChainContractInfoQuery<TData = ContractInfoResponse>({
  client,
  options
}: PG721MetadataOnChainContractInfoQuery<TData>) {
  return useQuery<ContractInfoResponse, Error, TData>(["pG721MetadataOnChainContractInfo", client.contractAddress], () => client.contractInfo(), options);
}
export interface PG721MetadataOnChainNumTokensQuery<TData> extends PG721MetadataOnChainReactQuery<NumTokensResponse, TData> {}
export function usePG721MetadataOnChainNumTokensQuery<TData = NumTokensResponse>({
  client,
  options
}: PG721MetadataOnChainNumTokensQuery<TData>) {
  return useQuery<NumTokensResponse, Error, TData>(["pG721MetadataOnChainNumTokens", client.contractAddress], () => client.numTokens(), options);
}
export interface PG721MetadataOnChainAllOperatorsQuery<TData> extends PG721MetadataOnChainReactQuery<AllOperatorsResponse, TData> {
  args: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function usePG721MetadataOnChainAllOperatorsQuery<TData = AllOperatorsResponse>({
  client,
  args,
  options
}: PG721MetadataOnChainAllOperatorsQuery<TData>) {
  return useQuery<AllOperatorsResponse, Error, TData>(["pG721MetadataOnChainAllOperators", client.contractAddress, JSON.stringify(args)], () => client.allOperators({
    includeExpired: args.includeExpired,
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }), options);
}
export interface PG721MetadataOnChainApprovalsQuery<TData> extends PG721MetadataOnChainReactQuery<ApprovalsResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function usePG721MetadataOnChainApprovalsQuery<TData = ApprovalsResponse>({
  client,
  args,
  options
}: PG721MetadataOnChainApprovalsQuery<TData>) {
  return useQuery<ApprovalsResponse, Error, TData>(["pG721MetadataOnChainApprovals", client.contractAddress, JSON.stringify(args)], () => client.approvals({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface PG721MetadataOnChainApprovalQuery<TData> extends PG721MetadataOnChainReactQuery<ApprovalResponse, TData> {
  args: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  };
}
export function usePG721MetadataOnChainApprovalQuery<TData = ApprovalResponse>({
  client,
  args,
  options
}: PG721MetadataOnChainApprovalQuery<TData>) {
  return useQuery<ApprovalResponse, Error, TData>(["pG721MetadataOnChainApproval", client.contractAddress, JSON.stringify(args)], () => client.approval({
    includeExpired: args.includeExpired,
    spender: args.spender,
    tokenId: args.tokenId
  }), options);
}
export interface PG721MetadataOnChainOwnerOfQuery<TData> extends PG721MetadataOnChainReactQuery<OwnerOfResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function usePG721MetadataOnChainOwnerOfQuery<TData = OwnerOfResponse>({
  client,
  args,
  options
}: PG721MetadataOnChainOwnerOfQuery<TData>) {
  return useQuery<OwnerOfResponse, Error, TData>(["pG721MetadataOnChainOwnerOf", client.contractAddress, JSON.stringify(args)], () => client.ownerOf({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface PG721MetadataOnChainBurnMutation {
  client: PG721MetadataOnChainClient;
  msg: {
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function usePG721MetadataOnChainBurnMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, PG721MetadataOnChainBurnMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, PG721MetadataOnChainBurnMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.burn(msg, fee, memo, funds), options);
}
export interface PG721MetadataOnChainMintMutation {
  client: PG721MetadataOnChainClient;
  msg: {
    extension?: Metadata;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function usePG721MetadataOnChainMintMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, PG721MetadataOnChainMintMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, PG721MetadataOnChainMintMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.mint(msg, fee, memo, funds), options);
}
export interface PG721MetadataOnChainRevokeAllMutation {
  client: PG721MetadataOnChainClient;
  msg: {
    operator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function usePG721MetadataOnChainRevokeAllMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, PG721MetadataOnChainRevokeAllMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, PG721MetadataOnChainRevokeAllMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.revokeAll(msg, fee, memo, funds), options);
}
export interface PG721MetadataOnChainApproveAllMutation {
  client: PG721MetadataOnChainClient;
  msg: {
    expires?: Expiration;
    operator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function usePG721MetadataOnChainApproveAllMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, PG721MetadataOnChainApproveAllMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, PG721MetadataOnChainApproveAllMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.approveAll(msg, fee, memo, funds), options);
}
export interface PG721MetadataOnChainRevokeMutation {
  client: PG721MetadataOnChainClient;
  msg: {
    spender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function usePG721MetadataOnChainRevokeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, PG721MetadataOnChainRevokeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, PG721MetadataOnChainRevokeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.revoke(msg, fee, memo, funds), options);
}
export interface PG721MetadataOnChainApproveMutation {
  client: PG721MetadataOnChainClient;
  msg: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function usePG721MetadataOnChainApproveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, PG721MetadataOnChainApproveMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, PG721MetadataOnChainApproveMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.approve(msg, fee, memo, funds), options);
}
export interface PG721MetadataOnChainSendNftMutation {
  client: PG721MetadataOnChainClient;
  msg: {
    contract: string;
    msg: Binary;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function usePG721MetadataOnChainSendNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, PG721MetadataOnChainSendNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, PG721MetadataOnChainSendNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.sendNft(msg, fee, memo, funds), options);
}
export interface PG721MetadataOnChainTransferNftMutation {
  client: PG721MetadataOnChainClient;
  msg: {
    recipient: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function usePG721MetadataOnChainTransferNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, PG721MetadataOnChainTransferNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, PG721MetadataOnChainTransferNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.transferNft(msg, fee, memo, funds), options);
}