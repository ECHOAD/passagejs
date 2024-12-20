import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** MsgInitialClaim defines request message for InitialClaim RPC request */
export interface MsgClaim {
    sender: string;
    claimAction: string;
}
export interface MsgClaimProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.MsgClaim";
    value: Uint8Array;
}
/** MsgInitialClaim defines request message for InitialClaim RPC request */
export interface MsgClaimAmino {
    sender?: string;
    claim_action?: string;
}
export interface MsgClaimAminoMsg {
    type: "/passage3d.claim.v1beta1.MsgClaim";
    value: MsgClaimAmino;
}
/** MsgInitialClaim defines request message for InitialClaim RPC request */
export interface MsgClaimSDKType {
    sender: string;
    claim_action: string;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */
export interface MsgClaimResponse {
    /** total initial claimable amount for the user */
    claimedAmount: Coin;
}
export interface MsgClaimResponseProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.MsgClaimResponse";
    value: Uint8Array;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */
export interface MsgClaimResponseAmino {
    /** total initial claimable amount for the user */
    claimed_amount?: CoinAmino;
}
export interface MsgClaimResponseAminoMsg {
    type: "/passage3d.claim.v1beta1.MsgClaimResponse";
    value: MsgClaimResponseAmino;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */
export interface MsgClaimResponseSDKType {
    claimed_amount: CoinSDKType;
}
export declare const MsgClaim: {
    typeUrl: string;
    is(o: any): o is MsgClaim;
    isSDK(o: any): o is MsgClaimSDKType;
    isAmino(o: any): o is MsgClaimAmino;
    encode(message: MsgClaim, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaim;
    fromPartial(object: DeepPartial<MsgClaim>): MsgClaim;
    fromAmino(object: MsgClaimAmino): MsgClaim;
    toAmino(message: MsgClaim): MsgClaimAmino;
    fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim;
    fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim;
    toProto(message: MsgClaim): Uint8Array;
    toProtoMsg(message: MsgClaim): MsgClaimProtoMsg;
};
export declare const MsgClaimResponse: {
    typeUrl: string;
    is(o: any): o is MsgClaimResponse;
    isSDK(o: any): o is MsgClaimResponseSDKType;
    isAmino(o: any): o is MsgClaimResponseAmino;
    encode(message: MsgClaimResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimResponse;
    fromPartial(object: DeepPartial<MsgClaimResponse>): MsgClaimResponse;
    fromAmino(object: MsgClaimResponseAmino): MsgClaimResponse;
    toAmino(message: MsgClaimResponse): MsgClaimResponseAmino;
    fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse;
    fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse;
    toProto(message: MsgClaimResponse): Uint8Array;
    toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg;
};
