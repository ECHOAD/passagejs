/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Member, Coin } from "./WhitelistFlex.types";
export interface WhitelistFlexMessage {
    contractAddress: string;
    sender: string;
    updateStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateEndTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    addMembers: ({ toAdd }: {
        toAdd: Member[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeMembers: ({ toRemove }: {
        toRemove: string[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    increaseMemberLimit: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateAdmins: ({ admins }: {
        admins: string[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    freeze: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class WhitelistFlexMessageComposer implements WhitelistFlexMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    updateStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateEndTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    addMembers: ({ toAdd }: {
        toAdd: Member[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeMembers: ({ toRemove }: {
        toRemove: string[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    increaseMemberLimit: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateAdmins: ({ admins }: {
        admins: string[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    freeze: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}