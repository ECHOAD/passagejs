import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./claim_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
    /** balance of the claim module's account */
    moduleAccountBalance: Coin;
    /** params defines all the parameters of the module. */
    params: Params;
    /** list of claim records, one for every airdrop recipient */
    claimRecords: ClaimRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateAmino {
    /** balance of the claim module's account */
    module_account_balance?: CoinAmino;
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    /** list of claim records, one for every airdrop recipient */
    claim_records?: ClaimRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/passage3d.claim.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateSDKType {
    module_account_balance: CoinSDKType;
    params: ParamsSDKType;
    claim_records: ClaimRecordSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
