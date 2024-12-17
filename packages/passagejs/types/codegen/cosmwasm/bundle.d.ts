import * as _45 from "./wasm/v1/genesis";
import * as _46 from "./wasm/v1/ibc";
import * as _47 from "./wasm/v1/proposal";
import * as _48 from "./wasm/v1/query";
import * as _49 from "./wasm/v1/tx";
import * as _50 from "./wasm/v1/types";
import * as _134 from "./wasm/v1/query.lcd";
import * as _135 from "./wasm/v1/query.rpc.Query";
import * as _136 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _136.MsgClientImpl;
            QueryClientImpl: typeof _135.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _48.QueryContractInfoRequest): Promise<_48.QueryContractInfoResponse>;
                contractHistory(request: _48.QueryContractHistoryRequest): Promise<_48.QueryContractHistoryResponse>;
                contractsByCode(request: _48.QueryContractsByCodeRequest): Promise<_48.QueryContractsByCodeResponse>;
                allContractState(request: _48.QueryAllContractStateRequest): Promise<_48.QueryAllContractStateResponse>;
                rawContractState(request: _48.QueryRawContractStateRequest): Promise<_48.QueryRawContractStateResponse>;
                smartContractState(request: _48.QuerySmartContractStateRequest): Promise<_48.QuerySmartContractStateResponse>;
                code(request: _48.QueryCodeRequest): Promise<_48.QueryCodeResponse>;
                codes(request?: _48.QueryCodesRequest): Promise<_48.QueryCodesResponse>;
                pinnedCodes(request?: _48.QueryPinnedCodesRequest): Promise<_48.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _134.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _49.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    instantiateContract(value: _49.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    executeContract(value: _49.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    migrateContract(value: _49.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateAdmin(value: _49.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    clearAdmin(value: _49.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _49.MsgStoreCode): {
                        typeUrl: string;
                        value: _49.MsgStoreCode;
                    };
                    instantiateContract(value: _49.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _49.MsgInstantiateContract;
                    };
                    executeContract(value: _49.MsgExecuteContract): {
                        typeUrl: string;
                        value: _49.MsgExecuteContract;
                    };
                    migrateContract(value: _49.MsgMigrateContract): {
                        typeUrl: string;
                        value: _49.MsgMigrateContract;
                    };
                    updateAdmin(value: _49.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _49.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _49.MsgClearAdmin): {
                        typeUrl: string;
                        value: _49.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _49.MsgStoreCode): {
                        typeUrl: string;
                        value: _49.MsgStoreCode;
                    };
                    instantiateContract(value: _49.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _49.MsgInstantiateContract;
                    };
                    executeContract(value: _49.MsgExecuteContract): {
                        typeUrl: string;
                        value: _49.MsgExecuteContract;
                    };
                    migrateContract(value: _49.MsgMigrateContract): {
                        typeUrl: string;
                        value: _49.MsgMigrateContract;
                    };
                    updateAdmin(value: _49.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _49.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _49.MsgClearAdmin): {
                        typeUrl: string;
                        value: _49.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _49.MsgStoreCode) => _49.MsgStoreCodeAmino;
                    fromAmino: (object: _49.MsgStoreCodeAmino) => _49.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _49.MsgInstantiateContract) => _49.MsgInstantiateContractAmino;
                    fromAmino: (object: _49.MsgInstantiateContractAmino) => _49.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _49.MsgExecuteContract) => _49.MsgExecuteContractAmino;
                    fromAmino: (object: _49.MsgExecuteContractAmino) => _49.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _49.MsgMigrateContract) => _49.MsgMigrateContractAmino;
                    fromAmino: (object: _49.MsgMigrateContractAmino) => _49.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _49.MsgUpdateAdmin) => _49.MsgUpdateAdminAmino;
                    fromAmino: (object: _49.MsgUpdateAdminAmino) => _49.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _49.MsgClearAdmin) => _49.MsgClearAdminAmino;
                    fromAmino: (object: _49.MsgClearAdminAmino) => _49.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _50.AccessType;
            accessTypeToJSON(object: _50.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _50.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _50.ContractCodeHistoryOperationType): string;
            AccessType: typeof _50.AccessType;
            AccessTypeSDKType: typeof _50.AccessType;
            AccessTypeAmino: typeof _50.AccessType;
            ContractCodeHistoryOperationType: typeof _50.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _50.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _50.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _50.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.AccessTypeParam;
                fromPartial(object: Partial<_50.AccessTypeParam>): _50.AccessTypeParam;
                fromAmino(object: _50.AccessTypeParamAmino): _50.AccessTypeParam;
                toAmino(message: _50.AccessTypeParam): _50.AccessTypeParamAmino;
                fromAminoMsg(object: _50.AccessTypeParamAminoMsg): _50.AccessTypeParam;
                toAminoMsg(message: _50.AccessTypeParam): _50.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _50.AccessTypeParamProtoMsg): _50.AccessTypeParam;
                toProto(message: _50.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _50.AccessTypeParam): _50.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _50.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.AccessConfig;
                fromPartial(object: Partial<_50.AccessConfig>): _50.AccessConfig;
                fromAmino(object: _50.AccessConfigAmino): _50.AccessConfig;
                toAmino(message: _50.AccessConfig): _50.AccessConfigAmino;
                fromAminoMsg(object: _50.AccessConfigAminoMsg): _50.AccessConfig;
                toAminoMsg(message: _50.AccessConfig): _50.AccessConfigAminoMsg;
                fromProtoMsg(message: _50.AccessConfigProtoMsg): _50.AccessConfig;
                toProto(message: _50.AccessConfig): Uint8Array;
                toProtoMsg(message: _50.AccessConfig): _50.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _50.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.Params;
                fromPartial(object: Partial<_50.Params>): _50.Params;
                fromAmino(object: _50.ParamsAmino): _50.Params;
                toAmino(message: _50.Params): _50.ParamsAmino;
                fromAminoMsg(object: _50.ParamsAminoMsg): _50.Params;
                toAminoMsg(message: _50.Params): _50.ParamsAminoMsg;
                fromProtoMsg(message: _50.ParamsProtoMsg): _50.Params;
                toProto(message: _50.Params): Uint8Array;
                toProtoMsg(message: _50.Params): _50.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _50.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.CodeInfo;
                fromPartial(object: Partial<_50.CodeInfo>): _50.CodeInfo;
                fromAmino(object: _50.CodeInfoAmino): _50.CodeInfo;
                toAmino(message: _50.CodeInfo): _50.CodeInfoAmino;
                fromAminoMsg(object: _50.CodeInfoAminoMsg): _50.CodeInfo;
                toAminoMsg(message: _50.CodeInfo): _50.CodeInfoAminoMsg;
                fromProtoMsg(message: _50.CodeInfoProtoMsg): _50.CodeInfo;
                toProto(message: _50.CodeInfo): Uint8Array;
                toProtoMsg(message: _50.CodeInfo): _50.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _50.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.ContractInfo;
                fromPartial(object: Partial<_50.ContractInfo>): _50.ContractInfo;
                fromAmino(object: _50.ContractInfoAmino): _50.ContractInfo;
                toAmino(message: _50.ContractInfo): _50.ContractInfoAmino;
                fromAminoMsg(object: _50.ContractInfoAminoMsg): _50.ContractInfo;
                toAminoMsg(message: _50.ContractInfo): _50.ContractInfoAminoMsg;
                fromProtoMsg(message: _50.ContractInfoProtoMsg): _50.ContractInfo;
                toProto(message: _50.ContractInfo): Uint8Array;
                toProtoMsg(message: _50.ContractInfo): _50.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _50.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_50.ContractCodeHistoryEntry>): _50.ContractCodeHistoryEntry;
                fromAmino(object: _50.ContractCodeHistoryEntryAmino): _50.ContractCodeHistoryEntry;
                toAmino(message: _50.ContractCodeHistoryEntry): _50.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _50.ContractCodeHistoryEntryAminoMsg): _50.ContractCodeHistoryEntry;
                toAminoMsg(message: _50.ContractCodeHistoryEntry): _50.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _50.ContractCodeHistoryEntryProtoMsg): _50.ContractCodeHistoryEntry;
                toProto(message: _50.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _50.ContractCodeHistoryEntry): _50.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _50.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.AbsoluteTxPosition;
                fromPartial(object: Partial<_50.AbsoluteTxPosition>): _50.AbsoluteTxPosition;
                fromAmino(object: _50.AbsoluteTxPositionAmino): _50.AbsoluteTxPosition;
                toAmino(message: _50.AbsoluteTxPosition): _50.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _50.AbsoluteTxPositionAminoMsg): _50.AbsoluteTxPosition;
                toAminoMsg(message: _50.AbsoluteTxPosition): _50.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _50.AbsoluteTxPositionProtoMsg): _50.AbsoluteTxPosition;
                toProto(message: _50.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _50.AbsoluteTxPosition): _50.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _50.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.Model;
                fromPartial(object: Partial<_50.Model>): _50.Model;
                fromAmino(object: _50.ModelAmino): _50.Model;
                toAmino(message: _50.Model): _50.ModelAmino;
                fromAminoMsg(object: _50.ModelAminoMsg): _50.Model;
                toAminoMsg(message: _50.Model): _50.ModelAminoMsg;
                fromProtoMsg(message: _50.ModelProtoMsg): _50.Model;
                toProto(message: _50.Model): Uint8Array;
                toProtoMsg(message: _50.Model): _50.ModelProtoMsg;
            };
            ContractInfoExtension_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _49.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgStoreCode;
                fromPartial(object: Partial<_49.MsgStoreCode>): _49.MsgStoreCode;
                fromAmino(object: _49.MsgStoreCodeAmino): _49.MsgStoreCode;
                toAmino(message: _49.MsgStoreCode): _49.MsgStoreCodeAmino;
                fromAminoMsg(object: _49.MsgStoreCodeAminoMsg): _49.MsgStoreCode;
                toAminoMsg(message: _49.MsgStoreCode): _49.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _49.MsgStoreCodeProtoMsg): _49.MsgStoreCode;
                toProto(message: _49.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _49.MsgStoreCode): _49.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _49.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgStoreCodeResponse;
                fromPartial(object: Partial<_49.MsgStoreCodeResponse>): _49.MsgStoreCodeResponse;
                fromAmino(object: _49.MsgStoreCodeResponseAmino): _49.MsgStoreCodeResponse;
                toAmino(message: _49.MsgStoreCodeResponse): _49.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _49.MsgStoreCodeResponseAminoMsg): _49.MsgStoreCodeResponse;
                toAminoMsg(message: _49.MsgStoreCodeResponse): _49.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _49.MsgStoreCodeResponseProtoMsg): _49.MsgStoreCodeResponse;
                toProto(message: _49.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _49.MsgStoreCodeResponse): _49.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _49.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgInstantiateContract;
                fromPartial(object: Partial<_49.MsgInstantiateContract>): _49.MsgInstantiateContract;
                fromAmino(object: _49.MsgInstantiateContractAmino): _49.MsgInstantiateContract;
                toAmino(message: _49.MsgInstantiateContract): _49.MsgInstantiateContractAmino;
                fromAminoMsg(object: _49.MsgInstantiateContractAminoMsg): _49.MsgInstantiateContract;
                toAminoMsg(message: _49.MsgInstantiateContract): _49.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _49.MsgInstantiateContractProtoMsg): _49.MsgInstantiateContract;
                toProto(message: _49.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _49.MsgInstantiateContract): _49.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _49.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_49.MsgInstantiateContractResponse>): _49.MsgInstantiateContractResponse;
                fromAmino(object: _49.MsgInstantiateContractResponseAmino): _49.MsgInstantiateContractResponse;
                toAmino(message: _49.MsgInstantiateContractResponse): _49.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _49.MsgInstantiateContractResponseAminoMsg): _49.MsgInstantiateContractResponse;
                toAminoMsg(message: _49.MsgInstantiateContractResponse): _49.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _49.MsgInstantiateContractResponseProtoMsg): _49.MsgInstantiateContractResponse;
                toProto(message: _49.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _49.MsgInstantiateContractResponse): _49.MsgInstantiateContractResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _49.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgExecuteContract;
                fromPartial(object: Partial<_49.MsgExecuteContract>): _49.MsgExecuteContract;
                fromAmino(object: _49.MsgExecuteContractAmino): _49.MsgExecuteContract;
                toAmino(message: _49.MsgExecuteContract): _49.MsgExecuteContractAmino;
                fromAminoMsg(object: _49.MsgExecuteContractAminoMsg): _49.MsgExecuteContract;
                toAminoMsg(message: _49.MsgExecuteContract): _49.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _49.MsgExecuteContractProtoMsg): _49.MsgExecuteContract;
                toProto(message: _49.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _49.MsgExecuteContract): _49.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _49.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgExecuteContractResponse;
                fromPartial(object: Partial<_49.MsgExecuteContractResponse>): _49.MsgExecuteContractResponse;
                fromAmino(object: _49.MsgExecuteContractResponseAmino): _49.MsgExecuteContractResponse;
                toAmino(message: _49.MsgExecuteContractResponse): _49.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _49.MsgExecuteContractResponseAminoMsg): _49.MsgExecuteContractResponse;
                toAminoMsg(message: _49.MsgExecuteContractResponse): _49.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _49.MsgExecuteContractResponseProtoMsg): _49.MsgExecuteContractResponse;
                toProto(message: _49.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _49.MsgExecuteContractResponse): _49.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _49.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgMigrateContract;
                fromPartial(object: Partial<_49.MsgMigrateContract>): _49.MsgMigrateContract;
                fromAmino(object: _49.MsgMigrateContractAmino): _49.MsgMigrateContract;
                toAmino(message: _49.MsgMigrateContract): _49.MsgMigrateContractAmino;
                fromAminoMsg(object: _49.MsgMigrateContractAminoMsg): _49.MsgMigrateContract;
                toAminoMsg(message: _49.MsgMigrateContract): _49.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _49.MsgMigrateContractProtoMsg): _49.MsgMigrateContract;
                toProto(message: _49.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _49.MsgMigrateContract): _49.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _49.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgMigrateContractResponse;
                fromPartial(object: Partial<_49.MsgMigrateContractResponse>): _49.MsgMigrateContractResponse;
                fromAmino(object: _49.MsgMigrateContractResponseAmino): _49.MsgMigrateContractResponse;
                toAmino(message: _49.MsgMigrateContractResponse): _49.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _49.MsgMigrateContractResponseAminoMsg): _49.MsgMigrateContractResponse;
                toAminoMsg(message: _49.MsgMigrateContractResponse): _49.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _49.MsgMigrateContractResponseProtoMsg): _49.MsgMigrateContractResponse;
                toProto(message: _49.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _49.MsgMigrateContractResponse): _49.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _49.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgUpdateAdmin;
                fromPartial(object: Partial<_49.MsgUpdateAdmin>): _49.MsgUpdateAdmin;
                fromAmino(object: _49.MsgUpdateAdminAmino): _49.MsgUpdateAdmin;
                toAmino(message: _49.MsgUpdateAdmin): _49.MsgUpdateAdminAmino;
                fromAminoMsg(object: _49.MsgUpdateAdminAminoMsg): _49.MsgUpdateAdmin;
                toAminoMsg(message: _49.MsgUpdateAdmin): _49.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _49.MsgUpdateAdminProtoMsg): _49.MsgUpdateAdmin;
                toProto(message: _49.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _49.MsgUpdateAdmin): _49.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _49.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_49.MsgUpdateAdminResponse>): _49.MsgUpdateAdminResponse;
                fromAmino(_: _49.MsgUpdateAdminResponseAmino): _49.MsgUpdateAdminResponse;
                toAmino(_: _49.MsgUpdateAdminResponse): _49.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _49.MsgUpdateAdminResponseAminoMsg): _49.MsgUpdateAdminResponse;
                toAminoMsg(message: _49.MsgUpdateAdminResponse): _49.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _49.MsgUpdateAdminResponseProtoMsg): _49.MsgUpdateAdminResponse;
                toProto(message: _49.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _49.MsgUpdateAdminResponse): _49.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _49.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgClearAdmin;
                fromPartial(object: Partial<_49.MsgClearAdmin>): _49.MsgClearAdmin;
                fromAmino(object: _49.MsgClearAdminAmino): _49.MsgClearAdmin;
                toAmino(message: _49.MsgClearAdmin): _49.MsgClearAdminAmino;
                fromAminoMsg(object: _49.MsgClearAdminAminoMsg): _49.MsgClearAdmin;
                toAminoMsg(message: _49.MsgClearAdmin): _49.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _49.MsgClearAdminProtoMsg): _49.MsgClearAdmin;
                toProto(message: _49.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _49.MsgClearAdmin): _49.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _49.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgClearAdminResponse;
                fromPartial(_: Partial<_49.MsgClearAdminResponse>): _49.MsgClearAdminResponse;
                fromAmino(_: _49.MsgClearAdminResponseAmino): _49.MsgClearAdminResponse;
                toAmino(_: _49.MsgClearAdminResponse): _49.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _49.MsgClearAdminResponseAminoMsg): _49.MsgClearAdminResponse;
                toAminoMsg(message: _49.MsgClearAdminResponse): _49.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _49.MsgClearAdminResponseProtoMsg): _49.MsgClearAdminResponse;
                toProto(message: _49.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _49.MsgClearAdminResponse): _49.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _48.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryContractInfoRequest;
                fromPartial(object: Partial<_48.QueryContractInfoRequest>): _48.QueryContractInfoRequest;
                fromAmino(object: _48.QueryContractInfoRequestAmino): _48.QueryContractInfoRequest;
                toAmino(message: _48.QueryContractInfoRequest): _48.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _48.QueryContractInfoRequestAminoMsg): _48.QueryContractInfoRequest;
                toAminoMsg(message: _48.QueryContractInfoRequest): _48.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _48.QueryContractInfoRequestProtoMsg): _48.QueryContractInfoRequest;
                toProto(message: _48.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _48.QueryContractInfoRequest): _48.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _48.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryContractInfoResponse;
                fromPartial(object: Partial<_48.QueryContractInfoResponse>): _48.QueryContractInfoResponse;
                fromAmino(object: _48.QueryContractInfoResponseAmino): _48.QueryContractInfoResponse;
                toAmino(message: _48.QueryContractInfoResponse): _48.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _48.QueryContractInfoResponseAminoMsg): _48.QueryContractInfoResponse;
                toAminoMsg(message: _48.QueryContractInfoResponse): _48.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _48.QueryContractInfoResponseProtoMsg): _48.QueryContractInfoResponse;
                toProto(message: _48.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _48.QueryContractInfoResponse): _48.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _48.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryContractHistoryRequest;
                fromPartial(object: Partial<_48.QueryContractHistoryRequest>): _48.QueryContractHistoryRequest;
                fromAmino(object: _48.QueryContractHistoryRequestAmino): _48.QueryContractHistoryRequest;
                toAmino(message: _48.QueryContractHistoryRequest): _48.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _48.QueryContractHistoryRequestAminoMsg): _48.QueryContractHistoryRequest;
                toAminoMsg(message: _48.QueryContractHistoryRequest): _48.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _48.QueryContractHistoryRequestProtoMsg): _48.QueryContractHistoryRequest;
                toProto(message: _48.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _48.QueryContractHistoryRequest): _48.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _48.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryContractHistoryResponse;
                fromPartial(object: Partial<_48.QueryContractHistoryResponse>): _48.QueryContractHistoryResponse;
                fromAmino(object: _48.QueryContractHistoryResponseAmino): _48.QueryContractHistoryResponse;
                toAmino(message: _48.QueryContractHistoryResponse): _48.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _48.QueryContractHistoryResponseAminoMsg): _48.QueryContractHistoryResponse;
                toAminoMsg(message: _48.QueryContractHistoryResponse): _48.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _48.QueryContractHistoryResponseProtoMsg): _48.QueryContractHistoryResponse;
                toProto(message: _48.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _48.QueryContractHistoryResponse): _48.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _48.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_48.QueryContractsByCodeRequest>): _48.QueryContractsByCodeRequest;
                fromAmino(object: _48.QueryContractsByCodeRequestAmino): _48.QueryContractsByCodeRequest;
                toAmino(message: _48.QueryContractsByCodeRequest): _48.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _48.QueryContractsByCodeRequestAminoMsg): _48.QueryContractsByCodeRequest;
                toAminoMsg(message: _48.QueryContractsByCodeRequest): _48.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _48.QueryContractsByCodeRequestProtoMsg): _48.QueryContractsByCodeRequest;
                toProto(message: _48.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _48.QueryContractsByCodeRequest): _48.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _48.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_48.QueryContractsByCodeResponse>): _48.QueryContractsByCodeResponse;
                fromAmino(object: _48.QueryContractsByCodeResponseAmino): _48.QueryContractsByCodeResponse;
                toAmino(message: _48.QueryContractsByCodeResponse): _48.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _48.QueryContractsByCodeResponseAminoMsg): _48.QueryContractsByCodeResponse;
                toAminoMsg(message: _48.QueryContractsByCodeResponse): _48.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _48.QueryContractsByCodeResponseProtoMsg): _48.QueryContractsByCodeResponse;
                toProto(message: _48.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _48.QueryContractsByCodeResponse): _48.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _48.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryAllContractStateRequest;
                fromPartial(object: Partial<_48.QueryAllContractStateRequest>): _48.QueryAllContractStateRequest;
                fromAmino(object: _48.QueryAllContractStateRequestAmino): _48.QueryAllContractStateRequest;
                toAmino(message: _48.QueryAllContractStateRequest): _48.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _48.QueryAllContractStateRequestAminoMsg): _48.QueryAllContractStateRequest;
                toAminoMsg(message: _48.QueryAllContractStateRequest): _48.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAllContractStateRequestProtoMsg): _48.QueryAllContractStateRequest;
                toProto(message: _48.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAllContractStateRequest): _48.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _48.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryAllContractStateResponse;
                fromPartial(object: Partial<_48.QueryAllContractStateResponse>): _48.QueryAllContractStateResponse;
                fromAmino(object: _48.QueryAllContractStateResponseAmino): _48.QueryAllContractStateResponse;
                toAmino(message: _48.QueryAllContractStateResponse): _48.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _48.QueryAllContractStateResponseAminoMsg): _48.QueryAllContractStateResponse;
                toAminoMsg(message: _48.QueryAllContractStateResponse): _48.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _48.QueryAllContractStateResponseProtoMsg): _48.QueryAllContractStateResponse;
                toProto(message: _48.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _48.QueryAllContractStateResponse): _48.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _48.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryRawContractStateRequest;
                fromPartial(object: Partial<_48.QueryRawContractStateRequest>): _48.QueryRawContractStateRequest;
                fromAmino(object: _48.QueryRawContractStateRequestAmino): _48.QueryRawContractStateRequest;
                toAmino(message: _48.QueryRawContractStateRequest): _48.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _48.QueryRawContractStateRequestAminoMsg): _48.QueryRawContractStateRequest;
                toAminoMsg(message: _48.QueryRawContractStateRequest): _48.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _48.QueryRawContractStateRequestProtoMsg): _48.QueryRawContractStateRequest;
                toProto(message: _48.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _48.QueryRawContractStateRequest): _48.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _48.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryRawContractStateResponse;
                fromPartial(object: Partial<_48.QueryRawContractStateResponse>): _48.QueryRawContractStateResponse;
                fromAmino(object: _48.QueryRawContractStateResponseAmino): _48.QueryRawContractStateResponse;
                toAmino(message: _48.QueryRawContractStateResponse): _48.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _48.QueryRawContractStateResponseAminoMsg): _48.QueryRawContractStateResponse;
                toAminoMsg(message: _48.QueryRawContractStateResponse): _48.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _48.QueryRawContractStateResponseProtoMsg): _48.QueryRawContractStateResponse;
                toProto(message: _48.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _48.QueryRawContractStateResponse): _48.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _48.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_48.QuerySmartContractStateRequest>): _48.QuerySmartContractStateRequest;
                fromAmino(object: _48.QuerySmartContractStateRequestAmino): _48.QuerySmartContractStateRequest;
                toAmino(message: _48.QuerySmartContractStateRequest): _48.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _48.QuerySmartContractStateRequestAminoMsg): _48.QuerySmartContractStateRequest;
                toAminoMsg(message: _48.QuerySmartContractStateRequest): _48.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _48.QuerySmartContractStateRequestProtoMsg): _48.QuerySmartContractStateRequest;
                toProto(message: _48.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _48.QuerySmartContractStateRequest): _48.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _48.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_48.QuerySmartContractStateResponse>): _48.QuerySmartContractStateResponse;
                fromAmino(object: _48.QuerySmartContractStateResponseAmino): _48.QuerySmartContractStateResponse;
                toAmino(message: _48.QuerySmartContractStateResponse): _48.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _48.QuerySmartContractStateResponseAminoMsg): _48.QuerySmartContractStateResponse;
                toAminoMsg(message: _48.QuerySmartContractStateResponse): _48.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _48.QuerySmartContractStateResponseProtoMsg): _48.QuerySmartContractStateResponse;
                toProto(message: _48.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _48.QuerySmartContractStateResponse): _48.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _48.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryCodeRequest;
                fromPartial(object: Partial<_48.QueryCodeRequest>): _48.QueryCodeRequest;
                fromAmino(object: _48.QueryCodeRequestAmino): _48.QueryCodeRequest;
                toAmino(message: _48.QueryCodeRequest): _48.QueryCodeRequestAmino;
                fromAminoMsg(object: _48.QueryCodeRequestAminoMsg): _48.QueryCodeRequest;
                toAminoMsg(message: _48.QueryCodeRequest): _48.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _48.QueryCodeRequestProtoMsg): _48.QueryCodeRequest;
                toProto(message: _48.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _48.QueryCodeRequest): _48.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _48.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.CodeInfoResponse;
                fromPartial(object: Partial<_48.CodeInfoResponse>): _48.CodeInfoResponse;
                fromAmino(object: _48.CodeInfoResponseAmino): _48.CodeInfoResponse;
                toAmino(message: _48.CodeInfoResponse): _48.CodeInfoResponseAmino;
                fromAminoMsg(object: _48.CodeInfoResponseAminoMsg): _48.CodeInfoResponse;
                toAminoMsg(message: _48.CodeInfoResponse): _48.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _48.CodeInfoResponseProtoMsg): _48.CodeInfoResponse;
                toProto(message: _48.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _48.CodeInfoResponse): _48.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _48.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryCodeResponse;
                fromPartial(object: Partial<_48.QueryCodeResponse>): _48.QueryCodeResponse;
                fromAmino(object: _48.QueryCodeResponseAmino): _48.QueryCodeResponse;
                toAmino(message: _48.QueryCodeResponse): _48.QueryCodeResponseAmino;
                fromAminoMsg(object: _48.QueryCodeResponseAminoMsg): _48.QueryCodeResponse;
                toAminoMsg(message: _48.QueryCodeResponse): _48.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _48.QueryCodeResponseProtoMsg): _48.QueryCodeResponse;
                toProto(message: _48.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _48.QueryCodeResponse): _48.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _48.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryCodesRequest;
                fromPartial(object: Partial<_48.QueryCodesRequest>): _48.QueryCodesRequest;
                fromAmino(object: _48.QueryCodesRequestAmino): _48.QueryCodesRequest;
                toAmino(message: _48.QueryCodesRequest): _48.QueryCodesRequestAmino;
                fromAminoMsg(object: _48.QueryCodesRequestAminoMsg): _48.QueryCodesRequest;
                toAminoMsg(message: _48.QueryCodesRequest): _48.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _48.QueryCodesRequestProtoMsg): _48.QueryCodesRequest;
                toProto(message: _48.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _48.QueryCodesRequest): _48.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _48.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryCodesResponse;
                fromPartial(object: Partial<_48.QueryCodesResponse>): _48.QueryCodesResponse;
                fromAmino(object: _48.QueryCodesResponseAmino): _48.QueryCodesResponse;
                toAmino(message: _48.QueryCodesResponse): _48.QueryCodesResponseAmino;
                fromAminoMsg(object: _48.QueryCodesResponseAminoMsg): _48.QueryCodesResponse;
                toAminoMsg(message: _48.QueryCodesResponse): _48.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _48.QueryCodesResponseProtoMsg): _48.QueryCodesResponse;
                toProto(message: _48.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _48.QueryCodesResponse): _48.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _48.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_48.QueryPinnedCodesRequest>): _48.QueryPinnedCodesRequest;
                fromAmino(object: _48.QueryPinnedCodesRequestAmino): _48.QueryPinnedCodesRequest;
                toAmino(message: _48.QueryPinnedCodesRequest): _48.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _48.QueryPinnedCodesRequestAminoMsg): _48.QueryPinnedCodesRequest;
                toAminoMsg(message: _48.QueryPinnedCodesRequest): _48.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _48.QueryPinnedCodesRequestProtoMsg): _48.QueryPinnedCodesRequest;
                toProto(message: _48.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _48.QueryPinnedCodesRequest): _48.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _48.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_48.QueryPinnedCodesResponse>): _48.QueryPinnedCodesResponse;
                fromAmino(object: _48.QueryPinnedCodesResponseAmino): _48.QueryPinnedCodesResponse;
                toAmino(message: _48.QueryPinnedCodesResponse): _48.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _48.QueryPinnedCodesResponseAminoMsg): _48.QueryPinnedCodesResponse;
                toAminoMsg(message: _48.QueryPinnedCodesResponse): _48.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _48.QueryPinnedCodesResponseProtoMsg): _48.QueryPinnedCodesResponse;
                toProto(message: _48.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _48.QueryPinnedCodesResponse): _48.QueryPinnedCodesResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _47.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.StoreCodeProposal;
                fromPartial(object: Partial<_47.StoreCodeProposal>): _47.StoreCodeProposal;
                fromAmino(object: _47.StoreCodeProposalAmino): _47.StoreCodeProposal;
                toAmino(message: _47.StoreCodeProposal): _47.StoreCodeProposalAmino;
                fromAminoMsg(object: _47.StoreCodeProposalAminoMsg): _47.StoreCodeProposal;
                toAminoMsg(message: _47.StoreCodeProposal): _47.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _47.StoreCodeProposalProtoMsg): _47.StoreCodeProposal;
                toProto(message: _47.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _47.StoreCodeProposal): _47.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _47.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.InstantiateContractProposal;
                fromPartial(object: Partial<_47.InstantiateContractProposal>): _47.InstantiateContractProposal;
                fromAmino(object: _47.InstantiateContractProposalAmino): _47.InstantiateContractProposal;
                toAmino(message: _47.InstantiateContractProposal): _47.InstantiateContractProposalAmino;
                fromAminoMsg(object: _47.InstantiateContractProposalAminoMsg): _47.InstantiateContractProposal;
                toAminoMsg(message: _47.InstantiateContractProposal): _47.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _47.InstantiateContractProposalProtoMsg): _47.InstantiateContractProposal;
                toProto(message: _47.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _47.InstantiateContractProposal): _47.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _47.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.MigrateContractProposal;
                fromPartial(object: Partial<_47.MigrateContractProposal>): _47.MigrateContractProposal;
                fromAmino(object: _47.MigrateContractProposalAmino): _47.MigrateContractProposal;
                toAmino(message: _47.MigrateContractProposal): _47.MigrateContractProposalAmino;
                fromAminoMsg(object: _47.MigrateContractProposalAminoMsg): _47.MigrateContractProposal;
                toAminoMsg(message: _47.MigrateContractProposal): _47.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _47.MigrateContractProposalProtoMsg): _47.MigrateContractProposal;
                toProto(message: _47.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _47.MigrateContractProposal): _47.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _47.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.SudoContractProposal;
                fromPartial(object: Partial<_47.SudoContractProposal>): _47.SudoContractProposal;
                fromAmino(object: _47.SudoContractProposalAmino): _47.SudoContractProposal;
                toAmino(message: _47.SudoContractProposal): _47.SudoContractProposalAmino;
                fromAminoMsg(object: _47.SudoContractProposalAminoMsg): _47.SudoContractProposal;
                toAminoMsg(message: _47.SudoContractProposal): _47.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _47.SudoContractProposalProtoMsg): _47.SudoContractProposal;
                toProto(message: _47.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _47.SudoContractProposal): _47.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _47.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.ExecuteContractProposal;
                fromPartial(object: Partial<_47.ExecuteContractProposal>): _47.ExecuteContractProposal;
                fromAmino(object: _47.ExecuteContractProposalAmino): _47.ExecuteContractProposal;
                toAmino(message: _47.ExecuteContractProposal): _47.ExecuteContractProposalAmino;
                fromAminoMsg(object: _47.ExecuteContractProposalAminoMsg): _47.ExecuteContractProposal;
                toAminoMsg(message: _47.ExecuteContractProposal): _47.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _47.ExecuteContractProposalProtoMsg): _47.ExecuteContractProposal;
                toProto(message: _47.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _47.ExecuteContractProposal): _47.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _47.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.UpdateAdminProposal;
                fromPartial(object: Partial<_47.UpdateAdminProposal>): _47.UpdateAdminProposal;
                fromAmino(object: _47.UpdateAdminProposalAmino): _47.UpdateAdminProposal;
                toAmino(message: _47.UpdateAdminProposal): _47.UpdateAdminProposalAmino;
                fromAminoMsg(object: _47.UpdateAdminProposalAminoMsg): _47.UpdateAdminProposal;
                toAminoMsg(message: _47.UpdateAdminProposal): _47.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _47.UpdateAdminProposalProtoMsg): _47.UpdateAdminProposal;
                toProto(message: _47.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _47.UpdateAdminProposal): _47.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _47.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.ClearAdminProposal;
                fromPartial(object: Partial<_47.ClearAdminProposal>): _47.ClearAdminProposal;
                fromAmino(object: _47.ClearAdminProposalAmino): _47.ClearAdminProposal;
                toAmino(message: _47.ClearAdminProposal): _47.ClearAdminProposalAmino;
                fromAminoMsg(object: _47.ClearAdminProposalAminoMsg): _47.ClearAdminProposal;
                toAminoMsg(message: _47.ClearAdminProposal): _47.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _47.ClearAdminProposalProtoMsg): _47.ClearAdminProposal;
                toProto(message: _47.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _47.ClearAdminProposal): _47.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _47.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.PinCodesProposal;
                fromPartial(object: Partial<_47.PinCodesProposal>): _47.PinCodesProposal;
                fromAmino(object: _47.PinCodesProposalAmino): _47.PinCodesProposal;
                toAmino(message: _47.PinCodesProposal): _47.PinCodesProposalAmino;
                fromAminoMsg(object: _47.PinCodesProposalAminoMsg): _47.PinCodesProposal;
                toAminoMsg(message: _47.PinCodesProposal): _47.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _47.PinCodesProposalProtoMsg): _47.PinCodesProposal;
                toProto(message: _47.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _47.PinCodesProposal): _47.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _47.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.UnpinCodesProposal;
                fromPartial(object: Partial<_47.UnpinCodesProposal>): _47.UnpinCodesProposal;
                fromAmino(object: _47.UnpinCodesProposalAmino): _47.UnpinCodesProposal;
                toAmino(message: _47.UnpinCodesProposal): _47.UnpinCodesProposalAmino;
                fromAminoMsg(object: _47.UnpinCodesProposalAminoMsg): _47.UnpinCodesProposal;
                toAminoMsg(message: _47.UnpinCodesProposal): _47.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _47.UnpinCodesProposalProtoMsg): _47.UnpinCodesProposal;
                toProto(message: _47.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _47.UnpinCodesProposal): _47.UnpinCodesProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _46.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgIBCSend;
                fromPartial(object: Partial<_46.MsgIBCSend>): _46.MsgIBCSend;
                fromAmino(object: _46.MsgIBCSendAmino): _46.MsgIBCSend;
                toAmino(message: _46.MsgIBCSend): _46.MsgIBCSendAmino;
                fromAminoMsg(object: _46.MsgIBCSendAminoMsg): _46.MsgIBCSend;
                toAminoMsg(message: _46.MsgIBCSend): _46.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _46.MsgIBCSendProtoMsg): _46.MsgIBCSend;
                toProto(message: _46.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _46.MsgIBCSend): _46.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _46.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.MsgIBCCloseChannel;
                fromPartial(object: Partial<_46.MsgIBCCloseChannel>): _46.MsgIBCCloseChannel;
                fromAmino(object: _46.MsgIBCCloseChannelAmino): _46.MsgIBCCloseChannel;
                toAmino(message: _46.MsgIBCCloseChannel): _46.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _46.MsgIBCCloseChannelAminoMsg): _46.MsgIBCCloseChannel;
                toAminoMsg(message: _46.MsgIBCCloseChannel): _46.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _46.MsgIBCCloseChannelProtoMsg): _46.MsgIBCCloseChannel;
                toProto(message: _46.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _46.MsgIBCCloseChannel): _46.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _45.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.GenesisState;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
                fromAmino(object: _45.GenesisStateAmino): _45.GenesisState;
                toAmino(message: _45.GenesisState): _45.GenesisStateAmino;
                fromAminoMsg(object: _45.GenesisStateAminoMsg): _45.GenesisState;
                toAminoMsg(message: _45.GenesisState): _45.GenesisStateAminoMsg;
                fromProtoMsg(message: _45.GenesisStateProtoMsg): _45.GenesisState;
                toProto(message: _45.GenesisState): Uint8Array;
                toProtoMsg(message: _45.GenesisState): _45.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                typeUrl: string;
                encode(message: _45.GenesisState_GenMsgs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.GenesisState_GenMsgs;
                fromPartial(object: Partial<_45.GenesisState_GenMsgs>): _45.GenesisState_GenMsgs;
                fromAmino(object: _45.GenesisState_GenMsgsAmino): _45.GenesisState_GenMsgs;
                toAmino(message: _45.GenesisState_GenMsgs): _45.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _45.GenesisState_GenMsgsAminoMsg): _45.GenesisState_GenMsgs;
                toAminoMsg(message: _45.GenesisState_GenMsgs): _45.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _45.GenesisState_GenMsgsProtoMsg): _45.GenesisState_GenMsgs;
                toProto(message: _45.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _45.GenesisState_GenMsgs): _45.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _45.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.Code;
                fromPartial(object: Partial<_45.Code>): _45.Code;
                fromAmino(object: _45.CodeAmino): _45.Code;
                toAmino(message: _45.Code): _45.CodeAmino;
                fromAminoMsg(object: _45.CodeAminoMsg): _45.Code;
                toAminoMsg(message: _45.Code): _45.CodeAminoMsg;
                fromProtoMsg(message: _45.CodeProtoMsg): _45.Code;
                toProto(message: _45.Code): Uint8Array;
                toProtoMsg(message: _45.Code): _45.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _45.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.Contract;
                fromPartial(object: Partial<_45.Contract>): _45.Contract;
                fromAmino(object: _45.ContractAmino): _45.Contract;
                toAmino(message: _45.Contract): _45.ContractAmino;
                fromAminoMsg(object: _45.ContractAminoMsg): _45.Contract;
                toAminoMsg(message: _45.Contract): _45.ContractAminoMsg;
                fromProtoMsg(message: _45.ContractProtoMsg): _45.Contract;
                toProto(message: _45.Contract): Uint8Array;
                toProtoMsg(message: _45.Contract): _45.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _45.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.Sequence;
                fromPartial(object: Partial<_45.Sequence>): _45.Sequence;
                fromAmino(object: _45.SequenceAmino): _45.Sequence;
                toAmino(message: _45.Sequence): _45.SequenceAmino;
                fromAminoMsg(object: _45.SequenceAminoMsg): _45.Sequence;
                toAminoMsg(message: _45.Sequence): _45.SequenceAminoMsg;
                fromProtoMsg(message: _45.SequenceProtoMsg): _45.Sequence;
                toProto(message: _45.Sequence): Uint8Array;
                toProtoMsg(message: _45.Sequence): _45.SequenceProtoMsg;
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
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _136.MsgClientImpl;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _48.QueryContractInfoRequest): Promise<_48.QueryContractInfoResponse>;
                        contractHistory(request: _48.QueryContractHistoryRequest): Promise<_48.QueryContractHistoryResponse>;
                        contractsByCode(request: _48.QueryContractsByCodeRequest): Promise<_48.QueryContractsByCodeResponse>;
                        allContractState(request: _48.QueryAllContractStateRequest): Promise<_48.QueryAllContractStateResponse>;
                        rawContractState(request: _48.QueryRawContractStateRequest): Promise<_48.QueryRawContractStateResponse>;
                        smartContractState(request: _48.QuerySmartContractStateRequest): Promise<_48.QuerySmartContractStateResponse>;
                        code(request: _48.QueryCodeRequest): Promise<_48.QueryCodeResponse>;
                        codes(request?: _48.QueryCodesRequest): Promise<_48.QueryCodesResponse>;
                        pinnedCodes(request?: _48.QueryPinnedCodesRequest): Promise<_48.QueryPinnedCodesResponse>;
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
            cosmwasm: {
                wasm: {
                    v1: _134.LCDQueryClient;
                };
            };
        }>;
    };
}
