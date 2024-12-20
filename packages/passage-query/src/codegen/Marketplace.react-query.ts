/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Addr, Decimal, ConfigResponse, Config, ExecuteMsg, Uint128, Token, InstantiateMsg, QueryMsg, TokenResponse, TokensResponse } from "./Marketplace.types";
import { MarketplaceQueryClient } from "./Marketplace.client";
export interface MarketplaceReactQuery<TResponse, TData = TResponse> {
  client: MarketplaceQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface MarketplaceListTokensOnSaleQuery<TData> extends MarketplaceReactQuery<TokensResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useMarketplaceListTokensOnSaleQuery<TData = TokensResponse>({
  client,
  args,
  options
}: MarketplaceListTokensOnSaleQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>({
    queryKey: ["marketplaceListTokensOnSale", client.contractAddress, JSON.stringify(args)],
    queryFn: () => client.listTokensOnSale({
      limit: args.limit,
      startAfter: args.startAfter
    }),
    ...options
  });
}

export interface MarketplaceListTokensQuery<TData> extends MarketplaceReactQuery<TokensResponse, TData> {
  args: {
    ids: string[];
  };
}
export function useMarketplaceListTokensQuery<TData = TokensResponse>({
  client,
  args,
  options
}: MarketplaceListTokensQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>({
    queryKey: ["marketplaceListTokens", client.contractAddress, JSON.stringify(args)],
    queryFn: () => client.listTokens({
      ids: args.ids
    }),
    ...options
  });
}

export interface MarketplaceRangeTokensQuery<TData> extends MarketplaceReactQuery<TokensResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useMarketplaceRangeTokensQuery<TData = TokensResponse>({
  client,
  args,
  options
}: MarketplaceRangeTokensQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>({
    queryKey: ["marketplaceRangeTokens", client.contractAddress, JSON.stringify(args)],
    queryFn: () => client.rangeTokens({
      limit: args.limit,
      startAfter: args.startAfter
    }),
    ...options
  });
}


export interface MarketplaceTokenQuery<TData> extends MarketplaceReactQuery<TokenResponse, TData> {
  args: {
    id: string;
  };
}
export function useMarketplaceTokenQuery<TData = TokenResponse>({
  client,
  args,
  options
}: MarketplaceTokenQuery<TData>) {
  return useQuery<TokenResponse, Error, TData>({
    queryKey: ["marketplaceToken", client.contractAddress, JSON.stringify(args)],
    queryFn: () => client.token({
      id: args.id
    }),
    ...options
  });


}
export interface MarketplaceConfigQuery<TData> extends MarketplaceReactQuery<ConfigResponse, TData> {}
export function useMarketplaceConfigQuery<TData = ConfigResponse>({
  client,
  options
}: MarketplaceConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>({
    queryKey: ["marketplaceConfig", client.contractAddress],
    queryFn: () => client.config(),
    ...options
  });
}

