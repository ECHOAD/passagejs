import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./claim_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryModuleAccountBalanceRequest is the request type for the Query/ModuleAccountBalance RPC method. */
export interface QueryModuleAccountBalanceRequest {
}
export interface QueryModuleAccountBalanceRequestProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceRequest";
    value: Uint8Array;
}
/** QueryModuleAccountBalanceRequest is the request type for the Query/ModuleAccountBalance RPC method. */
export interface QueryModuleAccountBalanceRequestAmino {
}
export interface QueryModuleAccountBalanceRequestAminoMsg {
    type: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceRequest";
    value: QueryModuleAccountBalanceRequestAmino;
}
/** QueryModuleAccountBalanceRequest is the request type for the Query/ModuleAccountBalance RPC method. */
export interface QueryModuleAccountBalanceRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
    /** params defines the parameters of the module. */
    moduleAccountBalance: Coin[];
}
export interface QueryModuleAccountBalanceResponseProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseAmino {
    /** params defines the parameters of the module. */
    module_account_balance?: CoinAmino[];
}
export interface QueryModuleAccountBalanceResponseAminoMsg {
    type: "/passage3d.claim.v1beta1.QueryModuleAccountBalanceResponse";
    value: QueryModuleAccountBalanceResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseSDKType {
    module_account_balance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/passage3d.claim.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/passage3d.claim.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryClaimRecordRequest is the request type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequest {
    address: string;
}
export interface QueryClaimRecordRequestProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimRecordRequest";
    value: Uint8Array;
}
/** QueryClaimRecordRequest is the request type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequestAmino {
    address?: string;
}
export interface QueryClaimRecordRequestAminoMsg {
    type: "/passage3d.claim.v1beta1.QueryClaimRecordRequest";
    value: QueryClaimRecordRequestAmino;
}
/** QueryClaimRecordRequest is the request type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequestSDKType {
    address: string;
}
/** QueryClaimRecordResponse is the response type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordResponse {
    claimRecord: ClaimRecord;
}
export interface QueryClaimRecordResponseProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimRecordResponse";
    value: Uint8Array;
}
/** QueryClaimRecordResponse is the response type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordResponseAmino {
    claim_record?: ClaimRecordAmino;
}
export interface QueryClaimRecordResponseAminoMsg {
    type: "/passage3d.claim.v1beta1.QueryClaimRecordResponse";
    value: QueryClaimRecordResponseAmino;
}
/** QueryClaimRecordResponse is the response type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordResponseSDKType {
    claim_record: ClaimRecordSDKType;
}
/** QueryClaimableForActionRequest is the request type for the Query/ClaimRecord RPC method. */
export interface QueryClaimableForActionRequest {
    address: string;
    action: string;
}
export interface QueryClaimableForActionRequestProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimableForActionRequest";
    value: Uint8Array;
}
/** QueryClaimableForActionRequest is the request type for the Query/ClaimRecord RPC method. */
export interface QueryClaimableForActionRequestAmino {
    address?: string;
    action?: string;
}
export interface QueryClaimableForActionRequestAminoMsg {
    type: "/passage3d.claim.v1beta1.QueryClaimableForActionRequest";
    value: QueryClaimableForActionRequestAmino;
}
/** QueryClaimableForActionRequest is the request type for the Query/ClaimRecord RPC method. */
export interface QueryClaimableForActionRequestSDKType {
    address: string;
    action: string;
}
/** QueryClaimableForActionResponse is the response type for the Query/ClaimRecord RPC method. */
export interface QueryClaimableForActionResponse {
    amount: Coin;
}
export interface QueryClaimableForActionResponseProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.QueryClaimableForActionResponse";
    value: Uint8Array;
}
/** QueryClaimableForActionResponse is the response type for the Query/ClaimRecord RPC method. */
export interface QueryClaimableForActionResponseAmino {
    amount?: CoinAmino;
}
export interface QueryClaimableForActionResponseAminoMsg {
    type: "/passage3d.claim.v1beta1.QueryClaimableForActionResponse";
    value: QueryClaimableForActionResponseAmino;
}
/** QueryClaimableForActionResponse is the response type for the Query/ClaimRecord RPC method. */
export interface QueryClaimableForActionResponseSDKType {
    amount: CoinSDKType;
}
/** QueryTotalClaimableRequest is the request type for the Query/TotalClaimableRequest RPC method. */
export interface QueryTotalClaimableRequest {
    address: string;
}
export interface QueryTotalClaimableRequestProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.QueryTotalClaimableRequest";
    value: Uint8Array;
}
/** QueryTotalClaimableRequest is the request type for the Query/TotalClaimableRequest RPC method. */
export interface QueryTotalClaimableRequestAmino {
    address?: string;
}
export interface QueryTotalClaimableRequestAminoMsg {
    type: "/passage3d.claim.v1beta1.QueryTotalClaimableRequest";
    value: QueryTotalClaimableRequestAmino;
}
/** QueryTotalClaimableRequest is the request type for the Query/TotalClaimableRequest RPC method. */
export interface QueryTotalClaimableRequestSDKType {
    address: string;
}
/** QueryTotalClaimableResponse is the response type for the Query/TotalClaimableResponse RPC method. */
export interface QueryTotalClaimableResponse {
    coins: Coin[];
}
export interface QueryTotalClaimableResponseProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.QueryTotalClaimableResponse";
    value: Uint8Array;
}
/** QueryTotalClaimableResponse is the response type for the Query/TotalClaimableResponse RPC method. */
export interface QueryTotalClaimableResponseAmino {
    coins?: CoinAmino[];
}
export interface QueryTotalClaimableResponseAminoMsg {
    type: "/passage3d.claim.v1beta1.QueryTotalClaimableResponse";
    value: QueryTotalClaimableResponseAmino;
}
/** QueryTotalClaimableResponse is the response type for the Query/TotalClaimableResponse RPC method. */
export interface QueryTotalClaimableResponseSDKType {
    coins: CoinSDKType[];
}
export declare const QueryModuleAccountBalanceRequest: {
    typeUrl: string;
    is(o: any): o is QueryModuleAccountBalanceRequest;
    isSDK(o: any): o is QueryModuleAccountBalanceRequestSDKType;
    isAmino(o: any): o is QueryModuleAccountBalanceRequestAmino;
    encode(_: QueryModuleAccountBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest;
    fromPartial(_: DeepPartial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest;
    fromAmino(_: QueryModuleAccountBalanceRequestAmino): QueryModuleAccountBalanceRequest;
    toAmino(_: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestAmino;
    fromAminoMsg(object: QueryModuleAccountBalanceRequestAminoMsg): QueryModuleAccountBalanceRequest;
    fromProtoMsg(message: QueryModuleAccountBalanceRequestProtoMsg): QueryModuleAccountBalanceRequest;
    toProto(message: QueryModuleAccountBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestProtoMsg;
};
export declare const QueryModuleAccountBalanceResponse: {
    typeUrl: string;
    is(o: any): o is QueryModuleAccountBalanceResponse;
    isSDK(o: any): o is QueryModuleAccountBalanceResponseSDKType;
    isAmino(o: any): o is QueryModuleAccountBalanceResponseAmino;
    encode(message: QueryModuleAccountBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse;
    fromPartial(object: DeepPartial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse;
    fromAmino(object: QueryModuleAccountBalanceResponseAmino): QueryModuleAccountBalanceResponse;
    toAmino(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseAmino;
    fromAminoMsg(object: QueryModuleAccountBalanceResponseAminoMsg): QueryModuleAccountBalanceResponse;
    fromProtoMsg(message: QueryModuleAccountBalanceResponseProtoMsg): QueryModuleAccountBalanceResponse;
    toProto(message: QueryModuleAccountBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryClaimRecordRequest: {
    typeUrl: string;
    is(o: any): o is QueryClaimRecordRequest;
    isSDK(o: any): o is QueryClaimRecordRequestSDKType;
    isAmino(o: any): o is QueryClaimRecordRequestAmino;
    encode(message: QueryClaimRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRecordRequest;
    fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest;
    fromAmino(object: QueryClaimRecordRequestAmino): QueryClaimRecordRequest;
    toAmino(message: QueryClaimRecordRequest): QueryClaimRecordRequestAmino;
    fromAminoMsg(object: QueryClaimRecordRequestAminoMsg): QueryClaimRecordRequest;
    fromProtoMsg(message: QueryClaimRecordRequestProtoMsg): QueryClaimRecordRequest;
    toProto(message: QueryClaimRecordRequest): Uint8Array;
    toProtoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestProtoMsg;
};
export declare const QueryClaimRecordResponse: {
    typeUrl: string;
    is(o: any): o is QueryClaimRecordResponse;
    isSDK(o: any): o is QueryClaimRecordResponseSDKType;
    isAmino(o: any): o is QueryClaimRecordResponseAmino;
    encode(message: QueryClaimRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRecordResponse;
    fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse;
    fromAmino(object: QueryClaimRecordResponseAmino): QueryClaimRecordResponse;
    toAmino(message: QueryClaimRecordResponse): QueryClaimRecordResponseAmino;
    fromAminoMsg(object: QueryClaimRecordResponseAminoMsg): QueryClaimRecordResponse;
    fromProtoMsg(message: QueryClaimRecordResponseProtoMsg): QueryClaimRecordResponse;
    toProto(message: QueryClaimRecordResponse): Uint8Array;
    toProtoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseProtoMsg;
};
export declare const QueryClaimableForActionRequest: {
    typeUrl: string;
    is(o: any): o is QueryClaimableForActionRequest;
    isSDK(o: any): o is QueryClaimableForActionRequestSDKType;
    isAmino(o: any): o is QueryClaimableForActionRequestAmino;
    encode(message: QueryClaimableForActionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableForActionRequest;
    fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest;
    fromAmino(object: QueryClaimableForActionRequestAmino): QueryClaimableForActionRequest;
    toAmino(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestAmino;
    fromAminoMsg(object: QueryClaimableForActionRequestAminoMsg): QueryClaimableForActionRequest;
    fromProtoMsg(message: QueryClaimableForActionRequestProtoMsg): QueryClaimableForActionRequest;
    toProto(message: QueryClaimableForActionRequest): Uint8Array;
    toProtoMsg(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestProtoMsg;
};
export declare const QueryClaimableForActionResponse: {
    typeUrl: string;
    is(o: any): o is QueryClaimableForActionResponse;
    isSDK(o: any): o is QueryClaimableForActionResponseSDKType;
    isAmino(o: any): o is QueryClaimableForActionResponseAmino;
    encode(message: QueryClaimableForActionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableForActionResponse;
    fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse;
    fromAmino(object: QueryClaimableForActionResponseAmino): QueryClaimableForActionResponse;
    toAmino(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseAmino;
    fromAminoMsg(object: QueryClaimableForActionResponseAminoMsg): QueryClaimableForActionResponse;
    fromProtoMsg(message: QueryClaimableForActionResponseProtoMsg): QueryClaimableForActionResponse;
    toProto(message: QueryClaimableForActionResponse): Uint8Array;
    toProtoMsg(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseProtoMsg;
};
export declare const QueryTotalClaimableRequest: {
    typeUrl: string;
    is(o: any): o is QueryTotalClaimableRequest;
    isSDK(o: any): o is QueryTotalClaimableRequestSDKType;
    isAmino(o: any): o is QueryTotalClaimableRequestAmino;
    encode(message: QueryTotalClaimableRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalClaimableRequest;
    fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest;
    fromAmino(object: QueryTotalClaimableRequestAmino): QueryTotalClaimableRequest;
    toAmino(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestAmino;
    fromAminoMsg(object: QueryTotalClaimableRequestAminoMsg): QueryTotalClaimableRequest;
    fromProtoMsg(message: QueryTotalClaimableRequestProtoMsg): QueryTotalClaimableRequest;
    toProto(message: QueryTotalClaimableRequest): Uint8Array;
    toProtoMsg(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestProtoMsg;
};
export declare const QueryTotalClaimableResponse: {
    typeUrl: string;
    is(o: any): o is QueryTotalClaimableResponse;
    isSDK(o: any): o is QueryTotalClaimableResponseSDKType;
    isAmino(o: any): o is QueryTotalClaimableResponseAmino;
    encode(message: QueryTotalClaimableResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalClaimableResponse;
    fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse;
    fromAmino(object: QueryTotalClaimableResponseAmino): QueryTotalClaimableResponse;
    toAmino(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseAmino;
    fromAminoMsg(object: QueryTotalClaimableResponseAminoMsg): QueryTotalClaimableResponse;
    fromProtoMsg(message: QueryTotalClaimableResponseProtoMsg): QueryTotalClaimableResponse;
    toProto(message: QueryTotalClaimableResponse): Uint8Array;
    toProtoMsg(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseProtoMsg;
};
