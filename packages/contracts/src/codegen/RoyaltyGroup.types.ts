/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.11.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface AdminResponse {
  admin?: string | null;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  update_admin: {
    admin?: string | null;
    [k: string]: unknown;
  };
} | {
  update_members: {
    add: Member[];
    remove: string[];
    [k: string]: unknown;
  };
} | {
  add_hook: {
    addr: string;
    [k: string]: unknown;
  };
} | {
  remove_hook: {
    addr: string;
    [k: string]: unknown;
  };
} | {
  distribute: {
    funds: Coin;
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export interface Member {
  addr: string;
  weight: number;
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  admin?: string | null;
  members: Member[];
  [k: string]: unknown;
}
export interface MemberListResponse {
  members: Member[];
  [k: string]: unknown;
}
export interface MemberResponse {
  weight?: number | null;
  [k: string]: unknown;
}
export type QueryMsg = {
  admin: {
    [k: string]: unknown;
  };
} | {
  total_weight: {
    [k: string]: unknown;
  };
} | {
  list_members: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  member: {
    addr: string;
    at_height?: number | null;
    [k: string]: unknown;
  };
} | {
  hooks: {
    [k: string]: unknown;
  };
};
export interface TotalWeightResponse {
  weight: number;
  [k: string]: unknown;
}