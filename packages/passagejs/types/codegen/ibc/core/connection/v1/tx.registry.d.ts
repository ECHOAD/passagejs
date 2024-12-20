import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        connectionOpenInit(value: MsgConnectionOpenInit): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        connectionOpenTry(value: MsgConnectionOpenTry): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        connectionOpenAck(value: MsgConnectionOpenAck): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        connectionOpenInit(value: MsgConnectionOpenInit): {
            typeUrl: string;
            value: MsgConnectionOpenInit;
        };
        connectionOpenTry(value: MsgConnectionOpenTry): {
            typeUrl: string;
            value: MsgConnectionOpenTry;
        };
        connectionOpenAck(value: MsgConnectionOpenAck): {
            typeUrl: string;
            value: MsgConnectionOpenAck;
        };
        connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
            typeUrl: string;
            value: MsgConnectionOpenConfirm;
        };
    };
    fromPartial: {
        connectionOpenInit(value: MsgConnectionOpenInit): {
            typeUrl: string;
            value: MsgConnectionOpenInit;
        };
        connectionOpenTry(value: MsgConnectionOpenTry): {
            typeUrl: string;
            value: MsgConnectionOpenTry;
        };
        connectionOpenAck(value: MsgConnectionOpenAck): {
            typeUrl: string;
            value: MsgConnectionOpenAck;
        };
        connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
            typeUrl: string;
            value: MsgConnectionOpenConfirm;
        };
    };
};
