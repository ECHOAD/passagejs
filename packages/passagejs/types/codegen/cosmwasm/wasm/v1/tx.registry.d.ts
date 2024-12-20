import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
    };
    fromPartial: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
    };
};
