/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.11.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Timestamp, Uint64, Uint128, ConfigResponse, Coin, Addr, Config, ExecuteMsg, TokenMetadata, Metadata, Trait, Decimal, InstantiateMsg, InstantiateMsg1, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, QueryMsg } from "./MinterMetadataOnChain.types";
export interface MinterMetadataOnChainMsg {
  contractAddress: string;
  sender: string;
  upsertTokenMetadatas: ({
    tokenMetadatas
  }: {
    tokenMetadatas: TokenMetadata[];
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mint: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setAdmin: ({
    admin
  }: {
    admin: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setWhitelist: ({
    whitelist
  }: {
    whitelist: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateStartTime: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updatePerAddressLimit: ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateUnitPrice: ({
    unitPrice
  }: {
    unitPrice: Coin;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mintTo: ({
    recipient
  }: {
    recipient: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mintFor: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  withdraw: ({
    recipient
  }: {
    recipient: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class MinterMetadataOnChainMsgComposer implements MinterMetadataOnChainMsg {
  sender: string;
  contractAddress: string;
  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.upsertTokenMetadatas = this.upsertTokenMetadatas.bind(this);
    this.mint = this.mint.bind(this);
    this.setAdmin = this.setAdmin.bind(this);
    this.setWhitelist = this.setWhitelist.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updatePerAddressLimit = this.updatePerAddressLimit.bind(this);
    this.updateUnitPrice = this.updateUnitPrice.bind(this);
    this.mintTo = this.mintTo.bind(this);
    this.mintFor = this.mintFor.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }
  upsertTokenMetadatas = ({
    tokenMetadatas
  }: {
    tokenMetadatas: TokenMetadata[];
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          upsert_token_metadatas: {
            token_metadatas: tokenMetadatas
          }
        })),
        funds: _funds
      })
    };
  };
  mint = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint: {}
        })),
        funds: _funds
      })
    };
  };
  setAdmin = ({
    admin
  }: {
    admin: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_admin: {
            admin
          }
        })),
        funds: _funds
      })
    };
  };
  setWhitelist = ({
    whitelist
  }: {
    whitelist: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_whitelist: {
            whitelist
          }
        })),
        funds: _funds
      })
    };
  };
  updateStartTime = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_start_time: {}
        })),
        funds: _funds
      })
    };
  };
  updatePerAddressLimit = ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_per_address_limit: {
            per_address_limit: perAddressLimit
          }
        })),
        funds: _funds
      })
    };
  };
  updateUnitPrice = ({
    unitPrice
  }: {
    unitPrice: Coin;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_unit_price: {
            unit_price: unitPrice
          }
        })),
        funds: _funds
      })
    };
  };
  mintTo = ({
    recipient
  }: {
    recipient: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint_to: {
            recipient
          }
        })),
        funds: _funds
      })
    };
  };
  mintFor = ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint_for: {
            recipient,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  withdraw = ({
    recipient
  }: {
    recipient: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          withdraw: {
            recipient
          }
        })),
        funds: _funds
      })
    };
  };
}