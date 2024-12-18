import * as _42 from "./wasm/v1/genesis";
import * as _43 from "./wasm/v1/ibc";
import * as _44 from "./wasm/v1/proposal";
import * as _45 from "./wasm/v1/query";
import * as _46 from "./wasm/v1/tx";
import * as _47 from "./wasm/v1/types";
import * as _126 from "./wasm/v1/query.lcd";
import * as _127 from "./wasm/v1/query.rpc.Query";
import * as _128 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _128.MsgClientImpl;
            createClientImpl: (rpc: import("../helpers").Rpc) => _128.MsgClientImpl;
            QueryClientImpl: typeof _127.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _45.QueryContractInfoRequest): Promise<_45.QueryContractInfoResponse>;
                contractHistory(request: _45.QueryContractHistoryRequest): Promise<_45.QueryContractHistoryResponse>;
                contractsByCode(request: _45.QueryContractsByCodeRequest): Promise<_45.QueryContractsByCodeResponse>;
                allContractState(request: _45.QueryAllContractStateRequest): Promise<_45.QueryAllContractStateResponse>;
                rawContractState(request: _45.QueryRawContractStateRequest): Promise<_45.QueryRawContractStateResponse>;
                smartContractState(request: _45.QuerySmartContractStateRequest): Promise<_45.QuerySmartContractStateResponse>;
                code(request: _45.QueryCodeRequest): Promise<_45.QueryCodeResponse>;
                codes(request?: _45.QueryCodesRequest): Promise<_45.QueryCodesResponse>;
                pinnedCodes(request?: _45.QueryPinnedCodesRequest): Promise<_45.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _126.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _46.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    instantiateContract(value: _46.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    executeContract(value: _46.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    migrateContract(value: _46.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateAdmin(value: _46.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    clearAdmin(value: _46.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _46.MsgStoreCode): {
                        typeUrl: string;
                        value: _46.MsgStoreCode;
                    };
                    instantiateContract(value: _46.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _46.MsgInstantiateContract;
                    };
                    executeContract(value: _46.MsgExecuteContract): {
                        typeUrl: string;
                        value: _46.MsgExecuteContract;
                    };
                    migrateContract(value: _46.MsgMigrateContract): {
                        typeUrl: string;
                        value: _46.MsgMigrateContract;
                    };
                    updateAdmin(value: _46.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _46.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _46.MsgClearAdmin): {
                        typeUrl: string;
                        value: _46.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _46.MsgStoreCode): {
                        typeUrl: string;
                        value: _46.MsgStoreCode;
                    };
                    instantiateContract(value: _46.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _46.MsgInstantiateContract;
                    };
                    executeContract(value: _46.MsgExecuteContract): {
                        typeUrl: string;
                        value: _46.MsgExecuteContract;
                    };
                    migrateContract(value: _46.MsgMigrateContract): {
                        typeUrl: string;
                        value: _46.MsgMigrateContract;
                    };
                    updateAdmin(value: _46.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _46.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _46.MsgClearAdmin): {
                        typeUrl: string;
                        value: _46.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _46.MsgStoreCode) => _46.MsgStoreCodeAmino;
                    fromAmino: (object: _46.MsgStoreCodeAmino) => _46.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _46.MsgInstantiateContract) => _46.MsgInstantiateContractAmino;
                    fromAmino: (object: _46.MsgInstantiateContractAmino) => _46.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _46.MsgExecuteContract) => _46.MsgExecuteContractAmino;
                    fromAmino: (object: _46.MsgExecuteContractAmino) => _46.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _46.MsgMigrateContract) => _46.MsgMigrateContractAmino;
                    fromAmino: (object: _46.MsgMigrateContractAmino) => _46.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _46.MsgUpdateAdmin) => _46.MsgUpdateAdminAmino;
                    fromAmino: (object: _46.MsgUpdateAdminAmino) => _46.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _46.MsgClearAdmin) => _46.MsgClearAdminAmino;
                    fromAmino: (object: _46.MsgClearAdminAmino) => _46.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _47.AccessType;
            accessTypeToJSON(object: _47.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _47.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _47.ContractCodeHistoryOperationType): string;
            AccessType: typeof _47.AccessType;
            AccessTypeSDKType: typeof _47.AccessType;
            AccessTypeAmino: typeof _47.AccessType;
            ContractCodeHistoryOperationType: typeof _47.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _47.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _47.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.AccessTypeParam;
                isSDK(o: any): o is _47.AccessTypeParamSDKType;
                isAmino(o: any): o is _47.AccessTypeParamAmino;
                encode(message: _47.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.AccessTypeParam;
                fromPartial(object: import("../helpers").DeepPartial<_47.AccessTypeParam>): _47.AccessTypeParam;
                fromAmino(object: _47.AccessTypeParamAmino): _47.AccessTypeParam;
                toAmino(message: _47.AccessTypeParam): _47.AccessTypeParamAmino;
                fromAminoMsg(object: _47.AccessTypeParamAminoMsg): _47.AccessTypeParam;
                toAminoMsg(message: _47.AccessTypeParam): _47.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _47.AccessTypeParamProtoMsg): _47.AccessTypeParam;
                toProto(message: _47.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _47.AccessTypeParam): _47.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.AccessConfig;
                isSDK(o: any): o is _47.AccessConfigSDKType;
                isAmino(o: any): o is _47.AccessConfigAmino;
                encode(message: _47.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.AccessConfig;
                fromPartial(object: import("../helpers").DeepPartial<_47.AccessConfig>): _47.AccessConfig;
                fromAmino(object: _47.AccessConfigAmino): _47.AccessConfig;
                toAmino(message: _47.AccessConfig): _47.AccessConfigAmino;
                fromAminoMsg(object: _47.AccessConfigAminoMsg): _47.AccessConfig;
                toAminoMsg(message: _47.AccessConfig): _47.AccessConfigAminoMsg;
                fromProtoMsg(message: _47.AccessConfigProtoMsg): _47.AccessConfig;
                toProto(message: _47.AccessConfig): Uint8Array;
                toProtoMsg(message: _47.AccessConfig): _47.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.Params;
                isSDK(o: any): o is _47.ParamsSDKType;
                isAmino(o: any): o is _47.ParamsAmino;
                encode(message: _47.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.Params;
                fromPartial(object: import("../helpers").DeepPartial<_47.Params>): _47.Params;
                fromAmino(object: _47.ParamsAmino): _47.Params;
                toAmino(message: _47.Params): _47.ParamsAmino;
                fromAminoMsg(object: _47.ParamsAminoMsg): _47.Params;
                toAminoMsg(message: _47.Params): _47.ParamsAminoMsg;
                fromProtoMsg(message: _47.ParamsProtoMsg): _47.Params;
                toProto(message: _47.Params): Uint8Array;
                toProtoMsg(message: _47.Params): _47.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.CodeInfo;
                isSDK(o: any): o is _47.CodeInfoSDKType;
                isAmino(o: any): o is _47.CodeInfoAmino;
                encode(message: _47.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.CodeInfo;
                fromPartial(object: import("../helpers").DeepPartial<_47.CodeInfo>): _47.CodeInfo;
                fromAmino(object: _47.CodeInfoAmino): _47.CodeInfo;
                toAmino(message: _47.CodeInfo): _47.CodeInfoAmino;
                fromAminoMsg(object: _47.CodeInfoAminoMsg): _47.CodeInfo;
                toAminoMsg(message: _47.CodeInfo): _47.CodeInfoAminoMsg;
                fromProtoMsg(message: _47.CodeInfoProtoMsg): _47.CodeInfo;
                toProto(message: _47.CodeInfo): Uint8Array;
                toProtoMsg(message: _47.CodeInfo): _47.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.ContractInfo;
                isSDK(o: any): o is _47.ContractInfoSDKType;
                isAmino(o: any): o is _47.ContractInfoAmino;
                encode(message: _47.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.ContractInfo;
                fromPartial(object: import("../helpers").DeepPartial<_47.ContractInfo>): _47.ContractInfo;
                fromAmino(object: _47.ContractInfoAmino): _47.ContractInfo;
                toAmino(message: _47.ContractInfo): _47.ContractInfoAmino;
                fromAminoMsg(object: _47.ContractInfoAminoMsg): _47.ContractInfo;
                toAminoMsg(message: _47.ContractInfo): _47.ContractInfoAminoMsg;
                fromProtoMsg(message: _47.ContractInfoProtoMsg): _47.ContractInfo;
                toProto(message: _47.ContractInfo): Uint8Array;
                toProtoMsg(message: _47.ContractInfo): _47.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.ContractCodeHistoryEntry;
                isSDK(o: any): o is _47.ContractCodeHistoryEntrySDKType;
                isAmino(o: any): o is _47.ContractCodeHistoryEntryAmino;
                encode(message: _47.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.ContractCodeHistoryEntry;
                fromPartial(object: import("../helpers").DeepPartial<_47.ContractCodeHistoryEntry>): _47.ContractCodeHistoryEntry;
                fromAmino(object: _47.ContractCodeHistoryEntryAmino): _47.ContractCodeHistoryEntry;
                toAmino(message: _47.ContractCodeHistoryEntry): _47.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _47.ContractCodeHistoryEntryAminoMsg): _47.ContractCodeHistoryEntry;
                toAminoMsg(message: _47.ContractCodeHistoryEntry): _47.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _47.ContractCodeHistoryEntryProtoMsg): _47.ContractCodeHistoryEntry;
                toProto(message: _47.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _47.ContractCodeHistoryEntry): _47.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.AbsoluteTxPosition;
                isSDK(o: any): o is _47.AbsoluteTxPositionSDKType;
                isAmino(o: any): o is _47.AbsoluteTxPositionAmino;
                encode(message: _47.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.AbsoluteTxPosition;
                fromPartial(object: import("../helpers").DeepPartial<_47.AbsoluteTxPosition>): _47.AbsoluteTxPosition;
                fromAmino(object: _47.AbsoluteTxPositionAmino): _47.AbsoluteTxPosition;
                toAmino(message: _47.AbsoluteTxPosition): _47.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _47.AbsoluteTxPositionAminoMsg): _47.AbsoluteTxPosition;
                toAminoMsg(message: _47.AbsoluteTxPosition): _47.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _47.AbsoluteTxPositionProtoMsg): _47.AbsoluteTxPosition;
                toProto(message: _47.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _47.AbsoluteTxPosition): _47.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _47.Model;
                isSDK(o: any): o is _47.ModelSDKType;
                isAmino(o: any): o is _47.ModelAmino;
                encode(message: _47.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.Model;
                fromPartial(object: import("../helpers").DeepPartial<_47.Model>): _47.Model;
                fromAmino(object: _47.ModelAmino): _47.Model;
                toAmino(message: _47.Model): _47.ModelAmino;
                fromAminoMsg(object: _47.ModelAminoMsg): _47.Model;
                toAminoMsg(message: _47.Model): _47.ModelAminoMsg;
                fromProtoMsg(message: _47.ModelProtoMsg): _47.Model;
                toProto(message: _47.Model): Uint8Array;
                toProtoMsg(message: _47.Model): _47.ModelProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgStoreCode;
                isSDK(o: any): o is _46.MsgStoreCodeSDKType;
                isAmino(o: any): o is _46.MsgStoreCodeAmino;
                encode(message: _46.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgStoreCode;
                fromPartial(object: import("../helpers").DeepPartial<_46.MsgStoreCode>): _46.MsgStoreCode;
                fromAmino(object: _46.MsgStoreCodeAmino): _46.MsgStoreCode;
                toAmino(message: _46.MsgStoreCode): _46.MsgStoreCodeAmino;
                fromAminoMsg(object: _46.MsgStoreCodeAminoMsg): _46.MsgStoreCode;
                toAminoMsg(message: _46.MsgStoreCode): _46.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _46.MsgStoreCodeProtoMsg): _46.MsgStoreCode;
                toProto(message: _46.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _46.MsgStoreCode): _46.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgStoreCodeResponse;
                isSDK(o: any): o is _46.MsgStoreCodeResponseSDKType;
                isAmino(o: any): o is _46.MsgStoreCodeResponseAmino;
                encode(message: _46.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgStoreCodeResponse;
                fromPartial(object: import("../helpers").DeepPartial<_46.MsgStoreCodeResponse>): _46.MsgStoreCodeResponse;
                fromAmino(object: _46.MsgStoreCodeResponseAmino): _46.MsgStoreCodeResponse;
                toAmino(message: _46.MsgStoreCodeResponse): _46.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _46.MsgStoreCodeResponseAminoMsg): _46.MsgStoreCodeResponse;
                toAminoMsg(message: _46.MsgStoreCodeResponse): _46.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _46.MsgStoreCodeResponseProtoMsg): _46.MsgStoreCodeResponse;
                toProto(message: _46.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _46.MsgStoreCodeResponse): _46.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgInstantiateContract;
                isSDK(o: any): o is _46.MsgInstantiateContractSDKType;
                isAmino(o: any): o is _46.MsgInstantiateContractAmino;
                encode(message: _46.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgInstantiateContract;
                fromPartial(object: import("../helpers").DeepPartial<_46.MsgInstantiateContract>): _46.MsgInstantiateContract;
                fromAmino(object: _46.MsgInstantiateContractAmino): _46.MsgInstantiateContract;
                toAmino(message: _46.MsgInstantiateContract): _46.MsgInstantiateContractAmino;
                fromAminoMsg(object: _46.MsgInstantiateContractAminoMsg): _46.MsgInstantiateContract;
                toAminoMsg(message: _46.MsgInstantiateContract): _46.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _46.MsgInstantiateContractProtoMsg): _46.MsgInstantiateContract;
                toProto(message: _46.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _46.MsgInstantiateContract): _46.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgInstantiateContractResponse;
                isSDK(o: any): o is _46.MsgInstantiateContractResponseSDKType;
                isAmino(o: any): o is _46.MsgInstantiateContractResponseAmino;
                encode(message: _46.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgInstantiateContractResponse;
                fromPartial(object: import("../helpers").DeepPartial<_46.MsgInstantiateContractResponse>): _46.MsgInstantiateContractResponse;
                fromAmino(object: _46.MsgInstantiateContractResponseAmino): _46.MsgInstantiateContractResponse;
                toAmino(message: _46.MsgInstantiateContractResponse): _46.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _46.MsgInstantiateContractResponseAminoMsg): _46.MsgInstantiateContractResponse;
                toAminoMsg(message: _46.MsgInstantiateContractResponse): _46.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _46.MsgInstantiateContractResponseProtoMsg): _46.MsgInstantiateContractResponse;
                toProto(message: _46.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _46.MsgInstantiateContractResponse): _46.MsgInstantiateContractResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgExecuteContract;
                isSDK(o: any): o is _46.MsgExecuteContractSDKType;
                isAmino(o: any): o is _46.MsgExecuteContractAmino;
                encode(message: _46.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgExecuteContract;
                fromPartial(object: import("../helpers").DeepPartial<_46.MsgExecuteContract>): _46.MsgExecuteContract;
                fromAmino(object: _46.MsgExecuteContractAmino): _46.MsgExecuteContract;
                toAmino(message: _46.MsgExecuteContract): _46.MsgExecuteContractAmino;
                fromAminoMsg(object: _46.MsgExecuteContractAminoMsg): _46.MsgExecuteContract;
                toAminoMsg(message: _46.MsgExecuteContract): _46.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _46.MsgExecuteContractProtoMsg): _46.MsgExecuteContract;
                toProto(message: _46.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _46.MsgExecuteContract): _46.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgExecuteContractResponse;
                isSDK(o: any): o is _46.MsgExecuteContractResponseSDKType;
                isAmino(o: any): o is _46.MsgExecuteContractResponseAmino;
                encode(message: _46.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgExecuteContractResponse;
                fromPartial(object: import("../helpers").DeepPartial<_46.MsgExecuteContractResponse>): _46.MsgExecuteContractResponse;
                fromAmino(object: _46.MsgExecuteContractResponseAmino): _46.MsgExecuteContractResponse;
                toAmino(message: _46.MsgExecuteContractResponse): _46.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _46.MsgExecuteContractResponseAminoMsg): _46.MsgExecuteContractResponse;
                toAminoMsg(message: _46.MsgExecuteContractResponse): _46.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _46.MsgExecuteContractResponseProtoMsg): _46.MsgExecuteContractResponse;
                toProto(message: _46.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _46.MsgExecuteContractResponse): _46.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgMigrateContract;
                isSDK(o: any): o is _46.MsgMigrateContractSDKType;
                isAmino(o: any): o is _46.MsgMigrateContractAmino;
                encode(message: _46.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgMigrateContract;
                fromPartial(object: import("../helpers").DeepPartial<_46.MsgMigrateContract>): _46.MsgMigrateContract;
                fromAmino(object: _46.MsgMigrateContractAmino): _46.MsgMigrateContract;
                toAmino(message: _46.MsgMigrateContract): _46.MsgMigrateContractAmino;
                fromAminoMsg(object: _46.MsgMigrateContractAminoMsg): _46.MsgMigrateContract;
                toAminoMsg(message: _46.MsgMigrateContract): _46.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _46.MsgMigrateContractProtoMsg): _46.MsgMigrateContract;
                toProto(message: _46.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _46.MsgMigrateContract): _46.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgMigrateContractResponse;
                isSDK(o: any): o is _46.MsgMigrateContractResponseSDKType;
                isAmino(o: any): o is _46.MsgMigrateContractResponseAmino;
                encode(message: _46.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgMigrateContractResponse;
                fromPartial(object: import("../helpers").DeepPartial<_46.MsgMigrateContractResponse>): _46.MsgMigrateContractResponse;
                fromAmino(object: _46.MsgMigrateContractResponseAmino): _46.MsgMigrateContractResponse;
                toAmino(message: _46.MsgMigrateContractResponse): _46.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _46.MsgMigrateContractResponseAminoMsg): _46.MsgMigrateContractResponse;
                toAminoMsg(message: _46.MsgMigrateContractResponse): _46.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _46.MsgMigrateContractResponseProtoMsg): _46.MsgMigrateContractResponse;
                toProto(message: _46.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _46.MsgMigrateContractResponse): _46.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgUpdateAdmin;
                isSDK(o: any): o is _46.MsgUpdateAdminSDKType;
                isAmino(o: any): o is _46.MsgUpdateAdminAmino;
                encode(message: _46.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgUpdateAdmin;
                fromPartial(object: import("../helpers").DeepPartial<_46.MsgUpdateAdmin>): _46.MsgUpdateAdmin;
                fromAmino(object: _46.MsgUpdateAdminAmino): _46.MsgUpdateAdmin;
                toAmino(message: _46.MsgUpdateAdmin): _46.MsgUpdateAdminAmino;
                fromAminoMsg(object: _46.MsgUpdateAdminAminoMsg): _46.MsgUpdateAdmin;
                toAminoMsg(message: _46.MsgUpdateAdmin): _46.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateAdminProtoMsg): _46.MsgUpdateAdmin;
                toProto(message: _46.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateAdmin): _46.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgUpdateAdminResponse;
                isSDK(o: any): o is _46.MsgUpdateAdminResponseSDKType;
                isAmino(o: any): o is _46.MsgUpdateAdminResponseAmino;
                encode(_: _46.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgUpdateAdminResponse;
                fromPartial(_: import("../helpers").DeepPartial<_46.MsgUpdateAdminResponse>): _46.MsgUpdateAdminResponse;
                fromAmino(_: _46.MsgUpdateAdminResponseAmino): _46.MsgUpdateAdminResponse;
                toAmino(_: _46.MsgUpdateAdminResponse): _46.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _46.MsgUpdateAdminResponseAminoMsg): _46.MsgUpdateAdminResponse;
                toAminoMsg(message: _46.MsgUpdateAdminResponse): _46.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateAdminResponseProtoMsg): _46.MsgUpdateAdminResponse;
                toProto(message: _46.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateAdminResponse): _46.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgClearAdmin;
                isSDK(o: any): o is _46.MsgClearAdminSDKType;
                isAmino(o: any): o is _46.MsgClearAdminAmino;
                encode(message: _46.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgClearAdmin;
                fromPartial(object: import("../helpers").DeepPartial<_46.MsgClearAdmin>): _46.MsgClearAdmin;
                fromAmino(object: _46.MsgClearAdminAmino): _46.MsgClearAdmin;
                toAmino(message: _46.MsgClearAdmin): _46.MsgClearAdminAmino;
                fromAminoMsg(object: _46.MsgClearAdminAminoMsg): _46.MsgClearAdmin;
                toAminoMsg(message: _46.MsgClearAdmin): _46.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _46.MsgClearAdminProtoMsg): _46.MsgClearAdmin;
                toProto(message: _46.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _46.MsgClearAdmin): _46.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _46.MsgClearAdminResponse;
                isSDK(o: any): o is _46.MsgClearAdminResponseSDKType;
                isAmino(o: any): o is _46.MsgClearAdminResponseAmino;
                encode(_: _46.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgClearAdminResponse;
                fromPartial(_: import("../helpers").DeepPartial<_46.MsgClearAdminResponse>): _46.MsgClearAdminResponse;
                fromAmino(_: _46.MsgClearAdminResponseAmino): _46.MsgClearAdminResponse;
                toAmino(_: _46.MsgClearAdminResponse): _46.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _46.MsgClearAdminResponseAminoMsg): _46.MsgClearAdminResponse;
                toAminoMsg(message: _46.MsgClearAdminResponse): _46.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _46.MsgClearAdminResponseProtoMsg): _46.MsgClearAdminResponse;
                toProto(message: _46.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _46.MsgClearAdminResponse): _46.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryContractInfoRequest;
                isSDK(o: any): o is _45.QueryContractInfoRequestSDKType;
                isAmino(o: any): o is _45.QueryContractInfoRequestAmino;
                encode(message: _45.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryContractInfoRequest;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryContractInfoRequest>): _45.QueryContractInfoRequest;
                fromAmino(object: _45.QueryContractInfoRequestAmino): _45.QueryContractInfoRequest;
                toAmino(message: _45.QueryContractInfoRequest): _45.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _45.QueryContractInfoRequestAminoMsg): _45.QueryContractInfoRequest;
                toAminoMsg(message: _45.QueryContractInfoRequest): _45.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _45.QueryContractInfoRequestProtoMsg): _45.QueryContractInfoRequest;
                toProto(message: _45.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _45.QueryContractInfoRequest): _45.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryContractInfoResponse;
                isSDK(o: any): o is _45.QueryContractInfoResponseSDKType;
                isAmino(o: any): o is _45.QueryContractInfoResponseAmino;
                encode(message: _45.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryContractInfoResponse;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryContractInfoResponse>): _45.QueryContractInfoResponse;
                fromAmino(object: _45.QueryContractInfoResponseAmino): _45.QueryContractInfoResponse;
                toAmino(message: _45.QueryContractInfoResponse): _45.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _45.QueryContractInfoResponseAminoMsg): _45.QueryContractInfoResponse;
                toAminoMsg(message: _45.QueryContractInfoResponse): _45.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _45.QueryContractInfoResponseProtoMsg): _45.QueryContractInfoResponse;
                toProto(message: _45.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _45.QueryContractInfoResponse): _45.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryContractHistoryRequest;
                isSDK(o: any): o is _45.QueryContractHistoryRequestSDKType;
                isAmino(o: any): o is _45.QueryContractHistoryRequestAmino;
                encode(message: _45.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryContractHistoryRequest;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryContractHistoryRequest>): _45.QueryContractHistoryRequest;
                fromAmino(object: _45.QueryContractHistoryRequestAmino): _45.QueryContractHistoryRequest;
                toAmino(message: _45.QueryContractHistoryRequest): _45.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _45.QueryContractHistoryRequestAminoMsg): _45.QueryContractHistoryRequest;
                toAminoMsg(message: _45.QueryContractHistoryRequest): _45.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _45.QueryContractHistoryRequestProtoMsg): _45.QueryContractHistoryRequest;
                toProto(message: _45.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _45.QueryContractHistoryRequest): _45.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryContractHistoryResponse;
                isSDK(o: any): o is _45.QueryContractHistoryResponseSDKType;
                isAmino(o: any): o is _45.QueryContractHistoryResponseAmino;
                encode(message: _45.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryContractHistoryResponse;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryContractHistoryResponse>): _45.QueryContractHistoryResponse;
                fromAmino(object: _45.QueryContractHistoryResponseAmino): _45.QueryContractHistoryResponse;
                toAmino(message: _45.QueryContractHistoryResponse): _45.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _45.QueryContractHistoryResponseAminoMsg): _45.QueryContractHistoryResponse;
                toAminoMsg(message: _45.QueryContractHistoryResponse): _45.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _45.QueryContractHistoryResponseProtoMsg): _45.QueryContractHistoryResponse;
                toProto(message: _45.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _45.QueryContractHistoryResponse): _45.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryContractsByCodeRequest;
                isSDK(o: any): o is _45.QueryContractsByCodeRequestSDKType;
                isAmino(o: any): o is _45.QueryContractsByCodeRequestAmino;
                encode(message: _45.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryContractsByCodeRequest;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryContractsByCodeRequest>): _45.QueryContractsByCodeRequest;
                fromAmino(object: _45.QueryContractsByCodeRequestAmino): _45.QueryContractsByCodeRequest;
                toAmino(message: _45.QueryContractsByCodeRequest): _45.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _45.QueryContractsByCodeRequestAminoMsg): _45.QueryContractsByCodeRequest;
                toAminoMsg(message: _45.QueryContractsByCodeRequest): _45.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _45.QueryContractsByCodeRequestProtoMsg): _45.QueryContractsByCodeRequest;
                toProto(message: _45.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _45.QueryContractsByCodeRequest): _45.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryContractsByCodeResponse;
                isSDK(o: any): o is _45.QueryContractsByCodeResponseSDKType;
                isAmino(o: any): o is _45.QueryContractsByCodeResponseAmino;
                encode(message: _45.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryContractsByCodeResponse;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryContractsByCodeResponse>): _45.QueryContractsByCodeResponse;
                fromAmino(object: _45.QueryContractsByCodeResponseAmino): _45.QueryContractsByCodeResponse;
                toAmino(message: _45.QueryContractsByCodeResponse): _45.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _45.QueryContractsByCodeResponseAminoMsg): _45.QueryContractsByCodeResponse;
                toAminoMsg(message: _45.QueryContractsByCodeResponse): _45.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _45.QueryContractsByCodeResponseProtoMsg): _45.QueryContractsByCodeResponse;
                toProto(message: _45.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _45.QueryContractsByCodeResponse): _45.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryAllContractStateRequest;
                isSDK(o: any): o is _45.QueryAllContractStateRequestSDKType;
                isAmino(o: any): o is _45.QueryAllContractStateRequestAmino;
                encode(message: _45.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryAllContractStateRequest;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryAllContractStateRequest>): _45.QueryAllContractStateRequest;
                fromAmino(object: _45.QueryAllContractStateRequestAmino): _45.QueryAllContractStateRequest;
                toAmino(message: _45.QueryAllContractStateRequest): _45.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _45.QueryAllContractStateRequestAminoMsg): _45.QueryAllContractStateRequest;
                toAminoMsg(message: _45.QueryAllContractStateRequest): _45.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _45.QueryAllContractStateRequestProtoMsg): _45.QueryAllContractStateRequest;
                toProto(message: _45.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _45.QueryAllContractStateRequest): _45.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryAllContractStateResponse;
                isSDK(o: any): o is _45.QueryAllContractStateResponseSDKType;
                isAmino(o: any): o is _45.QueryAllContractStateResponseAmino;
                encode(message: _45.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryAllContractStateResponse;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryAllContractStateResponse>): _45.QueryAllContractStateResponse;
                fromAmino(object: _45.QueryAllContractStateResponseAmino): _45.QueryAllContractStateResponse;
                toAmino(message: _45.QueryAllContractStateResponse): _45.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _45.QueryAllContractStateResponseAminoMsg): _45.QueryAllContractStateResponse;
                toAminoMsg(message: _45.QueryAllContractStateResponse): _45.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _45.QueryAllContractStateResponseProtoMsg): _45.QueryAllContractStateResponse;
                toProto(message: _45.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _45.QueryAllContractStateResponse): _45.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryRawContractStateRequest;
                isSDK(o: any): o is _45.QueryRawContractStateRequestSDKType;
                isAmino(o: any): o is _45.QueryRawContractStateRequestAmino;
                encode(message: _45.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryRawContractStateRequest;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryRawContractStateRequest>): _45.QueryRawContractStateRequest;
                fromAmino(object: _45.QueryRawContractStateRequestAmino): _45.QueryRawContractStateRequest;
                toAmino(message: _45.QueryRawContractStateRequest): _45.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _45.QueryRawContractStateRequestAminoMsg): _45.QueryRawContractStateRequest;
                toAminoMsg(message: _45.QueryRawContractStateRequest): _45.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _45.QueryRawContractStateRequestProtoMsg): _45.QueryRawContractStateRequest;
                toProto(message: _45.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _45.QueryRawContractStateRequest): _45.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryRawContractStateResponse;
                isSDK(o: any): o is _45.QueryRawContractStateResponseSDKType;
                isAmino(o: any): o is _45.QueryRawContractStateResponseAmino;
                encode(message: _45.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryRawContractStateResponse;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryRawContractStateResponse>): _45.QueryRawContractStateResponse;
                fromAmino(object: _45.QueryRawContractStateResponseAmino): _45.QueryRawContractStateResponse;
                toAmino(message: _45.QueryRawContractStateResponse): _45.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _45.QueryRawContractStateResponseAminoMsg): _45.QueryRawContractStateResponse;
                toAminoMsg(message: _45.QueryRawContractStateResponse): _45.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _45.QueryRawContractStateResponseProtoMsg): _45.QueryRawContractStateResponse;
                toProto(message: _45.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _45.QueryRawContractStateResponse): _45.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QuerySmartContractStateRequest;
                isSDK(o: any): o is _45.QuerySmartContractStateRequestSDKType;
                isAmino(o: any): o is _45.QuerySmartContractStateRequestAmino;
                encode(message: _45.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QuerySmartContractStateRequest;
                fromPartial(object: import("../helpers").DeepPartial<_45.QuerySmartContractStateRequest>): _45.QuerySmartContractStateRequest;
                fromAmino(object: _45.QuerySmartContractStateRequestAmino): _45.QuerySmartContractStateRequest;
                toAmino(message: _45.QuerySmartContractStateRequest): _45.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _45.QuerySmartContractStateRequestAminoMsg): _45.QuerySmartContractStateRequest;
                toAminoMsg(message: _45.QuerySmartContractStateRequest): _45.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _45.QuerySmartContractStateRequestProtoMsg): _45.QuerySmartContractStateRequest;
                toProto(message: _45.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _45.QuerySmartContractStateRequest): _45.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QuerySmartContractStateResponse;
                isSDK(o: any): o is _45.QuerySmartContractStateResponseSDKType;
                isAmino(o: any): o is _45.QuerySmartContractStateResponseAmino;
                encode(message: _45.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QuerySmartContractStateResponse;
                fromPartial(object: import("../helpers").DeepPartial<_45.QuerySmartContractStateResponse>): _45.QuerySmartContractStateResponse;
                fromAmino(object: _45.QuerySmartContractStateResponseAmino): _45.QuerySmartContractStateResponse;
                toAmino(message: _45.QuerySmartContractStateResponse): _45.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _45.QuerySmartContractStateResponseAminoMsg): _45.QuerySmartContractStateResponse;
                toAminoMsg(message: _45.QuerySmartContractStateResponse): _45.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _45.QuerySmartContractStateResponseProtoMsg): _45.QuerySmartContractStateResponse;
                toProto(message: _45.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _45.QuerySmartContractStateResponse): _45.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryCodeRequest;
                isSDK(o: any): o is _45.QueryCodeRequestSDKType;
                isAmino(o: any): o is _45.QueryCodeRequestAmino;
                encode(message: _45.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryCodeRequest;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryCodeRequest>): _45.QueryCodeRequest;
                fromAmino(object: _45.QueryCodeRequestAmino): _45.QueryCodeRequest;
                toAmino(message: _45.QueryCodeRequest): _45.QueryCodeRequestAmino;
                fromAminoMsg(object: _45.QueryCodeRequestAminoMsg): _45.QueryCodeRequest;
                toAminoMsg(message: _45.QueryCodeRequest): _45.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _45.QueryCodeRequestProtoMsg): _45.QueryCodeRequest;
                toProto(message: _45.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _45.QueryCodeRequest): _45.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.CodeInfoResponse;
                isSDK(o: any): o is _45.CodeInfoResponseSDKType;
                isAmino(o: any): o is _45.CodeInfoResponseAmino;
                encode(message: _45.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.CodeInfoResponse;
                fromPartial(object: import("../helpers").DeepPartial<_45.CodeInfoResponse>): _45.CodeInfoResponse;
                fromAmino(object: _45.CodeInfoResponseAmino): _45.CodeInfoResponse;
                toAmino(message: _45.CodeInfoResponse): _45.CodeInfoResponseAmino;
                fromAminoMsg(object: _45.CodeInfoResponseAminoMsg): _45.CodeInfoResponse;
                toAminoMsg(message: _45.CodeInfoResponse): _45.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _45.CodeInfoResponseProtoMsg): _45.CodeInfoResponse;
                toProto(message: _45.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _45.CodeInfoResponse): _45.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryCodeResponse;
                isSDK(o: any): o is _45.QueryCodeResponseSDKType;
                isAmino(o: any): o is _45.QueryCodeResponseAmino;
                encode(message: _45.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryCodeResponse;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryCodeResponse>): _45.QueryCodeResponse;
                fromAmino(object: _45.QueryCodeResponseAmino): _45.QueryCodeResponse;
                toAmino(message: _45.QueryCodeResponse): _45.QueryCodeResponseAmino;
                fromAminoMsg(object: _45.QueryCodeResponseAminoMsg): _45.QueryCodeResponse;
                toAminoMsg(message: _45.QueryCodeResponse): _45.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _45.QueryCodeResponseProtoMsg): _45.QueryCodeResponse;
                toProto(message: _45.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _45.QueryCodeResponse): _45.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryCodesRequest;
                isSDK(o: any): o is _45.QueryCodesRequestSDKType;
                isAmino(o: any): o is _45.QueryCodesRequestAmino;
                encode(message: _45.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryCodesRequest;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryCodesRequest>): _45.QueryCodesRequest;
                fromAmino(object: _45.QueryCodesRequestAmino): _45.QueryCodesRequest;
                toAmino(message: _45.QueryCodesRequest): _45.QueryCodesRequestAmino;
                fromAminoMsg(object: _45.QueryCodesRequestAminoMsg): _45.QueryCodesRequest;
                toAminoMsg(message: _45.QueryCodesRequest): _45.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _45.QueryCodesRequestProtoMsg): _45.QueryCodesRequest;
                toProto(message: _45.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _45.QueryCodesRequest): _45.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryCodesResponse;
                isSDK(o: any): o is _45.QueryCodesResponseSDKType;
                isAmino(o: any): o is _45.QueryCodesResponseAmino;
                encode(message: _45.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryCodesResponse;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryCodesResponse>): _45.QueryCodesResponse;
                fromAmino(object: _45.QueryCodesResponseAmino): _45.QueryCodesResponse;
                toAmino(message: _45.QueryCodesResponse): _45.QueryCodesResponseAmino;
                fromAminoMsg(object: _45.QueryCodesResponseAminoMsg): _45.QueryCodesResponse;
                toAminoMsg(message: _45.QueryCodesResponse): _45.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _45.QueryCodesResponseProtoMsg): _45.QueryCodesResponse;
                toProto(message: _45.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _45.QueryCodesResponse): _45.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryPinnedCodesRequest;
                isSDK(o: any): o is _45.QueryPinnedCodesRequestSDKType;
                isAmino(o: any): o is _45.QueryPinnedCodesRequestAmino;
                encode(message: _45.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryPinnedCodesRequest;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryPinnedCodesRequest>): _45.QueryPinnedCodesRequest;
                fromAmino(object: _45.QueryPinnedCodesRequestAmino): _45.QueryPinnedCodesRequest;
                toAmino(message: _45.QueryPinnedCodesRequest): _45.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _45.QueryPinnedCodesRequestAminoMsg): _45.QueryPinnedCodesRequest;
                toAminoMsg(message: _45.QueryPinnedCodesRequest): _45.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _45.QueryPinnedCodesRequestProtoMsg): _45.QueryPinnedCodesRequest;
                toProto(message: _45.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _45.QueryPinnedCodesRequest): _45.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _45.QueryPinnedCodesResponse;
                isSDK(o: any): o is _45.QueryPinnedCodesResponseSDKType;
                isAmino(o: any): o is _45.QueryPinnedCodesResponseAmino;
                encode(message: _45.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.QueryPinnedCodesResponse;
                fromPartial(object: import("../helpers").DeepPartial<_45.QueryPinnedCodesResponse>): _45.QueryPinnedCodesResponse;
                fromAmino(object: _45.QueryPinnedCodesResponseAmino): _45.QueryPinnedCodesResponse;
                toAmino(message: _45.QueryPinnedCodesResponse): _45.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _45.QueryPinnedCodesResponseAminoMsg): _45.QueryPinnedCodesResponse;
                toAminoMsg(message: _45.QueryPinnedCodesResponse): _45.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _45.QueryPinnedCodesResponseProtoMsg): _45.QueryPinnedCodesResponse;
                toProto(message: _45.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _45.QueryPinnedCodesResponse): _45.QueryPinnedCodesResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.StoreCodeProposal;
                isSDK(o: any): o is _44.StoreCodeProposalSDKType;
                isAmino(o: any): o is _44.StoreCodeProposalAmino;
                encode(message: _44.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.StoreCodeProposal;
                fromPartial(object: import("../helpers").DeepPartial<_44.StoreCodeProposal>): _44.StoreCodeProposal;
                fromAmino(object: _44.StoreCodeProposalAmino): _44.StoreCodeProposal;
                toAmino(message: _44.StoreCodeProposal): _44.StoreCodeProposalAmino;
                fromAminoMsg(object: _44.StoreCodeProposalAminoMsg): _44.StoreCodeProposal;
                toAminoMsg(message: _44.StoreCodeProposal): _44.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _44.StoreCodeProposalProtoMsg): _44.StoreCodeProposal;
                toProto(message: _44.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _44.StoreCodeProposal): _44.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.InstantiateContractProposal;
                isSDK(o: any): o is _44.InstantiateContractProposalSDKType;
                isAmino(o: any): o is _44.InstantiateContractProposalAmino;
                encode(message: _44.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.InstantiateContractProposal;
                fromPartial(object: import("../helpers").DeepPartial<_44.InstantiateContractProposal>): _44.InstantiateContractProposal;
                fromAmino(object: _44.InstantiateContractProposalAmino): _44.InstantiateContractProposal;
                toAmino(message: _44.InstantiateContractProposal): _44.InstantiateContractProposalAmino;
                fromAminoMsg(object: _44.InstantiateContractProposalAminoMsg): _44.InstantiateContractProposal;
                toAminoMsg(message: _44.InstantiateContractProposal): _44.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _44.InstantiateContractProposalProtoMsg): _44.InstantiateContractProposal;
                toProto(message: _44.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _44.InstantiateContractProposal): _44.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.MigrateContractProposal;
                isSDK(o: any): o is _44.MigrateContractProposalSDKType;
                isAmino(o: any): o is _44.MigrateContractProposalAmino;
                encode(message: _44.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.MigrateContractProposal;
                fromPartial(object: import("../helpers").DeepPartial<_44.MigrateContractProposal>): _44.MigrateContractProposal;
                fromAmino(object: _44.MigrateContractProposalAmino): _44.MigrateContractProposal;
                toAmino(message: _44.MigrateContractProposal): _44.MigrateContractProposalAmino;
                fromAminoMsg(object: _44.MigrateContractProposalAminoMsg): _44.MigrateContractProposal;
                toAminoMsg(message: _44.MigrateContractProposal): _44.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _44.MigrateContractProposalProtoMsg): _44.MigrateContractProposal;
                toProto(message: _44.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _44.MigrateContractProposal): _44.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.SudoContractProposal;
                isSDK(o: any): o is _44.SudoContractProposalSDKType;
                isAmino(o: any): o is _44.SudoContractProposalAmino;
                encode(message: _44.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.SudoContractProposal;
                fromPartial(object: import("../helpers").DeepPartial<_44.SudoContractProposal>): _44.SudoContractProposal;
                fromAmino(object: _44.SudoContractProposalAmino): _44.SudoContractProposal;
                toAmino(message: _44.SudoContractProposal): _44.SudoContractProposalAmino;
                fromAminoMsg(object: _44.SudoContractProposalAminoMsg): _44.SudoContractProposal;
                toAminoMsg(message: _44.SudoContractProposal): _44.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _44.SudoContractProposalProtoMsg): _44.SudoContractProposal;
                toProto(message: _44.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _44.SudoContractProposal): _44.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.ExecuteContractProposal;
                isSDK(o: any): o is _44.ExecuteContractProposalSDKType;
                isAmino(o: any): o is _44.ExecuteContractProposalAmino;
                encode(message: _44.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.ExecuteContractProposal;
                fromPartial(object: import("../helpers").DeepPartial<_44.ExecuteContractProposal>): _44.ExecuteContractProposal;
                fromAmino(object: _44.ExecuteContractProposalAmino): _44.ExecuteContractProposal;
                toAmino(message: _44.ExecuteContractProposal): _44.ExecuteContractProposalAmino;
                fromAminoMsg(object: _44.ExecuteContractProposalAminoMsg): _44.ExecuteContractProposal;
                toAminoMsg(message: _44.ExecuteContractProposal): _44.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _44.ExecuteContractProposalProtoMsg): _44.ExecuteContractProposal;
                toProto(message: _44.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _44.ExecuteContractProposal): _44.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.UpdateAdminProposal;
                isSDK(o: any): o is _44.UpdateAdminProposalSDKType;
                isAmino(o: any): o is _44.UpdateAdminProposalAmino;
                encode(message: _44.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.UpdateAdminProposal;
                fromPartial(object: import("../helpers").DeepPartial<_44.UpdateAdminProposal>): _44.UpdateAdminProposal;
                fromAmino(object: _44.UpdateAdminProposalAmino): _44.UpdateAdminProposal;
                toAmino(message: _44.UpdateAdminProposal): _44.UpdateAdminProposalAmino;
                fromAminoMsg(object: _44.UpdateAdminProposalAminoMsg): _44.UpdateAdminProposal;
                toAminoMsg(message: _44.UpdateAdminProposal): _44.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _44.UpdateAdminProposalProtoMsg): _44.UpdateAdminProposal;
                toProto(message: _44.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _44.UpdateAdminProposal): _44.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.ClearAdminProposal;
                isSDK(o: any): o is _44.ClearAdminProposalSDKType;
                isAmino(o: any): o is _44.ClearAdminProposalAmino;
                encode(message: _44.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.ClearAdminProposal;
                fromPartial(object: import("../helpers").DeepPartial<_44.ClearAdminProposal>): _44.ClearAdminProposal;
                fromAmino(object: _44.ClearAdminProposalAmino): _44.ClearAdminProposal;
                toAmino(message: _44.ClearAdminProposal): _44.ClearAdminProposalAmino;
                fromAminoMsg(object: _44.ClearAdminProposalAminoMsg): _44.ClearAdminProposal;
                toAminoMsg(message: _44.ClearAdminProposal): _44.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _44.ClearAdminProposalProtoMsg): _44.ClearAdminProposal;
                toProto(message: _44.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _44.ClearAdminProposal): _44.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.PinCodesProposal;
                isSDK(o: any): o is _44.PinCodesProposalSDKType;
                isAmino(o: any): o is _44.PinCodesProposalAmino;
                encode(message: _44.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.PinCodesProposal;
                fromPartial(object: import("../helpers").DeepPartial<_44.PinCodesProposal>): _44.PinCodesProposal;
                fromAmino(object: _44.PinCodesProposalAmino): _44.PinCodesProposal;
                toAmino(message: _44.PinCodesProposal): _44.PinCodesProposalAmino;
                fromAminoMsg(object: _44.PinCodesProposalAminoMsg): _44.PinCodesProposal;
                toAminoMsg(message: _44.PinCodesProposal): _44.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _44.PinCodesProposalProtoMsg): _44.PinCodesProposal;
                toProto(message: _44.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _44.PinCodesProposal): _44.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.UnpinCodesProposal;
                isSDK(o: any): o is _44.UnpinCodesProposalSDKType;
                isAmino(o: any): o is _44.UnpinCodesProposalAmino;
                encode(message: _44.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.UnpinCodesProposal;
                fromPartial(object: import("../helpers").DeepPartial<_44.UnpinCodesProposal>): _44.UnpinCodesProposal;
                fromAmino(object: _44.UnpinCodesProposalAmino): _44.UnpinCodesProposal;
                toAmino(message: _44.UnpinCodesProposal): _44.UnpinCodesProposalAmino;
                fromAminoMsg(object: _44.UnpinCodesProposalAminoMsg): _44.UnpinCodesProposal;
                toAminoMsg(message: _44.UnpinCodesProposal): _44.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _44.UnpinCodesProposalProtoMsg): _44.UnpinCodesProposal;
                toProto(message: _44.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _44.UnpinCodesProposal): _44.UnpinCodesProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _43.MsgIBCSend;
                isSDK(o: any): o is _43.MsgIBCSendSDKType;
                isAmino(o: any): o is _43.MsgIBCSendAmino;
                encode(message: _43.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.MsgIBCSend;
                fromPartial(object: import("../helpers").DeepPartial<_43.MsgIBCSend>): _43.MsgIBCSend;
                fromAmino(object: _43.MsgIBCSendAmino): _43.MsgIBCSend;
                toAmino(message: _43.MsgIBCSend): _43.MsgIBCSendAmino;
                fromAminoMsg(object: _43.MsgIBCSendAminoMsg): _43.MsgIBCSend;
                toAminoMsg(message: _43.MsgIBCSend): _43.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _43.MsgIBCSendProtoMsg): _43.MsgIBCSend;
                toProto(message: _43.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _43.MsgIBCSend): _43.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _43.MsgIBCCloseChannel;
                isSDK(o: any): o is _43.MsgIBCCloseChannelSDKType;
                isAmino(o: any): o is _43.MsgIBCCloseChannelAmino;
                encode(message: _43.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.MsgIBCCloseChannel;
                fromPartial(object: import("../helpers").DeepPartial<_43.MsgIBCCloseChannel>): _43.MsgIBCCloseChannel;
                fromAmino(object: _43.MsgIBCCloseChannelAmino): _43.MsgIBCCloseChannel;
                toAmino(message: _43.MsgIBCCloseChannel): _43.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _43.MsgIBCCloseChannelAminoMsg): _43.MsgIBCCloseChannel;
                toAminoMsg(message: _43.MsgIBCCloseChannel): _43.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _43.MsgIBCCloseChannelProtoMsg): _43.MsgIBCCloseChannel;
                toProto(message: _43.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _43.MsgIBCCloseChannel): _43.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.GenesisState;
                isSDK(o: any): o is _42.GenesisStateSDKType;
                isAmino(o: any): o is _42.GenesisStateAmino;
                encode(message: _42.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GenesisState;
                fromPartial(object: import("../helpers").DeepPartial<_42.GenesisState>): _42.GenesisState;
                fromAmino(object: _42.GenesisStateAmino): _42.GenesisState;
                toAmino(message: _42.GenesisState): _42.GenesisStateAmino;
                fromAminoMsg(object: _42.GenesisStateAminoMsg): _42.GenesisState;
                toAminoMsg(message: _42.GenesisState): _42.GenesisStateAminoMsg;
                fromProtoMsg(message: _42.GenesisStateProtoMsg): _42.GenesisState;
                toProto(message: _42.GenesisState): Uint8Array;
                toProtoMsg(message: _42.GenesisState): _42.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.GenesisState_GenMsgs;
                isSDK(o: any): o is _42.GenesisState_GenMsgsSDKType;
                isAmino(o: any): o is _42.GenesisState_GenMsgsAmino;
                encode(message: _42.GenesisState_GenMsgs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GenesisState_GenMsgs;
                fromPartial(object: import("../helpers").DeepPartial<_42.GenesisState_GenMsgs>): _42.GenesisState_GenMsgs;
                fromAmino(object: _42.GenesisState_GenMsgsAmino): _42.GenesisState_GenMsgs;
                toAmino(message: _42.GenesisState_GenMsgs): _42.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _42.GenesisState_GenMsgsAminoMsg): _42.GenesisState_GenMsgs;
                toAminoMsg(message: _42.GenesisState_GenMsgs): _42.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _42.GenesisState_GenMsgsProtoMsg): _42.GenesisState_GenMsgs;
                toProto(message: _42.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _42.GenesisState_GenMsgs): _42.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.Code;
                isSDK(o: any): o is _42.CodeSDKType;
                isAmino(o: any): o is _42.CodeAmino;
                encode(message: _42.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.Code;
                fromPartial(object: import("../helpers").DeepPartial<_42.Code>): _42.Code;
                fromAmino(object: _42.CodeAmino): _42.Code;
                toAmino(message: _42.Code): _42.CodeAmino;
                fromAminoMsg(object: _42.CodeAminoMsg): _42.Code;
                toAminoMsg(message: _42.Code): _42.CodeAminoMsg;
                fromProtoMsg(message: _42.CodeProtoMsg): _42.Code;
                toProto(message: _42.Code): Uint8Array;
                toProtoMsg(message: _42.Code): _42.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.Contract;
                isSDK(o: any): o is _42.ContractSDKType;
                isAmino(o: any): o is _42.ContractAmino;
                encode(message: _42.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.Contract;
                fromPartial(object: import("../helpers").DeepPartial<_42.Contract>): _42.Contract;
                fromAmino(object: _42.ContractAmino): _42.Contract;
                toAmino(message: _42.Contract): _42.ContractAmino;
                fromAminoMsg(object: _42.ContractAminoMsg): _42.Contract;
                toAminoMsg(message: _42.Contract): _42.ContractAminoMsg;
                fromProtoMsg(message: _42.ContractProtoMsg): _42.Contract;
                toProto(message: _42.Contract): Uint8Array;
                toProtoMsg(message: _42.Contract): _42.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.Sequence;
                isSDK(o: any): o is _42.SequenceSDKType;
                isAmino(o: any): o is _42.SequenceAmino;
                encode(message: _42.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.Sequence;
                fromPartial(object: import("../helpers").DeepPartial<_42.Sequence>): _42.Sequence;
                fromAmino(object: _42.SequenceAmino): _42.Sequence;
                toAmino(message: _42.Sequence): _42.SequenceAmino;
                fromAminoMsg(object: _42.SequenceAminoMsg): _42.Sequence;
                toAminoMsg(message: _42.Sequence): _42.SequenceAminoMsg;
                fromProtoMsg(message: _42.SequenceProtoMsg): _42.Sequence;
                toProto(message: _42.Sequence): Uint8Array;
                toProtoMsg(message: _42.Sequence): _42.SequenceProtoMsg;
            };
        };
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
            cosmwasm: {
                wasm: {
                    v1: _128.MsgClientImpl;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _45.QueryContractInfoRequest): Promise<_45.QueryContractInfoResponse>;
                        contractHistory(request: _45.QueryContractHistoryRequest): Promise<_45.QueryContractHistoryResponse>;
                        contractsByCode(request: _45.QueryContractsByCodeRequest): Promise<_45.QueryContractsByCodeResponse>;
                        allContractState(request: _45.QueryAllContractStateRequest): Promise<_45.QueryAllContractStateResponse>;
                        rawContractState(request: _45.QueryRawContractStateRequest): Promise<_45.QueryRawContractStateResponse>;
                        smartContractState(request: _45.QuerySmartContractStateRequest): Promise<_45.QuerySmartContractStateResponse>;
                        code(request: _45.QueryCodeRequest): Promise<_45.QueryCodeResponse>;
                        codes(request?: _45.QueryCodesRequest): Promise<_45.QueryCodesResponse>;
                        pinnedCodes(request?: _45.QueryPinnedCodesRequest): Promise<_45.QueryPinnedCodesResponse>;
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
            cosmwasm: {
                wasm: {
                    v1: _126.LCDQueryClient;
                };
            };
        }>;
    };
}
