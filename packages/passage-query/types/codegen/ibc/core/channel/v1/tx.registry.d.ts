import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: MsgChannelOpenInit;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: MsgChannelOpenTry;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: MsgChannelOpenAck;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: MsgChannelOpenConfirm;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: MsgChannelCloseInit;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: MsgChannelCloseConfirm;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: MsgTimeout;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: MsgTimeoutOnClose;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
    };
    fromPartial: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: MsgChannelOpenInit;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: MsgChannelOpenTry;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: MsgChannelOpenAck;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: MsgChannelOpenConfirm;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: MsgChannelCloseInit;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: MsgChannelCloseConfirm;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: MsgTimeout;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: MsgTimeoutOnClose;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
    };
};
