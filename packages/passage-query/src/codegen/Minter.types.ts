/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export interface ConfigResponse {
  admin: string;
  base_token_uri: string;
  cw721_address: string;
  cw721_code_id: number;
  num_tokens: number;
  per_address_limit: number;
  start_time: Timestamp;
  unit_price: Coin;
  whitelist?: string | null;
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}


// {
//   denom?: string | undefined;
//   amount?: string | undefined;
// }[] | undefined
export interface AlternativeCoin {
  denom?: string;
  amount?: string;
}

export type Addr = string;
export interface Config {
  admin: Addr;
  base_token_uri: string;
  cw721_code_id: number;
  num_tokens: number;
  per_address_limit: number;
  start_time: Timestamp;
  unit_price: Coin;
  whitelist?: Addr | null;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  mint: {
    [k: string]: unknown;
  };
} | {
  set_whitelist: {
    whitelist: string;
    [k: string]: unknown;
  };
} | {
  update_start_time: Timestamp;
} | {
  update_per_address_limit: {
    per_address_limit: number;
    [k: string]: unknown;
  };
} | {
  mint_to: {
    recipient: string;
    [k: string]: unknown;
  };
} | {
  mint_for: {
    recipient: string;
    token_id: number;
    [k: string]: unknown;
  };
} | {
  withdraw: {
    [k: string]: unknown;
  };
};
export interface MintCountResponse {
  address: string;
  count: number;
  [k: string]: unknown;
}
export interface MintPriceResponse {
  current_price: Coin;
  public_price: Coin;
  whitelist_price?: Coin | null;
  [k: string]: unknown;
}
export interface MintableNumTokensResponse {
  count: number;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {
    [k: string]: unknown;
  };
} | {
  mintable_num_tokens: {
    [k: string]: unknown;
  };
} | {
  start_time: {
    [k: string]: unknown;
  };
} | {
  mint_price: {
    [k: string]: unknown;
  };
} | {
  mint_count: {
    address: string;
    [k: string]: unknown;
  };
};
export interface StartTimeResponse {
  start_time: string;
  [k: string]: unknown;
}
