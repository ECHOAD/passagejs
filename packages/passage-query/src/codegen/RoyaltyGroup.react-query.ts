/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AdminResponse, ExecuteMsg, Uint128, Member, Coin, InstantiateMsg, MemberListResponse, MemberResponse, QueryMsg, TotalWeightResponse } from "./RoyaltyGroup.types";
import { RoyaltyGroupQueryClient } from "./RoyaltyGroup.client";
export interface RoyaltyGroupReactQuery<TResponse, TData = TResponse> {
  client: RoyaltyGroupQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface RoyaltyGroupHooksQuery<TData> extends RoyaltyGroupReactQuery<HooksResponse, TData> {}
export function useRoyaltyGroupHooksQuery<TData = HooksResponse>({
  client,
  options
}: RoyaltyGroupHooksQuery<TData>) {
  return useQuery<HooksResponse, Error, TData>(["royaltyGroupHooks", client.contractAddress], () => client.hooks(), options);
}
export interface RoyaltyGroupMemberQuery<TData> extends RoyaltyGroupReactQuery<MemberResponse, TData> {
  args: {
    addr: string;
    atHeight?: number;
  };
}
export function useRoyaltyGroupMemberQuery<TData = MemberResponse>({
  client,
  args,
  options
}: RoyaltyGroupMemberQuery<TData>) {
  return useQuery<MemberResponse, Error, TData>(["royaltyGroupMember", client.contractAddress, JSON.stringify(args)], () => client.member({
    addr: args.addr,
    atHeight: args.atHeight
  }), options);
}
export interface RoyaltyGroupListMembersQuery<TData> extends RoyaltyGroupReactQuery<ListMembersResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useRoyaltyGroupListMembersQuery<TData = ListMembersResponse>({
  client,
  args,
  options
}: RoyaltyGroupListMembersQuery<TData>) {
  return useQuery<ListMembersResponse, Error, TData>(["royaltyGroupListMembers", client.contractAddress, JSON.stringify(args)], () => client.listMembers({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface RoyaltyGroupTotalWeightQuery<TData> extends RoyaltyGroupReactQuery<TotalWeightResponse, TData> {}
export function useRoyaltyGroupTotalWeightQuery<TData = TotalWeightResponse>({
  client,
  options
}: RoyaltyGroupTotalWeightQuery<TData>) {
  return useQuery<TotalWeightResponse, Error, TData>(["royaltyGroupTotalWeight", client.contractAddress], () => client.totalWeight(), options);
}
export interface RoyaltyGroupAdminQuery<TData> extends RoyaltyGroupReactQuery<AdminResponse, TData> {}
export function useRoyaltyGroupAdminQuery<TData = AdminResponse>({
  client,
  options
}: RoyaltyGroupAdminQuery<TData>) {
  return useQuery<AdminResponse, Error, TData>(["royaltyGroupAdmin", client.contractAddress], () => client.admin(), options);
}