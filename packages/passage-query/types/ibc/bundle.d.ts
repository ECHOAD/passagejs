import * as _54 from "./applications/transfer/v1/genesis";
import * as _55 from "./applications/transfer/v1/query";
import * as _56 from "./applications/transfer/v1/transfer";
import * as _57 from "./applications/transfer/v1/tx";
import * as _58 from "./applications/transfer/v2/packet";
import * as _59 from "./core/channel/v1/channel";
import * as _60 from "./core/channel/v1/genesis";
import * as _61 from "./core/channel/v1/query";
import * as _62 from "./core/channel/v1/tx";
import * as _63 from "./core/client/v1/client";
import * as _64 from "./core/client/v1/genesis";
import * as _65 from "./core/client/v1/query";
import * as _66 from "./core/client/v1/tx";
import * as _67 from "./core/commitment/v1/commitment";
import * as _68 from "./core/connection/v1/connection";
import * as _69 from "./core/connection/v1/genesis";
import * as _70 from "./core/connection/v1/query";
import * as _71 from "./core/connection/v1/tx";
import * as _72 from "./lightclients/localhost/v1/localhost";
import * as _73 from "./lightclients/solomachine/v1/solomachine";
import * as _74 from "./lightclients/solomachine/v2/solomachine";
import * as _75 from "./lightclients/tendermint/v1/tendermint";
import * as _137 from "./applications/transfer/v1/query.lcd";
import * as _138 from "./core/channel/v1/query.lcd";
import * as _139 from "./core/client/v1/query.lcd";
import * as _140 from "./core/connection/v1/query.lcd";
import * as _141 from "./applications/transfer/v1/query.rpc.Query";
import * as _142 from "./core/channel/v1/query.rpc.Query";
import * as _143 from "./core/client/v1/query.rpc.Query";
import * as _144 from "./core/connection/v1/query.rpc.Query";
import * as _145 from "./applications/transfer/v1/tx.rpc.msg";
import * as _146 from "./core/channel/v1/tx.rpc.msg";
import * as _147 from "./core/client/v1/tx.rpc.msg";
import * as _148 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _145.MsgClientImpl;
                createClientImpl: (rpc: import("../helpers").Rpc) => _145.MsgClientImpl;
                QueryClientImpl: typeof _141.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _55.QueryDenomTraceRequest): Promise<_55.QueryDenomTraceResponse>;
                    denomTraces(request?: _55.QueryDenomTracesRequest): Promise<_55.QueryDenomTracesResponse>;
                    params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _137.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _57.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _57.MsgTransfer): {
                            typeUrl: string;
                            value: _57.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _57.MsgTransfer): {
                            typeUrl: string;
                            value: _57.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _57.MsgTransfer) => _57.MsgTransferAmino;
                        fromAmino: (object: _57.MsgTransferAmino) => _57.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _57.MsgTransfer;
                    isSDK(o: any): o is _57.MsgTransferSDKType;
                    isAmino(o: any): o is _57.MsgTransferAmino;
                    encode(message: _57.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgTransfer;
                    fromPartial(object: import("../helpers").DeepPartial<_57.MsgTransfer>): _57.MsgTransfer;
                    fromAmino(object: _57.MsgTransferAmino): _57.MsgTransfer;
                    toAmino(message: _57.MsgTransfer): _57.MsgTransferAmino;
                    fromAminoMsg(object: _57.MsgTransferAminoMsg): _57.MsgTransfer;
                    toAminoMsg(message: _57.MsgTransfer): _57.MsgTransferAminoMsg;
                    fromProtoMsg(message: _57.MsgTransferProtoMsg): _57.MsgTransfer;
                    toProto(message: _57.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _57.MsgTransfer): _57.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _57.MsgTransferResponse;
                    isSDK(o: any): o is _57.MsgTransferResponseSDKType;
                    isAmino(o: any): o is _57.MsgTransferResponseAmino;
                    encode(_: _57.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgTransferResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_57.MsgTransferResponse>): _57.MsgTransferResponse;
                    fromAmino(_: _57.MsgTransferResponseAmino): _57.MsgTransferResponse;
                    toAmino(_: _57.MsgTransferResponse): _57.MsgTransferResponseAmino;
                    fromAminoMsg(object: _57.MsgTransferResponseAminoMsg): _57.MsgTransferResponse;
                    toAminoMsg(message: _57.MsgTransferResponse): _57.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _57.MsgTransferResponseProtoMsg): _57.MsgTransferResponse;
                    toProto(message: _57.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _57.MsgTransferResponse): _57.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _56.DenomTrace;
                    isSDK(o: any): o is _56.DenomTraceSDKType;
                    isAmino(o: any): o is _56.DenomTraceAmino;
                    encode(message: _56.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.DenomTrace;
                    fromPartial(object: import("../helpers").DeepPartial<_56.DenomTrace>): _56.DenomTrace;
                    fromAmino(object: _56.DenomTraceAmino): _56.DenomTrace;
                    toAmino(message: _56.DenomTrace): _56.DenomTraceAmino;
                    fromAminoMsg(object: _56.DenomTraceAminoMsg): _56.DenomTrace;
                    toAminoMsg(message: _56.DenomTrace): _56.DenomTraceAminoMsg;
                    fromProtoMsg(message: _56.DenomTraceProtoMsg): _56.DenomTrace;
                    toProto(message: _56.DenomTrace): Uint8Array;
                    toProtoMsg(message: _56.DenomTrace): _56.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _56.Params;
                    isSDK(o: any): o is _56.ParamsSDKType;
                    isAmino(o: any): o is _56.ParamsAmino;
                    encode(message: _56.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.Params;
                    fromPartial(object: import("../helpers").DeepPartial<_56.Params>): _56.Params;
                    fromAmino(object: _56.ParamsAmino): _56.Params;
                    toAmino(message: _56.Params): _56.ParamsAmino;
                    fromAminoMsg(object: _56.ParamsAminoMsg): _56.Params;
                    toAminoMsg(message: _56.Params): _56.ParamsAminoMsg;
                    fromProtoMsg(message: _56.ParamsProtoMsg): _56.Params;
                    toProto(message: _56.Params): Uint8Array;
                    toProtoMsg(message: _56.Params): _56.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _55.QueryDenomTraceRequest;
                    isSDK(o: any): o is _55.QueryDenomTraceRequestSDKType;
                    isAmino(o: any): o is _55.QueryDenomTraceRequestAmino;
                    encode(message: _55.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.QueryDenomTraceRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_55.QueryDenomTraceRequest>): _55.QueryDenomTraceRequest;
                    fromAmino(object: _55.QueryDenomTraceRequestAmino): _55.QueryDenomTraceRequest;
                    toAmino(message: _55.QueryDenomTraceRequest): _55.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _55.QueryDenomTraceRequestAminoMsg): _55.QueryDenomTraceRequest;
                    toAminoMsg(message: _55.QueryDenomTraceRequest): _55.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _55.QueryDenomTraceRequestProtoMsg): _55.QueryDenomTraceRequest;
                    toProto(message: _55.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _55.QueryDenomTraceRequest): _55.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _55.QueryDenomTraceResponse;
                    isSDK(o: any): o is _55.QueryDenomTraceResponseSDKType;
                    isAmino(o: any): o is _55.QueryDenomTraceResponseAmino;
                    encode(message: _55.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.QueryDenomTraceResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_55.QueryDenomTraceResponse>): _55.QueryDenomTraceResponse;
                    fromAmino(object: _55.QueryDenomTraceResponseAmino): _55.QueryDenomTraceResponse;
                    toAmino(message: _55.QueryDenomTraceResponse): _55.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _55.QueryDenomTraceResponseAminoMsg): _55.QueryDenomTraceResponse;
                    toAminoMsg(message: _55.QueryDenomTraceResponse): _55.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _55.QueryDenomTraceResponseProtoMsg): _55.QueryDenomTraceResponse;
                    toProto(message: _55.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _55.QueryDenomTraceResponse): _55.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _55.QueryDenomTracesRequest;
                    isSDK(o: any): o is _55.QueryDenomTracesRequestSDKType;
                    isAmino(o: any): o is _55.QueryDenomTracesRequestAmino;
                    encode(message: _55.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.QueryDenomTracesRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_55.QueryDenomTracesRequest>): _55.QueryDenomTracesRequest;
                    fromAmino(object: _55.QueryDenomTracesRequestAmino): _55.QueryDenomTracesRequest;
                    toAmino(message: _55.QueryDenomTracesRequest): _55.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _55.QueryDenomTracesRequestAminoMsg): _55.QueryDenomTracesRequest;
                    toAminoMsg(message: _55.QueryDenomTracesRequest): _55.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _55.QueryDenomTracesRequestProtoMsg): _55.QueryDenomTracesRequest;
                    toProto(message: _55.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _55.QueryDenomTracesRequest): _55.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _55.QueryDenomTracesResponse;
                    isSDK(o: any): o is _55.QueryDenomTracesResponseSDKType;
                    isAmino(o: any): o is _55.QueryDenomTracesResponseAmino;
                    encode(message: _55.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.QueryDenomTracesResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_55.QueryDenomTracesResponse>): _55.QueryDenomTracesResponse;
                    fromAmino(object: _55.QueryDenomTracesResponseAmino): _55.QueryDenomTracesResponse;
                    toAmino(message: _55.QueryDenomTracesResponse): _55.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _55.QueryDenomTracesResponseAminoMsg): _55.QueryDenomTracesResponse;
                    toAminoMsg(message: _55.QueryDenomTracesResponse): _55.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _55.QueryDenomTracesResponseProtoMsg): _55.QueryDenomTracesResponse;
                    toProto(message: _55.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _55.QueryDenomTracesResponse): _55.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _55.QueryParamsRequest;
                    isSDK(o: any): o is _55.QueryParamsRequestSDKType;
                    isAmino(o: any): o is _55.QueryParamsRequestAmino;
                    encode(_: _55.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.QueryParamsRequest;
                    fromPartial(_: import("../helpers").DeepPartial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
                    fromAmino(_: _55.QueryParamsRequestAmino): _55.QueryParamsRequest;
                    toAmino(_: _55.QueryParamsRequest): _55.QueryParamsRequestAmino;
                    fromAminoMsg(object: _55.QueryParamsRequestAminoMsg): _55.QueryParamsRequest;
                    toAminoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _55.QueryParamsRequestProtoMsg): _55.QueryParamsRequest;
                    toProto(message: _55.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _55.QueryParamsResponse;
                    isSDK(o: any): o is _55.QueryParamsResponseSDKType;
                    isAmino(o: any): o is _55.QueryParamsResponseAmino;
                    encode(message: _55.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.QueryParamsResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
                    fromAmino(object: _55.QueryParamsResponseAmino): _55.QueryParamsResponse;
                    toAmino(message: _55.QueryParamsResponse): _55.QueryParamsResponseAmino;
                    fromAminoMsg(object: _55.QueryParamsResponseAminoMsg): _55.QueryParamsResponse;
                    toAminoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _55.QueryParamsResponseProtoMsg): _55.QueryParamsResponse;
                    toProto(message: _55.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _54.GenesisState;
                    isSDK(o: any): o is _54.GenesisStateSDKType;
                    isAmino(o: any): o is _54.GenesisStateAmino;
                    encode(message: _54.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.GenesisState;
                    fromPartial(object: import("../helpers").DeepPartial<_54.GenesisState>): _54.GenesisState;
                    fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                    toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
                    fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
                    toAminoMsg(message: _54.GenesisState): _54.GenesisStateAminoMsg;
                    fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
                    toProto(message: _54.GenesisState): Uint8Array;
                    toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _58.FungibleTokenPacketData;
                    isSDK(o: any): o is _58.FungibleTokenPacketDataSDKType;
                    isAmino(o: any): o is _58.FungibleTokenPacketDataAmino;
                    encode(message: _58.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.FungibleTokenPacketData;
                    fromPartial(object: import("../helpers").DeepPartial<_58.FungibleTokenPacketData>): _58.FungibleTokenPacketData;
                    fromAmino(object: _58.FungibleTokenPacketDataAmino): _58.FungibleTokenPacketData;
                    toAmino(message: _58.FungibleTokenPacketData): _58.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _58.FungibleTokenPacketDataAminoMsg): _58.FungibleTokenPacketData;
                    toAminoMsg(message: _58.FungibleTokenPacketData): _58.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _58.FungibleTokenPacketDataProtoMsg): _58.FungibleTokenPacketData;
                    toProto(message: _58.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _58.FungibleTokenPacketData): _58.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _146.MsgClientImpl;
                createClientImpl: (rpc: import("../helpers").Rpc) => _146.MsgClientImpl;
                QueryClientImpl: typeof _142.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _61.QueryChannelRequest): Promise<_61.QueryChannelResponse>;
                    channels(request?: _61.QueryChannelsRequest): Promise<_61.QueryChannelsResponse>;
                    connectionChannels(request: _61.QueryConnectionChannelsRequest): Promise<_61.QueryConnectionChannelsResponse>;
                    channelClientState(request: _61.QueryChannelClientStateRequest): Promise<_61.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _61.QueryChannelConsensusStateRequest): Promise<_61.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _61.QueryPacketCommitmentRequest): Promise<_61.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _61.QueryPacketCommitmentsRequest): Promise<_61.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _61.QueryPacketReceiptRequest): Promise<_61.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _61.QueryPacketAcknowledgementRequest): Promise<_61.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _61.QueryPacketAcknowledgementsRequest): Promise<_61.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _61.QueryUnreceivedPacketsRequest): Promise<_61.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _61.QueryUnreceivedAcksRequest): Promise<_61.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _61.QueryNextSequenceReceiveRequest): Promise<_61.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _138.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _62.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenTry(value: _62.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenAck(value: _62.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenConfirm(value: _62.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelCloseInit(value: _62.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelCloseConfirm(value: _62.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        recvPacket(value: _62.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        timeout(value: _62.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        timeoutOnClose(value: _62.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        acknowledgement(value: _62.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _62.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _62.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _62.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _62.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _62.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _62.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _62.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _62.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _62.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _62.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _62.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _62.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _62.MsgRecvPacket): {
                            typeUrl: string;
                            value: _62.MsgRecvPacket;
                        };
                        timeout(value: _62.MsgTimeout): {
                            typeUrl: string;
                            value: _62.MsgTimeout;
                        };
                        timeoutOnClose(value: _62.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _62.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _62.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _62.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _62.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _62.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _62.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _62.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _62.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _62.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _62.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _62.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _62.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _62.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _62.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _62.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _62.MsgRecvPacket): {
                            typeUrl: string;
                            value: _62.MsgRecvPacket;
                        };
                        timeout(value: _62.MsgTimeout): {
                            typeUrl: string;
                            value: _62.MsgTimeout;
                        };
                        timeoutOnClose(value: _62.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _62.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _62.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _62.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _62.MsgChannelOpenInit) => _62.MsgChannelOpenInitAmino;
                        fromAmino: (object: _62.MsgChannelOpenInitAmino) => _62.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _62.MsgChannelOpenTry) => _62.MsgChannelOpenTryAmino;
                        fromAmino: (object: _62.MsgChannelOpenTryAmino) => _62.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _62.MsgChannelOpenAck) => _62.MsgChannelOpenAckAmino;
                        fromAmino: (object: _62.MsgChannelOpenAckAmino) => _62.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _62.MsgChannelOpenConfirm) => _62.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _62.MsgChannelOpenConfirmAmino) => _62.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _62.MsgChannelCloseInit) => _62.MsgChannelCloseInitAmino;
                        fromAmino: (object: _62.MsgChannelCloseInitAmino) => _62.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _62.MsgChannelCloseConfirm) => _62.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _62.MsgChannelCloseConfirmAmino) => _62.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _62.MsgRecvPacket) => _62.MsgRecvPacketAmino;
                        fromAmino: (object: _62.MsgRecvPacketAmino) => _62.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _62.MsgTimeout) => _62.MsgTimeoutAmino;
                        fromAmino: (object: _62.MsgTimeoutAmino) => _62.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _62.MsgTimeoutOnClose) => _62.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _62.MsgTimeoutOnCloseAmino) => _62.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _62.MsgAcknowledgement) => _62.MsgAcknowledgementAmino;
                        fromAmino: (object: _62.MsgAcknowledgementAmino) => _62.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelOpenInit;
                    isSDK(o: any): o is _62.MsgChannelOpenInitSDKType;
                    isAmino(o: any): o is _62.MsgChannelOpenInitAmino;
                    encode(message: _62.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelOpenInit;
                    fromPartial(object: import("../helpers").DeepPartial<_62.MsgChannelOpenInit>): _62.MsgChannelOpenInit;
                    fromAmino(object: _62.MsgChannelOpenInitAmino): _62.MsgChannelOpenInit;
                    toAmino(message: _62.MsgChannelOpenInit): _62.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _62.MsgChannelOpenInitAminoMsg): _62.MsgChannelOpenInit;
                    toAminoMsg(message: _62.MsgChannelOpenInit): _62.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelOpenInitProtoMsg): _62.MsgChannelOpenInit;
                    toProto(message: _62.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelOpenInit): _62.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelOpenInitResponse;
                    isSDK(o: any): o is _62.MsgChannelOpenInitResponseSDKType;
                    isAmino(o: any): o is _62.MsgChannelOpenInitResponseAmino;
                    encode(_: _62.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelOpenInitResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_62.MsgChannelOpenInitResponse>): _62.MsgChannelOpenInitResponse;
                    fromAmino(_: _62.MsgChannelOpenInitResponseAmino): _62.MsgChannelOpenInitResponse;
                    toAmino(_: _62.MsgChannelOpenInitResponse): _62.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _62.MsgChannelOpenInitResponseAminoMsg): _62.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _62.MsgChannelOpenInitResponse): _62.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelOpenInitResponseProtoMsg): _62.MsgChannelOpenInitResponse;
                    toProto(message: _62.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelOpenInitResponse): _62.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelOpenTry;
                    isSDK(o: any): o is _62.MsgChannelOpenTrySDKType;
                    isAmino(o: any): o is _62.MsgChannelOpenTryAmino;
                    encode(message: _62.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelOpenTry;
                    fromPartial(object: import("../helpers").DeepPartial<_62.MsgChannelOpenTry>): _62.MsgChannelOpenTry;
                    fromAmino(object: _62.MsgChannelOpenTryAmino): _62.MsgChannelOpenTry;
                    toAmino(message: _62.MsgChannelOpenTry): _62.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _62.MsgChannelOpenTryAminoMsg): _62.MsgChannelOpenTry;
                    toAminoMsg(message: _62.MsgChannelOpenTry): _62.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelOpenTryProtoMsg): _62.MsgChannelOpenTry;
                    toProto(message: _62.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelOpenTry): _62.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelOpenTryResponse;
                    isSDK(o: any): o is _62.MsgChannelOpenTryResponseSDKType;
                    isAmino(o: any): o is _62.MsgChannelOpenTryResponseAmino;
                    encode(_: _62.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelOpenTryResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_62.MsgChannelOpenTryResponse>): _62.MsgChannelOpenTryResponse;
                    fromAmino(_: _62.MsgChannelOpenTryResponseAmino): _62.MsgChannelOpenTryResponse;
                    toAmino(_: _62.MsgChannelOpenTryResponse): _62.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _62.MsgChannelOpenTryResponseAminoMsg): _62.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _62.MsgChannelOpenTryResponse): _62.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelOpenTryResponseProtoMsg): _62.MsgChannelOpenTryResponse;
                    toProto(message: _62.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelOpenTryResponse): _62.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelOpenAck;
                    isSDK(o: any): o is _62.MsgChannelOpenAckSDKType;
                    isAmino(o: any): o is _62.MsgChannelOpenAckAmino;
                    encode(message: _62.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelOpenAck;
                    fromPartial(object: import("../helpers").DeepPartial<_62.MsgChannelOpenAck>): _62.MsgChannelOpenAck;
                    fromAmino(object: _62.MsgChannelOpenAckAmino): _62.MsgChannelOpenAck;
                    toAmino(message: _62.MsgChannelOpenAck): _62.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _62.MsgChannelOpenAckAminoMsg): _62.MsgChannelOpenAck;
                    toAminoMsg(message: _62.MsgChannelOpenAck): _62.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelOpenAckProtoMsg): _62.MsgChannelOpenAck;
                    toProto(message: _62.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelOpenAck): _62.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelOpenAckResponse;
                    isSDK(o: any): o is _62.MsgChannelOpenAckResponseSDKType;
                    isAmino(o: any): o is _62.MsgChannelOpenAckResponseAmino;
                    encode(_: _62.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelOpenAckResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_62.MsgChannelOpenAckResponse>): _62.MsgChannelOpenAckResponse;
                    fromAmino(_: _62.MsgChannelOpenAckResponseAmino): _62.MsgChannelOpenAckResponse;
                    toAmino(_: _62.MsgChannelOpenAckResponse): _62.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _62.MsgChannelOpenAckResponseAminoMsg): _62.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _62.MsgChannelOpenAckResponse): _62.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelOpenAckResponseProtoMsg): _62.MsgChannelOpenAckResponse;
                    toProto(message: _62.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelOpenAckResponse): _62.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelOpenConfirm;
                    isSDK(o: any): o is _62.MsgChannelOpenConfirmSDKType;
                    isAmino(o: any): o is _62.MsgChannelOpenConfirmAmino;
                    encode(message: _62.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelOpenConfirm;
                    fromPartial(object: import("../helpers").DeepPartial<_62.MsgChannelOpenConfirm>): _62.MsgChannelOpenConfirm;
                    fromAmino(object: _62.MsgChannelOpenConfirmAmino): _62.MsgChannelOpenConfirm;
                    toAmino(message: _62.MsgChannelOpenConfirm): _62.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _62.MsgChannelOpenConfirmAminoMsg): _62.MsgChannelOpenConfirm;
                    toAminoMsg(message: _62.MsgChannelOpenConfirm): _62.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelOpenConfirmProtoMsg): _62.MsgChannelOpenConfirm;
                    toProto(message: _62.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelOpenConfirm): _62.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelOpenConfirmResponse;
                    isSDK(o: any): o is _62.MsgChannelOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _62.MsgChannelOpenConfirmResponseAmino;
                    encode(_: _62.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelOpenConfirmResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_62.MsgChannelOpenConfirmResponse>): _62.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _62.MsgChannelOpenConfirmResponseAmino): _62.MsgChannelOpenConfirmResponse;
                    toAmino(_: _62.MsgChannelOpenConfirmResponse): _62.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _62.MsgChannelOpenConfirmResponseAminoMsg): _62.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _62.MsgChannelOpenConfirmResponse): _62.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelOpenConfirmResponseProtoMsg): _62.MsgChannelOpenConfirmResponse;
                    toProto(message: _62.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelOpenConfirmResponse): _62.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelCloseInit;
                    isSDK(o: any): o is _62.MsgChannelCloseInitSDKType;
                    isAmino(o: any): o is _62.MsgChannelCloseInitAmino;
                    encode(message: _62.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelCloseInit;
                    fromPartial(object: import("../helpers").DeepPartial<_62.MsgChannelCloseInit>): _62.MsgChannelCloseInit;
                    fromAmino(object: _62.MsgChannelCloseInitAmino): _62.MsgChannelCloseInit;
                    toAmino(message: _62.MsgChannelCloseInit): _62.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _62.MsgChannelCloseInitAminoMsg): _62.MsgChannelCloseInit;
                    toAminoMsg(message: _62.MsgChannelCloseInit): _62.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelCloseInitProtoMsg): _62.MsgChannelCloseInit;
                    toProto(message: _62.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelCloseInit): _62.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelCloseInitResponse;
                    isSDK(o: any): o is _62.MsgChannelCloseInitResponseSDKType;
                    isAmino(o: any): o is _62.MsgChannelCloseInitResponseAmino;
                    encode(_: _62.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelCloseInitResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_62.MsgChannelCloseInitResponse>): _62.MsgChannelCloseInitResponse;
                    fromAmino(_: _62.MsgChannelCloseInitResponseAmino): _62.MsgChannelCloseInitResponse;
                    toAmino(_: _62.MsgChannelCloseInitResponse): _62.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _62.MsgChannelCloseInitResponseAminoMsg): _62.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _62.MsgChannelCloseInitResponse): _62.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelCloseInitResponseProtoMsg): _62.MsgChannelCloseInitResponse;
                    toProto(message: _62.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelCloseInitResponse): _62.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelCloseConfirm;
                    isSDK(o: any): o is _62.MsgChannelCloseConfirmSDKType;
                    isAmino(o: any): o is _62.MsgChannelCloseConfirmAmino;
                    encode(message: _62.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelCloseConfirm;
                    fromPartial(object: import("../helpers").DeepPartial<_62.MsgChannelCloseConfirm>): _62.MsgChannelCloseConfirm;
                    fromAmino(object: _62.MsgChannelCloseConfirmAmino): _62.MsgChannelCloseConfirm;
                    toAmino(message: _62.MsgChannelCloseConfirm): _62.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _62.MsgChannelCloseConfirmAminoMsg): _62.MsgChannelCloseConfirm;
                    toAminoMsg(message: _62.MsgChannelCloseConfirm): _62.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelCloseConfirmProtoMsg): _62.MsgChannelCloseConfirm;
                    toProto(message: _62.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelCloseConfirm): _62.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgChannelCloseConfirmResponse;
                    isSDK(o: any): o is _62.MsgChannelCloseConfirmResponseSDKType;
                    isAmino(o: any): o is _62.MsgChannelCloseConfirmResponseAmino;
                    encode(_: _62.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgChannelCloseConfirmResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_62.MsgChannelCloseConfirmResponse>): _62.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _62.MsgChannelCloseConfirmResponseAmino): _62.MsgChannelCloseConfirmResponse;
                    toAmino(_: _62.MsgChannelCloseConfirmResponse): _62.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _62.MsgChannelCloseConfirmResponseAminoMsg): _62.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _62.MsgChannelCloseConfirmResponse): _62.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _62.MsgChannelCloseConfirmResponseProtoMsg): _62.MsgChannelCloseConfirmResponse;
                    toProto(message: _62.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _62.MsgChannelCloseConfirmResponse): _62.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgRecvPacket;
                    isSDK(o: any): o is _62.MsgRecvPacketSDKType;
                    isAmino(o: any): o is _62.MsgRecvPacketAmino;
                    encode(message: _62.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgRecvPacket;
                    fromPartial(object: import("../helpers").DeepPartial<_62.MsgRecvPacket>): _62.MsgRecvPacket;
                    fromAmino(object: _62.MsgRecvPacketAmino): _62.MsgRecvPacket;
                    toAmino(message: _62.MsgRecvPacket): _62.MsgRecvPacketAmino;
                    fromAminoMsg(object: _62.MsgRecvPacketAminoMsg): _62.MsgRecvPacket;
                    toAminoMsg(message: _62.MsgRecvPacket): _62.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _62.MsgRecvPacketProtoMsg): _62.MsgRecvPacket;
                    toProto(message: _62.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _62.MsgRecvPacket): _62.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgRecvPacketResponse;
                    isSDK(o: any): o is _62.MsgRecvPacketResponseSDKType;
                    isAmino(o: any): o is _62.MsgRecvPacketResponseAmino;
                    encode(_: _62.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgRecvPacketResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_62.MsgRecvPacketResponse>): _62.MsgRecvPacketResponse;
                    fromAmino(_: _62.MsgRecvPacketResponseAmino): _62.MsgRecvPacketResponse;
                    toAmino(_: _62.MsgRecvPacketResponse): _62.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _62.MsgRecvPacketResponseAminoMsg): _62.MsgRecvPacketResponse;
                    toAminoMsg(message: _62.MsgRecvPacketResponse): _62.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _62.MsgRecvPacketResponseProtoMsg): _62.MsgRecvPacketResponse;
                    toProto(message: _62.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _62.MsgRecvPacketResponse): _62.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgTimeout;
                    isSDK(o: any): o is _62.MsgTimeoutSDKType;
                    isAmino(o: any): o is _62.MsgTimeoutAmino;
                    encode(message: _62.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgTimeout;
                    fromPartial(object: import("../helpers").DeepPartial<_62.MsgTimeout>): _62.MsgTimeout;
                    fromAmino(object: _62.MsgTimeoutAmino): _62.MsgTimeout;
                    toAmino(message: _62.MsgTimeout): _62.MsgTimeoutAmino;
                    fromAminoMsg(object: _62.MsgTimeoutAminoMsg): _62.MsgTimeout;
                    toAminoMsg(message: _62.MsgTimeout): _62.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _62.MsgTimeoutProtoMsg): _62.MsgTimeout;
                    toProto(message: _62.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _62.MsgTimeout): _62.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgTimeoutResponse;
                    isSDK(o: any): o is _62.MsgTimeoutResponseSDKType;
                    isAmino(o: any): o is _62.MsgTimeoutResponseAmino;
                    encode(_: _62.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgTimeoutResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_62.MsgTimeoutResponse>): _62.MsgTimeoutResponse;
                    fromAmino(_: _62.MsgTimeoutResponseAmino): _62.MsgTimeoutResponse;
                    toAmino(_: _62.MsgTimeoutResponse): _62.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _62.MsgTimeoutResponseAminoMsg): _62.MsgTimeoutResponse;
                    toAminoMsg(message: _62.MsgTimeoutResponse): _62.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _62.MsgTimeoutResponseProtoMsg): _62.MsgTimeoutResponse;
                    toProto(message: _62.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _62.MsgTimeoutResponse): _62.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgTimeoutOnClose;
                    isSDK(o: any): o is _62.MsgTimeoutOnCloseSDKType;
                    isAmino(o: any): o is _62.MsgTimeoutOnCloseAmino;
                    encode(message: _62.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgTimeoutOnClose;
                    fromPartial(object: import("../helpers").DeepPartial<_62.MsgTimeoutOnClose>): _62.MsgTimeoutOnClose;
                    fromAmino(object: _62.MsgTimeoutOnCloseAmino): _62.MsgTimeoutOnClose;
                    toAmino(message: _62.MsgTimeoutOnClose): _62.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _62.MsgTimeoutOnCloseAminoMsg): _62.MsgTimeoutOnClose;
                    toAminoMsg(message: _62.MsgTimeoutOnClose): _62.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _62.MsgTimeoutOnCloseProtoMsg): _62.MsgTimeoutOnClose;
                    toProto(message: _62.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _62.MsgTimeoutOnClose): _62.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgTimeoutOnCloseResponse;
                    isSDK(o: any): o is _62.MsgTimeoutOnCloseResponseSDKType;
                    isAmino(o: any): o is _62.MsgTimeoutOnCloseResponseAmino;
                    encode(_: _62.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgTimeoutOnCloseResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_62.MsgTimeoutOnCloseResponse>): _62.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _62.MsgTimeoutOnCloseResponseAmino): _62.MsgTimeoutOnCloseResponse;
                    toAmino(_: _62.MsgTimeoutOnCloseResponse): _62.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _62.MsgTimeoutOnCloseResponseAminoMsg): _62.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _62.MsgTimeoutOnCloseResponse): _62.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _62.MsgTimeoutOnCloseResponseProtoMsg): _62.MsgTimeoutOnCloseResponse;
                    toProto(message: _62.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _62.MsgTimeoutOnCloseResponse): _62.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgAcknowledgement;
                    isSDK(o: any): o is _62.MsgAcknowledgementSDKType;
                    isAmino(o: any): o is _62.MsgAcknowledgementAmino;
                    encode(message: _62.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgAcknowledgement;
                    fromPartial(object: import("../helpers").DeepPartial<_62.MsgAcknowledgement>): _62.MsgAcknowledgement;
                    fromAmino(object: _62.MsgAcknowledgementAmino): _62.MsgAcknowledgement;
                    toAmino(message: _62.MsgAcknowledgement): _62.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _62.MsgAcknowledgementAminoMsg): _62.MsgAcknowledgement;
                    toAminoMsg(message: _62.MsgAcknowledgement): _62.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _62.MsgAcknowledgementProtoMsg): _62.MsgAcknowledgement;
                    toProto(message: _62.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _62.MsgAcknowledgement): _62.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.MsgAcknowledgementResponse;
                    isSDK(o: any): o is _62.MsgAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _62.MsgAcknowledgementResponseAmino;
                    encode(_: _62.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.MsgAcknowledgementResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_62.MsgAcknowledgementResponse>): _62.MsgAcknowledgementResponse;
                    fromAmino(_: _62.MsgAcknowledgementResponseAmino): _62.MsgAcknowledgementResponse;
                    toAmino(_: _62.MsgAcknowledgementResponse): _62.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _62.MsgAcknowledgementResponseAminoMsg): _62.MsgAcknowledgementResponse;
                    toAminoMsg(message: _62.MsgAcknowledgementResponse): _62.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _62.MsgAcknowledgementResponseProtoMsg): _62.MsgAcknowledgementResponse;
                    toProto(message: _62.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _62.MsgAcknowledgementResponse): _62.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryChannelRequest;
                    isSDK(o: any): o is _61.QueryChannelRequestSDKType;
                    isAmino(o: any): o is _61.QueryChannelRequestAmino;
                    encode(message: _61.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryChannelRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryChannelRequest>): _61.QueryChannelRequest;
                    fromAmino(object: _61.QueryChannelRequestAmino): _61.QueryChannelRequest;
                    toAmino(message: _61.QueryChannelRequest): _61.QueryChannelRequestAmino;
                    fromAminoMsg(object: _61.QueryChannelRequestAminoMsg): _61.QueryChannelRequest;
                    toAminoMsg(message: _61.QueryChannelRequest): _61.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryChannelRequestProtoMsg): _61.QueryChannelRequest;
                    toProto(message: _61.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryChannelRequest): _61.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryChannelResponse;
                    isSDK(o: any): o is _61.QueryChannelResponseSDKType;
                    isAmino(o: any): o is _61.QueryChannelResponseAmino;
                    encode(message: _61.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryChannelResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryChannelResponse>): _61.QueryChannelResponse;
                    fromAmino(object: _61.QueryChannelResponseAmino): _61.QueryChannelResponse;
                    toAmino(message: _61.QueryChannelResponse): _61.QueryChannelResponseAmino;
                    fromAminoMsg(object: _61.QueryChannelResponseAminoMsg): _61.QueryChannelResponse;
                    toAminoMsg(message: _61.QueryChannelResponse): _61.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryChannelResponseProtoMsg): _61.QueryChannelResponse;
                    toProto(message: _61.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryChannelResponse): _61.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryChannelsRequest;
                    isSDK(o: any): o is _61.QueryChannelsRequestSDKType;
                    isAmino(o: any): o is _61.QueryChannelsRequestAmino;
                    encode(message: _61.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryChannelsRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryChannelsRequest>): _61.QueryChannelsRequest;
                    fromAmino(object: _61.QueryChannelsRequestAmino): _61.QueryChannelsRequest;
                    toAmino(message: _61.QueryChannelsRequest): _61.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _61.QueryChannelsRequestAminoMsg): _61.QueryChannelsRequest;
                    toAminoMsg(message: _61.QueryChannelsRequest): _61.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryChannelsRequestProtoMsg): _61.QueryChannelsRequest;
                    toProto(message: _61.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryChannelsRequest): _61.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryChannelsResponse;
                    isSDK(o: any): o is _61.QueryChannelsResponseSDKType;
                    isAmino(o: any): o is _61.QueryChannelsResponseAmino;
                    encode(message: _61.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryChannelsResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryChannelsResponse>): _61.QueryChannelsResponse;
                    fromAmino(object: _61.QueryChannelsResponseAmino): _61.QueryChannelsResponse;
                    toAmino(message: _61.QueryChannelsResponse): _61.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _61.QueryChannelsResponseAminoMsg): _61.QueryChannelsResponse;
                    toAminoMsg(message: _61.QueryChannelsResponse): _61.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryChannelsResponseProtoMsg): _61.QueryChannelsResponse;
                    toProto(message: _61.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryChannelsResponse): _61.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryConnectionChannelsRequest;
                    isSDK(o: any): o is _61.QueryConnectionChannelsRequestSDKType;
                    isAmino(o: any): o is _61.QueryConnectionChannelsRequestAmino;
                    encode(message: _61.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryConnectionChannelsRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryConnectionChannelsRequest>): _61.QueryConnectionChannelsRequest;
                    fromAmino(object: _61.QueryConnectionChannelsRequestAmino): _61.QueryConnectionChannelsRequest;
                    toAmino(message: _61.QueryConnectionChannelsRequest): _61.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _61.QueryConnectionChannelsRequestAminoMsg): _61.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _61.QueryConnectionChannelsRequest): _61.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryConnectionChannelsRequestProtoMsg): _61.QueryConnectionChannelsRequest;
                    toProto(message: _61.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryConnectionChannelsRequest): _61.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryConnectionChannelsResponse;
                    isSDK(o: any): o is _61.QueryConnectionChannelsResponseSDKType;
                    isAmino(o: any): o is _61.QueryConnectionChannelsResponseAmino;
                    encode(message: _61.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryConnectionChannelsResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryConnectionChannelsResponse>): _61.QueryConnectionChannelsResponse;
                    fromAmino(object: _61.QueryConnectionChannelsResponseAmino): _61.QueryConnectionChannelsResponse;
                    toAmino(message: _61.QueryConnectionChannelsResponse): _61.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _61.QueryConnectionChannelsResponseAminoMsg): _61.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _61.QueryConnectionChannelsResponse): _61.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryConnectionChannelsResponseProtoMsg): _61.QueryConnectionChannelsResponse;
                    toProto(message: _61.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryConnectionChannelsResponse): _61.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryChannelClientStateRequest;
                    isSDK(o: any): o is _61.QueryChannelClientStateRequestSDKType;
                    isAmino(o: any): o is _61.QueryChannelClientStateRequestAmino;
                    encode(message: _61.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryChannelClientStateRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryChannelClientStateRequest>): _61.QueryChannelClientStateRequest;
                    fromAmino(object: _61.QueryChannelClientStateRequestAmino): _61.QueryChannelClientStateRequest;
                    toAmino(message: _61.QueryChannelClientStateRequest): _61.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _61.QueryChannelClientStateRequestAminoMsg): _61.QueryChannelClientStateRequest;
                    toAminoMsg(message: _61.QueryChannelClientStateRequest): _61.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryChannelClientStateRequestProtoMsg): _61.QueryChannelClientStateRequest;
                    toProto(message: _61.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryChannelClientStateRequest): _61.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryChannelClientStateResponse;
                    isSDK(o: any): o is _61.QueryChannelClientStateResponseSDKType;
                    isAmino(o: any): o is _61.QueryChannelClientStateResponseAmino;
                    encode(message: _61.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryChannelClientStateResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryChannelClientStateResponse>): _61.QueryChannelClientStateResponse;
                    fromAmino(object: _61.QueryChannelClientStateResponseAmino): _61.QueryChannelClientStateResponse;
                    toAmino(message: _61.QueryChannelClientStateResponse): _61.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _61.QueryChannelClientStateResponseAminoMsg): _61.QueryChannelClientStateResponse;
                    toAminoMsg(message: _61.QueryChannelClientStateResponse): _61.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryChannelClientStateResponseProtoMsg): _61.QueryChannelClientStateResponse;
                    toProto(message: _61.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryChannelClientStateResponse): _61.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryChannelConsensusStateRequest;
                    isSDK(o: any): o is _61.QueryChannelConsensusStateRequestSDKType;
                    isAmino(o: any): o is _61.QueryChannelConsensusStateRequestAmino;
                    encode(message: _61.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryChannelConsensusStateRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryChannelConsensusStateRequest>): _61.QueryChannelConsensusStateRequest;
                    fromAmino(object: _61.QueryChannelConsensusStateRequestAmino): _61.QueryChannelConsensusStateRequest;
                    toAmino(message: _61.QueryChannelConsensusStateRequest): _61.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _61.QueryChannelConsensusStateRequestAminoMsg): _61.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _61.QueryChannelConsensusStateRequest): _61.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryChannelConsensusStateRequestProtoMsg): _61.QueryChannelConsensusStateRequest;
                    toProto(message: _61.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryChannelConsensusStateRequest): _61.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryChannelConsensusStateResponse;
                    isSDK(o: any): o is _61.QueryChannelConsensusStateResponseSDKType;
                    isAmino(o: any): o is _61.QueryChannelConsensusStateResponseAmino;
                    encode(message: _61.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryChannelConsensusStateResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryChannelConsensusStateResponse>): _61.QueryChannelConsensusStateResponse;
                    fromAmino(object: _61.QueryChannelConsensusStateResponseAmino): _61.QueryChannelConsensusStateResponse;
                    toAmino(message: _61.QueryChannelConsensusStateResponse): _61.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _61.QueryChannelConsensusStateResponseAminoMsg): _61.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _61.QueryChannelConsensusStateResponse): _61.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryChannelConsensusStateResponseProtoMsg): _61.QueryChannelConsensusStateResponse;
                    toProto(message: _61.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryChannelConsensusStateResponse): _61.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryPacketCommitmentRequest;
                    isSDK(o: any): o is _61.QueryPacketCommitmentRequestSDKType;
                    isAmino(o: any): o is _61.QueryPacketCommitmentRequestAmino;
                    encode(message: _61.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryPacketCommitmentRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryPacketCommitmentRequest>): _61.QueryPacketCommitmentRequest;
                    fromAmino(object: _61.QueryPacketCommitmentRequestAmino): _61.QueryPacketCommitmentRequest;
                    toAmino(message: _61.QueryPacketCommitmentRequest): _61.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _61.QueryPacketCommitmentRequestAminoMsg): _61.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _61.QueryPacketCommitmentRequest): _61.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryPacketCommitmentRequestProtoMsg): _61.QueryPacketCommitmentRequest;
                    toProto(message: _61.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryPacketCommitmentRequest): _61.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryPacketCommitmentResponse;
                    isSDK(o: any): o is _61.QueryPacketCommitmentResponseSDKType;
                    isAmino(o: any): o is _61.QueryPacketCommitmentResponseAmino;
                    encode(message: _61.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryPacketCommitmentResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryPacketCommitmentResponse>): _61.QueryPacketCommitmentResponse;
                    fromAmino(object: _61.QueryPacketCommitmentResponseAmino): _61.QueryPacketCommitmentResponse;
                    toAmino(message: _61.QueryPacketCommitmentResponse): _61.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _61.QueryPacketCommitmentResponseAminoMsg): _61.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _61.QueryPacketCommitmentResponse): _61.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryPacketCommitmentResponseProtoMsg): _61.QueryPacketCommitmentResponse;
                    toProto(message: _61.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryPacketCommitmentResponse): _61.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryPacketCommitmentsRequest;
                    isSDK(o: any): o is _61.QueryPacketCommitmentsRequestSDKType;
                    isAmino(o: any): o is _61.QueryPacketCommitmentsRequestAmino;
                    encode(message: _61.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryPacketCommitmentsRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryPacketCommitmentsRequest>): _61.QueryPacketCommitmentsRequest;
                    fromAmino(object: _61.QueryPacketCommitmentsRequestAmino): _61.QueryPacketCommitmentsRequest;
                    toAmino(message: _61.QueryPacketCommitmentsRequest): _61.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _61.QueryPacketCommitmentsRequestAminoMsg): _61.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _61.QueryPacketCommitmentsRequest): _61.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryPacketCommitmentsRequestProtoMsg): _61.QueryPacketCommitmentsRequest;
                    toProto(message: _61.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryPacketCommitmentsRequest): _61.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryPacketCommitmentsResponse;
                    isSDK(o: any): o is _61.QueryPacketCommitmentsResponseSDKType;
                    isAmino(o: any): o is _61.QueryPacketCommitmentsResponseAmino;
                    encode(message: _61.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryPacketCommitmentsResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryPacketCommitmentsResponse>): _61.QueryPacketCommitmentsResponse;
                    fromAmino(object: _61.QueryPacketCommitmentsResponseAmino): _61.QueryPacketCommitmentsResponse;
                    toAmino(message: _61.QueryPacketCommitmentsResponse): _61.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _61.QueryPacketCommitmentsResponseAminoMsg): _61.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _61.QueryPacketCommitmentsResponse): _61.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryPacketCommitmentsResponseProtoMsg): _61.QueryPacketCommitmentsResponse;
                    toProto(message: _61.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryPacketCommitmentsResponse): _61.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryPacketReceiptRequest;
                    isSDK(o: any): o is _61.QueryPacketReceiptRequestSDKType;
                    isAmino(o: any): o is _61.QueryPacketReceiptRequestAmino;
                    encode(message: _61.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryPacketReceiptRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryPacketReceiptRequest>): _61.QueryPacketReceiptRequest;
                    fromAmino(object: _61.QueryPacketReceiptRequestAmino): _61.QueryPacketReceiptRequest;
                    toAmino(message: _61.QueryPacketReceiptRequest): _61.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _61.QueryPacketReceiptRequestAminoMsg): _61.QueryPacketReceiptRequest;
                    toAminoMsg(message: _61.QueryPacketReceiptRequest): _61.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryPacketReceiptRequestProtoMsg): _61.QueryPacketReceiptRequest;
                    toProto(message: _61.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryPacketReceiptRequest): _61.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryPacketReceiptResponse;
                    isSDK(o: any): o is _61.QueryPacketReceiptResponseSDKType;
                    isAmino(o: any): o is _61.QueryPacketReceiptResponseAmino;
                    encode(message: _61.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryPacketReceiptResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryPacketReceiptResponse>): _61.QueryPacketReceiptResponse;
                    fromAmino(object: _61.QueryPacketReceiptResponseAmino): _61.QueryPacketReceiptResponse;
                    toAmino(message: _61.QueryPacketReceiptResponse): _61.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _61.QueryPacketReceiptResponseAminoMsg): _61.QueryPacketReceiptResponse;
                    toAminoMsg(message: _61.QueryPacketReceiptResponse): _61.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryPacketReceiptResponseProtoMsg): _61.QueryPacketReceiptResponse;
                    toProto(message: _61.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryPacketReceiptResponse): _61.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryPacketAcknowledgementRequest;
                    isSDK(o: any): o is _61.QueryPacketAcknowledgementRequestSDKType;
                    isAmino(o: any): o is _61.QueryPacketAcknowledgementRequestAmino;
                    encode(message: _61.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryPacketAcknowledgementRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryPacketAcknowledgementRequest>): _61.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _61.QueryPacketAcknowledgementRequestAmino): _61.QueryPacketAcknowledgementRequest;
                    toAmino(message: _61.QueryPacketAcknowledgementRequest): _61.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _61.QueryPacketAcknowledgementRequestAminoMsg): _61.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _61.QueryPacketAcknowledgementRequest): _61.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryPacketAcknowledgementRequestProtoMsg): _61.QueryPacketAcknowledgementRequest;
                    toProto(message: _61.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryPacketAcknowledgementRequest): _61.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryPacketAcknowledgementResponse;
                    isSDK(o: any): o is _61.QueryPacketAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _61.QueryPacketAcknowledgementResponseAmino;
                    encode(message: _61.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryPacketAcknowledgementResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryPacketAcknowledgementResponse>): _61.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _61.QueryPacketAcknowledgementResponseAmino): _61.QueryPacketAcknowledgementResponse;
                    toAmino(message: _61.QueryPacketAcknowledgementResponse): _61.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _61.QueryPacketAcknowledgementResponseAminoMsg): _61.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _61.QueryPacketAcknowledgementResponse): _61.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryPacketAcknowledgementResponseProtoMsg): _61.QueryPacketAcknowledgementResponse;
                    toProto(message: _61.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryPacketAcknowledgementResponse): _61.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryPacketAcknowledgementsRequest;
                    isSDK(o: any): o is _61.QueryPacketAcknowledgementsRequestSDKType;
                    isAmino(o: any): o is _61.QueryPacketAcknowledgementsRequestAmino;
                    encode(message: _61.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryPacketAcknowledgementsRequest>): _61.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _61.QueryPacketAcknowledgementsRequestAmino): _61.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _61.QueryPacketAcknowledgementsRequest): _61.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _61.QueryPacketAcknowledgementsRequestAminoMsg): _61.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _61.QueryPacketAcknowledgementsRequest): _61.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryPacketAcknowledgementsRequestProtoMsg): _61.QueryPacketAcknowledgementsRequest;
                    toProto(message: _61.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryPacketAcknowledgementsRequest): _61.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryPacketAcknowledgementsResponse;
                    isSDK(o: any): o is _61.QueryPacketAcknowledgementsResponseSDKType;
                    isAmino(o: any): o is _61.QueryPacketAcknowledgementsResponseAmino;
                    encode(message: _61.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryPacketAcknowledgementsResponse>): _61.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _61.QueryPacketAcknowledgementsResponseAmino): _61.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _61.QueryPacketAcknowledgementsResponse): _61.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _61.QueryPacketAcknowledgementsResponseAminoMsg): _61.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _61.QueryPacketAcknowledgementsResponse): _61.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryPacketAcknowledgementsResponseProtoMsg): _61.QueryPacketAcknowledgementsResponse;
                    toProto(message: _61.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryPacketAcknowledgementsResponse): _61.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryUnreceivedPacketsRequest;
                    isSDK(o: any): o is _61.QueryUnreceivedPacketsRequestSDKType;
                    isAmino(o: any): o is _61.QueryUnreceivedPacketsRequestAmino;
                    encode(message: _61.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryUnreceivedPacketsRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryUnreceivedPacketsRequest>): _61.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _61.QueryUnreceivedPacketsRequestAmino): _61.QueryUnreceivedPacketsRequest;
                    toAmino(message: _61.QueryUnreceivedPacketsRequest): _61.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _61.QueryUnreceivedPacketsRequestAminoMsg): _61.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _61.QueryUnreceivedPacketsRequest): _61.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryUnreceivedPacketsRequestProtoMsg): _61.QueryUnreceivedPacketsRequest;
                    toProto(message: _61.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryUnreceivedPacketsRequest): _61.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryUnreceivedPacketsResponse;
                    isSDK(o: any): o is _61.QueryUnreceivedPacketsResponseSDKType;
                    isAmino(o: any): o is _61.QueryUnreceivedPacketsResponseAmino;
                    encode(message: _61.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryUnreceivedPacketsResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryUnreceivedPacketsResponse>): _61.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _61.QueryUnreceivedPacketsResponseAmino): _61.QueryUnreceivedPacketsResponse;
                    toAmino(message: _61.QueryUnreceivedPacketsResponse): _61.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _61.QueryUnreceivedPacketsResponseAminoMsg): _61.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _61.QueryUnreceivedPacketsResponse): _61.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryUnreceivedPacketsResponseProtoMsg): _61.QueryUnreceivedPacketsResponse;
                    toProto(message: _61.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryUnreceivedPacketsResponse): _61.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryUnreceivedAcksRequest;
                    isSDK(o: any): o is _61.QueryUnreceivedAcksRequestSDKType;
                    isAmino(o: any): o is _61.QueryUnreceivedAcksRequestAmino;
                    encode(message: _61.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryUnreceivedAcksRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryUnreceivedAcksRequest>): _61.QueryUnreceivedAcksRequest;
                    fromAmino(object: _61.QueryUnreceivedAcksRequestAmino): _61.QueryUnreceivedAcksRequest;
                    toAmino(message: _61.QueryUnreceivedAcksRequest): _61.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _61.QueryUnreceivedAcksRequestAminoMsg): _61.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _61.QueryUnreceivedAcksRequest): _61.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryUnreceivedAcksRequestProtoMsg): _61.QueryUnreceivedAcksRequest;
                    toProto(message: _61.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryUnreceivedAcksRequest): _61.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryUnreceivedAcksResponse;
                    isSDK(o: any): o is _61.QueryUnreceivedAcksResponseSDKType;
                    isAmino(o: any): o is _61.QueryUnreceivedAcksResponseAmino;
                    encode(message: _61.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryUnreceivedAcksResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryUnreceivedAcksResponse>): _61.QueryUnreceivedAcksResponse;
                    fromAmino(object: _61.QueryUnreceivedAcksResponseAmino): _61.QueryUnreceivedAcksResponse;
                    toAmino(message: _61.QueryUnreceivedAcksResponse): _61.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _61.QueryUnreceivedAcksResponseAminoMsg): _61.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _61.QueryUnreceivedAcksResponse): _61.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryUnreceivedAcksResponseProtoMsg): _61.QueryUnreceivedAcksResponse;
                    toProto(message: _61.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryUnreceivedAcksResponse): _61.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryNextSequenceReceiveRequest;
                    isSDK(o: any): o is _61.QueryNextSequenceReceiveRequestSDKType;
                    isAmino(o: any): o is _61.QueryNextSequenceReceiveRequestAmino;
                    encode(message: _61.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryNextSequenceReceiveRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryNextSequenceReceiveRequest>): _61.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _61.QueryNextSequenceReceiveRequestAmino): _61.QueryNextSequenceReceiveRequest;
                    toAmino(message: _61.QueryNextSequenceReceiveRequest): _61.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _61.QueryNextSequenceReceiveRequestAminoMsg): _61.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _61.QueryNextSequenceReceiveRequest): _61.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryNextSequenceReceiveRequestProtoMsg): _61.QueryNextSequenceReceiveRequest;
                    toProto(message: _61.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryNextSequenceReceiveRequest): _61.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryNextSequenceReceiveResponse;
                    isSDK(o: any): o is _61.QueryNextSequenceReceiveResponseSDKType;
                    isAmino(o: any): o is _61.QueryNextSequenceReceiveResponseAmino;
                    encode(message: _61.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.QueryNextSequenceReceiveResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_61.QueryNextSequenceReceiveResponse>): _61.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _61.QueryNextSequenceReceiveResponseAmino): _61.QueryNextSequenceReceiveResponse;
                    toAmino(message: _61.QueryNextSequenceReceiveResponse): _61.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _61.QueryNextSequenceReceiveResponseAminoMsg): _61.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _61.QueryNextSequenceReceiveResponse): _61.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryNextSequenceReceiveResponseProtoMsg): _61.QueryNextSequenceReceiveResponse;
                    toProto(message: _61.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryNextSequenceReceiveResponse): _61.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _60.GenesisState;
                    isSDK(o: any): o is _60.GenesisStateSDKType;
                    isAmino(o: any): o is _60.GenesisStateAmino;
                    encode(message: _60.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.GenesisState;
                    fromPartial(object: import("../helpers").DeepPartial<_60.GenesisState>): _60.GenesisState;
                    fromAmino(object: _60.GenesisStateAmino): _60.GenesisState;
                    toAmino(message: _60.GenesisState): _60.GenesisStateAmino;
                    fromAminoMsg(object: _60.GenesisStateAminoMsg): _60.GenesisState;
                    toAminoMsg(message: _60.GenesisState): _60.GenesisStateAminoMsg;
                    fromProtoMsg(message: _60.GenesisStateProtoMsg): _60.GenesisState;
                    toProto(message: _60.GenesisState): Uint8Array;
                    toProtoMsg(message: _60.GenesisState): _60.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _60.PacketSequence;
                    isSDK(o: any): o is _60.PacketSequenceSDKType;
                    isAmino(o: any): o is _60.PacketSequenceAmino;
                    encode(message: _60.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.PacketSequence;
                    fromPartial(object: import("../helpers").DeepPartial<_60.PacketSequence>): _60.PacketSequence;
                    fromAmino(object: _60.PacketSequenceAmino): _60.PacketSequence;
                    toAmino(message: _60.PacketSequence): _60.PacketSequenceAmino;
                    fromAminoMsg(object: _60.PacketSequenceAminoMsg): _60.PacketSequence;
                    toAminoMsg(message: _60.PacketSequence): _60.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _60.PacketSequenceProtoMsg): _60.PacketSequence;
                    toProto(message: _60.PacketSequence): Uint8Array;
                    toProtoMsg(message: _60.PacketSequence): _60.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _59.State;
                stateToJSON(object: _59.State): string;
                orderFromJSON(object: any): _59.Order;
                orderToJSON(object: _59.Order): string;
                State: typeof _59.State;
                StateSDKType: typeof _59.State;
                StateAmino: typeof _59.State;
                Order: typeof _59.Order;
                OrderSDKType: typeof _59.Order;
                OrderAmino: typeof _59.Order;
                Channel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.Channel;
                    isSDK(o: any): o is _59.ChannelSDKType;
                    isAmino(o: any): o is _59.ChannelAmino;
                    encode(message: _59.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.Channel;
                    fromPartial(object: import("../helpers").DeepPartial<_59.Channel>): _59.Channel;
                    fromAmino(object: _59.ChannelAmino): _59.Channel;
                    toAmino(message: _59.Channel): _59.ChannelAmino;
                    fromAminoMsg(object: _59.ChannelAminoMsg): _59.Channel;
                    toAminoMsg(message: _59.Channel): _59.ChannelAminoMsg;
                    fromProtoMsg(message: _59.ChannelProtoMsg): _59.Channel;
                    toProto(message: _59.Channel): Uint8Array;
                    toProtoMsg(message: _59.Channel): _59.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.IdentifiedChannel;
                    isSDK(o: any): o is _59.IdentifiedChannelSDKType;
                    isAmino(o: any): o is _59.IdentifiedChannelAmino;
                    encode(message: _59.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.IdentifiedChannel;
                    fromPartial(object: import("../helpers").DeepPartial<_59.IdentifiedChannel>): _59.IdentifiedChannel;
                    fromAmino(object: _59.IdentifiedChannelAmino): _59.IdentifiedChannel;
                    toAmino(message: _59.IdentifiedChannel): _59.IdentifiedChannelAmino;
                    fromAminoMsg(object: _59.IdentifiedChannelAminoMsg): _59.IdentifiedChannel;
                    toAminoMsg(message: _59.IdentifiedChannel): _59.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _59.IdentifiedChannelProtoMsg): _59.IdentifiedChannel;
                    toProto(message: _59.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _59.IdentifiedChannel): _59.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.Counterparty;
                    isSDK(o: any): o is _59.CounterpartySDKType;
                    isAmino(o: any): o is _59.CounterpartyAmino;
                    encode(message: _59.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.Counterparty;
                    fromPartial(object: import("../helpers").DeepPartial<_59.Counterparty>): _59.Counterparty;
                    fromAmino(object: _59.CounterpartyAmino): _59.Counterparty;
                    toAmino(message: _59.Counterparty): _59.CounterpartyAmino;
                    fromAminoMsg(object: _59.CounterpartyAminoMsg): _59.Counterparty;
                    toAminoMsg(message: _59.Counterparty): _59.CounterpartyAminoMsg;
                    fromProtoMsg(message: _59.CounterpartyProtoMsg): _59.Counterparty;
                    toProto(message: _59.Counterparty): Uint8Array;
                    toProtoMsg(message: _59.Counterparty): _59.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.Packet;
                    isSDK(o: any): o is _59.PacketSDKType;
                    isAmino(o: any): o is _59.PacketAmino;
                    encode(message: _59.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.Packet;
                    fromPartial(object: import("../helpers").DeepPartial<_59.Packet>): _59.Packet;
                    fromAmino(object: _59.PacketAmino): _59.Packet;
                    toAmino(message: _59.Packet): _59.PacketAmino;
                    fromAminoMsg(object: _59.PacketAminoMsg): _59.Packet;
                    toAminoMsg(message: _59.Packet): _59.PacketAminoMsg;
                    fromProtoMsg(message: _59.PacketProtoMsg): _59.Packet;
                    toProto(message: _59.Packet): Uint8Array;
                    toProtoMsg(message: _59.Packet): _59.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.PacketState;
                    isSDK(o: any): o is _59.PacketStateSDKType;
                    isAmino(o: any): o is _59.PacketStateAmino;
                    encode(message: _59.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.PacketState;
                    fromPartial(object: import("../helpers").DeepPartial<_59.PacketState>): _59.PacketState;
                    fromAmino(object: _59.PacketStateAmino): _59.PacketState;
                    toAmino(message: _59.PacketState): _59.PacketStateAmino;
                    fromAminoMsg(object: _59.PacketStateAminoMsg): _59.PacketState;
                    toAminoMsg(message: _59.PacketState): _59.PacketStateAminoMsg;
                    fromProtoMsg(message: _59.PacketStateProtoMsg): _59.PacketState;
                    toProto(message: _59.PacketState): Uint8Array;
                    toProtoMsg(message: _59.PacketState): _59.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.Acknowledgement;
                    isSDK(o: any): o is _59.AcknowledgementSDKType;
                    isAmino(o: any): o is _59.AcknowledgementAmino;
                    encode(message: _59.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.Acknowledgement;
                    fromPartial(object: import("../helpers").DeepPartial<_59.Acknowledgement>): _59.Acknowledgement;
                    fromAmino(object: _59.AcknowledgementAmino): _59.Acknowledgement;
                    toAmino(message: _59.Acknowledgement): _59.AcknowledgementAmino;
                    fromAminoMsg(object: _59.AcknowledgementAminoMsg): _59.Acknowledgement;
                    toAminoMsg(message: _59.Acknowledgement): _59.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _59.AcknowledgementProtoMsg): _59.Acknowledgement;
                    toProto(message: _59.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _59.Acknowledgement): _59.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _147.MsgClientImpl;
                createClientImpl: (rpc: import("../helpers").Rpc) => _147.MsgClientImpl;
                QueryClientImpl: typeof _143.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _65.QueryClientStateRequest): Promise<_65.QueryClientStateResponse>;
                    clientStates(request?: _65.QueryClientStatesRequest): Promise<_65.QueryClientStatesResponse>;
                    consensusState(request: _65.QueryConsensusStateRequest): Promise<_65.QueryConsensusStateResponse>;
                    consensusStates(request: _65.QueryConsensusStatesRequest): Promise<_65.QueryConsensusStatesResponse>;
                    clientStatus(request: _65.QueryClientStatusRequest): Promise<_65.QueryClientStatusResponse>;
                    clientParams(request?: _65.QueryClientParamsRequest): Promise<_65.QueryClientParamsResponse>;
                    upgradedClientState(request?: _65.QueryUpgradedClientStateRequest): Promise<_65.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _65.QueryUpgradedConsensusStateRequest): Promise<_65.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _139.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _66.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        updateClient(value: _66.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        upgradeClient(value: _66.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        submitMisbehaviour(value: _66.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _66.MsgCreateClient): {
                            typeUrl: string;
                            value: _66.MsgCreateClient;
                        };
                        updateClient(value: _66.MsgUpdateClient): {
                            typeUrl: string;
                            value: _66.MsgUpdateClient;
                        };
                        upgradeClient(value: _66.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _66.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _66.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _66.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _66.MsgCreateClient): {
                            typeUrl: string;
                            value: _66.MsgCreateClient;
                        };
                        updateClient(value: _66.MsgUpdateClient): {
                            typeUrl: string;
                            value: _66.MsgUpdateClient;
                        };
                        upgradeClient(value: _66.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _66.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _66.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _66.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _66.MsgCreateClient) => _66.MsgCreateClientAmino;
                        fromAmino: (object: _66.MsgCreateClientAmino) => _66.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _66.MsgUpdateClient) => _66.MsgUpdateClientAmino;
                        fromAmino: (object: _66.MsgUpdateClientAmino) => _66.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _66.MsgUpgradeClient) => _66.MsgUpgradeClientAmino;
                        fromAmino: (object: _66.MsgUpgradeClientAmino) => _66.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _66.MsgSubmitMisbehaviour) => _66.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _66.MsgSubmitMisbehaviourAmino) => _66.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgCreateClient;
                    isSDK(o: any): o is _66.MsgCreateClientSDKType;
                    isAmino(o: any): o is _66.MsgCreateClientAmino;
                    encode(message: _66.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgCreateClient;
                    fromPartial(object: import("../helpers").DeepPartial<_66.MsgCreateClient>): _66.MsgCreateClient;
                    fromAmino(object: _66.MsgCreateClientAmino): _66.MsgCreateClient;
                    toAmino(message: _66.MsgCreateClient): _66.MsgCreateClientAmino;
                    fromAminoMsg(object: _66.MsgCreateClientAminoMsg): _66.MsgCreateClient;
                    toAminoMsg(message: _66.MsgCreateClient): _66.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _66.MsgCreateClientProtoMsg): _66.MsgCreateClient;
                    toProto(message: _66.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _66.MsgCreateClient): _66.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgCreateClientResponse;
                    isSDK(o: any): o is _66.MsgCreateClientResponseSDKType;
                    isAmino(o: any): o is _66.MsgCreateClientResponseAmino;
                    encode(_: _66.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgCreateClientResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_66.MsgCreateClientResponse>): _66.MsgCreateClientResponse;
                    fromAmino(_: _66.MsgCreateClientResponseAmino): _66.MsgCreateClientResponse;
                    toAmino(_: _66.MsgCreateClientResponse): _66.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _66.MsgCreateClientResponseAminoMsg): _66.MsgCreateClientResponse;
                    toAminoMsg(message: _66.MsgCreateClientResponse): _66.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgCreateClientResponseProtoMsg): _66.MsgCreateClientResponse;
                    toProto(message: _66.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgCreateClientResponse): _66.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgUpdateClient;
                    isSDK(o: any): o is _66.MsgUpdateClientSDKType;
                    isAmino(o: any): o is _66.MsgUpdateClientAmino;
                    encode(message: _66.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgUpdateClient;
                    fromPartial(object: import("../helpers").DeepPartial<_66.MsgUpdateClient>): _66.MsgUpdateClient;
                    fromAmino(object: _66.MsgUpdateClientAmino): _66.MsgUpdateClient;
                    toAmino(message: _66.MsgUpdateClient): _66.MsgUpdateClientAmino;
                    fromAminoMsg(object: _66.MsgUpdateClientAminoMsg): _66.MsgUpdateClient;
                    toAminoMsg(message: _66.MsgUpdateClient): _66.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _66.MsgUpdateClientProtoMsg): _66.MsgUpdateClient;
                    toProto(message: _66.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _66.MsgUpdateClient): _66.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgUpdateClientResponse;
                    isSDK(o: any): o is _66.MsgUpdateClientResponseSDKType;
                    isAmino(o: any): o is _66.MsgUpdateClientResponseAmino;
                    encode(_: _66.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgUpdateClientResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_66.MsgUpdateClientResponse>): _66.MsgUpdateClientResponse;
                    fromAmino(_: _66.MsgUpdateClientResponseAmino): _66.MsgUpdateClientResponse;
                    toAmino(_: _66.MsgUpdateClientResponse): _66.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _66.MsgUpdateClientResponseAminoMsg): _66.MsgUpdateClientResponse;
                    toAminoMsg(message: _66.MsgUpdateClientResponse): _66.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgUpdateClientResponseProtoMsg): _66.MsgUpdateClientResponse;
                    toProto(message: _66.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgUpdateClientResponse): _66.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgUpgradeClient;
                    isSDK(o: any): o is _66.MsgUpgradeClientSDKType;
                    isAmino(o: any): o is _66.MsgUpgradeClientAmino;
                    encode(message: _66.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgUpgradeClient;
                    fromPartial(object: import("../helpers").DeepPartial<_66.MsgUpgradeClient>): _66.MsgUpgradeClient;
                    fromAmino(object: _66.MsgUpgradeClientAmino): _66.MsgUpgradeClient;
                    toAmino(message: _66.MsgUpgradeClient): _66.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _66.MsgUpgradeClientAminoMsg): _66.MsgUpgradeClient;
                    toAminoMsg(message: _66.MsgUpgradeClient): _66.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _66.MsgUpgradeClientProtoMsg): _66.MsgUpgradeClient;
                    toProto(message: _66.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _66.MsgUpgradeClient): _66.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgUpgradeClientResponse;
                    isSDK(o: any): o is _66.MsgUpgradeClientResponseSDKType;
                    isAmino(o: any): o is _66.MsgUpgradeClientResponseAmino;
                    encode(_: _66.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgUpgradeClientResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_66.MsgUpgradeClientResponse>): _66.MsgUpgradeClientResponse;
                    fromAmino(_: _66.MsgUpgradeClientResponseAmino): _66.MsgUpgradeClientResponse;
                    toAmino(_: _66.MsgUpgradeClientResponse): _66.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _66.MsgUpgradeClientResponseAminoMsg): _66.MsgUpgradeClientResponse;
                    toAminoMsg(message: _66.MsgUpgradeClientResponse): _66.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgUpgradeClientResponseProtoMsg): _66.MsgUpgradeClientResponse;
                    toProto(message: _66.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgUpgradeClientResponse): _66.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgSubmitMisbehaviour;
                    isSDK(o: any): o is _66.MsgSubmitMisbehaviourSDKType;
                    isAmino(o: any): o is _66.MsgSubmitMisbehaviourAmino;
                    encode(message: _66.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgSubmitMisbehaviour;
                    fromPartial(object: import("../helpers").DeepPartial<_66.MsgSubmitMisbehaviour>): _66.MsgSubmitMisbehaviour;
                    fromAmino(object: _66.MsgSubmitMisbehaviourAmino): _66.MsgSubmitMisbehaviour;
                    toAmino(message: _66.MsgSubmitMisbehaviour): _66.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _66.MsgSubmitMisbehaviourAminoMsg): _66.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _66.MsgSubmitMisbehaviour): _66.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _66.MsgSubmitMisbehaviourProtoMsg): _66.MsgSubmitMisbehaviour;
                    toProto(message: _66.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _66.MsgSubmitMisbehaviour): _66.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgSubmitMisbehaviourResponse;
                    isSDK(o: any): o is _66.MsgSubmitMisbehaviourResponseSDKType;
                    isAmino(o: any): o is _66.MsgSubmitMisbehaviourResponseAmino;
                    encode(_: _66.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_66.MsgSubmitMisbehaviourResponse>): _66.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _66.MsgSubmitMisbehaviourResponseAmino): _66.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _66.MsgSubmitMisbehaviourResponse): _66.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _66.MsgSubmitMisbehaviourResponseAminoMsg): _66.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _66.MsgSubmitMisbehaviourResponse): _66.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgSubmitMisbehaviourResponseProtoMsg): _66.MsgSubmitMisbehaviourResponse;
                    toProto(message: _66.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgSubmitMisbehaviourResponse): _66.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryClientStateRequest;
                    isSDK(o: any): o is _65.QueryClientStateRequestSDKType;
                    isAmino(o: any): o is _65.QueryClientStateRequestAmino;
                    encode(message: _65.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryClientStateRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryClientStateRequest>): _65.QueryClientStateRequest;
                    fromAmino(object: _65.QueryClientStateRequestAmino): _65.QueryClientStateRequest;
                    toAmino(message: _65.QueryClientStateRequest): _65.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _65.QueryClientStateRequestAminoMsg): _65.QueryClientStateRequest;
                    toAminoMsg(message: _65.QueryClientStateRequest): _65.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryClientStateRequestProtoMsg): _65.QueryClientStateRequest;
                    toProto(message: _65.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryClientStateRequest): _65.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryClientStateResponse;
                    isSDK(o: any): o is _65.QueryClientStateResponseSDKType;
                    isAmino(o: any): o is _65.QueryClientStateResponseAmino;
                    encode(message: _65.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryClientStateResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryClientStateResponse>): _65.QueryClientStateResponse;
                    fromAmino(object: _65.QueryClientStateResponseAmino): _65.QueryClientStateResponse;
                    toAmino(message: _65.QueryClientStateResponse): _65.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _65.QueryClientStateResponseAminoMsg): _65.QueryClientStateResponse;
                    toAminoMsg(message: _65.QueryClientStateResponse): _65.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryClientStateResponseProtoMsg): _65.QueryClientStateResponse;
                    toProto(message: _65.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryClientStateResponse): _65.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryClientStatesRequest;
                    isSDK(o: any): o is _65.QueryClientStatesRequestSDKType;
                    isAmino(o: any): o is _65.QueryClientStatesRequestAmino;
                    encode(message: _65.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryClientStatesRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryClientStatesRequest>): _65.QueryClientStatesRequest;
                    fromAmino(object: _65.QueryClientStatesRequestAmino): _65.QueryClientStatesRequest;
                    toAmino(message: _65.QueryClientStatesRequest): _65.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _65.QueryClientStatesRequestAminoMsg): _65.QueryClientStatesRequest;
                    toAminoMsg(message: _65.QueryClientStatesRequest): _65.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryClientStatesRequestProtoMsg): _65.QueryClientStatesRequest;
                    toProto(message: _65.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryClientStatesRequest): _65.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryClientStatesResponse;
                    isSDK(o: any): o is _65.QueryClientStatesResponseSDKType;
                    isAmino(o: any): o is _65.QueryClientStatesResponseAmino;
                    encode(message: _65.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryClientStatesResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryClientStatesResponse>): _65.QueryClientStatesResponse;
                    fromAmino(object: _65.QueryClientStatesResponseAmino): _65.QueryClientStatesResponse;
                    toAmino(message: _65.QueryClientStatesResponse): _65.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _65.QueryClientStatesResponseAminoMsg): _65.QueryClientStatesResponse;
                    toAminoMsg(message: _65.QueryClientStatesResponse): _65.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryClientStatesResponseProtoMsg): _65.QueryClientStatesResponse;
                    toProto(message: _65.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryClientStatesResponse): _65.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryConsensusStateRequest;
                    isSDK(o: any): o is _65.QueryConsensusStateRequestSDKType;
                    isAmino(o: any): o is _65.QueryConsensusStateRequestAmino;
                    encode(message: _65.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryConsensusStateRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryConsensusStateRequest>): _65.QueryConsensusStateRequest;
                    fromAmino(object: _65.QueryConsensusStateRequestAmino): _65.QueryConsensusStateRequest;
                    toAmino(message: _65.QueryConsensusStateRequest): _65.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _65.QueryConsensusStateRequestAminoMsg): _65.QueryConsensusStateRequest;
                    toAminoMsg(message: _65.QueryConsensusStateRequest): _65.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryConsensusStateRequestProtoMsg): _65.QueryConsensusStateRequest;
                    toProto(message: _65.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryConsensusStateRequest): _65.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryConsensusStateResponse;
                    isSDK(o: any): o is _65.QueryConsensusStateResponseSDKType;
                    isAmino(o: any): o is _65.QueryConsensusStateResponseAmino;
                    encode(message: _65.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryConsensusStateResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryConsensusStateResponse>): _65.QueryConsensusStateResponse;
                    fromAmino(object: _65.QueryConsensusStateResponseAmino): _65.QueryConsensusStateResponse;
                    toAmino(message: _65.QueryConsensusStateResponse): _65.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _65.QueryConsensusStateResponseAminoMsg): _65.QueryConsensusStateResponse;
                    toAminoMsg(message: _65.QueryConsensusStateResponse): _65.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryConsensusStateResponseProtoMsg): _65.QueryConsensusStateResponse;
                    toProto(message: _65.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryConsensusStateResponse): _65.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryConsensusStatesRequest;
                    isSDK(o: any): o is _65.QueryConsensusStatesRequestSDKType;
                    isAmino(o: any): o is _65.QueryConsensusStatesRequestAmino;
                    encode(message: _65.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryConsensusStatesRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryConsensusStatesRequest>): _65.QueryConsensusStatesRequest;
                    fromAmino(object: _65.QueryConsensusStatesRequestAmino): _65.QueryConsensusStatesRequest;
                    toAmino(message: _65.QueryConsensusStatesRequest): _65.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _65.QueryConsensusStatesRequestAminoMsg): _65.QueryConsensusStatesRequest;
                    toAminoMsg(message: _65.QueryConsensusStatesRequest): _65.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryConsensusStatesRequestProtoMsg): _65.QueryConsensusStatesRequest;
                    toProto(message: _65.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryConsensusStatesRequest): _65.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryConsensusStatesResponse;
                    isSDK(o: any): o is _65.QueryConsensusStatesResponseSDKType;
                    isAmino(o: any): o is _65.QueryConsensusStatesResponseAmino;
                    encode(message: _65.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryConsensusStatesResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryConsensusStatesResponse>): _65.QueryConsensusStatesResponse;
                    fromAmino(object: _65.QueryConsensusStatesResponseAmino): _65.QueryConsensusStatesResponse;
                    toAmino(message: _65.QueryConsensusStatesResponse): _65.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _65.QueryConsensusStatesResponseAminoMsg): _65.QueryConsensusStatesResponse;
                    toAminoMsg(message: _65.QueryConsensusStatesResponse): _65.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryConsensusStatesResponseProtoMsg): _65.QueryConsensusStatesResponse;
                    toProto(message: _65.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryConsensusStatesResponse): _65.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryClientStatusRequest;
                    isSDK(o: any): o is _65.QueryClientStatusRequestSDKType;
                    isAmino(o: any): o is _65.QueryClientStatusRequestAmino;
                    encode(message: _65.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryClientStatusRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryClientStatusRequest>): _65.QueryClientStatusRequest;
                    fromAmino(object: _65.QueryClientStatusRequestAmino): _65.QueryClientStatusRequest;
                    toAmino(message: _65.QueryClientStatusRequest): _65.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _65.QueryClientStatusRequestAminoMsg): _65.QueryClientStatusRequest;
                    toAminoMsg(message: _65.QueryClientStatusRequest): _65.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryClientStatusRequestProtoMsg): _65.QueryClientStatusRequest;
                    toProto(message: _65.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryClientStatusRequest): _65.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryClientStatusResponse;
                    isSDK(o: any): o is _65.QueryClientStatusResponseSDKType;
                    isAmino(o: any): o is _65.QueryClientStatusResponseAmino;
                    encode(message: _65.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryClientStatusResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryClientStatusResponse>): _65.QueryClientStatusResponse;
                    fromAmino(object: _65.QueryClientStatusResponseAmino): _65.QueryClientStatusResponse;
                    toAmino(message: _65.QueryClientStatusResponse): _65.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _65.QueryClientStatusResponseAminoMsg): _65.QueryClientStatusResponse;
                    toAminoMsg(message: _65.QueryClientStatusResponse): _65.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryClientStatusResponseProtoMsg): _65.QueryClientStatusResponse;
                    toProto(message: _65.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryClientStatusResponse): _65.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryClientParamsRequest;
                    isSDK(o: any): o is _65.QueryClientParamsRequestSDKType;
                    isAmino(o: any): o is _65.QueryClientParamsRequestAmino;
                    encode(_: _65.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryClientParamsRequest;
                    fromPartial(_: import("../helpers").DeepPartial<_65.QueryClientParamsRequest>): _65.QueryClientParamsRequest;
                    fromAmino(_: _65.QueryClientParamsRequestAmino): _65.QueryClientParamsRequest;
                    toAmino(_: _65.QueryClientParamsRequest): _65.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _65.QueryClientParamsRequestAminoMsg): _65.QueryClientParamsRequest;
                    toAminoMsg(message: _65.QueryClientParamsRequest): _65.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryClientParamsRequestProtoMsg): _65.QueryClientParamsRequest;
                    toProto(message: _65.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryClientParamsRequest): _65.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryClientParamsResponse;
                    isSDK(o: any): o is _65.QueryClientParamsResponseSDKType;
                    isAmino(o: any): o is _65.QueryClientParamsResponseAmino;
                    encode(message: _65.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryClientParamsResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryClientParamsResponse>): _65.QueryClientParamsResponse;
                    fromAmino(object: _65.QueryClientParamsResponseAmino): _65.QueryClientParamsResponse;
                    toAmino(message: _65.QueryClientParamsResponse): _65.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _65.QueryClientParamsResponseAminoMsg): _65.QueryClientParamsResponse;
                    toAminoMsg(message: _65.QueryClientParamsResponse): _65.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryClientParamsResponseProtoMsg): _65.QueryClientParamsResponse;
                    toProto(message: _65.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryClientParamsResponse): _65.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryUpgradedClientStateRequest;
                    isSDK(o: any): o is _65.QueryUpgradedClientStateRequestSDKType;
                    isAmino(o: any): o is _65.QueryUpgradedClientStateRequestAmino;
                    encode(_: _65.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryUpgradedClientStateRequest;
                    fromPartial(_: import("../helpers").DeepPartial<_65.QueryUpgradedClientStateRequest>): _65.QueryUpgradedClientStateRequest;
                    fromAmino(_: _65.QueryUpgradedClientStateRequestAmino): _65.QueryUpgradedClientStateRequest;
                    toAmino(_: _65.QueryUpgradedClientStateRequest): _65.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _65.QueryUpgradedClientStateRequestAminoMsg): _65.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _65.QueryUpgradedClientStateRequest): _65.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryUpgradedClientStateRequestProtoMsg): _65.QueryUpgradedClientStateRequest;
                    toProto(message: _65.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryUpgradedClientStateRequest): _65.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryUpgradedClientStateResponse;
                    isSDK(o: any): o is _65.QueryUpgradedClientStateResponseSDKType;
                    isAmino(o: any): o is _65.QueryUpgradedClientStateResponseAmino;
                    encode(message: _65.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryUpgradedClientStateResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryUpgradedClientStateResponse>): _65.QueryUpgradedClientStateResponse;
                    fromAmino(object: _65.QueryUpgradedClientStateResponseAmino): _65.QueryUpgradedClientStateResponse;
                    toAmino(message: _65.QueryUpgradedClientStateResponse): _65.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _65.QueryUpgradedClientStateResponseAminoMsg): _65.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _65.QueryUpgradedClientStateResponse): _65.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryUpgradedClientStateResponseProtoMsg): _65.QueryUpgradedClientStateResponse;
                    toProto(message: _65.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryUpgradedClientStateResponse): _65.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryUpgradedConsensusStateRequest;
                    isSDK(o: any): o is _65.QueryUpgradedConsensusStateRequestSDKType;
                    isAmino(o: any): o is _65.QueryUpgradedConsensusStateRequestAmino;
                    encode(_: _65.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: import("../helpers").DeepPartial<_65.QueryUpgradedConsensusStateRequest>): _65.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _65.QueryUpgradedConsensusStateRequestAmino): _65.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _65.QueryUpgradedConsensusStateRequest): _65.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _65.QueryUpgradedConsensusStateRequestAminoMsg): _65.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _65.QueryUpgradedConsensusStateRequest): _65.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryUpgradedConsensusStateRequestProtoMsg): _65.QueryUpgradedConsensusStateRequest;
                    toProto(message: _65.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryUpgradedConsensusStateRequest): _65.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryUpgradedConsensusStateResponse;
                    isSDK(o: any): o is _65.QueryUpgradedConsensusStateResponseSDKType;
                    isAmino(o: any): o is _65.QueryUpgradedConsensusStateResponseAmino;
                    encode(message: _65.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_65.QueryUpgradedConsensusStateResponse>): _65.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _65.QueryUpgradedConsensusStateResponseAmino): _65.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _65.QueryUpgradedConsensusStateResponse): _65.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _65.QueryUpgradedConsensusStateResponseAminoMsg): _65.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _65.QueryUpgradedConsensusStateResponse): _65.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryUpgradedConsensusStateResponseProtoMsg): _65.QueryUpgradedConsensusStateResponse;
                    toProto(message: _65.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryUpgradedConsensusStateResponse): _65.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _64.GenesisState;
                    isSDK(o: any): o is _64.GenesisStateSDKType;
                    isAmino(o: any): o is _64.GenesisStateAmino;
                    encode(message: _64.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.GenesisState;
                    fromPartial(object: import("../helpers").DeepPartial<_64.GenesisState>): _64.GenesisState;
                    fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                    toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                    fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                    toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                    fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                    toProto(message: _64.GenesisState): Uint8Array;
                    toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _64.GenesisMetadata;
                    isSDK(o: any): o is _64.GenesisMetadataSDKType;
                    isAmino(o: any): o is _64.GenesisMetadataAmino;
                    encode(message: _64.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.GenesisMetadata;
                    fromPartial(object: import("../helpers").DeepPartial<_64.GenesisMetadata>): _64.GenesisMetadata;
                    fromAmino(object: _64.GenesisMetadataAmino): _64.GenesisMetadata;
                    toAmino(message: _64.GenesisMetadata): _64.GenesisMetadataAmino;
                    fromAminoMsg(object: _64.GenesisMetadataAminoMsg): _64.GenesisMetadata;
                    toAminoMsg(message: _64.GenesisMetadata): _64.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _64.GenesisMetadataProtoMsg): _64.GenesisMetadata;
                    toProto(message: _64.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _64.GenesisMetadata): _64.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _64.IdentifiedGenesisMetadata;
                    isSDK(o: any): o is _64.IdentifiedGenesisMetadataSDKType;
                    isAmino(o: any): o is _64.IdentifiedGenesisMetadataAmino;
                    encode(message: _64.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.IdentifiedGenesisMetadata;
                    fromPartial(object: import("../helpers").DeepPartial<_64.IdentifiedGenesisMetadata>): _64.IdentifiedGenesisMetadata;
                    fromAmino(object: _64.IdentifiedGenesisMetadataAmino): _64.IdentifiedGenesisMetadata;
                    toAmino(message: _64.IdentifiedGenesisMetadata): _64.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _64.IdentifiedGenesisMetadataAminoMsg): _64.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _64.IdentifiedGenesisMetadata): _64.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _64.IdentifiedGenesisMetadataProtoMsg): _64.IdentifiedGenesisMetadata;
                    toProto(message: _64.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _64.IdentifiedGenesisMetadata): _64.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.IdentifiedClientState;
                    isSDK(o: any): o is _63.IdentifiedClientStateSDKType;
                    isAmino(o: any): o is _63.IdentifiedClientStateAmino;
                    encode(message: _63.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.IdentifiedClientState;
                    fromPartial(object: import("../helpers").DeepPartial<_63.IdentifiedClientState>): _63.IdentifiedClientState;
                    fromAmino(object: _63.IdentifiedClientStateAmino): _63.IdentifiedClientState;
                    toAmino(message: _63.IdentifiedClientState): _63.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _63.IdentifiedClientStateAminoMsg): _63.IdentifiedClientState;
                    toAminoMsg(message: _63.IdentifiedClientState): _63.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _63.IdentifiedClientStateProtoMsg): _63.IdentifiedClientState;
                    toProto(message: _63.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _63.IdentifiedClientState): _63.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.ConsensusStateWithHeight;
                    isSDK(o: any): o is _63.ConsensusStateWithHeightSDKType;
                    isAmino(o: any): o is _63.ConsensusStateWithHeightAmino;
                    encode(message: _63.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.ConsensusStateWithHeight;
                    fromPartial(object: import("../helpers").DeepPartial<_63.ConsensusStateWithHeight>): _63.ConsensusStateWithHeight;
                    fromAmino(object: _63.ConsensusStateWithHeightAmino): _63.ConsensusStateWithHeight;
                    toAmino(message: _63.ConsensusStateWithHeight): _63.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _63.ConsensusStateWithHeightAminoMsg): _63.ConsensusStateWithHeight;
                    toAminoMsg(message: _63.ConsensusStateWithHeight): _63.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _63.ConsensusStateWithHeightProtoMsg): _63.ConsensusStateWithHeight;
                    toProto(message: _63.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _63.ConsensusStateWithHeight): _63.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.ClientConsensusStates;
                    isSDK(o: any): o is _63.ClientConsensusStatesSDKType;
                    isAmino(o: any): o is _63.ClientConsensusStatesAmino;
                    encode(message: _63.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.ClientConsensusStates;
                    fromPartial(object: import("../helpers").DeepPartial<_63.ClientConsensusStates>): _63.ClientConsensusStates;
                    fromAmino(object: _63.ClientConsensusStatesAmino): _63.ClientConsensusStates;
                    toAmino(message: _63.ClientConsensusStates): _63.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _63.ClientConsensusStatesAminoMsg): _63.ClientConsensusStates;
                    toAminoMsg(message: _63.ClientConsensusStates): _63.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _63.ClientConsensusStatesProtoMsg): _63.ClientConsensusStates;
                    toProto(message: _63.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _63.ClientConsensusStates): _63.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.ClientUpdateProposal;
                    isSDK(o: any): o is _63.ClientUpdateProposalSDKType;
                    isAmino(o: any): o is _63.ClientUpdateProposalAmino;
                    encode(message: _63.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.ClientUpdateProposal;
                    fromPartial(object: import("../helpers").DeepPartial<_63.ClientUpdateProposal>): _63.ClientUpdateProposal;
                    fromAmino(object: _63.ClientUpdateProposalAmino): _63.ClientUpdateProposal;
                    toAmino(message: _63.ClientUpdateProposal): _63.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _63.ClientUpdateProposalAminoMsg): _63.ClientUpdateProposal;
                    toAminoMsg(message: _63.ClientUpdateProposal): _63.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _63.ClientUpdateProposalProtoMsg): _63.ClientUpdateProposal;
                    toProto(message: _63.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _63.ClientUpdateProposal): _63.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.UpgradeProposal;
                    isSDK(o: any): o is _63.UpgradeProposalSDKType;
                    isAmino(o: any): o is _63.UpgradeProposalAmino;
                    encode(message: _63.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.UpgradeProposal;
                    fromPartial(object: import("../helpers").DeepPartial<_63.UpgradeProposal>): _63.UpgradeProposal;
                    fromAmino(object: _63.UpgradeProposalAmino): _63.UpgradeProposal;
                    toAmino(message: _63.UpgradeProposal): _63.UpgradeProposalAmino;
                    fromAminoMsg(object: _63.UpgradeProposalAminoMsg): _63.UpgradeProposal;
                    toAminoMsg(message: _63.UpgradeProposal): _63.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _63.UpgradeProposalProtoMsg): _63.UpgradeProposal;
                    toProto(message: _63.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _63.UpgradeProposal): _63.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.Height;
                    isSDK(o: any): o is _63.HeightSDKType;
                    isAmino(o: any): o is _63.HeightAmino;
                    encode(message: _63.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.Height;
                    fromPartial(object: import("../helpers").DeepPartial<_63.Height>): _63.Height;
                    fromAmino(object: _63.HeightAmino): _63.Height;
                    toAmino(message: _63.Height): _63.HeightAmino;
                    fromAminoMsg(object: _63.HeightAminoMsg): _63.Height;
                    toAminoMsg(message: _63.Height): _63.HeightAminoMsg;
                    fromProtoMsg(message: _63.HeightProtoMsg): _63.Height;
                    toProto(message: _63.Height): Uint8Array;
                    toProtoMsg(message: _63.Height): _63.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.Params;
                    isSDK(o: any): o is _63.ParamsSDKType;
                    isAmino(o: any): o is _63.ParamsAmino;
                    encode(message: _63.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.Params;
                    fromPartial(object: import("../helpers").DeepPartial<_63.Params>): _63.Params;
                    fromAmino(object: _63.ParamsAmino): _63.Params;
                    toAmino(message: _63.Params): _63.ParamsAmino;
                    fromAminoMsg(object: _63.ParamsAminoMsg): _63.Params;
                    toAminoMsg(message: _63.Params): _63.ParamsAminoMsg;
                    fromProtoMsg(message: _63.ParamsProtoMsg): _63.Params;
                    toProto(message: _63.Params): Uint8Array;
                    toProtoMsg(message: _63.Params): _63.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.MerkleRoot;
                    isSDK(o: any): o is _67.MerkleRootSDKType;
                    isAmino(o: any): o is _67.MerkleRootAmino;
                    encode(message: _67.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MerkleRoot;
                    fromPartial(object: import("../helpers").DeepPartial<_67.MerkleRoot>): _67.MerkleRoot;
                    fromAmino(object: _67.MerkleRootAmino): _67.MerkleRoot;
                    toAmino(message: _67.MerkleRoot): _67.MerkleRootAmino;
                    fromAminoMsg(object: _67.MerkleRootAminoMsg): _67.MerkleRoot;
                    toAminoMsg(message: _67.MerkleRoot): _67.MerkleRootAminoMsg;
                    fromProtoMsg(message: _67.MerkleRootProtoMsg): _67.MerkleRoot;
                    toProto(message: _67.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _67.MerkleRoot): _67.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.MerklePrefix;
                    isSDK(o: any): o is _67.MerklePrefixSDKType;
                    isAmino(o: any): o is _67.MerklePrefixAmino;
                    encode(message: _67.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MerklePrefix;
                    fromPartial(object: import("../helpers").DeepPartial<_67.MerklePrefix>): _67.MerklePrefix;
                    fromAmino(object: _67.MerklePrefixAmino): _67.MerklePrefix;
                    toAmino(message: _67.MerklePrefix): _67.MerklePrefixAmino;
                    fromAminoMsg(object: _67.MerklePrefixAminoMsg): _67.MerklePrefix;
                    toAminoMsg(message: _67.MerklePrefix): _67.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _67.MerklePrefixProtoMsg): _67.MerklePrefix;
                    toProto(message: _67.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _67.MerklePrefix): _67.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.MerklePath;
                    isSDK(o: any): o is _67.MerklePathSDKType;
                    isAmino(o: any): o is _67.MerklePathAmino;
                    encode(message: _67.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MerklePath;
                    fromPartial(object: import("../helpers").DeepPartial<_67.MerklePath>): _67.MerklePath;
                    fromAmino(object: _67.MerklePathAmino): _67.MerklePath;
                    toAmino(message: _67.MerklePath): _67.MerklePathAmino;
                    fromAminoMsg(object: _67.MerklePathAminoMsg): _67.MerklePath;
                    toAminoMsg(message: _67.MerklePath): _67.MerklePathAminoMsg;
                    fromProtoMsg(message: _67.MerklePathProtoMsg): _67.MerklePath;
                    toProto(message: _67.MerklePath): Uint8Array;
                    toProtoMsg(message: _67.MerklePath): _67.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.MerkleProof;
                    isSDK(o: any): o is _67.MerkleProofSDKType;
                    isAmino(o: any): o is _67.MerkleProofAmino;
                    encode(message: _67.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MerkleProof;
                    fromPartial(object: import("../helpers").DeepPartial<_67.MerkleProof>): _67.MerkleProof;
                    fromAmino(object: _67.MerkleProofAmino): _67.MerkleProof;
                    toAmino(message: _67.MerkleProof): _67.MerkleProofAmino;
                    fromAminoMsg(object: _67.MerkleProofAminoMsg): _67.MerkleProof;
                    toAminoMsg(message: _67.MerkleProof): _67.MerkleProofAminoMsg;
                    fromProtoMsg(message: _67.MerkleProofProtoMsg): _67.MerkleProof;
                    toProto(message: _67.MerkleProof): Uint8Array;
                    toProtoMsg(message: _67.MerkleProof): _67.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _148.MsgClientImpl;
                createClientImpl: (rpc: import("../helpers").Rpc) => _148.MsgClientImpl;
                QueryClientImpl: typeof _144.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _70.QueryConnectionRequest): Promise<_70.QueryConnectionResponse>;
                    connections(request?: _70.QueryConnectionsRequest): Promise<_70.QueryConnectionsResponse>;
                    clientConnections(request: _70.QueryClientConnectionsRequest): Promise<_70.QueryClientConnectionsResponse>;
                    connectionClientState(request: _70.QueryConnectionClientStateRequest): Promise<_70.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _70.QueryConnectionConsensusStateRequest): Promise<_70.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _140.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _71.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenTry(value: _71.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenAck(value: _71.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenConfirm(value: _71.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _71.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _71.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _71.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _71.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _71.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _71.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _71.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _71.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _71.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _71.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _71.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _71.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _71.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _71.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _71.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _71.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _71.MsgConnectionOpenInit) => _71.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _71.MsgConnectionOpenInitAmino) => _71.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _71.MsgConnectionOpenTry) => _71.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _71.MsgConnectionOpenTryAmino) => _71.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _71.MsgConnectionOpenAck) => _71.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _71.MsgConnectionOpenAckAmino) => _71.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _71.MsgConnectionOpenConfirm) => _71.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _71.MsgConnectionOpenConfirmAmino) => _71.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MsgConnectionOpenInit;
                    isSDK(o: any): o is _71.MsgConnectionOpenInitSDKType;
                    isAmino(o: any): o is _71.MsgConnectionOpenInitAmino;
                    encode(message: _71.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgConnectionOpenInit;
                    fromPartial(object: import("../helpers").DeepPartial<_71.MsgConnectionOpenInit>): _71.MsgConnectionOpenInit;
                    fromAmino(object: _71.MsgConnectionOpenInitAmino): _71.MsgConnectionOpenInit;
                    toAmino(message: _71.MsgConnectionOpenInit): _71.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _71.MsgConnectionOpenInitAminoMsg): _71.MsgConnectionOpenInit;
                    toAminoMsg(message: _71.MsgConnectionOpenInit): _71.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _71.MsgConnectionOpenInitProtoMsg): _71.MsgConnectionOpenInit;
                    toProto(message: _71.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _71.MsgConnectionOpenInit): _71.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MsgConnectionOpenInitResponse;
                    isSDK(o: any): o is _71.MsgConnectionOpenInitResponseSDKType;
                    isAmino(o: any): o is _71.MsgConnectionOpenInitResponseAmino;
                    encode(_: _71.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgConnectionOpenInitResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_71.MsgConnectionOpenInitResponse>): _71.MsgConnectionOpenInitResponse;
                    fromAmino(_: _71.MsgConnectionOpenInitResponseAmino): _71.MsgConnectionOpenInitResponse;
                    toAmino(_: _71.MsgConnectionOpenInitResponse): _71.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _71.MsgConnectionOpenInitResponseAminoMsg): _71.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _71.MsgConnectionOpenInitResponse): _71.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgConnectionOpenInitResponseProtoMsg): _71.MsgConnectionOpenInitResponse;
                    toProto(message: _71.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgConnectionOpenInitResponse): _71.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MsgConnectionOpenTry;
                    isSDK(o: any): o is _71.MsgConnectionOpenTrySDKType;
                    isAmino(o: any): o is _71.MsgConnectionOpenTryAmino;
                    encode(message: _71.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgConnectionOpenTry;
                    fromPartial(object: import("../helpers").DeepPartial<_71.MsgConnectionOpenTry>): _71.MsgConnectionOpenTry;
                    fromAmino(object: _71.MsgConnectionOpenTryAmino): _71.MsgConnectionOpenTry;
                    toAmino(message: _71.MsgConnectionOpenTry): _71.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _71.MsgConnectionOpenTryAminoMsg): _71.MsgConnectionOpenTry;
                    toAminoMsg(message: _71.MsgConnectionOpenTry): _71.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _71.MsgConnectionOpenTryProtoMsg): _71.MsgConnectionOpenTry;
                    toProto(message: _71.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _71.MsgConnectionOpenTry): _71.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MsgConnectionOpenTryResponse;
                    isSDK(o: any): o is _71.MsgConnectionOpenTryResponseSDKType;
                    isAmino(o: any): o is _71.MsgConnectionOpenTryResponseAmino;
                    encode(_: _71.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgConnectionOpenTryResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_71.MsgConnectionOpenTryResponse>): _71.MsgConnectionOpenTryResponse;
                    fromAmino(_: _71.MsgConnectionOpenTryResponseAmino): _71.MsgConnectionOpenTryResponse;
                    toAmino(_: _71.MsgConnectionOpenTryResponse): _71.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _71.MsgConnectionOpenTryResponseAminoMsg): _71.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _71.MsgConnectionOpenTryResponse): _71.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgConnectionOpenTryResponseProtoMsg): _71.MsgConnectionOpenTryResponse;
                    toProto(message: _71.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgConnectionOpenTryResponse): _71.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MsgConnectionOpenAck;
                    isSDK(o: any): o is _71.MsgConnectionOpenAckSDKType;
                    isAmino(o: any): o is _71.MsgConnectionOpenAckAmino;
                    encode(message: _71.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgConnectionOpenAck;
                    fromPartial(object: import("../helpers").DeepPartial<_71.MsgConnectionOpenAck>): _71.MsgConnectionOpenAck;
                    fromAmino(object: _71.MsgConnectionOpenAckAmino): _71.MsgConnectionOpenAck;
                    toAmino(message: _71.MsgConnectionOpenAck): _71.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _71.MsgConnectionOpenAckAminoMsg): _71.MsgConnectionOpenAck;
                    toAminoMsg(message: _71.MsgConnectionOpenAck): _71.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _71.MsgConnectionOpenAckProtoMsg): _71.MsgConnectionOpenAck;
                    toProto(message: _71.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _71.MsgConnectionOpenAck): _71.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MsgConnectionOpenAckResponse;
                    isSDK(o: any): o is _71.MsgConnectionOpenAckResponseSDKType;
                    isAmino(o: any): o is _71.MsgConnectionOpenAckResponseAmino;
                    encode(_: _71.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgConnectionOpenAckResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_71.MsgConnectionOpenAckResponse>): _71.MsgConnectionOpenAckResponse;
                    fromAmino(_: _71.MsgConnectionOpenAckResponseAmino): _71.MsgConnectionOpenAckResponse;
                    toAmino(_: _71.MsgConnectionOpenAckResponse): _71.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _71.MsgConnectionOpenAckResponseAminoMsg): _71.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _71.MsgConnectionOpenAckResponse): _71.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgConnectionOpenAckResponseProtoMsg): _71.MsgConnectionOpenAckResponse;
                    toProto(message: _71.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgConnectionOpenAckResponse): _71.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MsgConnectionOpenConfirm;
                    isSDK(o: any): o is _71.MsgConnectionOpenConfirmSDKType;
                    isAmino(o: any): o is _71.MsgConnectionOpenConfirmAmino;
                    encode(message: _71.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgConnectionOpenConfirm;
                    fromPartial(object: import("../helpers").DeepPartial<_71.MsgConnectionOpenConfirm>): _71.MsgConnectionOpenConfirm;
                    fromAmino(object: _71.MsgConnectionOpenConfirmAmino): _71.MsgConnectionOpenConfirm;
                    toAmino(message: _71.MsgConnectionOpenConfirm): _71.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _71.MsgConnectionOpenConfirmAminoMsg): _71.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _71.MsgConnectionOpenConfirm): _71.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _71.MsgConnectionOpenConfirmProtoMsg): _71.MsgConnectionOpenConfirm;
                    toProto(message: _71.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _71.MsgConnectionOpenConfirm): _71.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MsgConnectionOpenConfirmResponse;
                    isSDK(o: any): o is _71.MsgConnectionOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _71.MsgConnectionOpenConfirmResponseAmino;
                    encode(_: _71.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: import("../helpers").DeepPartial<_71.MsgConnectionOpenConfirmResponse>): _71.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _71.MsgConnectionOpenConfirmResponseAmino): _71.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _71.MsgConnectionOpenConfirmResponse): _71.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _71.MsgConnectionOpenConfirmResponseAminoMsg): _71.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _71.MsgConnectionOpenConfirmResponse): _71.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgConnectionOpenConfirmResponseProtoMsg): _71.MsgConnectionOpenConfirmResponse;
                    toProto(message: _71.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgConnectionOpenConfirmResponse): _71.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.QueryConnectionRequest;
                    isSDK(o: any): o is _70.QueryConnectionRequestSDKType;
                    isAmino(o: any): o is _70.QueryConnectionRequestAmino;
                    encode(message: _70.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryConnectionRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_70.QueryConnectionRequest>): _70.QueryConnectionRequest;
                    fromAmino(object: _70.QueryConnectionRequestAmino): _70.QueryConnectionRequest;
                    toAmino(message: _70.QueryConnectionRequest): _70.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _70.QueryConnectionRequestAminoMsg): _70.QueryConnectionRequest;
                    toAminoMsg(message: _70.QueryConnectionRequest): _70.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryConnectionRequestProtoMsg): _70.QueryConnectionRequest;
                    toProto(message: _70.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryConnectionRequest): _70.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.QueryConnectionResponse;
                    isSDK(o: any): o is _70.QueryConnectionResponseSDKType;
                    isAmino(o: any): o is _70.QueryConnectionResponseAmino;
                    encode(message: _70.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryConnectionResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_70.QueryConnectionResponse>): _70.QueryConnectionResponse;
                    fromAmino(object: _70.QueryConnectionResponseAmino): _70.QueryConnectionResponse;
                    toAmino(message: _70.QueryConnectionResponse): _70.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _70.QueryConnectionResponseAminoMsg): _70.QueryConnectionResponse;
                    toAminoMsg(message: _70.QueryConnectionResponse): _70.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryConnectionResponseProtoMsg): _70.QueryConnectionResponse;
                    toProto(message: _70.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryConnectionResponse): _70.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.QueryConnectionsRequest;
                    isSDK(o: any): o is _70.QueryConnectionsRequestSDKType;
                    isAmino(o: any): o is _70.QueryConnectionsRequestAmino;
                    encode(message: _70.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryConnectionsRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_70.QueryConnectionsRequest>): _70.QueryConnectionsRequest;
                    fromAmino(object: _70.QueryConnectionsRequestAmino): _70.QueryConnectionsRequest;
                    toAmino(message: _70.QueryConnectionsRequest): _70.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _70.QueryConnectionsRequestAminoMsg): _70.QueryConnectionsRequest;
                    toAminoMsg(message: _70.QueryConnectionsRequest): _70.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryConnectionsRequestProtoMsg): _70.QueryConnectionsRequest;
                    toProto(message: _70.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryConnectionsRequest): _70.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.QueryConnectionsResponse;
                    isSDK(o: any): o is _70.QueryConnectionsResponseSDKType;
                    isAmino(o: any): o is _70.QueryConnectionsResponseAmino;
                    encode(message: _70.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryConnectionsResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_70.QueryConnectionsResponse>): _70.QueryConnectionsResponse;
                    fromAmino(object: _70.QueryConnectionsResponseAmino): _70.QueryConnectionsResponse;
                    toAmino(message: _70.QueryConnectionsResponse): _70.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _70.QueryConnectionsResponseAminoMsg): _70.QueryConnectionsResponse;
                    toAminoMsg(message: _70.QueryConnectionsResponse): _70.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryConnectionsResponseProtoMsg): _70.QueryConnectionsResponse;
                    toProto(message: _70.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryConnectionsResponse): _70.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.QueryClientConnectionsRequest;
                    isSDK(o: any): o is _70.QueryClientConnectionsRequestSDKType;
                    isAmino(o: any): o is _70.QueryClientConnectionsRequestAmino;
                    encode(message: _70.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryClientConnectionsRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_70.QueryClientConnectionsRequest>): _70.QueryClientConnectionsRequest;
                    fromAmino(object: _70.QueryClientConnectionsRequestAmino): _70.QueryClientConnectionsRequest;
                    toAmino(message: _70.QueryClientConnectionsRequest): _70.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _70.QueryClientConnectionsRequestAminoMsg): _70.QueryClientConnectionsRequest;
                    toAminoMsg(message: _70.QueryClientConnectionsRequest): _70.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryClientConnectionsRequestProtoMsg): _70.QueryClientConnectionsRequest;
                    toProto(message: _70.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryClientConnectionsRequest): _70.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.QueryClientConnectionsResponse;
                    isSDK(o: any): o is _70.QueryClientConnectionsResponseSDKType;
                    isAmino(o: any): o is _70.QueryClientConnectionsResponseAmino;
                    encode(message: _70.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryClientConnectionsResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_70.QueryClientConnectionsResponse>): _70.QueryClientConnectionsResponse;
                    fromAmino(object: _70.QueryClientConnectionsResponseAmino): _70.QueryClientConnectionsResponse;
                    toAmino(message: _70.QueryClientConnectionsResponse): _70.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _70.QueryClientConnectionsResponseAminoMsg): _70.QueryClientConnectionsResponse;
                    toAminoMsg(message: _70.QueryClientConnectionsResponse): _70.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryClientConnectionsResponseProtoMsg): _70.QueryClientConnectionsResponse;
                    toProto(message: _70.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryClientConnectionsResponse): _70.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.QueryConnectionClientStateRequest;
                    isSDK(o: any): o is _70.QueryConnectionClientStateRequestSDKType;
                    isAmino(o: any): o is _70.QueryConnectionClientStateRequestAmino;
                    encode(message: _70.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryConnectionClientStateRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_70.QueryConnectionClientStateRequest>): _70.QueryConnectionClientStateRequest;
                    fromAmino(object: _70.QueryConnectionClientStateRequestAmino): _70.QueryConnectionClientStateRequest;
                    toAmino(message: _70.QueryConnectionClientStateRequest): _70.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _70.QueryConnectionClientStateRequestAminoMsg): _70.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _70.QueryConnectionClientStateRequest): _70.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryConnectionClientStateRequestProtoMsg): _70.QueryConnectionClientStateRequest;
                    toProto(message: _70.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryConnectionClientStateRequest): _70.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.QueryConnectionClientStateResponse;
                    isSDK(o: any): o is _70.QueryConnectionClientStateResponseSDKType;
                    isAmino(o: any): o is _70.QueryConnectionClientStateResponseAmino;
                    encode(message: _70.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryConnectionClientStateResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_70.QueryConnectionClientStateResponse>): _70.QueryConnectionClientStateResponse;
                    fromAmino(object: _70.QueryConnectionClientStateResponseAmino): _70.QueryConnectionClientStateResponse;
                    toAmino(message: _70.QueryConnectionClientStateResponse): _70.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _70.QueryConnectionClientStateResponseAminoMsg): _70.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _70.QueryConnectionClientStateResponse): _70.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryConnectionClientStateResponseProtoMsg): _70.QueryConnectionClientStateResponse;
                    toProto(message: _70.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryConnectionClientStateResponse): _70.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.QueryConnectionConsensusStateRequest;
                    isSDK(o: any): o is _70.QueryConnectionConsensusStateRequestSDKType;
                    isAmino(o: any): o is _70.QueryConnectionConsensusStateRequestAmino;
                    encode(message: _70.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryConnectionConsensusStateRequest;
                    fromPartial(object: import("../helpers").DeepPartial<_70.QueryConnectionConsensusStateRequest>): _70.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _70.QueryConnectionConsensusStateRequestAmino): _70.QueryConnectionConsensusStateRequest;
                    toAmino(message: _70.QueryConnectionConsensusStateRequest): _70.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _70.QueryConnectionConsensusStateRequestAminoMsg): _70.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _70.QueryConnectionConsensusStateRequest): _70.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryConnectionConsensusStateRequestProtoMsg): _70.QueryConnectionConsensusStateRequest;
                    toProto(message: _70.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryConnectionConsensusStateRequest): _70.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.QueryConnectionConsensusStateResponse;
                    isSDK(o: any): o is _70.QueryConnectionConsensusStateResponseSDKType;
                    isAmino(o: any): o is _70.QueryConnectionConsensusStateResponseAmino;
                    encode(message: _70.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryConnectionConsensusStateResponse;
                    fromPartial(object: import("../helpers").DeepPartial<_70.QueryConnectionConsensusStateResponse>): _70.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _70.QueryConnectionConsensusStateResponseAmino): _70.QueryConnectionConsensusStateResponse;
                    toAmino(message: _70.QueryConnectionConsensusStateResponse): _70.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _70.QueryConnectionConsensusStateResponseAminoMsg): _70.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _70.QueryConnectionConsensusStateResponse): _70.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryConnectionConsensusStateResponseProtoMsg): _70.QueryConnectionConsensusStateResponse;
                    toProto(message: _70.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryConnectionConsensusStateResponse): _70.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.GenesisState;
                    isSDK(o: any): o is _69.GenesisStateSDKType;
                    isAmino(o: any): o is _69.GenesisStateAmino;
                    encode(message: _69.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.GenesisState;
                    fromPartial(object: import("../helpers").DeepPartial<_69.GenesisState>): _69.GenesisState;
                    fromAmino(object: _69.GenesisStateAmino): _69.GenesisState;
                    toAmino(message: _69.GenesisState): _69.GenesisStateAmino;
                    fromAminoMsg(object: _69.GenesisStateAminoMsg): _69.GenesisState;
                    toAminoMsg(message: _69.GenesisState): _69.GenesisStateAminoMsg;
                    fromProtoMsg(message: _69.GenesisStateProtoMsg): _69.GenesisState;
                    toProto(message: _69.GenesisState): Uint8Array;
                    toProtoMsg(message: _69.GenesisState): _69.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _68.State;
                stateToJSON(object: _68.State): string;
                State: typeof _68.State;
                StateSDKType: typeof _68.State;
                StateAmino: typeof _68.State;
                ConnectionEnd: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.ConnectionEnd;
                    isSDK(o: any): o is _68.ConnectionEndSDKType;
                    isAmino(o: any): o is _68.ConnectionEndAmino;
                    encode(message: _68.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.ConnectionEnd;
                    fromPartial(object: import("../helpers").DeepPartial<_68.ConnectionEnd>): _68.ConnectionEnd;
                    fromAmino(object: _68.ConnectionEndAmino): _68.ConnectionEnd;
                    toAmino(message: _68.ConnectionEnd): _68.ConnectionEndAmino;
                    fromAminoMsg(object: _68.ConnectionEndAminoMsg): _68.ConnectionEnd;
                    toAminoMsg(message: _68.ConnectionEnd): _68.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _68.ConnectionEndProtoMsg): _68.ConnectionEnd;
                    toProto(message: _68.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _68.ConnectionEnd): _68.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.IdentifiedConnection;
                    isSDK(o: any): o is _68.IdentifiedConnectionSDKType;
                    isAmino(o: any): o is _68.IdentifiedConnectionAmino;
                    encode(message: _68.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.IdentifiedConnection;
                    fromPartial(object: import("../helpers").DeepPartial<_68.IdentifiedConnection>): _68.IdentifiedConnection;
                    fromAmino(object: _68.IdentifiedConnectionAmino): _68.IdentifiedConnection;
                    toAmino(message: _68.IdentifiedConnection): _68.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _68.IdentifiedConnectionAminoMsg): _68.IdentifiedConnection;
                    toAminoMsg(message: _68.IdentifiedConnection): _68.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _68.IdentifiedConnectionProtoMsg): _68.IdentifiedConnection;
                    toProto(message: _68.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _68.IdentifiedConnection): _68.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.Counterparty;
                    isSDK(o: any): o is _68.CounterpartySDKType;
                    isAmino(o: any): o is _68.CounterpartyAmino;
                    encode(message: _68.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.Counterparty;
                    fromPartial(object: import("../helpers").DeepPartial<_68.Counterparty>): _68.Counterparty;
                    fromAmino(object: _68.CounterpartyAmino): _68.Counterparty;
                    toAmino(message: _68.Counterparty): _68.CounterpartyAmino;
                    fromAminoMsg(object: _68.CounterpartyAminoMsg): _68.Counterparty;
                    toAminoMsg(message: _68.Counterparty): _68.CounterpartyAminoMsg;
                    fromProtoMsg(message: _68.CounterpartyProtoMsg): _68.Counterparty;
                    toProto(message: _68.Counterparty): Uint8Array;
                    toProtoMsg(message: _68.Counterparty): _68.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.ClientPaths;
                    isSDK(o: any): o is _68.ClientPathsSDKType;
                    isAmino(o: any): o is _68.ClientPathsAmino;
                    encode(message: _68.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.ClientPaths;
                    fromPartial(object: import("../helpers").DeepPartial<_68.ClientPaths>): _68.ClientPaths;
                    fromAmino(object: _68.ClientPathsAmino): _68.ClientPaths;
                    toAmino(message: _68.ClientPaths): _68.ClientPathsAmino;
                    fromAminoMsg(object: _68.ClientPathsAminoMsg): _68.ClientPaths;
                    toAminoMsg(message: _68.ClientPaths): _68.ClientPathsAminoMsg;
                    fromProtoMsg(message: _68.ClientPathsProtoMsg): _68.ClientPaths;
                    toProto(message: _68.ClientPaths): Uint8Array;
                    toProtoMsg(message: _68.ClientPaths): _68.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.ConnectionPaths;
                    isSDK(o: any): o is _68.ConnectionPathsSDKType;
                    isAmino(o: any): o is _68.ConnectionPathsAmino;
                    encode(message: _68.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.ConnectionPaths;
                    fromPartial(object: import("../helpers").DeepPartial<_68.ConnectionPaths>): _68.ConnectionPaths;
                    fromAmino(object: _68.ConnectionPathsAmino): _68.ConnectionPaths;
                    toAmino(message: _68.ConnectionPaths): _68.ConnectionPathsAmino;
                    fromAminoMsg(object: _68.ConnectionPathsAminoMsg): _68.ConnectionPaths;
                    toAminoMsg(message: _68.ConnectionPaths): _68.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _68.ConnectionPathsProtoMsg): _68.ConnectionPaths;
                    toProto(message: _68.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _68.ConnectionPaths): _68.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.Version;
                    isSDK(o: any): o is _68.VersionSDKType;
                    isAmino(o: any): o is _68.VersionAmino;
                    encode(message: _68.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.Version;
                    fromPartial(object: import("../helpers").DeepPartial<_68.Version>): _68.Version;
                    fromAmino(object: _68.VersionAmino): _68.Version;
                    toAmino(message: _68.Version): _68.VersionAmino;
                    fromAminoMsg(object: _68.VersionAminoMsg): _68.Version;
                    toAminoMsg(message: _68.Version): _68.VersionAminoMsg;
                    fromProtoMsg(message: _68.VersionProtoMsg): _68.Version;
                    toProto(message: _68.Version): Uint8Array;
                    toProtoMsg(message: _68.Version): _68.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.Params;
                    isSDK(o: any): o is _68.ParamsSDKType;
                    isAmino(o: any): o is _68.ParamsAmino;
                    encode(message: _68.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.Params;
                    fromPartial(object: import("../helpers").DeepPartial<_68.Params>): _68.Params;
                    fromAmino(object: _68.ParamsAmino): _68.Params;
                    toAmino(message: _68.Params): _68.ParamsAmino;
                    fromAminoMsg(object: _68.ParamsAminoMsg): _68.Params;
                    toAminoMsg(message: _68.Params): _68.ParamsAminoMsg;
                    fromProtoMsg(message: _68.ParamsProtoMsg): _68.Params;
                    toProto(message: _68.Params): Uint8Array;
                    toProtoMsg(message: _68.Params): _68.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.ClientState;
                    isSDK(o: any): o is _72.ClientStateSDKType;
                    isAmino(o: any): o is _72.ClientStateAmino;
                    encode(message: _72.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.ClientState;
                    fromPartial(object: import("../helpers").DeepPartial<_72.ClientState>): _72.ClientState;
                    fromAmino(object: _72.ClientStateAmino): _72.ClientState;
                    toAmino(message: _72.ClientState): _72.ClientStateAmino;
                    fromAminoMsg(object: _72.ClientStateAminoMsg): _72.ClientState;
                    toAminoMsg(message: _72.ClientState): _72.ClientStateAminoMsg;
                    fromProtoMsg(message: _72.ClientStateProtoMsg): _72.ClientState;
                    toProto(message: _72.ClientState): Uint8Array;
                    toProtoMsg(message: _72.ClientState): _72.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _73.DataType;
                dataTypeToJSON(object: _73.DataType): string;
                DataType: typeof _73.DataType;
                DataTypeSDKType: typeof _73.DataType;
                DataTypeAmino: typeof _73.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.ClientState;
                    isSDK(o: any): o is _73.ClientStateSDKType;
                    isAmino(o: any): o is _73.ClientStateAmino;
                    encode(message: _73.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.ClientState;
                    fromPartial(object: import("../helpers").DeepPartial<_73.ClientState>): _73.ClientState;
                    fromAmino(object: _73.ClientStateAmino): _73.ClientState;
                    toAmino(message: _73.ClientState): _73.ClientStateAmino;
                    fromAminoMsg(object: _73.ClientStateAminoMsg): _73.ClientState;
                    toAminoMsg(message: _73.ClientState): _73.ClientStateAminoMsg;
                    fromProtoMsg(message: _73.ClientStateProtoMsg): _73.ClientState;
                    toProto(message: _73.ClientState): Uint8Array;
                    toProtoMsg(message: _73.ClientState): _73.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.ConsensusState;
                    isSDK(o: any): o is _73.ConsensusStateSDKType;
                    isAmino(o: any): o is _73.ConsensusStateAmino;
                    encode(message: _73.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.ConsensusState;
                    fromPartial(object: import("../helpers").DeepPartial<_73.ConsensusState>): _73.ConsensusState;
                    fromAmino(object: _73.ConsensusStateAmino): _73.ConsensusState;
                    toAmino(message: _73.ConsensusState): _73.ConsensusStateAmino;
                    fromAminoMsg(object: _73.ConsensusStateAminoMsg): _73.ConsensusState;
                    toAminoMsg(message: _73.ConsensusState): _73.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _73.ConsensusStateProtoMsg): _73.ConsensusState;
                    toProto(message: _73.ConsensusState): Uint8Array;
                    toProtoMsg(message: _73.ConsensusState): _73.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.Header;
                    isSDK(o: any): o is _73.HeaderSDKType;
                    isAmino(o: any): o is _73.HeaderAmino;
                    encode(message: _73.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.Header;
                    fromPartial(object: import("../helpers").DeepPartial<_73.Header>): _73.Header;
                    fromAmino(object: _73.HeaderAmino): _73.Header;
                    toAmino(message: _73.Header): _73.HeaderAmino;
                    fromAminoMsg(object: _73.HeaderAminoMsg): _73.Header;
                    toAminoMsg(message: _73.Header): _73.HeaderAminoMsg;
                    fromProtoMsg(message: _73.HeaderProtoMsg): _73.Header;
                    toProto(message: _73.Header): Uint8Array;
                    toProtoMsg(message: _73.Header): _73.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.Misbehaviour;
                    isSDK(o: any): o is _73.MisbehaviourSDKType;
                    isAmino(o: any): o is _73.MisbehaviourAmino;
                    encode(message: _73.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.Misbehaviour;
                    fromPartial(object: import("../helpers").DeepPartial<_73.Misbehaviour>): _73.Misbehaviour;
                    fromAmino(object: _73.MisbehaviourAmino): _73.Misbehaviour;
                    toAmino(message: _73.Misbehaviour): _73.MisbehaviourAmino;
                    fromAminoMsg(object: _73.MisbehaviourAminoMsg): _73.Misbehaviour;
                    toAminoMsg(message: _73.Misbehaviour): _73.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _73.MisbehaviourProtoMsg): _73.Misbehaviour;
                    toProto(message: _73.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _73.Misbehaviour): _73.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.SignatureAndData;
                    isSDK(o: any): o is _73.SignatureAndDataSDKType;
                    isAmino(o: any): o is _73.SignatureAndDataAmino;
                    encode(message: _73.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.SignatureAndData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.SignatureAndData>): _73.SignatureAndData;
                    fromAmino(object: _73.SignatureAndDataAmino): _73.SignatureAndData;
                    toAmino(message: _73.SignatureAndData): _73.SignatureAndDataAmino;
                    fromAminoMsg(object: _73.SignatureAndDataAminoMsg): _73.SignatureAndData;
                    toAminoMsg(message: _73.SignatureAndData): _73.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _73.SignatureAndDataProtoMsg): _73.SignatureAndData;
                    toProto(message: _73.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _73.SignatureAndData): _73.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.TimestampedSignatureData;
                    isSDK(o: any): o is _73.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _73.TimestampedSignatureDataAmino;
                    encode(message: _73.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.TimestampedSignatureData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.TimestampedSignatureData>): _73.TimestampedSignatureData;
                    fromAmino(object: _73.TimestampedSignatureDataAmino): _73.TimestampedSignatureData;
                    toAmino(message: _73.TimestampedSignatureData): _73.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _73.TimestampedSignatureDataAminoMsg): _73.TimestampedSignatureData;
                    toAminoMsg(message: _73.TimestampedSignatureData): _73.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _73.TimestampedSignatureDataProtoMsg): _73.TimestampedSignatureData;
                    toProto(message: _73.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _73.TimestampedSignatureData): _73.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.SignBytes;
                    isSDK(o: any): o is _73.SignBytesSDKType;
                    isAmino(o: any): o is _73.SignBytesAmino;
                    encode(message: _73.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.SignBytes;
                    fromPartial(object: import("../helpers").DeepPartial<_73.SignBytes>): _73.SignBytes;
                    fromAmino(object: _73.SignBytesAmino): _73.SignBytes;
                    toAmino(message: _73.SignBytes): _73.SignBytesAmino;
                    fromAminoMsg(object: _73.SignBytesAminoMsg): _73.SignBytes;
                    toAminoMsg(message: _73.SignBytes): _73.SignBytesAminoMsg;
                    fromProtoMsg(message: _73.SignBytesProtoMsg): _73.SignBytes;
                    toProto(message: _73.SignBytes): Uint8Array;
                    toProtoMsg(message: _73.SignBytes): _73.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.HeaderData;
                    isSDK(o: any): o is _73.HeaderDataSDKType;
                    isAmino(o: any): o is _73.HeaderDataAmino;
                    encode(message: _73.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.HeaderData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.HeaderData>): _73.HeaderData;
                    fromAmino(object: _73.HeaderDataAmino): _73.HeaderData;
                    toAmino(message: _73.HeaderData): _73.HeaderDataAmino;
                    fromAminoMsg(object: _73.HeaderDataAminoMsg): _73.HeaderData;
                    toAminoMsg(message: _73.HeaderData): _73.HeaderDataAminoMsg;
                    fromProtoMsg(message: _73.HeaderDataProtoMsg): _73.HeaderData;
                    toProto(message: _73.HeaderData): Uint8Array;
                    toProtoMsg(message: _73.HeaderData): _73.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.ClientStateData;
                    isSDK(o: any): o is _73.ClientStateDataSDKType;
                    isAmino(o: any): o is _73.ClientStateDataAmino;
                    encode(message: _73.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.ClientStateData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.ClientStateData>): _73.ClientStateData;
                    fromAmino(object: _73.ClientStateDataAmino): _73.ClientStateData;
                    toAmino(message: _73.ClientStateData): _73.ClientStateDataAmino;
                    fromAminoMsg(object: _73.ClientStateDataAminoMsg): _73.ClientStateData;
                    toAminoMsg(message: _73.ClientStateData): _73.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _73.ClientStateDataProtoMsg): _73.ClientStateData;
                    toProto(message: _73.ClientStateData): Uint8Array;
                    toProtoMsg(message: _73.ClientStateData): _73.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.ConsensusStateData;
                    isSDK(o: any): o is _73.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _73.ConsensusStateDataAmino;
                    encode(message: _73.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.ConsensusStateData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.ConsensusStateData>): _73.ConsensusStateData;
                    fromAmino(object: _73.ConsensusStateDataAmino): _73.ConsensusStateData;
                    toAmino(message: _73.ConsensusStateData): _73.ConsensusStateDataAmino;
                    fromAminoMsg(object: _73.ConsensusStateDataAminoMsg): _73.ConsensusStateData;
                    toAminoMsg(message: _73.ConsensusStateData): _73.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _73.ConsensusStateDataProtoMsg): _73.ConsensusStateData;
                    toProto(message: _73.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _73.ConsensusStateData): _73.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.ConnectionStateData;
                    isSDK(o: any): o is _73.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _73.ConnectionStateDataAmino;
                    encode(message: _73.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.ConnectionStateData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.ConnectionStateData>): _73.ConnectionStateData;
                    fromAmino(object: _73.ConnectionStateDataAmino): _73.ConnectionStateData;
                    toAmino(message: _73.ConnectionStateData): _73.ConnectionStateDataAmino;
                    fromAminoMsg(object: _73.ConnectionStateDataAminoMsg): _73.ConnectionStateData;
                    toAminoMsg(message: _73.ConnectionStateData): _73.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _73.ConnectionStateDataProtoMsg): _73.ConnectionStateData;
                    toProto(message: _73.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _73.ConnectionStateData): _73.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.ChannelStateData;
                    isSDK(o: any): o is _73.ChannelStateDataSDKType;
                    isAmino(o: any): o is _73.ChannelStateDataAmino;
                    encode(message: _73.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.ChannelStateData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.ChannelStateData>): _73.ChannelStateData;
                    fromAmino(object: _73.ChannelStateDataAmino): _73.ChannelStateData;
                    toAmino(message: _73.ChannelStateData): _73.ChannelStateDataAmino;
                    fromAminoMsg(object: _73.ChannelStateDataAminoMsg): _73.ChannelStateData;
                    toAminoMsg(message: _73.ChannelStateData): _73.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _73.ChannelStateDataProtoMsg): _73.ChannelStateData;
                    toProto(message: _73.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _73.ChannelStateData): _73.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.PacketCommitmentData;
                    isSDK(o: any): o is _73.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _73.PacketCommitmentDataAmino;
                    encode(message: _73.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.PacketCommitmentData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.PacketCommitmentData>): _73.PacketCommitmentData;
                    fromAmino(object: _73.PacketCommitmentDataAmino): _73.PacketCommitmentData;
                    toAmino(message: _73.PacketCommitmentData): _73.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _73.PacketCommitmentDataAminoMsg): _73.PacketCommitmentData;
                    toAminoMsg(message: _73.PacketCommitmentData): _73.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _73.PacketCommitmentDataProtoMsg): _73.PacketCommitmentData;
                    toProto(message: _73.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _73.PacketCommitmentData): _73.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.PacketAcknowledgementData;
                    isSDK(o: any): o is _73.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _73.PacketAcknowledgementDataAmino;
                    encode(message: _73.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.PacketAcknowledgementData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.PacketAcknowledgementData>): _73.PacketAcknowledgementData;
                    fromAmino(object: _73.PacketAcknowledgementDataAmino): _73.PacketAcknowledgementData;
                    toAmino(message: _73.PacketAcknowledgementData): _73.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _73.PacketAcknowledgementDataAminoMsg): _73.PacketAcknowledgementData;
                    toAminoMsg(message: _73.PacketAcknowledgementData): _73.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _73.PacketAcknowledgementDataProtoMsg): _73.PacketAcknowledgementData;
                    toProto(message: _73.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _73.PacketAcknowledgementData): _73.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _73.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _73.PacketReceiptAbsenceDataAmino;
                    encode(message: _73.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.PacketReceiptAbsenceData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.PacketReceiptAbsenceData>): _73.PacketReceiptAbsenceData;
                    fromAmino(object: _73.PacketReceiptAbsenceDataAmino): _73.PacketReceiptAbsenceData;
                    toAmino(message: _73.PacketReceiptAbsenceData): _73.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _73.PacketReceiptAbsenceDataAminoMsg): _73.PacketReceiptAbsenceData;
                    toAminoMsg(message: _73.PacketReceiptAbsenceData): _73.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _73.PacketReceiptAbsenceDataProtoMsg): _73.PacketReceiptAbsenceData;
                    toProto(message: _73.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _73.PacketReceiptAbsenceData): _73.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.NextSequenceRecvData;
                    isSDK(o: any): o is _73.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _73.NextSequenceRecvDataAmino;
                    encode(message: _73.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.NextSequenceRecvData;
                    fromPartial(object: import("../helpers").DeepPartial<_73.NextSequenceRecvData>): _73.NextSequenceRecvData;
                    fromAmino(object: _73.NextSequenceRecvDataAmino): _73.NextSequenceRecvData;
                    toAmino(message: _73.NextSequenceRecvData): _73.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _73.NextSequenceRecvDataAminoMsg): _73.NextSequenceRecvData;
                    toAminoMsg(message: _73.NextSequenceRecvData): _73.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _73.NextSequenceRecvDataProtoMsg): _73.NextSequenceRecvData;
                    toProto(message: _73.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _73.NextSequenceRecvData): _73.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _74.DataType;
                dataTypeToJSON(object: _74.DataType): string;
                DataType: typeof _74.DataType;
                DataTypeSDKType: typeof _74.DataType;
                DataTypeAmino: typeof _74.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.ClientState;
                    isSDK(o: any): o is _74.ClientStateSDKType;
                    isAmino(o: any): o is _74.ClientStateAmino;
                    encode(message: _74.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.ClientState;
                    fromPartial(object: import("../helpers").DeepPartial<_74.ClientState>): _74.ClientState;
                    fromAmino(object: _74.ClientStateAmino): _74.ClientState;
                    toAmino(message: _74.ClientState): _74.ClientStateAmino;
                    fromAminoMsg(object: _74.ClientStateAminoMsg): _74.ClientState;
                    toAminoMsg(message: _74.ClientState): _74.ClientStateAminoMsg;
                    fromProtoMsg(message: _74.ClientStateProtoMsg): _74.ClientState;
                    toProto(message: _74.ClientState): Uint8Array;
                    toProtoMsg(message: _74.ClientState): _74.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.ConsensusState;
                    isSDK(o: any): o is _74.ConsensusStateSDKType;
                    isAmino(o: any): o is _74.ConsensusStateAmino;
                    encode(message: _74.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.ConsensusState;
                    fromPartial(object: import("../helpers").DeepPartial<_74.ConsensusState>): _74.ConsensusState;
                    fromAmino(object: _74.ConsensusStateAmino): _74.ConsensusState;
                    toAmino(message: _74.ConsensusState): _74.ConsensusStateAmino;
                    fromAminoMsg(object: _74.ConsensusStateAminoMsg): _74.ConsensusState;
                    toAminoMsg(message: _74.ConsensusState): _74.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _74.ConsensusStateProtoMsg): _74.ConsensusState;
                    toProto(message: _74.ConsensusState): Uint8Array;
                    toProtoMsg(message: _74.ConsensusState): _74.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.Header;
                    isSDK(o: any): o is _74.HeaderSDKType;
                    isAmino(o: any): o is _74.HeaderAmino;
                    encode(message: _74.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.Header;
                    fromPartial(object: import("../helpers").DeepPartial<_74.Header>): _74.Header;
                    fromAmino(object: _74.HeaderAmino): _74.Header;
                    toAmino(message: _74.Header): _74.HeaderAmino;
                    fromAminoMsg(object: _74.HeaderAminoMsg): _74.Header;
                    toAminoMsg(message: _74.Header): _74.HeaderAminoMsg;
                    fromProtoMsg(message: _74.HeaderProtoMsg): _74.Header;
                    toProto(message: _74.Header): Uint8Array;
                    toProtoMsg(message: _74.Header): _74.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.Misbehaviour;
                    isSDK(o: any): o is _74.MisbehaviourSDKType;
                    isAmino(o: any): o is _74.MisbehaviourAmino;
                    encode(message: _74.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.Misbehaviour;
                    fromPartial(object: import("../helpers").DeepPartial<_74.Misbehaviour>): _74.Misbehaviour;
                    fromAmino(object: _74.MisbehaviourAmino): _74.Misbehaviour;
                    toAmino(message: _74.Misbehaviour): _74.MisbehaviourAmino;
                    fromAminoMsg(object: _74.MisbehaviourAminoMsg): _74.Misbehaviour;
                    toAminoMsg(message: _74.Misbehaviour): _74.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _74.MisbehaviourProtoMsg): _74.Misbehaviour;
                    toProto(message: _74.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _74.Misbehaviour): _74.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.SignatureAndData;
                    isSDK(o: any): o is _74.SignatureAndDataSDKType;
                    isAmino(o: any): o is _74.SignatureAndDataAmino;
                    encode(message: _74.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.SignatureAndData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.SignatureAndData>): _74.SignatureAndData;
                    fromAmino(object: _74.SignatureAndDataAmino): _74.SignatureAndData;
                    toAmino(message: _74.SignatureAndData): _74.SignatureAndDataAmino;
                    fromAminoMsg(object: _74.SignatureAndDataAminoMsg): _74.SignatureAndData;
                    toAminoMsg(message: _74.SignatureAndData): _74.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _74.SignatureAndDataProtoMsg): _74.SignatureAndData;
                    toProto(message: _74.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _74.SignatureAndData): _74.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.TimestampedSignatureData;
                    isSDK(o: any): o is _74.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _74.TimestampedSignatureDataAmino;
                    encode(message: _74.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.TimestampedSignatureData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.TimestampedSignatureData>): _74.TimestampedSignatureData;
                    fromAmino(object: _74.TimestampedSignatureDataAmino): _74.TimestampedSignatureData;
                    toAmino(message: _74.TimestampedSignatureData): _74.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _74.TimestampedSignatureDataAminoMsg): _74.TimestampedSignatureData;
                    toAminoMsg(message: _74.TimestampedSignatureData): _74.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _74.TimestampedSignatureDataProtoMsg): _74.TimestampedSignatureData;
                    toProto(message: _74.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _74.TimestampedSignatureData): _74.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.SignBytes;
                    isSDK(o: any): o is _74.SignBytesSDKType;
                    isAmino(o: any): o is _74.SignBytesAmino;
                    encode(message: _74.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.SignBytes;
                    fromPartial(object: import("../helpers").DeepPartial<_74.SignBytes>): _74.SignBytes;
                    fromAmino(object: _74.SignBytesAmino): _74.SignBytes;
                    toAmino(message: _74.SignBytes): _74.SignBytesAmino;
                    fromAminoMsg(object: _74.SignBytesAminoMsg): _74.SignBytes;
                    toAminoMsg(message: _74.SignBytes): _74.SignBytesAminoMsg;
                    fromProtoMsg(message: _74.SignBytesProtoMsg): _74.SignBytes;
                    toProto(message: _74.SignBytes): Uint8Array;
                    toProtoMsg(message: _74.SignBytes): _74.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.HeaderData;
                    isSDK(o: any): o is _74.HeaderDataSDKType;
                    isAmino(o: any): o is _74.HeaderDataAmino;
                    encode(message: _74.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.HeaderData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.HeaderData>): _74.HeaderData;
                    fromAmino(object: _74.HeaderDataAmino): _74.HeaderData;
                    toAmino(message: _74.HeaderData): _74.HeaderDataAmino;
                    fromAminoMsg(object: _74.HeaderDataAminoMsg): _74.HeaderData;
                    toAminoMsg(message: _74.HeaderData): _74.HeaderDataAminoMsg;
                    fromProtoMsg(message: _74.HeaderDataProtoMsg): _74.HeaderData;
                    toProto(message: _74.HeaderData): Uint8Array;
                    toProtoMsg(message: _74.HeaderData): _74.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.ClientStateData;
                    isSDK(o: any): o is _74.ClientStateDataSDKType;
                    isAmino(o: any): o is _74.ClientStateDataAmino;
                    encode(message: _74.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.ClientStateData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.ClientStateData>): _74.ClientStateData;
                    fromAmino(object: _74.ClientStateDataAmino): _74.ClientStateData;
                    toAmino(message: _74.ClientStateData): _74.ClientStateDataAmino;
                    fromAminoMsg(object: _74.ClientStateDataAminoMsg): _74.ClientStateData;
                    toAminoMsg(message: _74.ClientStateData): _74.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _74.ClientStateDataProtoMsg): _74.ClientStateData;
                    toProto(message: _74.ClientStateData): Uint8Array;
                    toProtoMsg(message: _74.ClientStateData): _74.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.ConsensusStateData;
                    isSDK(o: any): o is _74.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _74.ConsensusStateDataAmino;
                    encode(message: _74.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.ConsensusStateData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.ConsensusStateData>): _74.ConsensusStateData;
                    fromAmino(object: _74.ConsensusStateDataAmino): _74.ConsensusStateData;
                    toAmino(message: _74.ConsensusStateData): _74.ConsensusStateDataAmino;
                    fromAminoMsg(object: _74.ConsensusStateDataAminoMsg): _74.ConsensusStateData;
                    toAminoMsg(message: _74.ConsensusStateData): _74.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _74.ConsensusStateDataProtoMsg): _74.ConsensusStateData;
                    toProto(message: _74.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _74.ConsensusStateData): _74.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.ConnectionStateData;
                    isSDK(o: any): o is _74.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _74.ConnectionStateDataAmino;
                    encode(message: _74.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.ConnectionStateData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.ConnectionStateData>): _74.ConnectionStateData;
                    fromAmino(object: _74.ConnectionStateDataAmino): _74.ConnectionStateData;
                    toAmino(message: _74.ConnectionStateData): _74.ConnectionStateDataAmino;
                    fromAminoMsg(object: _74.ConnectionStateDataAminoMsg): _74.ConnectionStateData;
                    toAminoMsg(message: _74.ConnectionStateData): _74.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _74.ConnectionStateDataProtoMsg): _74.ConnectionStateData;
                    toProto(message: _74.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _74.ConnectionStateData): _74.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.ChannelStateData;
                    isSDK(o: any): o is _74.ChannelStateDataSDKType;
                    isAmino(o: any): o is _74.ChannelStateDataAmino;
                    encode(message: _74.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.ChannelStateData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.ChannelStateData>): _74.ChannelStateData;
                    fromAmino(object: _74.ChannelStateDataAmino): _74.ChannelStateData;
                    toAmino(message: _74.ChannelStateData): _74.ChannelStateDataAmino;
                    fromAminoMsg(object: _74.ChannelStateDataAminoMsg): _74.ChannelStateData;
                    toAminoMsg(message: _74.ChannelStateData): _74.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _74.ChannelStateDataProtoMsg): _74.ChannelStateData;
                    toProto(message: _74.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _74.ChannelStateData): _74.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.PacketCommitmentData;
                    isSDK(o: any): o is _74.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _74.PacketCommitmentDataAmino;
                    encode(message: _74.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.PacketCommitmentData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.PacketCommitmentData>): _74.PacketCommitmentData;
                    fromAmino(object: _74.PacketCommitmentDataAmino): _74.PacketCommitmentData;
                    toAmino(message: _74.PacketCommitmentData): _74.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _74.PacketCommitmentDataAminoMsg): _74.PacketCommitmentData;
                    toAminoMsg(message: _74.PacketCommitmentData): _74.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _74.PacketCommitmentDataProtoMsg): _74.PacketCommitmentData;
                    toProto(message: _74.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _74.PacketCommitmentData): _74.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.PacketAcknowledgementData;
                    isSDK(o: any): o is _74.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _74.PacketAcknowledgementDataAmino;
                    encode(message: _74.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.PacketAcknowledgementData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.PacketAcknowledgementData>): _74.PacketAcknowledgementData;
                    fromAmino(object: _74.PacketAcknowledgementDataAmino): _74.PacketAcknowledgementData;
                    toAmino(message: _74.PacketAcknowledgementData): _74.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _74.PacketAcknowledgementDataAminoMsg): _74.PacketAcknowledgementData;
                    toAminoMsg(message: _74.PacketAcknowledgementData): _74.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _74.PacketAcknowledgementDataProtoMsg): _74.PacketAcknowledgementData;
                    toProto(message: _74.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _74.PacketAcknowledgementData): _74.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _74.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _74.PacketReceiptAbsenceDataAmino;
                    encode(message: _74.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.PacketReceiptAbsenceData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.PacketReceiptAbsenceData>): _74.PacketReceiptAbsenceData;
                    fromAmino(object: _74.PacketReceiptAbsenceDataAmino): _74.PacketReceiptAbsenceData;
                    toAmino(message: _74.PacketReceiptAbsenceData): _74.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _74.PacketReceiptAbsenceDataAminoMsg): _74.PacketReceiptAbsenceData;
                    toAminoMsg(message: _74.PacketReceiptAbsenceData): _74.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _74.PacketReceiptAbsenceDataProtoMsg): _74.PacketReceiptAbsenceData;
                    toProto(message: _74.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _74.PacketReceiptAbsenceData): _74.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.NextSequenceRecvData;
                    isSDK(o: any): o is _74.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _74.NextSequenceRecvDataAmino;
                    encode(message: _74.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.NextSequenceRecvData;
                    fromPartial(object: import("../helpers").DeepPartial<_74.NextSequenceRecvData>): _74.NextSequenceRecvData;
                    fromAmino(object: _74.NextSequenceRecvDataAmino): _74.NextSequenceRecvData;
                    toAmino(message: _74.NextSequenceRecvData): _74.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _74.NextSequenceRecvDataAminoMsg): _74.NextSequenceRecvData;
                    toAminoMsg(message: _74.NextSequenceRecvData): _74.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _74.NextSequenceRecvDataProtoMsg): _74.NextSequenceRecvData;
                    toProto(message: _74.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _74.NextSequenceRecvData): _74.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.ClientState;
                    isSDK(o: any): o is _75.ClientStateSDKType;
                    isAmino(o: any): o is _75.ClientStateAmino;
                    encode(message: _75.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.ClientState;
                    fromPartial(object: import("../helpers").DeepPartial<_75.ClientState>): _75.ClientState;
                    fromAmino(object: _75.ClientStateAmino): _75.ClientState;
                    toAmino(message: _75.ClientState): _75.ClientStateAmino;
                    fromAminoMsg(object: _75.ClientStateAminoMsg): _75.ClientState;
                    toAminoMsg(message: _75.ClientState): _75.ClientStateAminoMsg;
                    fromProtoMsg(message: _75.ClientStateProtoMsg): _75.ClientState;
                    toProto(message: _75.ClientState): Uint8Array;
                    toProtoMsg(message: _75.ClientState): _75.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.ConsensusState;
                    isSDK(o: any): o is _75.ConsensusStateSDKType;
                    isAmino(o: any): o is _75.ConsensusStateAmino;
                    encode(message: _75.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.ConsensusState;
                    fromPartial(object: import("../helpers").DeepPartial<_75.ConsensusState>): _75.ConsensusState;
                    fromAmino(object: _75.ConsensusStateAmino): _75.ConsensusState;
                    toAmino(message: _75.ConsensusState): _75.ConsensusStateAmino;
                    fromAminoMsg(object: _75.ConsensusStateAminoMsg): _75.ConsensusState;
                    toAminoMsg(message: _75.ConsensusState): _75.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _75.ConsensusStateProtoMsg): _75.ConsensusState;
                    toProto(message: _75.ConsensusState): Uint8Array;
                    toProtoMsg(message: _75.ConsensusState): _75.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.Misbehaviour;
                    isSDK(o: any): o is _75.MisbehaviourSDKType;
                    isAmino(o: any): o is _75.MisbehaviourAmino;
                    encode(message: _75.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.Misbehaviour;
                    fromPartial(object: import("../helpers").DeepPartial<_75.Misbehaviour>): _75.Misbehaviour;
                    fromAmino(object: _75.MisbehaviourAmino): _75.Misbehaviour;
                    toAmino(message: _75.Misbehaviour): _75.MisbehaviourAmino;
                    fromAminoMsg(object: _75.MisbehaviourAminoMsg): _75.Misbehaviour;
                    toAminoMsg(message: _75.Misbehaviour): _75.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _75.MisbehaviourProtoMsg): _75.Misbehaviour;
                    toProto(message: _75.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _75.Misbehaviour): _75.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.Header;
                    isSDK(o: any): o is _75.HeaderSDKType;
                    isAmino(o: any): o is _75.HeaderAmino;
                    encode(message: _75.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.Header;
                    fromPartial(object: import("../helpers").DeepPartial<_75.Header>): _75.Header;
                    fromAmino(object: _75.HeaderAmino): _75.Header;
                    toAmino(message: _75.Header): _75.HeaderAmino;
                    fromAminoMsg(object: _75.HeaderAminoMsg): _75.Header;
                    toAminoMsg(message: _75.Header): _75.HeaderAminoMsg;
                    fromProtoMsg(message: _75.HeaderProtoMsg): _75.Header;
                    toProto(message: _75.Header): Uint8Array;
                    toProtoMsg(message: _75.Header): _75.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.Fraction;
                    isSDK(o: any): o is _75.FractionSDKType;
                    isAmino(o: any): o is _75.FractionAmino;
                    encode(message: _75.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.Fraction;
                    fromPartial(object: import("../helpers").DeepPartial<_75.Fraction>): _75.Fraction;
                    fromAmino(object: _75.FractionAmino): _75.Fraction;
                    toAmino(message: _75.Fraction): _75.FractionAmino;
                    fromAminoMsg(object: _75.FractionAminoMsg): _75.Fraction;
                    toAminoMsg(message: _75.Fraction): _75.FractionAminoMsg;
                    fromProtoMsg(message: _75.FractionProtoMsg): _75.Fraction;
                    toProto(message: _75.Fraction): Uint8Array;
                    toProtoMsg(message: _75.Fraction): _75.FractionProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _145.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _146.MsgClientImpl;
                    };
                    client: {
                        v1: _147.MsgClientImpl;
                    };
                    connection: {
                        v1: _148.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _55.QueryDenomTraceRequest): Promise<_55.QueryDenomTraceResponse>;
                            denomTraces(request?: _55.QueryDenomTracesRequest): Promise<_55.QueryDenomTracesResponse>;
                            params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _61.QueryChannelRequest): Promise<_61.QueryChannelResponse>;
                            channels(request?: _61.QueryChannelsRequest): Promise<_61.QueryChannelsResponse>;
                            connectionChannels(request: _61.QueryConnectionChannelsRequest): Promise<_61.QueryConnectionChannelsResponse>;
                            channelClientState(request: _61.QueryChannelClientStateRequest): Promise<_61.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _61.QueryChannelConsensusStateRequest): Promise<_61.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _61.QueryPacketCommitmentRequest): Promise<_61.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _61.QueryPacketCommitmentsRequest): Promise<_61.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _61.QueryPacketReceiptRequest): Promise<_61.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _61.QueryPacketAcknowledgementRequest): Promise<_61.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _61.QueryPacketAcknowledgementsRequest): Promise<_61.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _61.QueryUnreceivedPacketsRequest): Promise<_61.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _61.QueryUnreceivedAcksRequest): Promise<_61.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _61.QueryNextSequenceReceiveRequest): Promise<_61.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _65.QueryClientStateRequest): Promise<_65.QueryClientStateResponse>;
                            clientStates(request?: _65.QueryClientStatesRequest): Promise<_65.QueryClientStatesResponse>;
                            consensusState(request: _65.QueryConsensusStateRequest): Promise<_65.QueryConsensusStateResponse>;
                            consensusStates(request: _65.QueryConsensusStatesRequest): Promise<_65.QueryConsensusStatesResponse>;
                            clientStatus(request: _65.QueryClientStatusRequest): Promise<_65.QueryClientStatusResponse>;
                            clientParams(request?: _65.QueryClientParamsRequest): Promise<_65.QueryClientParamsResponse>;
                            upgradedClientState(request?: _65.QueryUpgradedClientStateRequest): Promise<_65.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _65.QueryUpgradedConsensusStateRequest): Promise<_65.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _70.QueryConnectionRequest): Promise<_70.QueryConnectionResponse>;
                            connections(request?: _70.QueryConnectionsRequest): Promise<_70.QueryConnectionsResponse>;
                            clientConnections(request: _70.QueryClientConnectionsRequest): Promise<_70.QueryClientConnectionsResponse>;
                            connectionClientState(request: _70.QueryConnectionClientStateRequest): Promise<_70.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _70.QueryConnectionConsensusStateRequest): Promise<_70.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _137.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _138.LCDQueryClient;
                    };
                    client: {
                        v1: _139.LCDQueryClient;
                    };
                    connection: {
                        v1: _140.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
