import * as _57 from "./applications/transfer/v1/genesis";
import * as _58 from "./applications/transfer/v1/query";
import * as _59 from "./applications/transfer/v1/transfer";
import * as _60 from "./applications/transfer/v1/tx";
import * as _61 from "./applications/transfer/v2/packet";
import * as _62 from "./core/channel/v1/channel";
import * as _63 from "./core/channel/v1/genesis";
import * as _64 from "./core/channel/v1/query";
import * as _65 from "./core/channel/v1/tx";
import * as _66 from "./core/client/v1/client";
import * as _67 from "./core/client/v1/genesis";
import * as _68 from "./core/client/v1/query";
import * as _69 from "./core/client/v1/tx";
import * as _70 from "./core/commitment/v1/commitment";
import * as _71 from "./core/connection/v1/connection";
import * as _72 from "./core/connection/v1/genesis";
import * as _73 from "./core/connection/v1/query";
import * as _74 from "./core/connection/v1/tx";
import * as _75 from "./lightclients/localhost/v1/localhost";
import * as _76 from "./lightclients/solomachine/v1/solomachine";
import * as _77 from "./lightclients/solomachine/v2/solomachine";
import * as _78 from "./lightclients/tendermint/v1/tendermint";
import * as _145 from "./applications/transfer/v1/query.lcd";
import * as _146 from "./core/channel/v1/query.lcd";
import * as _147 from "./core/client/v1/query.lcd";
import * as _148 from "./core/connection/v1/query.lcd";
import * as _149 from "./applications/transfer/v1/query.rpc.Query";
import * as _150 from "./core/channel/v1/query.rpc.Query";
import * as _151 from "./core/client/v1/query.rpc.Query";
import * as _152 from "./core/connection/v1/query.rpc.Query";
import * as _153 from "./applications/transfer/v1/tx.rpc.msg";
import * as _154 from "./core/channel/v1/tx.rpc.msg";
import * as _155 from "./core/client/v1/tx.rpc.msg";
import * as _156 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _153.MsgClientImpl;
                QueryClientImpl: typeof _149.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _58.QueryDenomTraceRequest): Promise<_58.QueryDenomTraceResponse>;
                    denomTraces(request?: _58.QueryDenomTracesRequest): Promise<_58.QueryDenomTracesResponse>;
                    params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _145.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _60.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _60.MsgTransfer): {
                            typeUrl: string;
                            value: _60.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _60.MsgTransfer): {
                            typeUrl: string;
                            value: _60.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _60.MsgTransfer) => _60.MsgTransferAmino;
                        fromAmino: (object: _60.MsgTransferAmino) => _60.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _60.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.MsgTransfer;
                    fromPartial(object: Partial<_60.MsgTransfer>): _60.MsgTransfer;
                    fromAmino(object: _60.MsgTransferAmino): _60.MsgTransfer;
                    toAmino(message: _60.MsgTransfer): _60.MsgTransferAmino;
                    fromAminoMsg(object: _60.MsgTransferAminoMsg): _60.MsgTransfer;
                    toAminoMsg(message: _60.MsgTransfer): _60.MsgTransferAminoMsg;
                    fromProtoMsg(message: _60.MsgTransferProtoMsg): _60.MsgTransfer;
                    toProto(message: _60.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _60.MsgTransfer): _60.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _60.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.MsgTransferResponse;
                    fromPartial(_: Partial<_60.MsgTransferResponse>): _60.MsgTransferResponse;
                    fromAmino(_: _60.MsgTransferResponseAmino): _60.MsgTransferResponse;
                    toAmino(_: _60.MsgTransferResponse): _60.MsgTransferResponseAmino;
                    fromAminoMsg(object: _60.MsgTransferResponseAminoMsg): _60.MsgTransferResponse;
                    toAminoMsg(message: _60.MsgTransferResponse): _60.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _60.MsgTransferResponseProtoMsg): _60.MsgTransferResponse;
                    toProto(message: _60.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _60.MsgTransferResponse): _60.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _59.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.DenomTrace;
                    fromPartial(object: Partial<_59.DenomTrace>): _59.DenomTrace;
                    fromAmino(object: _59.DenomTraceAmino): _59.DenomTrace;
                    toAmino(message: _59.DenomTrace): _59.DenomTraceAmino;
                    fromAminoMsg(object: _59.DenomTraceAminoMsg): _59.DenomTrace;
                    toAminoMsg(message: _59.DenomTrace): _59.DenomTraceAminoMsg;
                    fromProtoMsg(message: _59.DenomTraceProtoMsg): _59.DenomTrace;
                    toProto(message: _59.DenomTrace): Uint8Array;
                    toProtoMsg(message: _59.DenomTrace): _59.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _59.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.Params;
                    fromPartial(object: Partial<_59.Params>): _59.Params;
                    fromAmino(object: _59.ParamsAmino): _59.Params;
                    toAmino(message: _59.Params): _59.ParamsAmino;
                    fromAminoMsg(object: _59.ParamsAminoMsg): _59.Params;
                    toAminoMsg(message: _59.Params): _59.ParamsAminoMsg;
                    fromProtoMsg(message: _59.ParamsProtoMsg): _59.Params;
                    toProto(message: _59.Params): Uint8Array;
                    toProtoMsg(message: _59.Params): _59.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _58.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_58.QueryDenomTraceRequest>): _58.QueryDenomTraceRequest;
                    fromAmino(object: _58.QueryDenomTraceRequestAmino): _58.QueryDenomTraceRequest;
                    toAmino(message: _58.QueryDenomTraceRequest): _58.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _58.QueryDenomTraceRequestAminoMsg): _58.QueryDenomTraceRequest;
                    toAminoMsg(message: _58.QueryDenomTraceRequest): _58.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _58.QueryDenomTraceRequestProtoMsg): _58.QueryDenomTraceRequest;
                    toProto(message: _58.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _58.QueryDenomTraceRequest): _58.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _58.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_58.QueryDenomTraceResponse>): _58.QueryDenomTraceResponse;
                    fromAmino(object: _58.QueryDenomTraceResponseAmino): _58.QueryDenomTraceResponse;
                    toAmino(message: _58.QueryDenomTraceResponse): _58.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _58.QueryDenomTraceResponseAminoMsg): _58.QueryDenomTraceResponse;
                    toAminoMsg(message: _58.QueryDenomTraceResponse): _58.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _58.QueryDenomTraceResponseProtoMsg): _58.QueryDenomTraceResponse;
                    toProto(message: _58.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _58.QueryDenomTraceResponse): _58.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _58.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_58.QueryDenomTracesRequest>): _58.QueryDenomTracesRequest;
                    fromAmino(object: _58.QueryDenomTracesRequestAmino): _58.QueryDenomTracesRequest;
                    toAmino(message: _58.QueryDenomTracesRequest): _58.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _58.QueryDenomTracesRequestAminoMsg): _58.QueryDenomTracesRequest;
                    toAminoMsg(message: _58.QueryDenomTracesRequest): _58.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _58.QueryDenomTracesRequestProtoMsg): _58.QueryDenomTracesRequest;
                    toProto(message: _58.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _58.QueryDenomTracesRequest): _58.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _58.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_58.QueryDenomTracesResponse>): _58.QueryDenomTracesResponse;
                    fromAmino(object: _58.QueryDenomTracesResponseAmino): _58.QueryDenomTracesResponse;
                    toAmino(message: _58.QueryDenomTracesResponse): _58.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _58.QueryDenomTracesResponseAminoMsg): _58.QueryDenomTracesResponse;
                    toAminoMsg(message: _58.QueryDenomTracesResponse): _58.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _58.QueryDenomTracesResponseProtoMsg): _58.QueryDenomTracesResponse;
                    toProto(message: _58.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _58.QueryDenomTracesResponse): _58.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _58.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryParamsRequest;
                    fromPartial(_: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
                    fromAmino(_: _58.QueryParamsRequestAmino): _58.QueryParamsRequest;
                    toAmino(_: _58.QueryParamsRequest): _58.QueryParamsRequestAmino;
                    fromAminoMsg(object: _58.QueryParamsRequestAminoMsg): _58.QueryParamsRequest;
                    toAminoMsg(message: _58.QueryParamsRequest): _58.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _58.QueryParamsRequestProtoMsg): _58.QueryParamsRequest;
                    toProto(message: _58.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _58.QueryParamsRequest): _58.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _58.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryParamsResponse;
                    fromPartial(object: Partial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
                    fromAmino(object: _58.QueryParamsResponseAmino): _58.QueryParamsResponse;
                    toAmino(message: _58.QueryParamsResponse): _58.QueryParamsResponseAmino;
                    fromAminoMsg(object: _58.QueryParamsResponseAminoMsg): _58.QueryParamsResponse;
                    toAminoMsg(message: _58.QueryParamsResponse): _58.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _58.QueryParamsResponseProtoMsg): _58.QueryParamsResponse;
                    toProto(message: _58.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _58.QueryParamsResponse): _58.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _57.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.GenesisState;
                    fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
                    fromAmino(object: _57.GenesisStateAmino): _57.GenesisState;
                    toAmino(message: _57.GenesisState): _57.GenesisStateAmino;
                    fromAminoMsg(object: _57.GenesisStateAminoMsg): _57.GenesisState;
                    toAminoMsg(message: _57.GenesisState): _57.GenesisStateAminoMsg;
                    fromProtoMsg(message: _57.GenesisStateProtoMsg): _57.GenesisState;
                    toProto(message: _57.GenesisState): Uint8Array;
                    toProtoMsg(message: _57.GenesisState): _57.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _61.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.FungibleTokenPacketData;
                    fromPartial(object: Partial<_61.FungibleTokenPacketData>): _61.FungibleTokenPacketData;
                    fromAmino(object: _61.FungibleTokenPacketDataAmino): _61.FungibleTokenPacketData;
                    toAmino(message: _61.FungibleTokenPacketData): _61.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _61.FungibleTokenPacketDataAminoMsg): _61.FungibleTokenPacketData;
                    toAminoMsg(message: _61.FungibleTokenPacketData): _61.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _61.FungibleTokenPacketDataProtoMsg): _61.FungibleTokenPacketData;
                    toProto(message: _61.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _61.FungibleTokenPacketData): _61.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _154.MsgClientImpl;
                QueryClientImpl: typeof _150.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _64.QueryChannelRequest): Promise<_64.QueryChannelResponse>;
                    channels(request?: _64.QueryChannelsRequest): Promise<_64.QueryChannelsResponse>;
                    connectionChannels(request: _64.QueryConnectionChannelsRequest): Promise<_64.QueryConnectionChannelsResponse>;
                    channelClientState(request: _64.QueryChannelClientStateRequest): Promise<_64.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _64.QueryChannelConsensusStateRequest): Promise<_64.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _64.QueryPacketCommitmentRequest): Promise<_64.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _64.QueryPacketCommitmentsRequest): Promise<_64.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _64.QueryPacketReceiptRequest): Promise<_64.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _64.QueryPacketAcknowledgementRequest): Promise<_64.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _64.QueryPacketAcknowledgementsRequest): Promise<_64.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _64.QueryUnreceivedPacketsRequest): Promise<_64.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _64.QueryUnreceivedAcksRequest): Promise<_64.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _64.QueryNextSequenceReceiveRequest): Promise<_64.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _146.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _65.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenTry(value: _65.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenAck(value: _65.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenConfirm(value: _65.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelCloseInit(value: _65.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelCloseConfirm(value: _65.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        recvPacket(value: _65.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        timeout(value: _65.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        timeoutOnClose(value: _65.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        acknowledgement(value: _65.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _65.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _65.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _65.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _65.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _65.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _65.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _65.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _65.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _65.MsgRecvPacket): {
                            typeUrl: string;
                            value: _65.MsgRecvPacket;
                        };
                        timeout(value: _65.MsgTimeout): {
                            typeUrl: string;
                            value: _65.MsgTimeout;
                        };
                        timeoutOnClose(value: _65.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _65.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _65.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _65.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _65.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _65.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _65.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _65.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _65.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _65.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _65.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _65.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _65.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _65.MsgRecvPacket): {
                            typeUrl: string;
                            value: _65.MsgRecvPacket;
                        };
                        timeout(value: _65.MsgTimeout): {
                            typeUrl: string;
                            value: _65.MsgTimeout;
                        };
                        timeoutOnClose(value: _65.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _65.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _65.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _65.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _65.MsgChannelOpenInit) => _65.MsgChannelOpenInitAmino;
                        fromAmino: (object: _65.MsgChannelOpenInitAmino) => _65.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _65.MsgChannelOpenTry) => _65.MsgChannelOpenTryAmino;
                        fromAmino: (object: _65.MsgChannelOpenTryAmino) => _65.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _65.MsgChannelOpenAck) => _65.MsgChannelOpenAckAmino;
                        fromAmino: (object: _65.MsgChannelOpenAckAmino) => _65.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _65.MsgChannelOpenConfirm) => _65.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _65.MsgChannelOpenConfirmAmino) => _65.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _65.MsgChannelCloseInit) => _65.MsgChannelCloseInitAmino;
                        fromAmino: (object: _65.MsgChannelCloseInitAmino) => _65.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _65.MsgChannelCloseConfirm) => _65.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _65.MsgChannelCloseConfirmAmino) => _65.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _65.MsgRecvPacket) => _65.MsgRecvPacketAmino;
                        fromAmino: (object: _65.MsgRecvPacketAmino) => _65.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _65.MsgTimeout) => _65.MsgTimeoutAmino;
                        fromAmino: (object: _65.MsgTimeoutAmino) => _65.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _65.MsgTimeoutOnClose) => _65.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _65.MsgTimeoutOnCloseAmino) => _65.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _65.MsgAcknowledgement) => _65.MsgAcknowledgementAmino;
                        fromAmino: (object: _65.MsgAcknowledgementAmino) => _65.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _65.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelOpenInit;
                    fromPartial(object: Partial<_65.MsgChannelOpenInit>): _65.MsgChannelOpenInit;
                    fromAmino(object: _65.MsgChannelOpenInitAmino): _65.MsgChannelOpenInit;
                    toAmino(message: _65.MsgChannelOpenInit): _65.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _65.MsgChannelOpenInitAminoMsg): _65.MsgChannelOpenInit;
                    toAminoMsg(message: _65.MsgChannelOpenInit): _65.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelOpenInitProtoMsg): _65.MsgChannelOpenInit;
                    toProto(message: _65.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelOpenInit): _65.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _65.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_65.MsgChannelOpenInitResponse>): _65.MsgChannelOpenInitResponse;
                    fromAmino(_: _65.MsgChannelOpenInitResponseAmino): _65.MsgChannelOpenInitResponse;
                    toAmino(_: _65.MsgChannelOpenInitResponse): _65.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _65.MsgChannelOpenInitResponseAminoMsg): _65.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _65.MsgChannelOpenInitResponse): _65.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelOpenInitResponseProtoMsg): _65.MsgChannelOpenInitResponse;
                    toProto(message: _65.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelOpenInitResponse): _65.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _65.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelOpenTry;
                    fromPartial(object: Partial<_65.MsgChannelOpenTry>): _65.MsgChannelOpenTry;
                    fromAmino(object: _65.MsgChannelOpenTryAmino): _65.MsgChannelOpenTry;
                    toAmino(message: _65.MsgChannelOpenTry): _65.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _65.MsgChannelOpenTryAminoMsg): _65.MsgChannelOpenTry;
                    toAminoMsg(message: _65.MsgChannelOpenTry): _65.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelOpenTryProtoMsg): _65.MsgChannelOpenTry;
                    toProto(message: _65.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelOpenTry): _65.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _65.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_65.MsgChannelOpenTryResponse>): _65.MsgChannelOpenTryResponse;
                    fromAmino(_: _65.MsgChannelOpenTryResponseAmino): _65.MsgChannelOpenTryResponse;
                    toAmino(_: _65.MsgChannelOpenTryResponse): _65.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _65.MsgChannelOpenTryResponseAminoMsg): _65.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _65.MsgChannelOpenTryResponse): _65.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelOpenTryResponseProtoMsg): _65.MsgChannelOpenTryResponse;
                    toProto(message: _65.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelOpenTryResponse): _65.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _65.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelOpenAck;
                    fromPartial(object: Partial<_65.MsgChannelOpenAck>): _65.MsgChannelOpenAck;
                    fromAmino(object: _65.MsgChannelOpenAckAmino): _65.MsgChannelOpenAck;
                    toAmino(message: _65.MsgChannelOpenAck): _65.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _65.MsgChannelOpenAckAminoMsg): _65.MsgChannelOpenAck;
                    toAminoMsg(message: _65.MsgChannelOpenAck): _65.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelOpenAckProtoMsg): _65.MsgChannelOpenAck;
                    toProto(message: _65.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelOpenAck): _65.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _65.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_65.MsgChannelOpenAckResponse>): _65.MsgChannelOpenAckResponse;
                    fromAmino(_: _65.MsgChannelOpenAckResponseAmino): _65.MsgChannelOpenAckResponse;
                    toAmino(_: _65.MsgChannelOpenAckResponse): _65.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _65.MsgChannelOpenAckResponseAminoMsg): _65.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _65.MsgChannelOpenAckResponse): _65.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelOpenAckResponseProtoMsg): _65.MsgChannelOpenAckResponse;
                    toProto(message: _65.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelOpenAckResponse): _65.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _65.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_65.MsgChannelOpenConfirm>): _65.MsgChannelOpenConfirm;
                    fromAmino(object: _65.MsgChannelOpenConfirmAmino): _65.MsgChannelOpenConfirm;
                    toAmino(message: _65.MsgChannelOpenConfirm): _65.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _65.MsgChannelOpenConfirmAminoMsg): _65.MsgChannelOpenConfirm;
                    toAminoMsg(message: _65.MsgChannelOpenConfirm): _65.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelOpenConfirmProtoMsg): _65.MsgChannelOpenConfirm;
                    toProto(message: _65.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelOpenConfirm): _65.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _65.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_65.MsgChannelOpenConfirmResponse>): _65.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _65.MsgChannelOpenConfirmResponseAmino): _65.MsgChannelOpenConfirmResponse;
                    toAmino(_: _65.MsgChannelOpenConfirmResponse): _65.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _65.MsgChannelOpenConfirmResponseAminoMsg): _65.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _65.MsgChannelOpenConfirmResponse): _65.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelOpenConfirmResponseProtoMsg): _65.MsgChannelOpenConfirmResponse;
                    toProto(message: _65.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelOpenConfirmResponse): _65.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _65.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelCloseInit;
                    fromPartial(object: Partial<_65.MsgChannelCloseInit>): _65.MsgChannelCloseInit;
                    fromAmino(object: _65.MsgChannelCloseInitAmino): _65.MsgChannelCloseInit;
                    toAmino(message: _65.MsgChannelCloseInit): _65.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _65.MsgChannelCloseInitAminoMsg): _65.MsgChannelCloseInit;
                    toAminoMsg(message: _65.MsgChannelCloseInit): _65.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelCloseInitProtoMsg): _65.MsgChannelCloseInit;
                    toProto(message: _65.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelCloseInit): _65.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _65.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_65.MsgChannelCloseInitResponse>): _65.MsgChannelCloseInitResponse;
                    fromAmino(_: _65.MsgChannelCloseInitResponseAmino): _65.MsgChannelCloseInitResponse;
                    toAmino(_: _65.MsgChannelCloseInitResponse): _65.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _65.MsgChannelCloseInitResponseAminoMsg): _65.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _65.MsgChannelCloseInitResponse): _65.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelCloseInitResponseProtoMsg): _65.MsgChannelCloseInitResponse;
                    toProto(message: _65.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelCloseInitResponse): _65.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _65.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_65.MsgChannelCloseConfirm>): _65.MsgChannelCloseConfirm;
                    fromAmino(object: _65.MsgChannelCloseConfirmAmino): _65.MsgChannelCloseConfirm;
                    toAmino(message: _65.MsgChannelCloseConfirm): _65.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _65.MsgChannelCloseConfirmAminoMsg): _65.MsgChannelCloseConfirm;
                    toAminoMsg(message: _65.MsgChannelCloseConfirm): _65.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelCloseConfirmProtoMsg): _65.MsgChannelCloseConfirm;
                    toProto(message: _65.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelCloseConfirm): _65.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _65.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_65.MsgChannelCloseConfirmResponse>): _65.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _65.MsgChannelCloseConfirmResponseAmino): _65.MsgChannelCloseConfirmResponse;
                    toAmino(_: _65.MsgChannelCloseConfirmResponse): _65.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _65.MsgChannelCloseConfirmResponseAminoMsg): _65.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _65.MsgChannelCloseConfirmResponse): _65.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgChannelCloseConfirmResponseProtoMsg): _65.MsgChannelCloseConfirmResponse;
                    toProto(message: _65.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgChannelCloseConfirmResponse): _65.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _65.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgRecvPacket;
                    fromPartial(object: Partial<_65.MsgRecvPacket>): _65.MsgRecvPacket;
                    fromAmino(object: _65.MsgRecvPacketAmino): _65.MsgRecvPacket;
                    toAmino(message: _65.MsgRecvPacket): _65.MsgRecvPacketAmino;
                    fromAminoMsg(object: _65.MsgRecvPacketAminoMsg): _65.MsgRecvPacket;
                    toAminoMsg(message: _65.MsgRecvPacket): _65.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _65.MsgRecvPacketProtoMsg): _65.MsgRecvPacket;
                    toProto(message: _65.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _65.MsgRecvPacket): _65.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(_: _65.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_65.MsgRecvPacketResponse>): _65.MsgRecvPacketResponse;
                    fromAmino(_: _65.MsgRecvPacketResponseAmino): _65.MsgRecvPacketResponse;
                    toAmino(_: _65.MsgRecvPacketResponse): _65.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _65.MsgRecvPacketResponseAminoMsg): _65.MsgRecvPacketResponse;
                    toAminoMsg(message: _65.MsgRecvPacketResponse): _65.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgRecvPacketResponseProtoMsg): _65.MsgRecvPacketResponse;
                    toProto(message: _65.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgRecvPacketResponse): _65.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _65.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgTimeout;
                    fromPartial(object: Partial<_65.MsgTimeout>): _65.MsgTimeout;
                    fromAmino(object: _65.MsgTimeoutAmino): _65.MsgTimeout;
                    toAmino(message: _65.MsgTimeout): _65.MsgTimeoutAmino;
                    fromAminoMsg(object: _65.MsgTimeoutAminoMsg): _65.MsgTimeout;
                    toAminoMsg(message: _65.MsgTimeout): _65.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _65.MsgTimeoutProtoMsg): _65.MsgTimeout;
                    toProto(message: _65.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _65.MsgTimeout): _65.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _65.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgTimeoutResponse;
                    fromPartial(_: Partial<_65.MsgTimeoutResponse>): _65.MsgTimeoutResponse;
                    fromAmino(_: _65.MsgTimeoutResponseAmino): _65.MsgTimeoutResponse;
                    toAmino(_: _65.MsgTimeoutResponse): _65.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _65.MsgTimeoutResponseAminoMsg): _65.MsgTimeoutResponse;
                    toAminoMsg(message: _65.MsgTimeoutResponse): _65.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgTimeoutResponseProtoMsg): _65.MsgTimeoutResponse;
                    toProto(message: _65.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgTimeoutResponse): _65.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _65.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_65.MsgTimeoutOnClose>): _65.MsgTimeoutOnClose;
                    fromAmino(object: _65.MsgTimeoutOnCloseAmino): _65.MsgTimeoutOnClose;
                    toAmino(message: _65.MsgTimeoutOnClose): _65.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _65.MsgTimeoutOnCloseAminoMsg): _65.MsgTimeoutOnClose;
                    toAminoMsg(message: _65.MsgTimeoutOnClose): _65.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _65.MsgTimeoutOnCloseProtoMsg): _65.MsgTimeoutOnClose;
                    toProto(message: _65.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _65.MsgTimeoutOnClose): _65.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(_: _65.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_65.MsgTimeoutOnCloseResponse>): _65.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _65.MsgTimeoutOnCloseResponseAmino): _65.MsgTimeoutOnCloseResponse;
                    toAmino(_: _65.MsgTimeoutOnCloseResponse): _65.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _65.MsgTimeoutOnCloseResponseAminoMsg): _65.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _65.MsgTimeoutOnCloseResponse): _65.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgTimeoutOnCloseResponseProtoMsg): _65.MsgTimeoutOnCloseResponse;
                    toProto(message: _65.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgTimeoutOnCloseResponse): _65.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _65.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgAcknowledgement;
                    fromPartial(object: Partial<_65.MsgAcknowledgement>): _65.MsgAcknowledgement;
                    fromAmino(object: _65.MsgAcknowledgementAmino): _65.MsgAcknowledgement;
                    toAmino(message: _65.MsgAcknowledgement): _65.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _65.MsgAcknowledgementAminoMsg): _65.MsgAcknowledgement;
                    toAminoMsg(message: _65.MsgAcknowledgement): _65.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _65.MsgAcknowledgementProtoMsg): _65.MsgAcknowledgement;
                    toProto(message: _65.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _65.MsgAcknowledgement): _65.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(_: _65.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_65.MsgAcknowledgementResponse>): _65.MsgAcknowledgementResponse;
                    fromAmino(_: _65.MsgAcknowledgementResponseAmino): _65.MsgAcknowledgementResponse;
                    toAmino(_: _65.MsgAcknowledgementResponse): _65.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _65.MsgAcknowledgementResponseAminoMsg): _65.MsgAcknowledgementResponse;
                    toAminoMsg(message: _65.MsgAcknowledgementResponse): _65.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgAcknowledgementResponseProtoMsg): _65.MsgAcknowledgementResponse;
                    toProto(message: _65.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgAcknowledgementResponse): _65.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryChannelRequest;
                    fromPartial(object: Partial<_64.QueryChannelRequest>): _64.QueryChannelRequest;
                    fromAmino(object: _64.QueryChannelRequestAmino): _64.QueryChannelRequest;
                    toAmino(message: _64.QueryChannelRequest): _64.QueryChannelRequestAmino;
                    fromAminoMsg(object: _64.QueryChannelRequestAminoMsg): _64.QueryChannelRequest;
                    toAminoMsg(message: _64.QueryChannelRequest): _64.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryChannelRequestProtoMsg): _64.QueryChannelRequest;
                    toProto(message: _64.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryChannelRequest): _64.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryChannelResponse;
                    fromPartial(object: Partial<_64.QueryChannelResponse>): _64.QueryChannelResponse;
                    fromAmino(object: _64.QueryChannelResponseAmino): _64.QueryChannelResponse;
                    toAmino(message: _64.QueryChannelResponse): _64.QueryChannelResponseAmino;
                    fromAminoMsg(object: _64.QueryChannelResponseAminoMsg): _64.QueryChannelResponse;
                    toAminoMsg(message: _64.QueryChannelResponse): _64.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryChannelResponseProtoMsg): _64.QueryChannelResponse;
                    toProto(message: _64.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryChannelResponse): _64.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryChannelsRequest;
                    fromPartial(object: Partial<_64.QueryChannelsRequest>): _64.QueryChannelsRequest;
                    fromAmino(object: _64.QueryChannelsRequestAmino): _64.QueryChannelsRequest;
                    toAmino(message: _64.QueryChannelsRequest): _64.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _64.QueryChannelsRequestAminoMsg): _64.QueryChannelsRequest;
                    toAminoMsg(message: _64.QueryChannelsRequest): _64.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryChannelsRequestProtoMsg): _64.QueryChannelsRequest;
                    toProto(message: _64.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryChannelsRequest): _64.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryChannelsResponse;
                    fromPartial(object: Partial<_64.QueryChannelsResponse>): _64.QueryChannelsResponse;
                    fromAmino(object: _64.QueryChannelsResponseAmino): _64.QueryChannelsResponse;
                    toAmino(message: _64.QueryChannelsResponse): _64.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _64.QueryChannelsResponseAminoMsg): _64.QueryChannelsResponse;
                    toAminoMsg(message: _64.QueryChannelsResponse): _64.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryChannelsResponseProtoMsg): _64.QueryChannelsResponse;
                    toProto(message: _64.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryChannelsResponse): _64.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_64.QueryConnectionChannelsRequest>): _64.QueryConnectionChannelsRequest;
                    fromAmino(object: _64.QueryConnectionChannelsRequestAmino): _64.QueryConnectionChannelsRequest;
                    toAmino(message: _64.QueryConnectionChannelsRequest): _64.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _64.QueryConnectionChannelsRequestAminoMsg): _64.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _64.QueryConnectionChannelsRequest): _64.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryConnectionChannelsRequestProtoMsg): _64.QueryConnectionChannelsRequest;
                    toProto(message: _64.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryConnectionChannelsRequest): _64.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_64.QueryConnectionChannelsResponse>): _64.QueryConnectionChannelsResponse;
                    fromAmino(object: _64.QueryConnectionChannelsResponseAmino): _64.QueryConnectionChannelsResponse;
                    toAmino(message: _64.QueryConnectionChannelsResponse): _64.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _64.QueryConnectionChannelsResponseAminoMsg): _64.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _64.QueryConnectionChannelsResponse): _64.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryConnectionChannelsResponseProtoMsg): _64.QueryConnectionChannelsResponse;
                    toProto(message: _64.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryConnectionChannelsResponse): _64.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_64.QueryChannelClientStateRequest>): _64.QueryChannelClientStateRequest;
                    fromAmino(object: _64.QueryChannelClientStateRequestAmino): _64.QueryChannelClientStateRequest;
                    toAmino(message: _64.QueryChannelClientStateRequest): _64.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _64.QueryChannelClientStateRequestAminoMsg): _64.QueryChannelClientStateRequest;
                    toAminoMsg(message: _64.QueryChannelClientStateRequest): _64.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryChannelClientStateRequestProtoMsg): _64.QueryChannelClientStateRequest;
                    toProto(message: _64.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryChannelClientStateRequest): _64.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_64.QueryChannelClientStateResponse>): _64.QueryChannelClientStateResponse;
                    fromAmino(object: _64.QueryChannelClientStateResponseAmino): _64.QueryChannelClientStateResponse;
                    toAmino(message: _64.QueryChannelClientStateResponse): _64.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _64.QueryChannelClientStateResponseAminoMsg): _64.QueryChannelClientStateResponse;
                    toAminoMsg(message: _64.QueryChannelClientStateResponse): _64.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryChannelClientStateResponseProtoMsg): _64.QueryChannelClientStateResponse;
                    toProto(message: _64.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryChannelClientStateResponse): _64.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_64.QueryChannelConsensusStateRequest>): _64.QueryChannelConsensusStateRequest;
                    fromAmino(object: _64.QueryChannelConsensusStateRequestAmino): _64.QueryChannelConsensusStateRequest;
                    toAmino(message: _64.QueryChannelConsensusStateRequest): _64.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _64.QueryChannelConsensusStateRequestAminoMsg): _64.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _64.QueryChannelConsensusStateRequest): _64.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryChannelConsensusStateRequestProtoMsg): _64.QueryChannelConsensusStateRequest;
                    toProto(message: _64.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryChannelConsensusStateRequest): _64.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_64.QueryChannelConsensusStateResponse>): _64.QueryChannelConsensusStateResponse;
                    fromAmino(object: _64.QueryChannelConsensusStateResponseAmino): _64.QueryChannelConsensusStateResponse;
                    toAmino(message: _64.QueryChannelConsensusStateResponse): _64.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _64.QueryChannelConsensusStateResponseAminoMsg): _64.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _64.QueryChannelConsensusStateResponse): _64.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryChannelConsensusStateResponseProtoMsg): _64.QueryChannelConsensusStateResponse;
                    toProto(message: _64.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryChannelConsensusStateResponse): _64.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_64.QueryPacketCommitmentRequest>): _64.QueryPacketCommitmentRequest;
                    fromAmino(object: _64.QueryPacketCommitmentRequestAmino): _64.QueryPacketCommitmentRequest;
                    toAmino(message: _64.QueryPacketCommitmentRequest): _64.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _64.QueryPacketCommitmentRequestAminoMsg): _64.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _64.QueryPacketCommitmentRequest): _64.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryPacketCommitmentRequestProtoMsg): _64.QueryPacketCommitmentRequest;
                    toProto(message: _64.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryPacketCommitmentRequest): _64.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_64.QueryPacketCommitmentResponse>): _64.QueryPacketCommitmentResponse;
                    fromAmino(object: _64.QueryPacketCommitmentResponseAmino): _64.QueryPacketCommitmentResponse;
                    toAmino(message: _64.QueryPacketCommitmentResponse): _64.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _64.QueryPacketCommitmentResponseAminoMsg): _64.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _64.QueryPacketCommitmentResponse): _64.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryPacketCommitmentResponseProtoMsg): _64.QueryPacketCommitmentResponse;
                    toProto(message: _64.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryPacketCommitmentResponse): _64.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_64.QueryPacketCommitmentsRequest>): _64.QueryPacketCommitmentsRequest;
                    fromAmino(object: _64.QueryPacketCommitmentsRequestAmino): _64.QueryPacketCommitmentsRequest;
                    toAmino(message: _64.QueryPacketCommitmentsRequest): _64.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _64.QueryPacketCommitmentsRequestAminoMsg): _64.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _64.QueryPacketCommitmentsRequest): _64.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryPacketCommitmentsRequestProtoMsg): _64.QueryPacketCommitmentsRequest;
                    toProto(message: _64.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryPacketCommitmentsRequest): _64.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_64.QueryPacketCommitmentsResponse>): _64.QueryPacketCommitmentsResponse;
                    fromAmino(object: _64.QueryPacketCommitmentsResponseAmino): _64.QueryPacketCommitmentsResponse;
                    toAmino(message: _64.QueryPacketCommitmentsResponse): _64.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _64.QueryPacketCommitmentsResponseAminoMsg): _64.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _64.QueryPacketCommitmentsResponse): _64.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryPacketCommitmentsResponseProtoMsg): _64.QueryPacketCommitmentsResponse;
                    toProto(message: _64.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryPacketCommitmentsResponse): _64.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_64.QueryPacketReceiptRequest>): _64.QueryPacketReceiptRequest;
                    fromAmino(object: _64.QueryPacketReceiptRequestAmino): _64.QueryPacketReceiptRequest;
                    toAmino(message: _64.QueryPacketReceiptRequest): _64.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _64.QueryPacketReceiptRequestAminoMsg): _64.QueryPacketReceiptRequest;
                    toAminoMsg(message: _64.QueryPacketReceiptRequest): _64.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryPacketReceiptRequestProtoMsg): _64.QueryPacketReceiptRequest;
                    toProto(message: _64.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryPacketReceiptRequest): _64.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_64.QueryPacketReceiptResponse>): _64.QueryPacketReceiptResponse;
                    fromAmino(object: _64.QueryPacketReceiptResponseAmino): _64.QueryPacketReceiptResponse;
                    toAmino(message: _64.QueryPacketReceiptResponse): _64.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _64.QueryPacketReceiptResponseAminoMsg): _64.QueryPacketReceiptResponse;
                    toAminoMsg(message: _64.QueryPacketReceiptResponse): _64.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryPacketReceiptResponseProtoMsg): _64.QueryPacketReceiptResponse;
                    toProto(message: _64.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryPacketReceiptResponse): _64.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_64.QueryPacketAcknowledgementRequest>): _64.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _64.QueryPacketAcknowledgementRequestAmino): _64.QueryPacketAcknowledgementRequest;
                    toAmino(message: _64.QueryPacketAcknowledgementRequest): _64.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _64.QueryPacketAcknowledgementRequestAminoMsg): _64.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _64.QueryPacketAcknowledgementRequest): _64.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryPacketAcknowledgementRequestProtoMsg): _64.QueryPacketAcknowledgementRequest;
                    toProto(message: _64.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryPacketAcknowledgementRequest): _64.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_64.QueryPacketAcknowledgementResponse>): _64.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _64.QueryPacketAcknowledgementResponseAmino): _64.QueryPacketAcknowledgementResponse;
                    toAmino(message: _64.QueryPacketAcknowledgementResponse): _64.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _64.QueryPacketAcknowledgementResponseAminoMsg): _64.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _64.QueryPacketAcknowledgementResponse): _64.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryPacketAcknowledgementResponseProtoMsg): _64.QueryPacketAcknowledgementResponse;
                    toProto(message: _64.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryPacketAcknowledgementResponse): _64.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_64.QueryPacketAcknowledgementsRequest>): _64.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _64.QueryPacketAcknowledgementsRequestAmino): _64.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _64.QueryPacketAcknowledgementsRequest): _64.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _64.QueryPacketAcknowledgementsRequestAminoMsg): _64.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _64.QueryPacketAcknowledgementsRequest): _64.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryPacketAcknowledgementsRequestProtoMsg): _64.QueryPacketAcknowledgementsRequest;
                    toProto(message: _64.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryPacketAcknowledgementsRequest): _64.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_64.QueryPacketAcknowledgementsResponse>): _64.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _64.QueryPacketAcknowledgementsResponseAmino): _64.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _64.QueryPacketAcknowledgementsResponse): _64.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _64.QueryPacketAcknowledgementsResponseAminoMsg): _64.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _64.QueryPacketAcknowledgementsResponse): _64.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryPacketAcknowledgementsResponseProtoMsg): _64.QueryPacketAcknowledgementsResponse;
                    toProto(message: _64.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryPacketAcknowledgementsResponse): _64.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_64.QueryUnreceivedPacketsRequest>): _64.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _64.QueryUnreceivedPacketsRequestAmino): _64.QueryUnreceivedPacketsRequest;
                    toAmino(message: _64.QueryUnreceivedPacketsRequest): _64.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _64.QueryUnreceivedPacketsRequestAminoMsg): _64.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _64.QueryUnreceivedPacketsRequest): _64.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryUnreceivedPacketsRequestProtoMsg): _64.QueryUnreceivedPacketsRequest;
                    toProto(message: _64.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryUnreceivedPacketsRequest): _64.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_64.QueryUnreceivedPacketsResponse>): _64.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _64.QueryUnreceivedPacketsResponseAmino): _64.QueryUnreceivedPacketsResponse;
                    toAmino(message: _64.QueryUnreceivedPacketsResponse): _64.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _64.QueryUnreceivedPacketsResponseAminoMsg): _64.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _64.QueryUnreceivedPacketsResponse): _64.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryUnreceivedPacketsResponseProtoMsg): _64.QueryUnreceivedPacketsResponse;
                    toProto(message: _64.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryUnreceivedPacketsResponse): _64.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_64.QueryUnreceivedAcksRequest>): _64.QueryUnreceivedAcksRequest;
                    fromAmino(object: _64.QueryUnreceivedAcksRequestAmino): _64.QueryUnreceivedAcksRequest;
                    toAmino(message: _64.QueryUnreceivedAcksRequest): _64.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _64.QueryUnreceivedAcksRequestAminoMsg): _64.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _64.QueryUnreceivedAcksRequest): _64.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryUnreceivedAcksRequestProtoMsg): _64.QueryUnreceivedAcksRequest;
                    toProto(message: _64.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryUnreceivedAcksRequest): _64.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_64.QueryUnreceivedAcksResponse>): _64.QueryUnreceivedAcksResponse;
                    fromAmino(object: _64.QueryUnreceivedAcksResponseAmino): _64.QueryUnreceivedAcksResponse;
                    toAmino(message: _64.QueryUnreceivedAcksResponse): _64.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _64.QueryUnreceivedAcksResponseAminoMsg): _64.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _64.QueryUnreceivedAcksResponse): _64.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryUnreceivedAcksResponseProtoMsg): _64.QueryUnreceivedAcksResponse;
                    toProto(message: _64.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryUnreceivedAcksResponse): _64.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _64.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_64.QueryNextSequenceReceiveRequest>): _64.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _64.QueryNextSequenceReceiveRequestAmino): _64.QueryNextSequenceReceiveRequest;
                    toAmino(message: _64.QueryNextSequenceReceiveRequest): _64.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _64.QueryNextSequenceReceiveRequestAminoMsg): _64.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _64.QueryNextSequenceReceiveRequest): _64.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryNextSequenceReceiveRequestProtoMsg): _64.QueryNextSequenceReceiveRequest;
                    toProto(message: _64.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryNextSequenceReceiveRequest): _64.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _64.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_64.QueryNextSequenceReceiveResponse>): _64.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _64.QueryNextSequenceReceiveResponseAmino): _64.QueryNextSequenceReceiveResponse;
                    toAmino(message: _64.QueryNextSequenceReceiveResponse): _64.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _64.QueryNextSequenceReceiveResponseAminoMsg): _64.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _64.QueryNextSequenceReceiveResponse): _64.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryNextSequenceReceiveResponseProtoMsg): _64.QueryNextSequenceReceiveResponse;
                    toProto(message: _64.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryNextSequenceReceiveResponse): _64.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _63.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.GenesisState;
                    fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                    fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                    toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                    fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                    toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                    fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                    toProto(message: _63.GenesisState): Uint8Array;
                    toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _63.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.PacketSequence;
                    fromPartial(object: Partial<_63.PacketSequence>): _63.PacketSequence;
                    fromAmino(object: _63.PacketSequenceAmino): _63.PacketSequence;
                    toAmino(message: _63.PacketSequence): _63.PacketSequenceAmino;
                    fromAminoMsg(object: _63.PacketSequenceAminoMsg): _63.PacketSequence;
                    toAminoMsg(message: _63.PacketSequence): _63.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _63.PacketSequenceProtoMsg): _63.PacketSequence;
                    toProto(message: _63.PacketSequence): Uint8Array;
                    toProtoMsg(message: _63.PacketSequence): _63.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _62.State;
                stateToJSON(object: _62.State): string;
                orderFromJSON(object: any): _62.Order;
                orderToJSON(object: _62.Order): string;
                State: typeof _62.State;
                StateSDKType: typeof _62.State;
                StateAmino: typeof _62.State;
                Order: typeof _62.Order;
                OrderSDKType: typeof _62.Order;
                OrderAmino: typeof _62.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _62.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.Channel;
                    fromPartial(object: Partial<_62.Channel>): _62.Channel;
                    fromAmino(object: _62.ChannelAmino): _62.Channel;
                    toAmino(message: _62.Channel): _62.ChannelAmino;
                    fromAminoMsg(object: _62.ChannelAminoMsg): _62.Channel;
                    toAminoMsg(message: _62.Channel): _62.ChannelAminoMsg;
                    fromProtoMsg(message: _62.ChannelProtoMsg): _62.Channel;
                    toProto(message: _62.Channel): Uint8Array;
                    toProtoMsg(message: _62.Channel): _62.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _62.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.IdentifiedChannel;
                    fromPartial(object: Partial<_62.IdentifiedChannel>): _62.IdentifiedChannel;
                    fromAmino(object: _62.IdentifiedChannelAmino): _62.IdentifiedChannel;
                    toAmino(message: _62.IdentifiedChannel): _62.IdentifiedChannelAmino;
                    fromAminoMsg(object: _62.IdentifiedChannelAminoMsg): _62.IdentifiedChannel;
                    toAminoMsg(message: _62.IdentifiedChannel): _62.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _62.IdentifiedChannelProtoMsg): _62.IdentifiedChannel;
                    toProto(message: _62.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _62.IdentifiedChannel): _62.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _62.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.Counterparty;
                    fromPartial(object: Partial<_62.Counterparty>): _62.Counterparty;
                    fromAmino(object: _62.CounterpartyAmino): _62.Counterparty;
                    toAmino(message: _62.Counterparty): _62.CounterpartyAmino;
                    fromAminoMsg(object: _62.CounterpartyAminoMsg): _62.Counterparty;
                    toAminoMsg(message: _62.Counterparty): _62.CounterpartyAminoMsg;
                    fromProtoMsg(message: _62.CounterpartyProtoMsg): _62.Counterparty;
                    toProto(message: _62.Counterparty): Uint8Array;
                    toProtoMsg(message: _62.Counterparty): _62.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _62.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.Packet;
                    fromPartial(object: Partial<_62.Packet>): _62.Packet;
                    fromAmino(object: _62.PacketAmino): _62.Packet;
                    toAmino(message: _62.Packet): _62.PacketAmino;
                    fromAminoMsg(object: _62.PacketAminoMsg): _62.Packet;
                    toAminoMsg(message: _62.Packet): _62.PacketAminoMsg;
                    fromProtoMsg(message: _62.PacketProtoMsg): _62.Packet;
                    toProto(message: _62.Packet): Uint8Array;
                    toProtoMsg(message: _62.Packet): _62.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _62.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.PacketState;
                    fromPartial(object: Partial<_62.PacketState>): _62.PacketState;
                    fromAmino(object: _62.PacketStateAmino): _62.PacketState;
                    toAmino(message: _62.PacketState): _62.PacketStateAmino;
                    fromAminoMsg(object: _62.PacketStateAminoMsg): _62.PacketState;
                    toAminoMsg(message: _62.PacketState): _62.PacketStateAminoMsg;
                    fromProtoMsg(message: _62.PacketStateProtoMsg): _62.PacketState;
                    toProto(message: _62.PacketState): Uint8Array;
                    toProtoMsg(message: _62.PacketState): _62.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _62.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.Acknowledgement;
                    fromPartial(object: Partial<_62.Acknowledgement>): _62.Acknowledgement;
                    fromAmino(object: _62.AcknowledgementAmino): _62.Acknowledgement;
                    toAmino(message: _62.Acknowledgement): _62.AcknowledgementAmino;
                    fromAminoMsg(object: _62.AcknowledgementAminoMsg): _62.Acknowledgement;
                    toAminoMsg(message: _62.Acknowledgement): _62.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _62.AcknowledgementProtoMsg): _62.Acknowledgement;
                    toProto(message: _62.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _62.Acknowledgement): _62.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _155.MsgClientImpl;
                QueryClientImpl: typeof _151.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _68.QueryClientStateRequest): Promise<_68.QueryClientStateResponse>;
                    clientStates(request?: _68.QueryClientStatesRequest): Promise<_68.QueryClientStatesResponse>;
                    consensusState(request: _68.QueryConsensusStateRequest): Promise<_68.QueryConsensusStateResponse>;
                    consensusStates(request: _68.QueryConsensusStatesRequest): Promise<_68.QueryConsensusStatesResponse>;
                    clientStatus(request: _68.QueryClientStatusRequest): Promise<_68.QueryClientStatusResponse>;
                    clientParams(request?: _68.QueryClientParamsRequest): Promise<_68.QueryClientParamsResponse>;
                    upgradedClientState(request?: _68.QueryUpgradedClientStateRequest): Promise<_68.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _68.QueryUpgradedConsensusStateRequest): Promise<_68.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _147.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _69.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        updateClient(value: _69.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        upgradeClient(value: _69.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        submitMisbehaviour(value: _69.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _69.MsgCreateClient): {
                            typeUrl: string;
                            value: _69.MsgCreateClient;
                        };
                        updateClient(value: _69.MsgUpdateClient): {
                            typeUrl: string;
                            value: _69.MsgUpdateClient;
                        };
                        upgradeClient(value: _69.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _69.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _69.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _69.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _69.MsgCreateClient): {
                            typeUrl: string;
                            value: _69.MsgCreateClient;
                        };
                        updateClient(value: _69.MsgUpdateClient): {
                            typeUrl: string;
                            value: _69.MsgUpdateClient;
                        };
                        upgradeClient(value: _69.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _69.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _69.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _69.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _69.MsgCreateClient) => _69.MsgCreateClientAmino;
                        fromAmino: (object: _69.MsgCreateClientAmino) => _69.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _69.MsgUpdateClient) => _69.MsgUpdateClientAmino;
                        fromAmino: (object: _69.MsgUpdateClientAmino) => _69.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _69.MsgUpgradeClient) => _69.MsgUpgradeClientAmino;
                        fromAmino: (object: _69.MsgUpgradeClientAmino) => _69.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _69.MsgSubmitMisbehaviour) => _69.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _69.MsgSubmitMisbehaviourAmino) => _69.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _69.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgCreateClient;
                    fromPartial(object: Partial<_69.MsgCreateClient>): _69.MsgCreateClient;
                    fromAmino(object: _69.MsgCreateClientAmino): _69.MsgCreateClient;
                    toAmino(message: _69.MsgCreateClient): _69.MsgCreateClientAmino;
                    fromAminoMsg(object: _69.MsgCreateClientAminoMsg): _69.MsgCreateClient;
                    toAminoMsg(message: _69.MsgCreateClient): _69.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _69.MsgCreateClientProtoMsg): _69.MsgCreateClient;
                    toProto(message: _69.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _69.MsgCreateClient): _69.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _69.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgCreateClientResponse;
                    fromPartial(_: Partial<_69.MsgCreateClientResponse>): _69.MsgCreateClientResponse;
                    fromAmino(_: _69.MsgCreateClientResponseAmino): _69.MsgCreateClientResponse;
                    toAmino(_: _69.MsgCreateClientResponse): _69.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _69.MsgCreateClientResponseAminoMsg): _69.MsgCreateClientResponse;
                    toAminoMsg(message: _69.MsgCreateClientResponse): _69.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _69.MsgCreateClientResponseProtoMsg): _69.MsgCreateClientResponse;
                    toProto(message: _69.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _69.MsgCreateClientResponse): _69.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _69.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgUpdateClient;
                    fromPartial(object: Partial<_69.MsgUpdateClient>): _69.MsgUpdateClient;
                    fromAmino(object: _69.MsgUpdateClientAmino): _69.MsgUpdateClient;
                    toAmino(message: _69.MsgUpdateClient): _69.MsgUpdateClientAmino;
                    fromAminoMsg(object: _69.MsgUpdateClientAminoMsg): _69.MsgUpdateClient;
                    toAminoMsg(message: _69.MsgUpdateClient): _69.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _69.MsgUpdateClientProtoMsg): _69.MsgUpdateClient;
                    toProto(message: _69.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _69.MsgUpdateClient): _69.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _69.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_69.MsgUpdateClientResponse>): _69.MsgUpdateClientResponse;
                    fromAmino(_: _69.MsgUpdateClientResponseAmino): _69.MsgUpdateClientResponse;
                    toAmino(_: _69.MsgUpdateClientResponse): _69.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _69.MsgUpdateClientResponseAminoMsg): _69.MsgUpdateClientResponse;
                    toAminoMsg(message: _69.MsgUpdateClientResponse): _69.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _69.MsgUpdateClientResponseProtoMsg): _69.MsgUpdateClientResponse;
                    toProto(message: _69.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _69.MsgUpdateClientResponse): _69.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _69.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgUpgradeClient;
                    fromPartial(object: Partial<_69.MsgUpgradeClient>): _69.MsgUpgradeClient;
                    fromAmino(object: _69.MsgUpgradeClientAmino): _69.MsgUpgradeClient;
                    toAmino(message: _69.MsgUpgradeClient): _69.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _69.MsgUpgradeClientAminoMsg): _69.MsgUpgradeClient;
                    toAminoMsg(message: _69.MsgUpgradeClient): _69.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _69.MsgUpgradeClientProtoMsg): _69.MsgUpgradeClient;
                    toProto(message: _69.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _69.MsgUpgradeClient): _69.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _69.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_69.MsgUpgradeClientResponse>): _69.MsgUpgradeClientResponse;
                    fromAmino(_: _69.MsgUpgradeClientResponseAmino): _69.MsgUpgradeClientResponse;
                    toAmino(_: _69.MsgUpgradeClientResponse): _69.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _69.MsgUpgradeClientResponseAminoMsg): _69.MsgUpgradeClientResponse;
                    toAminoMsg(message: _69.MsgUpgradeClientResponse): _69.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _69.MsgUpgradeClientResponseProtoMsg): _69.MsgUpgradeClientResponse;
                    toProto(message: _69.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _69.MsgUpgradeClientResponse): _69.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _69.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_69.MsgSubmitMisbehaviour>): _69.MsgSubmitMisbehaviour;
                    fromAmino(object: _69.MsgSubmitMisbehaviourAmino): _69.MsgSubmitMisbehaviour;
                    toAmino(message: _69.MsgSubmitMisbehaviour): _69.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _69.MsgSubmitMisbehaviourAminoMsg): _69.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _69.MsgSubmitMisbehaviour): _69.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _69.MsgSubmitMisbehaviourProtoMsg): _69.MsgSubmitMisbehaviour;
                    toProto(message: _69.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _69.MsgSubmitMisbehaviour): _69.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _69.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_69.MsgSubmitMisbehaviourResponse>): _69.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _69.MsgSubmitMisbehaviourResponseAmino): _69.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _69.MsgSubmitMisbehaviourResponse): _69.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _69.MsgSubmitMisbehaviourResponseAminoMsg): _69.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _69.MsgSubmitMisbehaviourResponse): _69.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _69.MsgSubmitMisbehaviourResponseProtoMsg): _69.MsgSubmitMisbehaviourResponse;
                    toProto(message: _69.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _69.MsgSubmitMisbehaviourResponse): _69.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _68.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryClientStateRequest;
                    fromPartial(object: Partial<_68.QueryClientStateRequest>): _68.QueryClientStateRequest;
                    fromAmino(object: _68.QueryClientStateRequestAmino): _68.QueryClientStateRequest;
                    toAmino(message: _68.QueryClientStateRequest): _68.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _68.QueryClientStateRequestAminoMsg): _68.QueryClientStateRequest;
                    toAminoMsg(message: _68.QueryClientStateRequest): _68.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _68.QueryClientStateRequestProtoMsg): _68.QueryClientStateRequest;
                    toProto(message: _68.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _68.QueryClientStateRequest): _68.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _68.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryClientStateResponse;
                    fromPartial(object: Partial<_68.QueryClientStateResponse>): _68.QueryClientStateResponse;
                    fromAmino(object: _68.QueryClientStateResponseAmino): _68.QueryClientStateResponse;
                    toAmino(message: _68.QueryClientStateResponse): _68.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _68.QueryClientStateResponseAminoMsg): _68.QueryClientStateResponse;
                    toAminoMsg(message: _68.QueryClientStateResponse): _68.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _68.QueryClientStateResponseProtoMsg): _68.QueryClientStateResponse;
                    toProto(message: _68.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _68.QueryClientStateResponse): _68.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _68.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryClientStatesRequest;
                    fromPartial(object: Partial<_68.QueryClientStatesRequest>): _68.QueryClientStatesRequest;
                    fromAmino(object: _68.QueryClientStatesRequestAmino): _68.QueryClientStatesRequest;
                    toAmino(message: _68.QueryClientStatesRequest): _68.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _68.QueryClientStatesRequestAminoMsg): _68.QueryClientStatesRequest;
                    toAminoMsg(message: _68.QueryClientStatesRequest): _68.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _68.QueryClientStatesRequestProtoMsg): _68.QueryClientStatesRequest;
                    toProto(message: _68.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _68.QueryClientStatesRequest): _68.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _68.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryClientStatesResponse;
                    fromPartial(object: Partial<_68.QueryClientStatesResponse>): _68.QueryClientStatesResponse;
                    fromAmino(object: _68.QueryClientStatesResponseAmino): _68.QueryClientStatesResponse;
                    toAmino(message: _68.QueryClientStatesResponse): _68.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _68.QueryClientStatesResponseAminoMsg): _68.QueryClientStatesResponse;
                    toAminoMsg(message: _68.QueryClientStatesResponse): _68.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _68.QueryClientStatesResponseProtoMsg): _68.QueryClientStatesResponse;
                    toProto(message: _68.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _68.QueryClientStatesResponse): _68.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _68.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_68.QueryConsensusStateRequest>): _68.QueryConsensusStateRequest;
                    fromAmino(object: _68.QueryConsensusStateRequestAmino): _68.QueryConsensusStateRequest;
                    toAmino(message: _68.QueryConsensusStateRequest): _68.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _68.QueryConsensusStateRequestAminoMsg): _68.QueryConsensusStateRequest;
                    toAminoMsg(message: _68.QueryConsensusStateRequest): _68.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _68.QueryConsensusStateRequestProtoMsg): _68.QueryConsensusStateRequest;
                    toProto(message: _68.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _68.QueryConsensusStateRequest): _68.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _68.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_68.QueryConsensusStateResponse>): _68.QueryConsensusStateResponse;
                    fromAmino(object: _68.QueryConsensusStateResponseAmino): _68.QueryConsensusStateResponse;
                    toAmino(message: _68.QueryConsensusStateResponse): _68.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _68.QueryConsensusStateResponseAminoMsg): _68.QueryConsensusStateResponse;
                    toAminoMsg(message: _68.QueryConsensusStateResponse): _68.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _68.QueryConsensusStateResponseProtoMsg): _68.QueryConsensusStateResponse;
                    toProto(message: _68.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _68.QueryConsensusStateResponse): _68.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _68.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_68.QueryConsensusStatesRequest>): _68.QueryConsensusStatesRequest;
                    fromAmino(object: _68.QueryConsensusStatesRequestAmino): _68.QueryConsensusStatesRequest;
                    toAmino(message: _68.QueryConsensusStatesRequest): _68.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _68.QueryConsensusStatesRequestAminoMsg): _68.QueryConsensusStatesRequest;
                    toAminoMsg(message: _68.QueryConsensusStatesRequest): _68.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _68.QueryConsensusStatesRequestProtoMsg): _68.QueryConsensusStatesRequest;
                    toProto(message: _68.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _68.QueryConsensusStatesRequest): _68.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _68.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_68.QueryConsensusStatesResponse>): _68.QueryConsensusStatesResponse;
                    fromAmino(object: _68.QueryConsensusStatesResponseAmino): _68.QueryConsensusStatesResponse;
                    toAmino(message: _68.QueryConsensusStatesResponse): _68.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _68.QueryConsensusStatesResponseAminoMsg): _68.QueryConsensusStatesResponse;
                    toAminoMsg(message: _68.QueryConsensusStatesResponse): _68.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _68.QueryConsensusStatesResponseProtoMsg): _68.QueryConsensusStatesResponse;
                    toProto(message: _68.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _68.QueryConsensusStatesResponse): _68.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _68.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryClientStatusRequest;
                    fromPartial(object: Partial<_68.QueryClientStatusRequest>): _68.QueryClientStatusRequest;
                    fromAmino(object: _68.QueryClientStatusRequestAmino): _68.QueryClientStatusRequest;
                    toAmino(message: _68.QueryClientStatusRequest): _68.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _68.QueryClientStatusRequestAminoMsg): _68.QueryClientStatusRequest;
                    toAminoMsg(message: _68.QueryClientStatusRequest): _68.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _68.QueryClientStatusRequestProtoMsg): _68.QueryClientStatusRequest;
                    toProto(message: _68.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _68.QueryClientStatusRequest): _68.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _68.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryClientStatusResponse;
                    fromPartial(object: Partial<_68.QueryClientStatusResponse>): _68.QueryClientStatusResponse;
                    fromAmino(object: _68.QueryClientStatusResponseAmino): _68.QueryClientStatusResponse;
                    toAmino(message: _68.QueryClientStatusResponse): _68.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _68.QueryClientStatusResponseAminoMsg): _68.QueryClientStatusResponse;
                    toAminoMsg(message: _68.QueryClientStatusResponse): _68.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _68.QueryClientStatusResponseProtoMsg): _68.QueryClientStatusResponse;
                    toProto(message: _68.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _68.QueryClientStatusResponse): _68.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _68.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryClientParamsRequest;
                    fromPartial(_: Partial<_68.QueryClientParamsRequest>): _68.QueryClientParamsRequest;
                    fromAmino(_: _68.QueryClientParamsRequestAmino): _68.QueryClientParamsRequest;
                    toAmino(_: _68.QueryClientParamsRequest): _68.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _68.QueryClientParamsRequestAminoMsg): _68.QueryClientParamsRequest;
                    toAminoMsg(message: _68.QueryClientParamsRequest): _68.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _68.QueryClientParamsRequestProtoMsg): _68.QueryClientParamsRequest;
                    toProto(message: _68.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _68.QueryClientParamsRequest): _68.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _68.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryClientParamsResponse;
                    fromPartial(object: Partial<_68.QueryClientParamsResponse>): _68.QueryClientParamsResponse;
                    fromAmino(object: _68.QueryClientParamsResponseAmino): _68.QueryClientParamsResponse;
                    toAmino(message: _68.QueryClientParamsResponse): _68.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _68.QueryClientParamsResponseAminoMsg): _68.QueryClientParamsResponse;
                    toAminoMsg(message: _68.QueryClientParamsResponse): _68.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _68.QueryClientParamsResponseProtoMsg): _68.QueryClientParamsResponse;
                    toProto(message: _68.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _68.QueryClientParamsResponse): _68.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _68.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_68.QueryUpgradedClientStateRequest>): _68.QueryUpgradedClientStateRequest;
                    fromAmino(_: _68.QueryUpgradedClientStateRequestAmino): _68.QueryUpgradedClientStateRequest;
                    toAmino(_: _68.QueryUpgradedClientStateRequest): _68.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _68.QueryUpgradedClientStateRequestAminoMsg): _68.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _68.QueryUpgradedClientStateRequest): _68.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _68.QueryUpgradedClientStateRequestProtoMsg): _68.QueryUpgradedClientStateRequest;
                    toProto(message: _68.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _68.QueryUpgradedClientStateRequest): _68.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _68.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_68.QueryUpgradedClientStateResponse>): _68.QueryUpgradedClientStateResponse;
                    fromAmino(object: _68.QueryUpgradedClientStateResponseAmino): _68.QueryUpgradedClientStateResponse;
                    toAmino(message: _68.QueryUpgradedClientStateResponse): _68.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _68.QueryUpgradedClientStateResponseAminoMsg): _68.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _68.QueryUpgradedClientStateResponse): _68.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _68.QueryUpgradedClientStateResponseProtoMsg): _68.QueryUpgradedClientStateResponse;
                    toProto(message: _68.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _68.QueryUpgradedClientStateResponse): _68.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _68.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_68.QueryUpgradedConsensusStateRequest>): _68.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _68.QueryUpgradedConsensusStateRequestAmino): _68.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _68.QueryUpgradedConsensusStateRequest): _68.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _68.QueryUpgradedConsensusStateRequestAminoMsg): _68.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _68.QueryUpgradedConsensusStateRequest): _68.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _68.QueryUpgradedConsensusStateRequestProtoMsg): _68.QueryUpgradedConsensusStateRequest;
                    toProto(message: _68.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _68.QueryUpgradedConsensusStateRequest): _68.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _68.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_68.QueryUpgradedConsensusStateResponse>): _68.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _68.QueryUpgradedConsensusStateResponseAmino): _68.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _68.QueryUpgradedConsensusStateResponse): _68.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _68.QueryUpgradedConsensusStateResponseAminoMsg): _68.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _68.QueryUpgradedConsensusStateResponse): _68.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _68.QueryUpgradedConsensusStateResponseProtoMsg): _68.QueryUpgradedConsensusStateResponse;
                    toProto(message: _68.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _68.QueryUpgradedConsensusStateResponse): _68.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _67.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.GenesisState;
                    fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
                    fromAmino(object: _67.GenesisStateAmino): _67.GenesisState;
                    toAmino(message: _67.GenesisState): _67.GenesisStateAmino;
                    fromAminoMsg(object: _67.GenesisStateAminoMsg): _67.GenesisState;
                    toAminoMsg(message: _67.GenesisState): _67.GenesisStateAminoMsg;
                    fromProtoMsg(message: _67.GenesisStateProtoMsg): _67.GenesisState;
                    toProto(message: _67.GenesisState): Uint8Array;
                    toProtoMsg(message: _67.GenesisState): _67.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _67.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.GenesisMetadata;
                    fromPartial(object: Partial<_67.GenesisMetadata>): _67.GenesisMetadata;
                    fromAmino(object: _67.GenesisMetadataAmino): _67.GenesisMetadata;
                    toAmino(message: _67.GenesisMetadata): _67.GenesisMetadataAmino;
                    fromAminoMsg(object: _67.GenesisMetadataAminoMsg): _67.GenesisMetadata;
                    toAminoMsg(message: _67.GenesisMetadata): _67.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _67.GenesisMetadataProtoMsg): _67.GenesisMetadata;
                    toProto(message: _67.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _67.GenesisMetadata): _67.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _67.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_67.IdentifiedGenesisMetadata>): _67.IdentifiedGenesisMetadata;
                    fromAmino(object: _67.IdentifiedGenesisMetadataAmino): _67.IdentifiedGenesisMetadata;
                    toAmino(message: _67.IdentifiedGenesisMetadata): _67.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _67.IdentifiedGenesisMetadataAminoMsg): _67.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _67.IdentifiedGenesisMetadata): _67.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _67.IdentifiedGenesisMetadataProtoMsg): _67.IdentifiedGenesisMetadata;
                    toProto(message: _67.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _67.IdentifiedGenesisMetadata): _67.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _66.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.IdentifiedClientState;
                    fromPartial(object: Partial<_66.IdentifiedClientState>): _66.IdentifiedClientState;
                    fromAmino(object: _66.IdentifiedClientStateAmino): _66.IdentifiedClientState;
                    toAmino(message: _66.IdentifiedClientState): _66.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _66.IdentifiedClientStateAminoMsg): _66.IdentifiedClientState;
                    toAminoMsg(message: _66.IdentifiedClientState): _66.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _66.IdentifiedClientStateProtoMsg): _66.IdentifiedClientState;
                    toProto(message: _66.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _66.IdentifiedClientState): _66.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _66.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_66.ConsensusStateWithHeight>): _66.ConsensusStateWithHeight;
                    fromAmino(object: _66.ConsensusStateWithHeightAmino): _66.ConsensusStateWithHeight;
                    toAmino(message: _66.ConsensusStateWithHeight): _66.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _66.ConsensusStateWithHeightAminoMsg): _66.ConsensusStateWithHeight;
                    toAminoMsg(message: _66.ConsensusStateWithHeight): _66.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _66.ConsensusStateWithHeightProtoMsg): _66.ConsensusStateWithHeight;
                    toProto(message: _66.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _66.ConsensusStateWithHeight): _66.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _66.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.ClientConsensusStates;
                    fromPartial(object: Partial<_66.ClientConsensusStates>): _66.ClientConsensusStates;
                    fromAmino(object: _66.ClientConsensusStatesAmino): _66.ClientConsensusStates;
                    toAmino(message: _66.ClientConsensusStates): _66.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _66.ClientConsensusStatesAminoMsg): _66.ClientConsensusStates;
                    toAminoMsg(message: _66.ClientConsensusStates): _66.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _66.ClientConsensusStatesProtoMsg): _66.ClientConsensusStates;
                    toProto(message: _66.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _66.ClientConsensusStates): _66.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _66.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.ClientUpdateProposal;
                    fromPartial(object: Partial<_66.ClientUpdateProposal>): _66.ClientUpdateProposal;
                    fromAmino(object: _66.ClientUpdateProposalAmino): _66.ClientUpdateProposal;
                    toAmino(message: _66.ClientUpdateProposal): _66.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _66.ClientUpdateProposalAminoMsg): _66.ClientUpdateProposal;
                    toAminoMsg(message: _66.ClientUpdateProposal): _66.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _66.ClientUpdateProposalProtoMsg): _66.ClientUpdateProposal;
                    toProto(message: _66.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _66.ClientUpdateProposal): _66.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _66.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.UpgradeProposal;
                    fromPartial(object: Partial<_66.UpgradeProposal>): _66.UpgradeProposal;
                    fromAmino(object: _66.UpgradeProposalAmino): _66.UpgradeProposal;
                    toAmino(message: _66.UpgradeProposal): _66.UpgradeProposalAmino;
                    fromAminoMsg(object: _66.UpgradeProposalAminoMsg): _66.UpgradeProposal;
                    toAminoMsg(message: _66.UpgradeProposal): _66.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _66.UpgradeProposalProtoMsg): _66.UpgradeProposal;
                    toProto(message: _66.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _66.UpgradeProposal): _66.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _66.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.Height;
                    fromPartial(object: Partial<_66.Height>): _66.Height;
                    fromAmino(object: _66.HeightAmino): _66.Height;
                    toAmino(message: _66.Height): _66.HeightAmino;
                    fromAminoMsg(object: _66.HeightAminoMsg): _66.Height;
                    toAminoMsg(message: _66.Height): _66.HeightAminoMsg;
                    fromProtoMsg(message: _66.HeightProtoMsg): _66.Height;
                    toProto(message: _66.Height): Uint8Array;
                    toProtoMsg(message: _66.Height): _66.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _66.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.Params;
                    fromPartial(object: Partial<_66.Params>): _66.Params;
                    fromAmino(object: _66.ParamsAmino): _66.Params;
                    toAmino(message: _66.Params): _66.ParamsAmino;
                    fromAminoMsg(object: _66.ParamsAminoMsg): _66.Params;
                    toAminoMsg(message: _66.Params): _66.ParamsAminoMsg;
                    fromProtoMsg(message: _66.ParamsProtoMsg): _66.Params;
                    toProto(message: _66.Params): Uint8Array;
                    toProtoMsg(message: _66.Params): _66.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _70.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MerkleRoot;
                    fromPartial(object: Partial<_70.MerkleRoot>): _70.MerkleRoot;
                    fromAmino(object: _70.MerkleRootAmino): _70.MerkleRoot;
                    toAmino(message: _70.MerkleRoot): _70.MerkleRootAmino;
                    fromAminoMsg(object: _70.MerkleRootAminoMsg): _70.MerkleRoot;
                    toAminoMsg(message: _70.MerkleRoot): _70.MerkleRootAminoMsg;
                    fromProtoMsg(message: _70.MerkleRootProtoMsg): _70.MerkleRoot;
                    toProto(message: _70.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _70.MerkleRoot): _70.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _70.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MerklePrefix;
                    fromPartial(object: Partial<_70.MerklePrefix>): _70.MerklePrefix;
                    fromAmino(object: _70.MerklePrefixAmino): _70.MerklePrefix;
                    toAmino(message: _70.MerklePrefix): _70.MerklePrefixAmino;
                    fromAminoMsg(object: _70.MerklePrefixAminoMsg): _70.MerklePrefix;
                    toAminoMsg(message: _70.MerklePrefix): _70.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _70.MerklePrefixProtoMsg): _70.MerklePrefix;
                    toProto(message: _70.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _70.MerklePrefix): _70.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _70.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MerklePath;
                    fromPartial(object: Partial<_70.MerklePath>): _70.MerklePath;
                    fromAmino(object: _70.MerklePathAmino): _70.MerklePath;
                    toAmino(message: _70.MerklePath): _70.MerklePathAmino;
                    fromAminoMsg(object: _70.MerklePathAminoMsg): _70.MerklePath;
                    toAminoMsg(message: _70.MerklePath): _70.MerklePathAminoMsg;
                    fromProtoMsg(message: _70.MerklePathProtoMsg): _70.MerklePath;
                    toProto(message: _70.MerklePath): Uint8Array;
                    toProtoMsg(message: _70.MerklePath): _70.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _70.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MerkleProof;
                    fromPartial(object: Partial<_70.MerkleProof>): _70.MerkleProof;
                    fromAmino(object: _70.MerkleProofAmino): _70.MerkleProof;
                    toAmino(message: _70.MerkleProof): _70.MerkleProofAmino;
                    fromAminoMsg(object: _70.MerkleProofAminoMsg): _70.MerkleProof;
                    toAminoMsg(message: _70.MerkleProof): _70.MerkleProofAminoMsg;
                    fromProtoMsg(message: _70.MerkleProofProtoMsg): _70.MerkleProof;
                    toProto(message: _70.MerkleProof): Uint8Array;
                    toProtoMsg(message: _70.MerkleProof): _70.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _156.MsgClientImpl;
                QueryClientImpl: typeof _152.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _73.QueryConnectionRequest): Promise<_73.QueryConnectionResponse>;
                    connections(request?: _73.QueryConnectionsRequest): Promise<_73.QueryConnectionsResponse>;
                    clientConnections(request: _73.QueryClientConnectionsRequest): Promise<_73.QueryClientConnectionsResponse>;
                    connectionClientState(request: _73.QueryConnectionClientStateRequest): Promise<_73.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _73.QueryConnectionConsensusStateRequest): Promise<_73.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _148.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _74.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenTry(value: _74.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenAck(value: _74.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenConfirm(value: _74.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _74.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _74.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _74.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _74.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _74.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _74.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _74.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _74.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _74.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _74.MsgConnectionOpenInit) => _74.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _74.MsgConnectionOpenInitAmino) => _74.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _74.MsgConnectionOpenTry) => _74.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _74.MsgConnectionOpenTryAmino) => _74.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _74.MsgConnectionOpenAck) => _74.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _74.MsgConnectionOpenAckAmino) => _74.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _74.MsgConnectionOpenConfirm) => _74.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _74.MsgConnectionOpenConfirmAmino) => _74.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _74.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_74.MsgConnectionOpenInit>): _74.MsgConnectionOpenInit;
                    fromAmino(object: _74.MsgConnectionOpenInitAmino): _74.MsgConnectionOpenInit;
                    toAmino(message: _74.MsgConnectionOpenInit): _74.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _74.MsgConnectionOpenInitAminoMsg): _74.MsgConnectionOpenInit;
                    toAminoMsg(message: _74.MsgConnectionOpenInit): _74.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _74.MsgConnectionOpenInitProtoMsg): _74.MsgConnectionOpenInit;
                    toProto(message: _74.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _74.MsgConnectionOpenInit): _74.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _74.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_74.MsgConnectionOpenInitResponse>): _74.MsgConnectionOpenInitResponse;
                    fromAmino(_: _74.MsgConnectionOpenInitResponseAmino): _74.MsgConnectionOpenInitResponse;
                    toAmino(_: _74.MsgConnectionOpenInitResponse): _74.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _74.MsgConnectionOpenInitResponseAminoMsg): _74.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _74.MsgConnectionOpenInitResponse): _74.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _74.MsgConnectionOpenInitResponseProtoMsg): _74.MsgConnectionOpenInitResponse;
                    toProto(message: _74.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _74.MsgConnectionOpenInitResponse): _74.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _74.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_74.MsgConnectionOpenTry>): _74.MsgConnectionOpenTry;
                    fromAmino(object: _74.MsgConnectionOpenTryAmino): _74.MsgConnectionOpenTry;
                    toAmino(message: _74.MsgConnectionOpenTry): _74.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _74.MsgConnectionOpenTryAminoMsg): _74.MsgConnectionOpenTry;
                    toAminoMsg(message: _74.MsgConnectionOpenTry): _74.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _74.MsgConnectionOpenTryProtoMsg): _74.MsgConnectionOpenTry;
                    toProto(message: _74.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _74.MsgConnectionOpenTry): _74.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _74.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_74.MsgConnectionOpenTryResponse>): _74.MsgConnectionOpenTryResponse;
                    fromAmino(_: _74.MsgConnectionOpenTryResponseAmino): _74.MsgConnectionOpenTryResponse;
                    toAmino(_: _74.MsgConnectionOpenTryResponse): _74.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _74.MsgConnectionOpenTryResponseAminoMsg): _74.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _74.MsgConnectionOpenTryResponse): _74.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _74.MsgConnectionOpenTryResponseProtoMsg): _74.MsgConnectionOpenTryResponse;
                    toProto(message: _74.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _74.MsgConnectionOpenTryResponse): _74.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _74.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_74.MsgConnectionOpenAck>): _74.MsgConnectionOpenAck;
                    fromAmino(object: _74.MsgConnectionOpenAckAmino): _74.MsgConnectionOpenAck;
                    toAmino(message: _74.MsgConnectionOpenAck): _74.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _74.MsgConnectionOpenAckAminoMsg): _74.MsgConnectionOpenAck;
                    toAminoMsg(message: _74.MsgConnectionOpenAck): _74.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _74.MsgConnectionOpenAckProtoMsg): _74.MsgConnectionOpenAck;
                    toProto(message: _74.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _74.MsgConnectionOpenAck): _74.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _74.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_74.MsgConnectionOpenAckResponse>): _74.MsgConnectionOpenAckResponse;
                    fromAmino(_: _74.MsgConnectionOpenAckResponseAmino): _74.MsgConnectionOpenAckResponse;
                    toAmino(_: _74.MsgConnectionOpenAckResponse): _74.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _74.MsgConnectionOpenAckResponseAminoMsg): _74.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _74.MsgConnectionOpenAckResponse): _74.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _74.MsgConnectionOpenAckResponseProtoMsg): _74.MsgConnectionOpenAckResponse;
                    toProto(message: _74.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _74.MsgConnectionOpenAckResponse): _74.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _74.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_74.MsgConnectionOpenConfirm>): _74.MsgConnectionOpenConfirm;
                    fromAmino(object: _74.MsgConnectionOpenConfirmAmino): _74.MsgConnectionOpenConfirm;
                    toAmino(message: _74.MsgConnectionOpenConfirm): _74.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _74.MsgConnectionOpenConfirmAminoMsg): _74.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _74.MsgConnectionOpenConfirm): _74.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _74.MsgConnectionOpenConfirmProtoMsg): _74.MsgConnectionOpenConfirm;
                    toProto(message: _74.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _74.MsgConnectionOpenConfirm): _74.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _74.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_74.MsgConnectionOpenConfirmResponse>): _74.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _74.MsgConnectionOpenConfirmResponseAmino): _74.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _74.MsgConnectionOpenConfirmResponse): _74.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _74.MsgConnectionOpenConfirmResponseAminoMsg): _74.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _74.MsgConnectionOpenConfirmResponse): _74.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _74.MsgConnectionOpenConfirmResponseProtoMsg): _74.MsgConnectionOpenConfirmResponse;
                    toProto(message: _74.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _74.MsgConnectionOpenConfirmResponse): _74.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _73.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConnectionRequest;
                    fromPartial(object: Partial<_73.QueryConnectionRequest>): _73.QueryConnectionRequest;
                    fromAmino(object: _73.QueryConnectionRequestAmino): _73.QueryConnectionRequest;
                    toAmino(message: _73.QueryConnectionRequest): _73.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _73.QueryConnectionRequestAminoMsg): _73.QueryConnectionRequest;
                    toAminoMsg(message: _73.QueryConnectionRequest): _73.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryConnectionRequestProtoMsg): _73.QueryConnectionRequest;
                    toProto(message: _73.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryConnectionRequest): _73.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _73.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConnectionResponse;
                    fromPartial(object: Partial<_73.QueryConnectionResponse>): _73.QueryConnectionResponse;
                    fromAmino(object: _73.QueryConnectionResponseAmino): _73.QueryConnectionResponse;
                    toAmino(message: _73.QueryConnectionResponse): _73.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _73.QueryConnectionResponseAminoMsg): _73.QueryConnectionResponse;
                    toAminoMsg(message: _73.QueryConnectionResponse): _73.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryConnectionResponseProtoMsg): _73.QueryConnectionResponse;
                    toProto(message: _73.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryConnectionResponse): _73.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _73.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConnectionsRequest;
                    fromPartial(object: Partial<_73.QueryConnectionsRequest>): _73.QueryConnectionsRequest;
                    fromAmino(object: _73.QueryConnectionsRequestAmino): _73.QueryConnectionsRequest;
                    toAmino(message: _73.QueryConnectionsRequest): _73.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _73.QueryConnectionsRequestAminoMsg): _73.QueryConnectionsRequest;
                    toAminoMsg(message: _73.QueryConnectionsRequest): _73.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryConnectionsRequestProtoMsg): _73.QueryConnectionsRequest;
                    toProto(message: _73.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryConnectionsRequest): _73.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _73.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConnectionsResponse;
                    fromPartial(object: Partial<_73.QueryConnectionsResponse>): _73.QueryConnectionsResponse;
                    fromAmino(object: _73.QueryConnectionsResponseAmino): _73.QueryConnectionsResponse;
                    toAmino(message: _73.QueryConnectionsResponse): _73.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _73.QueryConnectionsResponseAminoMsg): _73.QueryConnectionsResponse;
                    toAminoMsg(message: _73.QueryConnectionsResponse): _73.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryConnectionsResponseProtoMsg): _73.QueryConnectionsResponse;
                    toProto(message: _73.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryConnectionsResponse): _73.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _73.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_73.QueryClientConnectionsRequest>): _73.QueryClientConnectionsRequest;
                    fromAmino(object: _73.QueryClientConnectionsRequestAmino): _73.QueryClientConnectionsRequest;
                    toAmino(message: _73.QueryClientConnectionsRequest): _73.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _73.QueryClientConnectionsRequestAminoMsg): _73.QueryClientConnectionsRequest;
                    toAminoMsg(message: _73.QueryClientConnectionsRequest): _73.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryClientConnectionsRequestProtoMsg): _73.QueryClientConnectionsRequest;
                    toProto(message: _73.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryClientConnectionsRequest): _73.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _73.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_73.QueryClientConnectionsResponse>): _73.QueryClientConnectionsResponse;
                    fromAmino(object: _73.QueryClientConnectionsResponseAmino): _73.QueryClientConnectionsResponse;
                    toAmino(message: _73.QueryClientConnectionsResponse): _73.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _73.QueryClientConnectionsResponseAminoMsg): _73.QueryClientConnectionsResponse;
                    toAminoMsg(message: _73.QueryClientConnectionsResponse): _73.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryClientConnectionsResponseProtoMsg): _73.QueryClientConnectionsResponse;
                    toProto(message: _73.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryClientConnectionsResponse): _73.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _73.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_73.QueryConnectionClientStateRequest>): _73.QueryConnectionClientStateRequest;
                    fromAmino(object: _73.QueryConnectionClientStateRequestAmino): _73.QueryConnectionClientStateRequest;
                    toAmino(message: _73.QueryConnectionClientStateRequest): _73.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _73.QueryConnectionClientStateRequestAminoMsg): _73.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _73.QueryConnectionClientStateRequest): _73.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryConnectionClientStateRequestProtoMsg): _73.QueryConnectionClientStateRequest;
                    toProto(message: _73.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryConnectionClientStateRequest): _73.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _73.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_73.QueryConnectionClientStateResponse>): _73.QueryConnectionClientStateResponse;
                    fromAmino(object: _73.QueryConnectionClientStateResponseAmino): _73.QueryConnectionClientStateResponse;
                    toAmino(message: _73.QueryConnectionClientStateResponse): _73.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _73.QueryConnectionClientStateResponseAminoMsg): _73.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _73.QueryConnectionClientStateResponse): _73.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryConnectionClientStateResponseProtoMsg): _73.QueryConnectionClientStateResponse;
                    toProto(message: _73.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryConnectionClientStateResponse): _73.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _73.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_73.QueryConnectionConsensusStateRequest>): _73.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _73.QueryConnectionConsensusStateRequestAmino): _73.QueryConnectionConsensusStateRequest;
                    toAmino(message: _73.QueryConnectionConsensusStateRequest): _73.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _73.QueryConnectionConsensusStateRequestAminoMsg): _73.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _73.QueryConnectionConsensusStateRequest): _73.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryConnectionConsensusStateRequestProtoMsg): _73.QueryConnectionConsensusStateRequest;
                    toProto(message: _73.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryConnectionConsensusStateRequest): _73.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _73.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_73.QueryConnectionConsensusStateResponse>): _73.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _73.QueryConnectionConsensusStateResponseAmino): _73.QueryConnectionConsensusStateResponse;
                    toAmino(message: _73.QueryConnectionConsensusStateResponse): _73.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _73.QueryConnectionConsensusStateResponseAminoMsg): _73.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _73.QueryConnectionConsensusStateResponse): _73.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryConnectionConsensusStateResponseProtoMsg): _73.QueryConnectionConsensusStateResponse;
                    toProto(message: _73.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryConnectionConsensusStateResponse): _73.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _72.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.GenesisState;
                    fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                    fromAmino(object: _72.GenesisStateAmino): _72.GenesisState;
                    toAmino(message: _72.GenesisState): _72.GenesisStateAmino;
                    fromAminoMsg(object: _72.GenesisStateAminoMsg): _72.GenesisState;
                    toAminoMsg(message: _72.GenesisState): _72.GenesisStateAminoMsg;
                    fromProtoMsg(message: _72.GenesisStateProtoMsg): _72.GenesisState;
                    toProto(message: _72.GenesisState): Uint8Array;
                    toProtoMsg(message: _72.GenesisState): _72.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _71.State;
                stateToJSON(object: _71.State): string;
                State: typeof _71.State;
                StateSDKType: typeof _71.State;
                StateAmino: typeof _71.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _71.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.ConnectionEnd;
                    fromPartial(object: Partial<_71.ConnectionEnd>): _71.ConnectionEnd;
                    fromAmino(object: _71.ConnectionEndAmino): _71.ConnectionEnd;
                    toAmino(message: _71.ConnectionEnd): _71.ConnectionEndAmino;
                    fromAminoMsg(object: _71.ConnectionEndAminoMsg): _71.ConnectionEnd;
                    toAminoMsg(message: _71.ConnectionEnd): _71.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _71.ConnectionEndProtoMsg): _71.ConnectionEnd;
                    toProto(message: _71.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _71.ConnectionEnd): _71.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _71.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.IdentifiedConnection;
                    fromPartial(object: Partial<_71.IdentifiedConnection>): _71.IdentifiedConnection;
                    fromAmino(object: _71.IdentifiedConnectionAmino): _71.IdentifiedConnection;
                    toAmino(message: _71.IdentifiedConnection): _71.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _71.IdentifiedConnectionAminoMsg): _71.IdentifiedConnection;
                    toAminoMsg(message: _71.IdentifiedConnection): _71.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _71.IdentifiedConnectionProtoMsg): _71.IdentifiedConnection;
                    toProto(message: _71.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _71.IdentifiedConnection): _71.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _71.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Counterparty;
                    fromPartial(object: Partial<_71.Counterparty>): _71.Counterparty;
                    fromAmino(object: _71.CounterpartyAmino): _71.Counterparty;
                    toAmino(message: _71.Counterparty): _71.CounterpartyAmino;
                    fromAminoMsg(object: _71.CounterpartyAminoMsg): _71.Counterparty;
                    toAminoMsg(message: _71.Counterparty): _71.CounterpartyAminoMsg;
                    fromProtoMsg(message: _71.CounterpartyProtoMsg): _71.Counterparty;
                    toProto(message: _71.Counterparty): Uint8Array;
                    toProtoMsg(message: _71.Counterparty): _71.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _71.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.ClientPaths;
                    fromPartial(object: Partial<_71.ClientPaths>): _71.ClientPaths;
                    fromAmino(object: _71.ClientPathsAmino): _71.ClientPaths;
                    toAmino(message: _71.ClientPaths): _71.ClientPathsAmino;
                    fromAminoMsg(object: _71.ClientPathsAminoMsg): _71.ClientPaths;
                    toAminoMsg(message: _71.ClientPaths): _71.ClientPathsAminoMsg;
                    fromProtoMsg(message: _71.ClientPathsProtoMsg): _71.ClientPaths;
                    toProto(message: _71.ClientPaths): Uint8Array;
                    toProtoMsg(message: _71.ClientPaths): _71.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _71.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.ConnectionPaths;
                    fromPartial(object: Partial<_71.ConnectionPaths>): _71.ConnectionPaths;
                    fromAmino(object: _71.ConnectionPathsAmino): _71.ConnectionPaths;
                    toAmino(message: _71.ConnectionPaths): _71.ConnectionPathsAmino;
                    fromAminoMsg(object: _71.ConnectionPathsAminoMsg): _71.ConnectionPaths;
                    toAminoMsg(message: _71.ConnectionPaths): _71.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _71.ConnectionPathsProtoMsg): _71.ConnectionPaths;
                    toProto(message: _71.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _71.ConnectionPaths): _71.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _71.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Version;
                    fromPartial(object: Partial<_71.Version>): _71.Version;
                    fromAmino(object: _71.VersionAmino): _71.Version;
                    toAmino(message: _71.Version): _71.VersionAmino;
                    fromAminoMsg(object: _71.VersionAminoMsg): _71.Version;
                    toAminoMsg(message: _71.Version): _71.VersionAminoMsg;
                    fromProtoMsg(message: _71.VersionProtoMsg): _71.Version;
                    toProto(message: _71.Version): Uint8Array;
                    toProtoMsg(message: _71.Version): _71.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _71.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Params;
                    fromPartial(object: Partial<_71.Params>): _71.Params;
                    fromAmino(object: _71.ParamsAmino): _71.Params;
                    toAmino(message: _71.Params): _71.ParamsAmino;
                    fromAminoMsg(object: _71.ParamsAminoMsg): _71.Params;
                    toAminoMsg(message: _71.Params): _71.ParamsAminoMsg;
                    fromProtoMsg(message: _71.ParamsProtoMsg): _71.Params;
                    toProto(message: _71.Params): Uint8Array;
                    toProtoMsg(message: _71.Params): _71.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _75.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.ClientState;
                    fromPartial(object: Partial<_75.ClientState>): _75.ClientState;
                    fromAmino(object: _75.ClientStateAmino): _75.ClientState;
                    toAmino(message: _75.ClientState): _75.ClientStateAmino;
                    fromAminoMsg(object: _75.ClientStateAminoMsg): _75.ClientState;
                    toAminoMsg(message: _75.ClientState): _75.ClientStateAminoMsg;
                    fromProtoMsg(message: _75.ClientStateProtoMsg): _75.ClientState;
                    toProto(message: _75.ClientState): Uint8Array;
                    toProtoMsg(message: _75.ClientState): _75.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _76.DataType;
                dataTypeToJSON(object: _76.DataType): string;
                DataType: typeof _76.DataType;
                DataTypeSDKType: typeof _76.DataType;
                DataTypeAmino: typeof _76.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _76.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ClientState;
                    fromPartial(object: Partial<_76.ClientState>): _76.ClientState;
                    fromAmino(object: _76.ClientStateAmino): _76.ClientState;
                    toAmino(message: _76.ClientState): _76.ClientStateAmino;
                    fromAminoMsg(object: _76.ClientStateAminoMsg): _76.ClientState;
                    toAminoMsg(message: _76.ClientState): _76.ClientStateAminoMsg;
                    fromProtoMsg(message: _76.ClientStateProtoMsg): _76.ClientState;
                    toProto(message: _76.ClientState): Uint8Array;
                    toProtoMsg(message: _76.ClientState): _76.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _76.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ConsensusState;
                    fromPartial(object: Partial<_76.ConsensusState>): _76.ConsensusState;
                    fromAmino(object: _76.ConsensusStateAmino): _76.ConsensusState;
                    toAmino(message: _76.ConsensusState): _76.ConsensusStateAmino;
                    fromAminoMsg(object: _76.ConsensusStateAminoMsg): _76.ConsensusState;
                    toAminoMsg(message: _76.ConsensusState): _76.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _76.ConsensusStateProtoMsg): _76.ConsensusState;
                    toProto(message: _76.ConsensusState): Uint8Array;
                    toProtoMsg(message: _76.ConsensusState): _76.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _76.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.Header;
                    fromPartial(object: Partial<_76.Header>): _76.Header;
                    fromAmino(object: _76.HeaderAmino): _76.Header;
                    toAmino(message: _76.Header): _76.HeaderAmino;
                    fromAminoMsg(object: _76.HeaderAminoMsg): _76.Header;
                    toAminoMsg(message: _76.Header): _76.HeaderAminoMsg;
                    fromProtoMsg(message: _76.HeaderProtoMsg): _76.Header;
                    toProto(message: _76.Header): Uint8Array;
                    toProtoMsg(message: _76.Header): _76.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _76.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.Misbehaviour;
                    fromPartial(object: Partial<_76.Misbehaviour>): _76.Misbehaviour;
                    fromAmino(object: _76.MisbehaviourAmino): _76.Misbehaviour;
                    toAmino(message: _76.Misbehaviour): _76.MisbehaviourAmino;
                    fromAminoMsg(object: _76.MisbehaviourAminoMsg): _76.Misbehaviour;
                    toAminoMsg(message: _76.Misbehaviour): _76.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _76.MisbehaviourProtoMsg): _76.Misbehaviour;
                    toProto(message: _76.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _76.Misbehaviour): _76.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _76.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.SignatureAndData;
                    fromPartial(object: Partial<_76.SignatureAndData>): _76.SignatureAndData;
                    fromAmino(object: _76.SignatureAndDataAmino): _76.SignatureAndData;
                    toAmino(message: _76.SignatureAndData): _76.SignatureAndDataAmino;
                    fromAminoMsg(object: _76.SignatureAndDataAminoMsg): _76.SignatureAndData;
                    toAminoMsg(message: _76.SignatureAndData): _76.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _76.SignatureAndDataProtoMsg): _76.SignatureAndData;
                    toProto(message: _76.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _76.SignatureAndData): _76.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _76.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.TimestampedSignatureData;
                    fromPartial(object: Partial<_76.TimestampedSignatureData>): _76.TimestampedSignatureData;
                    fromAmino(object: _76.TimestampedSignatureDataAmino): _76.TimestampedSignatureData;
                    toAmino(message: _76.TimestampedSignatureData): _76.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _76.TimestampedSignatureDataAminoMsg): _76.TimestampedSignatureData;
                    toAminoMsg(message: _76.TimestampedSignatureData): _76.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _76.TimestampedSignatureDataProtoMsg): _76.TimestampedSignatureData;
                    toProto(message: _76.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _76.TimestampedSignatureData): _76.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _76.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.SignBytes;
                    fromPartial(object: Partial<_76.SignBytes>): _76.SignBytes;
                    fromAmino(object: _76.SignBytesAmino): _76.SignBytes;
                    toAmino(message: _76.SignBytes): _76.SignBytesAmino;
                    fromAminoMsg(object: _76.SignBytesAminoMsg): _76.SignBytes;
                    toAminoMsg(message: _76.SignBytes): _76.SignBytesAminoMsg;
                    fromProtoMsg(message: _76.SignBytesProtoMsg): _76.SignBytes;
                    toProto(message: _76.SignBytes): Uint8Array;
                    toProtoMsg(message: _76.SignBytes): _76.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _76.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.HeaderData;
                    fromPartial(object: Partial<_76.HeaderData>): _76.HeaderData;
                    fromAmino(object: _76.HeaderDataAmino): _76.HeaderData;
                    toAmino(message: _76.HeaderData): _76.HeaderDataAmino;
                    fromAminoMsg(object: _76.HeaderDataAminoMsg): _76.HeaderData;
                    toAminoMsg(message: _76.HeaderData): _76.HeaderDataAminoMsg;
                    fromProtoMsg(message: _76.HeaderDataProtoMsg): _76.HeaderData;
                    toProto(message: _76.HeaderData): Uint8Array;
                    toProtoMsg(message: _76.HeaderData): _76.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _76.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ClientStateData;
                    fromPartial(object: Partial<_76.ClientStateData>): _76.ClientStateData;
                    fromAmino(object: _76.ClientStateDataAmino): _76.ClientStateData;
                    toAmino(message: _76.ClientStateData): _76.ClientStateDataAmino;
                    fromAminoMsg(object: _76.ClientStateDataAminoMsg): _76.ClientStateData;
                    toAminoMsg(message: _76.ClientStateData): _76.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _76.ClientStateDataProtoMsg): _76.ClientStateData;
                    toProto(message: _76.ClientStateData): Uint8Array;
                    toProtoMsg(message: _76.ClientStateData): _76.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _76.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ConsensusStateData;
                    fromPartial(object: Partial<_76.ConsensusStateData>): _76.ConsensusStateData;
                    fromAmino(object: _76.ConsensusStateDataAmino): _76.ConsensusStateData;
                    toAmino(message: _76.ConsensusStateData): _76.ConsensusStateDataAmino;
                    fromAminoMsg(object: _76.ConsensusStateDataAminoMsg): _76.ConsensusStateData;
                    toAminoMsg(message: _76.ConsensusStateData): _76.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _76.ConsensusStateDataProtoMsg): _76.ConsensusStateData;
                    toProto(message: _76.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _76.ConsensusStateData): _76.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _76.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ConnectionStateData;
                    fromPartial(object: Partial<_76.ConnectionStateData>): _76.ConnectionStateData;
                    fromAmino(object: _76.ConnectionStateDataAmino): _76.ConnectionStateData;
                    toAmino(message: _76.ConnectionStateData): _76.ConnectionStateDataAmino;
                    fromAminoMsg(object: _76.ConnectionStateDataAminoMsg): _76.ConnectionStateData;
                    toAminoMsg(message: _76.ConnectionStateData): _76.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _76.ConnectionStateDataProtoMsg): _76.ConnectionStateData;
                    toProto(message: _76.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _76.ConnectionStateData): _76.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _76.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ChannelStateData;
                    fromPartial(object: Partial<_76.ChannelStateData>): _76.ChannelStateData;
                    fromAmino(object: _76.ChannelStateDataAmino): _76.ChannelStateData;
                    toAmino(message: _76.ChannelStateData): _76.ChannelStateDataAmino;
                    fromAminoMsg(object: _76.ChannelStateDataAminoMsg): _76.ChannelStateData;
                    toAminoMsg(message: _76.ChannelStateData): _76.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _76.ChannelStateDataProtoMsg): _76.ChannelStateData;
                    toProto(message: _76.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _76.ChannelStateData): _76.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _76.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.PacketCommitmentData;
                    fromPartial(object: Partial<_76.PacketCommitmentData>): _76.PacketCommitmentData;
                    fromAmino(object: _76.PacketCommitmentDataAmino): _76.PacketCommitmentData;
                    toAmino(message: _76.PacketCommitmentData): _76.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _76.PacketCommitmentDataAminoMsg): _76.PacketCommitmentData;
                    toAminoMsg(message: _76.PacketCommitmentData): _76.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _76.PacketCommitmentDataProtoMsg): _76.PacketCommitmentData;
                    toProto(message: _76.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _76.PacketCommitmentData): _76.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _76.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.PacketAcknowledgementData;
                    fromPartial(object: Partial<_76.PacketAcknowledgementData>): _76.PacketAcknowledgementData;
                    fromAmino(object: _76.PacketAcknowledgementDataAmino): _76.PacketAcknowledgementData;
                    toAmino(message: _76.PacketAcknowledgementData): _76.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _76.PacketAcknowledgementDataAminoMsg): _76.PacketAcknowledgementData;
                    toAminoMsg(message: _76.PacketAcknowledgementData): _76.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _76.PacketAcknowledgementDataProtoMsg): _76.PacketAcknowledgementData;
                    toProto(message: _76.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _76.PacketAcknowledgementData): _76.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _76.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_76.PacketReceiptAbsenceData>): _76.PacketReceiptAbsenceData;
                    fromAmino(object: _76.PacketReceiptAbsenceDataAmino): _76.PacketReceiptAbsenceData;
                    toAmino(message: _76.PacketReceiptAbsenceData): _76.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _76.PacketReceiptAbsenceDataAminoMsg): _76.PacketReceiptAbsenceData;
                    toAminoMsg(message: _76.PacketReceiptAbsenceData): _76.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _76.PacketReceiptAbsenceDataProtoMsg): _76.PacketReceiptAbsenceData;
                    toProto(message: _76.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _76.PacketReceiptAbsenceData): _76.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _76.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.NextSequenceRecvData;
                    fromPartial(object: Partial<_76.NextSequenceRecvData>): _76.NextSequenceRecvData;
                    fromAmino(object: _76.NextSequenceRecvDataAmino): _76.NextSequenceRecvData;
                    toAmino(message: _76.NextSequenceRecvData): _76.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _76.NextSequenceRecvDataAminoMsg): _76.NextSequenceRecvData;
                    toAminoMsg(message: _76.NextSequenceRecvData): _76.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _76.NextSequenceRecvDataProtoMsg): _76.NextSequenceRecvData;
                    toProto(message: _76.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _76.NextSequenceRecvData): _76.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _77.DataType;
                dataTypeToJSON(object: _77.DataType): string;
                DataType: typeof _77.DataType;
                DataTypeSDKType: typeof _77.DataType;
                DataTypeAmino: typeof _77.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _77.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ClientState;
                    fromPartial(object: Partial<_77.ClientState>): _77.ClientState;
                    fromAmino(object: _77.ClientStateAmino): _77.ClientState;
                    toAmino(message: _77.ClientState): _77.ClientStateAmino;
                    fromAminoMsg(object: _77.ClientStateAminoMsg): _77.ClientState;
                    toAminoMsg(message: _77.ClientState): _77.ClientStateAminoMsg;
                    fromProtoMsg(message: _77.ClientStateProtoMsg): _77.ClientState;
                    toProto(message: _77.ClientState): Uint8Array;
                    toProtoMsg(message: _77.ClientState): _77.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _77.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ConsensusState;
                    fromPartial(object: Partial<_77.ConsensusState>): _77.ConsensusState;
                    fromAmino(object: _77.ConsensusStateAmino): _77.ConsensusState;
                    toAmino(message: _77.ConsensusState): _77.ConsensusStateAmino;
                    fromAminoMsg(object: _77.ConsensusStateAminoMsg): _77.ConsensusState;
                    toAminoMsg(message: _77.ConsensusState): _77.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _77.ConsensusStateProtoMsg): _77.ConsensusState;
                    toProto(message: _77.ConsensusState): Uint8Array;
                    toProtoMsg(message: _77.ConsensusState): _77.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _77.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.Header;
                    fromPartial(object: Partial<_77.Header>): _77.Header;
                    fromAmino(object: _77.HeaderAmino): _77.Header;
                    toAmino(message: _77.Header): _77.HeaderAmino;
                    fromAminoMsg(object: _77.HeaderAminoMsg): _77.Header;
                    toAminoMsg(message: _77.Header): _77.HeaderAminoMsg;
                    fromProtoMsg(message: _77.HeaderProtoMsg): _77.Header;
                    toProto(message: _77.Header): Uint8Array;
                    toProtoMsg(message: _77.Header): _77.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _77.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.Misbehaviour;
                    fromPartial(object: Partial<_77.Misbehaviour>): _77.Misbehaviour;
                    fromAmino(object: _77.MisbehaviourAmino): _77.Misbehaviour;
                    toAmino(message: _77.Misbehaviour): _77.MisbehaviourAmino;
                    fromAminoMsg(object: _77.MisbehaviourAminoMsg): _77.Misbehaviour;
                    toAminoMsg(message: _77.Misbehaviour): _77.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _77.MisbehaviourProtoMsg): _77.Misbehaviour;
                    toProto(message: _77.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _77.Misbehaviour): _77.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _77.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.SignatureAndData;
                    fromPartial(object: Partial<_77.SignatureAndData>): _77.SignatureAndData;
                    fromAmino(object: _77.SignatureAndDataAmino): _77.SignatureAndData;
                    toAmino(message: _77.SignatureAndData): _77.SignatureAndDataAmino;
                    fromAminoMsg(object: _77.SignatureAndDataAminoMsg): _77.SignatureAndData;
                    toAminoMsg(message: _77.SignatureAndData): _77.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _77.SignatureAndDataProtoMsg): _77.SignatureAndData;
                    toProto(message: _77.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _77.SignatureAndData): _77.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _77.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.TimestampedSignatureData;
                    fromPartial(object: Partial<_77.TimestampedSignatureData>): _77.TimestampedSignatureData;
                    fromAmino(object: _77.TimestampedSignatureDataAmino): _77.TimestampedSignatureData;
                    toAmino(message: _77.TimestampedSignatureData): _77.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _77.TimestampedSignatureDataAminoMsg): _77.TimestampedSignatureData;
                    toAminoMsg(message: _77.TimestampedSignatureData): _77.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _77.TimestampedSignatureDataProtoMsg): _77.TimestampedSignatureData;
                    toProto(message: _77.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _77.TimestampedSignatureData): _77.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _77.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.SignBytes;
                    fromPartial(object: Partial<_77.SignBytes>): _77.SignBytes;
                    fromAmino(object: _77.SignBytesAmino): _77.SignBytes;
                    toAmino(message: _77.SignBytes): _77.SignBytesAmino;
                    fromAminoMsg(object: _77.SignBytesAminoMsg): _77.SignBytes;
                    toAminoMsg(message: _77.SignBytes): _77.SignBytesAminoMsg;
                    fromProtoMsg(message: _77.SignBytesProtoMsg): _77.SignBytes;
                    toProto(message: _77.SignBytes): Uint8Array;
                    toProtoMsg(message: _77.SignBytes): _77.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _77.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.HeaderData;
                    fromPartial(object: Partial<_77.HeaderData>): _77.HeaderData;
                    fromAmino(object: _77.HeaderDataAmino): _77.HeaderData;
                    toAmino(message: _77.HeaderData): _77.HeaderDataAmino;
                    fromAminoMsg(object: _77.HeaderDataAminoMsg): _77.HeaderData;
                    toAminoMsg(message: _77.HeaderData): _77.HeaderDataAminoMsg;
                    fromProtoMsg(message: _77.HeaderDataProtoMsg): _77.HeaderData;
                    toProto(message: _77.HeaderData): Uint8Array;
                    toProtoMsg(message: _77.HeaderData): _77.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _77.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ClientStateData;
                    fromPartial(object: Partial<_77.ClientStateData>): _77.ClientStateData;
                    fromAmino(object: _77.ClientStateDataAmino): _77.ClientStateData;
                    toAmino(message: _77.ClientStateData): _77.ClientStateDataAmino;
                    fromAminoMsg(object: _77.ClientStateDataAminoMsg): _77.ClientStateData;
                    toAminoMsg(message: _77.ClientStateData): _77.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _77.ClientStateDataProtoMsg): _77.ClientStateData;
                    toProto(message: _77.ClientStateData): Uint8Array;
                    toProtoMsg(message: _77.ClientStateData): _77.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _77.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ConsensusStateData;
                    fromPartial(object: Partial<_77.ConsensusStateData>): _77.ConsensusStateData;
                    fromAmino(object: _77.ConsensusStateDataAmino): _77.ConsensusStateData;
                    toAmino(message: _77.ConsensusStateData): _77.ConsensusStateDataAmino;
                    fromAminoMsg(object: _77.ConsensusStateDataAminoMsg): _77.ConsensusStateData;
                    toAminoMsg(message: _77.ConsensusStateData): _77.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _77.ConsensusStateDataProtoMsg): _77.ConsensusStateData;
                    toProto(message: _77.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _77.ConsensusStateData): _77.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _77.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ConnectionStateData;
                    fromPartial(object: Partial<_77.ConnectionStateData>): _77.ConnectionStateData;
                    fromAmino(object: _77.ConnectionStateDataAmino): _77.ConnectionStateData;
                    toAmino(message: _77.ConnectionStateData): _77.ConnectionStateDataAmino;
                    fromAminoMsg(object: _77.ConnectionStateDataAminoMsg): _77.ConnectionStateData;
                    toAminoMsg(message: _77.ConnectionStateData): _77.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _77.ConnectionStateDataProtoMsg): _77.ConnectionStateData;
                    toProto(message: _77.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _77.ConnectionStateData): _77.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _77.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ChannelStateData;
                    fromPartial(object: Partial<_77.ChannelStateData>): _77.ChannelStateData;
                    fromAmino(object: _77.ChannelStateDataAmino): _77.ChannelStateData;
                    toAmino(message: _77.ChannelStateData): _77.ChannelStateDataAmino;
                    fromAminoMsg(object: _77.ChannelStateDataAminoMsg): _77.ChannelStateData;
                    toAminoMsg(message: _77.ChannelStateData): _77.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _77.ChannelStateDataProtoMsg): _77.ChannelStateData;
                    toProto(message: _77.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _77.ChannelStateData): _77.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _77.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.PacketCommitmentData;
                    fromPartial(object: Partial<_77.PacketCommitmentData>): _77.PacketCommitmentData;
                    fromAmino(object: _77.PacketCommitmentDataAmino): _77.PacketCommitmentData;
                    toAmino(message: _77.PacketCommitmentData): _77.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _77.PacketCommitmentDataAminoMsg): _77.PacketCommitmentData;
                    toAminoMsg(message: _77.PacketCommitmentData): _77.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _77.PacketCommitmentDataProtoMsg): _77.PacketCommitmentData;
                    toProto(message: _77.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _77.PacketCommitmentData): _77.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _77.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.PacketAcknowledgementData;
                    fromPartial(object: Partial<_77.PacketAcknowledgementData>): _77.PacketAcknowledgementData;
                    fromAmino(object: _77.PacketAcknowledgementDataAmino): _77.PacketAcknowledgementData;
                    toAmino(message: _77.PacketAcknowledgementData): _77.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _77.PacketAcknowledgementDataAminoMsg): _77.PacketAcknowledgementData;
                    toAminoMsg(message: _77.PacketAcknowledgementData): _77.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _77.PacketAcknowledgementDataProtoMsg): _77.PacketAcknowledgementData;
                    toProto(message: _77.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _77.PacketAcknowledgementData): _77.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _77.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_77.PacketReceiptAbsenceData>): _77.PacketReceiptAbsenceData;
                    fromAmino(object: _77.PacketReceiptAbsenceDataAmino): _77.PacketReceiptAbsenceData;
                    toAmino(message: _77.PacketReceiptAbsenceData): _77.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _77.PacketReceiptAbsenceDataAminoMsg): _77.PacketReceiptAbsenceData;
                    toAminoMsg(message: _77.PacketReceiptAbsenceData): _77.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _77.PacketReceiptAbsenceDataProtoMsg): _77.PacketReceiptAbsenceData;
                    toProto(message: _77.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _77.PacketReceiptAbsenceData): _77.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _77.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.NextSequenceRecvData;
                    fromPartial(object: Partial<_77.NextSequenceRecvData>): _77.NextSequenceRecvData;
                    fromAmino(object: _77.NextSequenceRecvDataAmino): _77.NextSequenceRecvData;
                    toAmino(message: _77.NextSequenceRecvData): _77.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _77.NextSequenceRecvDataAminoMsg): _77.NextSequenceRecvData;
                    toAminoMsg(message: _77.NextSequenceRecvData): _77.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _77.NextSequenceRecvDataProtoMsg): _77.NextSequenceRecvData;
                    toProto(message: _77.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _77.NextSequenceRecvData): _77.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _78.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.ClientState;
                    fromPartial(object: Partial<_78.ClientState>): _78.ClientState;
                    fromAmino(object: _78.ClientStateAmino): _78.ClientState;
                    toAmino(message: _78.ClientState): _78.ClientStateAmino;
                    fromAminoMsg(object: _78.ClientStateAminoMsg): _78.ClientState;
                    toAminoMsg(message: _78.ClientState): _78.ClientStateAminoMsg;
                    fromProtoMsg(message: _78.ClientStateProtoMsg): _78.ClientState;
                    toProto(message: _78.ClientState): Uint8Array;
                    toProtoMsg(message: _78.ClientState): _78.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _78.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.ConsensusState;
                    fromPartial(object: Partial<_78.ConsensusState>): _78.ConsensusState;
                    fromAmino(object: _78.ConsensusStateAmino): _78.ConsensusState;
                    toAmino(message: _78.ConsensusState): _78.ConsensusStateAmino;
                    fromAminoMsg(object: _78.ConsensusStateAminoMsg): _78.ConsensusState;
                    toAminoMsg(message: _78.ConsensusState): _78.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _78.ConsensusStateProtoMsg): _78.ConsensusState;
                    toProto(message: _78.ConsensusState): Uint8Array;
                    toProtoMsg(message: _78.ConsensusState): _78.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _78.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.Misbehaviour;
                    fromPartial(object: Partial<_78.Misbehaviour>): _78.Misbehaviour;
                    fromAmino(object: _78.MisbehaviourAmino): _78.Misbehaviour;
                    toAmino(message: _78.Misbehaviour): _78.MisbehaviourAmino;
                    fromAminoMsg(object: _78.MisbehaviourAminoMsg): _78.Misbehaviour;
                    toAminoMsg(message: _78.Misbehaviour): _78.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _78.MisbehaviourProtoMsg): _78.Misbehaviour;
                    toProto(message: _78.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _78.Misbehaviour): _78.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _78.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.Header;
                    fromPartial(object: Partial<_78.Header>): _78.Header;
                    fromAmino(object: _78.HeaderAmino): _78.Header;
                    toAmino(message: _78.Header): _78.HeaderAmino;
                    fromAminoMsg(object: _78.HeaderAminoMsg): _78.Header;
                    toAminoMsg(message: _78.Header): _78.HeaderAminoMsg;
                    fromProtoMsg(message: _78.HeaderProtoMsg): _78.Header;
                    toProto(message: _78.Header): Uint8Array;
                    toProtoMsg(message: _78.Header): _78.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _78.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.Fraction;
                    fromPartial(object: Partial<_78.Fraction>): _78.Fraction;
                    fromAmino(object: _78.FractionAmino): _78.Fraction;
                    toAmino(message: _78.Fraction): _78.FractionAmino;
                    fromAminoMsg(object: _78.FractionAminoMsg): _78.Fraction;
                    toAminoMsg(message: _78.Fraction): _78.FractionAminoMsg;
                    fromProtoMsg(message: _78.FractionProtoMsg): _78.Fraction;
                    toProto(message: _78.Fraction): Uint8Array;
                    toProtoMsg(message: _78.Fraction): _78.FractionProtoMsg;
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
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _153.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _154.MsgClientImpl;
                    };
                    client: {
                        v1: _155.MsgClientImpl;
                    };
                    connection: {
                        v1: _156.MsgClientImpl;
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
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
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
                            denomTrace(request: _58.QueryDenomTraceRequest): Promise<_58.QueryDenomTraceResponse>;
                            denomTraces(request?: _58.QueryDenomTracesRequest): Promise<_58.QueryDenomTracesResponse>;
                            params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _64.QueryChannelRequest): Promise<_64.QueryChannelResponse>;
                            channels(request?: _64.QueryChannelsRequest): Promise<_64.QueryChannelsResponse>;
                            connectionChannels(request: _64.QueryConnectionChannelsRequest): Promise<_64.QueryConnectionChannelsResponse>;
                            channelClientState(request: _64.QueryChannelClientStateRequest): Promise<_64.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _64.QueryChannelConsensusStateRequest): Promise<_64.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _64.QueryPacketCommitmentRequest): Promise<_64.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _64.QueryPacketCommitmentsRequest): Promise<_64.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _64.QueryPacketReceiptRequest): Promise<_64.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _64.QueryPacketAcknowledgementRequest): Promise<_64.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _64.QueryPacketAcknowledgementsRequest): Promise<_64.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _64.QueryUnreceivedPacketsRequest): Promise<_64.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _64.QueryUnreceivedAcksRequest): Promise<_64.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _64.QueryNextSequenceReceiveRequest): Promise<_64.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _68.QueryClientStateRequest): Promise<_68.QueryClientStateResponse>;
                            clientStates(request?: _68.QueryClientStatesRequest): Promise<_68.QueryClientStatesResponse>;
                            consensusState(request: _68.QueryConsensusStateRequest): Promise<_68.QueryConsensusStateResponse>;
                            consensusStates(request: _68.QueryConsensusStatesRequest): Promise<_68.QueryConsensusStatesResponse>;
                            clientStatus(request: _68.QueryClientStatusRequest): Promise<_68.QueryClientStatusResponse>;
                            clientParams(request?: _68.QueryClientParamsRequest): Promise<_68.QueryClientParamsResponse>;
                            upgradedClientState(request?: _68.QueryUpgradedClientStateRequest): Promise<_68.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _68.QueryUpgradedConsensusStateRequest): Promise<_68.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _73.QueryConnectionRequest): Promise<_73.QueryConnectionResponse>;
                            connections(request?: _73.QueryConnectionsRequest): Promise<_73.QueryConnectionsResponse>;
                            clientConnections(request: _73.QueryClientConnectionsRequest): Promise<_73.QueryClientConnectionsResponse>;
                            connectionClientState(request: _73.QueryConnectionClientStateRequest): Promise<_73.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _73.QueryConnectionConsensusStateRequest): Promise<_73.QueryConnectionConsensusStateResponse>;
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
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
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
                        v1: _145.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _146.LCDQueryClient;
                    };
                    client: {
                        v1: _147.LCDQueryClient;
                    };
                    connection: {
                        v1: _148.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
