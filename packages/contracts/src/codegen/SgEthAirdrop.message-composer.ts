/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Addr, InstantiateMsg, ExecuteMsg, QueryMsg, Boolean } from "./SgEthAirdrop.types";
export interface SgEthAirdropMessage {
  contractAddress: string;
  sender: string;
  claimAirdrop: ({
    ethAddress,
    ethSig
  }: {
    ethAddress: string;
    ethSig: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class SgEthAirdropMessageComposer implements SgEthAirdropMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.claimAirdrop = this.claimAirdrop.bind(this);
  }

  claimAirdrop = ({
    ethAddress,
    ethSig
  }: {
    ethAddress: string;
    ethSig: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          claim_airdrop: {
            eth_address: ethAddress,
            eth_sig: ethSig
          }
        })),
        funds
      })
    };
  };
}