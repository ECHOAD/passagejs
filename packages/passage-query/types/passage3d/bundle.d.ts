import * as _76 from "./claim/v1beta1/claim_record";
import * as _77 from "./claim/v1beta1/genesis";
import * as _78 from "./claim/v1beta1/params";
import * as _79 from "./claim/v1beta1/query";
import * as _80 from "./claim/v1beta1/tx";
import * as _151 from "./claim/v1beta1/query.lcd";
import * as _152 from "./claim/v1beta1/query.rpc.Query";
import * as _153 from "./claim/v1beta1/tx.rpc.msg";
export declare namespace passage3d {
    namespace claim {
        const v1beta1: {
            MsgClientImpl: typeof _153.MsgClientImpl;
            createClientImpl: (rpc: import("../helpers").Rpc) => _153.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _79.QueryModuleAccountBalanceRequest): Promise<_79.QueryModuleAccountBalanceResponse>;
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                claimRecord(request: _79.QueryClaimRecordRequest): Promise<_79.QueryClaimRecordResponse>;
                claimableForAction(request: _79.QueryClaimableForActionRequest): Promise<_79.QueryClaimableForActionResponse>;
                totalClaimable(request: _79.QueryTotalClaimableRequest): Promise<_79.QueryTotalClaimableResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _80.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    claim(value: _80.MsgClaim): {
                        typeUrl: string;
                        value: _80.MsgClaim;
                    };
                };
                fromPartial: {
                    claim(value: _80.MsgClaim): {
                        typeUrl: string;
                        value: _80.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/passage3d.claim.v1beta1.MsgClaim": {
                    aminoType: string;
                    toAmino: (message: _80.MsgClaim) => _80.MsgClaimAmino;
                    fromAmino: (object: _80.MsgClaimAmino) => _80.MsgClaim;
                };
            };
            MsgClaim: {
                typeUrl: string;
                is(o: any): o is _80.MsgClaim;
                isSDK(o: any): o is _80.MsgClaimSDKType;
                isAmino(o: any): o is _80.MsgClaimAmino;
                encode(message: _80.MsgClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.MsgClaim;
                fromPartial(object: import("../helpers").DeepPartial<_80.MsgClaim>): _80.MsgClaim;
                fromAmino(object: _80.MsgClaimAmino): _80.MsgClaim;
                toAmino(message: _80.MsgClaim): _80.MsgClaimAmino;
                fromAminoMsg(object: _80.MsgClaimAminoMsg): _80.MsgClaim;
                fromProtoMsg(message: _80.MsgClaimProtoMsg): _80.MsgClaim;
                toProto(message: _80.MsgClaim): Uint8Array;
                toProtoMsg(message: _80.MsgClaim): _80.MsgClaimProtoMsg;
            };
            MsgClaimResponse: {
                typeUrl: string;
                is(o: any): o is _80.MsgClaimResponse;
                isSDK(o: any): o is _80.MsgClaimResponseSDKType;
                isAmino(o: any): o is _80.MsgClaimResponseAmino;
                encode(message: _80.MsgClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.MsgClaimResponse;
                fromPartial(object: import("../helpers").DeepPartial<_80.MsgClaimResponse>): _80.MsgClaimResponse;
                fromAmino(object: _80.MsgClaimResponseAmino): _80.MsgClaimResponse;
                toAmino(message: _80.MsgClaimResponse): _80.MsgClaimResponseAmino;
                fromAminoMsg(object: _80.MsgClaimResponseAminoMsg): _80.MsgClaimResponse;
                fromProtoMsg(message: _80.MsgClaimResponseProtoMsg): _80.MsgClaimResponse;
                toProto(message: _80.MsgClaimResponse): Uint8Array;
                toProtoMsg(message: _80.MsgClaimResponse): _80.MsgClaimResponseProtoMsg;
            };
            QueryModuleAccountBalanceRequest: {
                typeUrl: string;
                is(o: any): o is _79.QueryModuleAccountBalanceRequest;
                isSDK(o: any): o is _79.QueryModuleAccountBalanceRequestSDKType;
                isAmino(o: any): o is _79.QueryModuleAccountBalanceRequestAmino;
                encode(_: _79.QueryModuleAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.QueryModuleAccountBalanceRequest;
                fromPartial(_: import("../helpers").DeepPartial<_79.QueryModuleAccountBalanceRequest>): _79.QueryModuleAccountBalanceRequest;
                fromAmino(_: _79.QueryModuleAccountBalanceRequestAmino): _79.QueryModuleAccountBalanceRequest;
                toAmino(_: _79.QueryModuleAccountBalanceRequest): _79.QueryModuleAccountBalanceRequestAmino;
                fromAminoMsg(object: _79.QueryModuleAccountBalanceRequestAminoMsg): _79.QueryModuleAccountBalanceRequest;
                fromProtoMsg(message: _79.QueryModuleAccountBalanceRequestProtoMsg): _79.QueryModuleAccountBalanceRequest;
                toProto(message: _79.QueryModuleAccountBalanceRequest): Uint8Array;
                toProtoMsg(message: _79.QueryModuleAccountBalanceRequest): _79.QueryModuleAccountBalanceRequestProtoMsg;
            };
            QueryModuleAccountBalanceResponse: {
                typeUrl: string;
                is(o: any): o is _79.QueryModuleAccountBalanceResponse;
                isSDK(o: any): o is _79.QueryModuleAccountBalanceResponseSDKType;
                isAmino(o: any): o is _79.QueryModuleAccountBalanceResponseAmino;
                encode(message: _79.QueryModuleAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.QueryModuleAccountBalanceResponse;
                fromPartial(object: import("../helpers").DeepPartial<_79.QueryModuleAccountBalanceResponse>): _79.QueryModuleAccountBalanceResponse;
                fromAmino(object: _79.QueryModuleAccountBalanceResponseAmino): _79.QueryModuleAccountBalanceResponse;
                toAmino(message: _79.QueryModuleAccountBalanceResponse): _79.QueryModuleAccountBalanceResponseAmino;
                fromAminoMsg(object: _79.QueryModuleAccountBalanceResponseAminoMsg): _79.QueryModuleAccountBalanceResponse;
                fromProtoMsg(message: _79.QueryModuleAccountBalanceResponseProtoMsg): _79.QueryModuleAccountBalanceResponse;
                toProto(message: _79.QueryModuleAccountBalanceResponse): Uint8Array;
                toProtoMsg(message: _79.QueryModuleAccountBalanceResponse): _79.QueryModuleAccountBalanceResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                is(o: any): o is _79.QueryParamsRequest;
                isSDK(o: any): o is _79.QueryParamsRequestSDKType;
                isAmino(o: any): o is _79.QueryParamsRequestAmino;
                encode(_: _79.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.QueryParamsRequest;
                fromPartial(_: import("../helpers").DeepPartial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
                fromAmino(_: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                toAmino(_: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
                fromAminoMsg(object: _79.QueryParamsRequestAminoMsg): _79.QueryParamsRequest;
                fromProtoMsg(message: _79.QueryParamsRequestProtoMsg): _79.QueryParamsRequest;
                toProto(message: _79.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                is(o: any): o is _79.QueryParamsResponse;
                isSDK(o: any): o is _79.QueryParamsResponseSDKType;
                isAmino(o: any): o is _79.QueryParamsResponseAmino;
                encode(message: _79.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.QueryParamsResponse;
                fromPartial(object: import("../helpers").DeepPartial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
                fromAmino(object: _79.QueryParamsResponseAmino): _79.QueryParamsResponse;
                toAmino(message: _79.QueryParamsResponse): _79.QueryParamsResponseAmino;
                fromAminoMsg(object: _79.QueryParamsResponseAminoMsg): _79.QueryParamsResponse;
                fromProtoMsg(message: _79.QueryParamsResponseProtoMsg): _79.QueryParamsResponse;
                toProto(message: _79.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseProtoMsg;
            };
            QueryClaimRecordRequest: {
                typeUrl: string;
                is(o: any): o is _79.QueryClaimRecordRequest;
                isSDK(o: any): o is _79.QueryClaimRecordRequestSDKType;
                isAmino(o: any): o is _79.QueryClaimRecordRequestAmino;
                encode(message: _79.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.QueryClaimRecordRequest;
                fromPartial(object: import("../helpers").DeepPartial<_79.QueryClaimRecordRequest>): _79.QueryClaimRecordRequest;
                fromAmino(object: _79.QueryClaimRecordRequestAmino): _79.QueryClaimRecordRequest;
                toAmino(message: _79.QueryClaimRecordRequest): _79.QueryClaimRecordRequestAmino;
                fromAminoMsg(object: _79.QueryClaimRecordRequestAminoMsg): _79.QueryClaimRecordRequest;
                fromProtoMsg(message: _79.QueryClaimRecordRequestProtoMsg): _79.QueryClaimRecordRequest;
                toProto(message: _79.QueryClaimRecordRequest): Uint8Array;
                toProtoMsg(message: _79.QueryClaimRecordRequest): _79.QueryClaimRecordRequestProtoMsg;
            };
            QueryClaimRecordResponse: {
                typeUrl: string;
                is(o: any): o is _79.QueryClaimRecordResponse;
                isSDK(o: any): o is _79.QueryClaimRecordResponseSDKType;
                isAmino(o: any): o is _79.QueryClaimRecordResponseAmino;
                encode(message: _79.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.QueryClaimRecordResponse;
                fromPartial(object: import("../helpers").DeepPartial<_79.QueryClaimRecordResponse>): _79.QueryClaimRecordResponse;
                fromAmino(object: _79.QueryClaimRecordResponseAmino): _79.QueryClaimRecordResponse;
                toAmino(message: _79.QueryClaimRecordResponse): _79.QueryClaimRecordResponseAmino;
                fromAminoMsg(object: _79.QueryClaimRecordResponseAminoMsg): _79.QueryClaimRecordResponse;
                fromProtoMsg(message: _79.QueryClaimRecordResponseProtoMsg): _79.QueryClaimRecordResponse;
                toProto(message: _79.QueryClaimRecordResponse): Uint8Array;
                toProtoMsg(message: _79.QueryClaimRecordResponse): _79.QueryClaimRecordResponseProtoMsg;
            };
            QueryClaimableForActionRequest: {
                typeUrl: string;
                is(o: any): o is _79.QueryClaimableForActionRequest;
                isSDK(o: any): o is _79.QueryClaimableForActionRequestSDKType;
                isAmino(o: any): o is _79.QueryClaimableForActionRequestAmino;
                encode(message: _79.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.QueryClaimableForActionRequest;
                fromPartial(object: import("../helpers").DeepPartial<_79.QueryClaimableForActionRequest>): _79.QueryClaimableForActionRequest;
                fromAmino(object: _79.QueryClaimableForActionRequestAmino): _79.QueryClaimableForActionRequest;
                toAmino(message: _79.QueryClaimableForActionRequest): _79.QueryClaimableForActionRequestAmino;
                fromAminoMsg(object: _79.QueryClaimableForActionRequestAminoMsg): _79.QueryClaimableForActionRequest;
                fromProtoMsg(message: _79.QueryClaimableForActionRequestProtoMsg): _79.QueryClaimableForActionRequest;
                toProto(message: _79.QueryClaimableForActionRequest): Uint8Array;
                toProtoMsg(message: _79.QueryClaimableForActionRequest): _79.QueryClaimableForActionRequestProtoMsg;
            };
            QueryClaimableForActionResponse: {
                typeUrl: string;
                is(o: any): o is _79.QueryClaimableForActionResponse;
                isSDK(o: any): o is _79.QueryClaimableForActionResponseSDKType;
                isAmino(o: any): o is _79.QueryClaimableForActionResponseAmino;
                encode(message: _79.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.QueryClaimableForActionResponse;
                fromPartial(object: import("../helpers").DeepPartial<_79.QueryClaimableForActionResponse>): _79.QueryClaimableForActionResponse;
                fromAmino(object: _79.QueryClaimableForActionResponseAmino): _79.QueryClaimableForActionResponse;
                toAmino(message: _79.QueryClaimableForActionResponse): _79.QueryClaimableForActionResponseAmino;
                fromAminoMsg(object: _79.QueryClaimableForActionResponseAminoMsg): _79.QueryClaimableForActionResponse;
                fromProtoMsg(message: _79.QueryClaimableForActionResponseProtoMsg): _79.QueryClaimableForActionResponse;
                toProto(message: _79.QueryClaimableForActionResponse): Uint8Array;
                toProtoMsg(message: _79.QueryClaimableForActionResponse): _79.QueryClaimableForActionResponseProtoMsg;
            };
            QueryTotalClaimableRequest: {
                typeUrl: string;
                is(o: any): o is _79.QueryTotalClaimableRequest;
                isSDK(o: any): o is _79.QueryTotalClaimableRequestSDKType;
                isAmino(o: any): o is _79.QueryTotalClaimableRequestAmino;
                encode(message: _79.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.QueryTotalClaimableRequest;
                fromPartial(object: import("../helpers").DeepPartial<_79.QueryTotalClaimableRequest>): _79.QueryTotalClaimableRequest;
                fromAmino(object: _79.QueryTotalClaimableRequestAmino): _79.QueryTotalClaimableRequest;
                toAmino(message: _79.QueryTotalClaimableRequest): _79.QueryTotalClaimableRequestAmino;
                fromAminoMsg(object: _79.QueryTotalClaimableRequestAminoMsg): _79.QueryTotalClaimableRequest;
                fromProtoMsg(message: _79.QueryTotalClaimableRequestProtoMsg): _79.QueryTotalClaimableRequest;
                toProto(message: _79.QueryTotalClaimableRequest): Uint8Array;
                toProtoMsg(message: _79.QueryTotalClaimableRequest): _79.QueryTotalClaimableRequestProtoMsg;
            };
            QueryTotalClaimableResponse: {
                typeUrl: string;
                is(o: any): o is _79.QueryTotalClaimableResponse;
                isSDK(o: any): o is _79.QueryTotalClaimableResponseSDKType;
                isAmino(o: any): o is _79.QueryTotalClaimableResponseAmino;
                encode(message: _79.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.QueryTotalClaimableResponse;
                fromPartial(object: import("../helpers").DeepPartial<_79.QueryTotalClaimableResponse>): _79.QueryTotalClaimableResponse;
                fromAmino(object: _79.QueryTotalClaimableResponseAmino): _79.QueryTotalClaimableResponse;
                toAmino(message: _79.QueryTotalClaimableResponse): _79.QueryTotalClaimableResponseAmino;
                fromAminoMsg(object: _79.QueryTotalClaimableResponseAminoMsg): _79.QueryTotalClaimableResponse;
                fromProtoMsg(message: _79.QueryTotalClaimableResponseProtoMsg): _79.QueryTotalClaimableResponse;
                toProto(message: _79.QueryTotalClaimableResponse): Uint8Array;
                toProtoMsg(message: _79.QueryTotalClaimableResponse): _79.QueryTotalClaimableResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                is(o: any): o is _78.Params;
                isSDK(o: any): o is _78.ParamsSDKType;
                isAmino(o: any): o is _78.ParamsAmino;
                encode(message: _78.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.Params;
                fromPartial(object: import("../helpers").DeepPartial<_78.Params>): _78.Params;
                fromAmino(object: _78.ParamsAmino): _78.Params;
                toAmino(message: _78.Params): _78.ParamsAmino;
                fromAminoMsg(object: _78.ParamsAminoMsg): _78.Params;
                fromProtoMsg(message: _78.ParamsProtoMsg): _78.Params;
                toProto(message: _78.Params): Uint8Array;
                toProtoMsg(message: _78.Params): _78.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                is(o: any): o is _77.GenesisState;
                isSDK(o: any): o is _77.GenesisStateSDKType;
                isAmino(o: any): o is _77.GenesisStateAmino;
                encode(message: _77.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.GenesisState;
                fromPartial(object: import("../helpers").DeepPartial<_77.GenesisState>): _77.GenesisState;
                fromAmino(object: _77.GenesisStateAmino): _77.GenesisState;
                toAmino(message: _77.GenesisState): _77.GenesisStateAmino;
                fromAminoMsg(object: _77.GenesisStateAminoMsg): _77.GenesisState;
                fromProtoMsg(message: _77.GenesisStateProtoMsg): _77.GenesisState;
                toProto(message: _77.GenesisState): Uint8Array;
                toProtoMsg(message: _77.GenesisState): _77.GenesisStateProtoMsg;
            };
            ClaimRecord: {
                typeUrl: string;
                is(o: any): o is _76.ClaimRecord;
                isSDK(o: any): o is _76.ClaimRecordSDKType;
                isAmino(o: any): o is _76.ClaimRecordAmino;
                encode(message: _76.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ClaimRecord;
                fromPartial(object: import("../helpers").DeepPartial<_76.ClaimRecord>): _76.ClaimRecord;
                fromAmino(object: _76.ClaimRecordAmino): _76.ClaimRecord;
                toAmino(message: _76.ClaimRecord): _76.ClaimRecordAmino;
                fromAminoMsg(object: _76.ClaimRecordAminoMsg): _76.ClaimRecord;
                fromProtoMsg(message: _76.ClaimRecordProtoMsg): _76.ClaimRecord;
                toProto(message: _76.ClaimRecord): Uint8Array;
                toProtoMsg(message: _76.ClaimRecord): _76.ClaimRecordProtoMsg;
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
            passage3d: {
                claim: {
                    v1beta1: _153.MsgClientImpl;
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
            passage3d: {
                claim: {
                    v1beta1: {
                        moduleAccountBalance(request?: _79.QueryModuleAccountBalanceRequest): Promise<_79.QueryModuleAccountBalanceResponse>;
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        claimRecord(request: _79.QueryClaimRecordRequest): Promise<_79.QueryClaimRecordResponse>;
                        claimableForAction(request: _79.QueryClaimableForActionRequest): Promise<_79.QueryClaimableForActionResponse>;
                        totalClaimable(request: _79.QueryTotalClaimableRequest): Promise<_79.QueryTotalClaimableResponse>;
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
            passage3d: {
                claim: {
                    v1beta1: _151.LCDQueryClient;
                };
            };
        }>;
    };
}
