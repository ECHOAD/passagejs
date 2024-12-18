import * as _79 from "./claim/v1beta1/claim_record";
import * as _80 from "./claim/v1beta1/genesis";
import * as _81 from "./claim/v1beta1/params";
import * as _82 from "./claim/v1beta1/query";
import * as _83 from "./claim/v1beta1/tx";
import * as _159 from "./claim/v1beta1/query.lcd";
import * as _160 from "./claim/v1beta1/query.rpc.Query";
import * as _161 from "./claim/v1beta1/tx.rpc.msg";
export declare namespace passage3d {
    namespace claim {
        const v1beta1: {
            MsgClientImpl: typeof _161.MsgClientImpl;
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _82.QueryModuleAccountBalanceRequest): Promise<_82.QueryModuleAccountBalanceResponse>;
                params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                claimRecord(request: _82.QueryClaimRecordRequest): Promise<_82.QueryClaimRecordResponse>;
                claimableForAction(request: _82.QueryClaimableForActionRequest): Promise<_82.QueryClaimableForActionResponse>;
                totalClaimable(request: _82.QueryTotalClaimableRequest): Promise<_82.QueryTotalClaimableResponse>;
            };
            LCDQueryClient: typeof _159.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _83.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    claim(value: _83.MsgClaim): {
                        typeUrl: string;
                        value: _83.MsgClaim;
                    };
                };
                fromPartial: {
                    claim(value: _83.MsgClaim): {
                        typeUrl: string;
                        value: _83.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/passage3d.claim.v1beta1.MsgClaim": {
                    aminoType: string;
                    toAmino: (message: _83.MsgClaim) => _83.MsgClaimAmino;
                    fromAmino: (object: _83.MsgClaimAmino) => _83.MsgClaim;
                };
            };
            MsgClaim: {
                typeUrl: string;
                encode(message: _83.MsgClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.MsgClaim;
                fromPartial(object: Partial<_83.MsgClaim>): _83.MsgClaim;
                fromAmino(object: _83.MsgClaimAmino): _83.MsgClaim;
                toAmino(message: _83.MsgClaim): _83.MsgClaimAmino;
                fromAminoMsg(object: _83.MsgClaimAminoMsg): _83.MsgClaim;
                fromProtoMsg(message: _83.MsgClaimProtoMsg): _83.MsgClaim;
                toProto(message: _83.MsgClaim): Uint8Array;
                toProtoMsg(message: _83.MsgClaim): _83.MsgClaimProtoMsg;
            };
            MsgClaimResponse: {
                typeUrl: string;
                encode(message: _83.MsgClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.MsgClaimResponse;
                fromPartial(object: Partial<_83.MsgClaimResponse>): _83.MsgClaimResponse;
                fromAmino(object: _83.MsgClaimResponseAmino): _83.MsgClaimResponse;
                toAmino(message: _83.MsgClaimResponse): _83.MsgClaimResponseAmino;
                fromAminoMsg(object: _83.MsgClaimResponseAminoMsg): _83.MsgClaimResponse;
                fromProtoMsg(message: _83.MsgClaimResponseProtoMsg): _83.MsgClaimResponse;
                toProto(message: _83.MsgClaimResponse): Uint8Array;
                toProtoMsg(message: _83.MsgClaimResponse): _83.MsgClaimResponseProtoMsg;
            };
            QueryModuleAccountBalanceRequest: {
                typeUrl: string;
                encode(_: _82.QueryModuleAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.QueryModuleAccountBalanceRequest;
                fromPartial(_: Partial<_82.QueryModuleAccountBalanceRequest>): _82.QueryModuleAccountBalanceRequest;
                fromAmino(_: _82.QueryModuleAccountBalanceRequestAmino): _82.QueryModuleAccountBalanceRequest;
                toAmino(_: _82.QueryModuleAccountBalanceRequest): _82.QueryModuleAccountBalanceRequestAmino;
                fromAminoMsg(object: _82.QueryModuleAccountBalanceRequestAminoMsg): _82.QueryModuleAccountBalanceRequest;
                fromProtoMsg(message: _82.QueryModuleAccountBalanceRequestProtoMsg): _82.QueryModuleAccountBalanceRequest;
                toProto(message: _82.QueryModuleAccountBalanceRequest): Uint8Array;
                toProtoMsg(message: _82.QueryModuleAccountBalanceRequest): _82.QueryModuleAccountBalanceRequestProtoMsg;
            };
            QueryModuleAccountBalanceResponse: {
                typeUrl: string;
                encode(message: _82.QueryModuleAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.QueryModuleAccountBalanceResponse;
                fromPartial(object: Partial<_82.QueryModuleAccountBalanceResponse>): _82.QueryModuleAccountBalanceResponse;
                fromAmino(object: _82.QueryModuleAccountBalanceResponseAmino): _82.QueryModuleAccountBalanceResponse;
                toAmino(message: _82.QueryModuleAccountBalanceResponse): _82.QueryModuleAccountBalanceResponseAmino;
                fromAminoMsg(object: _82.QueryModuleAccountBalanceResponseAminoMsg): _82.QueryModuleAccountBalanceResponse;
                fromProtoMsg(message: _82.QueryModuleAccountBalanceResponseProtoMsg): _82.QueryModuleAccountBalanceResponse;
                toProto(message: _82.QueryModuleAccountBalanceResponse): Uint8Array;
                toProtoMsg(message: _82.QueryModuleAccountBalanceResponse): _82.QueryModuleAccountBalanceResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _82.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.QueryParamsRequest;
                fromPartial(_: Partial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
                fromAmino(_: _82.QueryParamsRequestAmino): _82.QueryParamsRequest;
                toAmino(_: _82.QueryParamsRequest): _82.QueryParamsRequestAmino;
                fromAminoMsg(object: _82.QueryParamsRequestAminoMsg): _82.QueryParamsRequest;
                fromProtoMsg(message: _82.QueryParamsRequestProtoMsg): _82.QueryParamsRequest;
                toProto(message: _82.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryParamsRequest): _82.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _82.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.QueryParamsResponse;
                fromPartial(object: Partial<_82.QueryParamsResponse>): _82.QueryParamsResponse;
                fromAmino(object: _82.QueryParamsResponseAmino): _82.QueryParamsResponse;
                toAmino(message: _82.QueryParamsResponse): _82.QueryParamsResponseAmino;
                fromAminoMsg(object: _82.QueryParamsResponseAminoMsg): _82.QueryParamsResponse;
                fromProtoMsg(message: _82.QueryParamsResponseProtoMsg): _82.QueryParamsResponse;
                toProto(message: _82.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryParamsResponse): _82.QueryParamsResponseProtoMsg;
            };
            QueryClaimRecordRequest: {
                typeUrl: string;
                encode(message: _82.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.QueryClaimRecordRequest;
                fromPartial(object: Partial<_82.QueryClaimRecordRequest>): _82.QueryClaimRecordRequest;
                fromAmino(object: _82.QueryClaimRecordRequestAmino): _82.QueryClaimRecordRequest;
                toAmino(message: _82.QueryClaimRecordRequest): _82.QueryClaimRecordRequestAmino;
                fromAminoMsg(object: _82.QueryClaimRecordRequestAminoMsg): _82.QueryClaimRecordRequest;
                fromProtoMsg(message: _82.QueryClaimRecordRequestProtoMsg): _82.QueryClaimRecordRequest;
                toProto(message: _82.QueryClaimRecordRequest): Uint8Array;
                toProtoMsg(message: _82.QueryClaimRecordRequest): _82.QueryClaimRecordRequestProtoMsg;
            };
            QueryClaimRecordResponse: {
                typeUrl: string;
                encode(message: _82.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.QueryClaimRecordResponse;
                fromPartial(object: Partial<_82.QueryClaimRecordResponse>): _82.QueryClaimRecordResponse;
                fromAmino(object: _82.QueryClaimRecordResponseAmino): _82.QueryClaimRecordResponse;
                toAmino(message: _82.QueryClaimRecordResponse): _82.QueryClaimRecordResponseAmino;
                fromAminoMsg(object: _82.QueryClaimRecordResponseAminoMsg): _82.QueryClaimRecordResponse;
                fromProtoMsg(message: _82.QueryClaimRecordResponseProtoMsg): _82.QueryClaimRecordResponse;
                toProto(message: _82.QueryClaimRecordResponse): Uint8Array;
                toProtoMsg(message: _82.QueryClaimRecordResponse): _82.QueryClaimRecordResponseProtoMsg;
            };
            QueryClaimableForActionRequest: {
                typeUrl: string;
                encode(message: _82.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.QueryClaimableForActionRequest;
                fromPartial(object: Partial<_82.QueryClaimableForActionRequest>): _82.QueryClaimableForActionRequest;
                fromAmino(object: _82.QueryClaimableForActionRequestAmino): _82.QueryClaimableForActionRequest;
                toAmino(message: _82.QueryClaimableForActionRequest): _82.QueryClaimableForActionRequestAmino;
                fromAminoMsg(object: _82.QueryClaimableForActionRequestAminoMsg): _82.QueryClaimableForActionRequest;
                fromProtoMsg(message: _82.QueryClaimableForActionRequestProtoMsg): _82.QueryClaimableForActionRequest;
                toProto(message: _82.QueryClaimableForActionRequest): Uint8Array;
                toProtoMsg(message: _82.QueryClaimableForActionRequest): _82.QueryClaimableForActionRequestProtoMsg;
            };
            QueryClaimableForActionResponse: {
                typeUrl: string;
                encode(message: _82.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.QueryClaimableForActionResponse;
                fromPartial(object: Partial<_82.QueryClaimableForActionResponse>): _82.QueryClaimableForActionResponse;
                fromAmino(object: _82.QueryClaimableForActionResponseAmino): _82.QueryClaimableForActionResponse;
                toAmino(message: _82.QueryClaimableForActionResponse): _82.QueryClaimableForActionResponseAmino;
                fromAminoMsg(object: _82.QueryClaimableForActionResponseAminoMsg): _82.QueryClaimableForActionResponse;
                fromProtoMsg(message: _82.QueryClaimableForActionResponseProtoMsg): _82.QueryClaimableForActionResponse;
                toProto(message: _82.QueryClaimableForActionResponse): Uint8Array;
                toProtoMsg(message: _82.QueryClaimableForActionResponse): _82.QueryClaimableForActionResponseProtoMsg;
            };
            QueryTotalClaimableRequest: {
                typeUrl: string;
                encode(message: _82.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.QueryTotalClaimableRequest;
                fromPartial(object: Partial<_82.QueryTotalClaimableRequest>): _82.QueryTotalClaimableRequest;
                fromAmino(object: _82.QueryTotalClaimableRequestAmino): _82.QueryTotalClaimableRequest;
                toAmino(message: _82.QueryTotalClaimableRequest): _82.QueryTotalClaimableRequestAmino;
                fromAminoMsg(object: _82.QueryTotalClaimableRequestAminoMsg): _82.QueryTotalClaimableRequest;
                fromProtoMsg(message: _82.QueryTotalClaimableRequestProtoMsg): _82.QueryTotalClaimableRequest;
                toProto(message: _82.QueryTotalClaimableRequest): Uint8Array;
                toProtoMsg(message: _82.QueryTotalClaimableRequest): _82.QueryTotalClaimableRequestProtoMsg;
            };
            QueryTotalClaimableResponse: {
                typeUrl: string;
                encode(message: _82.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.QueryTotalClaimableResponse;
                fromPartial(object: Partial<_82.QueryTotalClaimableResponse>): _82.QueryTotalClaimableResponse;
                fromAmino(object: _82.QueryTotalClaimableResponseAmino): _82.QueryTotalClaimableResponse;
                toAmino(message: _82.QueryTotalClaimableResponse): _82.QueryTotalClaimableResponseAmino;
                fromAminoMsg(object: _82.QueryTotalClaimableResponseAminoMsg): _82.QueryTotalClaimableResponse;
                fromProtoMsg(message: _82.QueryTotalClaimableResponseProtoMsg): _82.QueryTotalClaimableResponse;
                toProto(message: _82.QueryTotalClaimableResponse): Uint8Array;
                toProtoMsg(message: _82.QueryTotalClaimableResponse): _82.QueryTotalClaimableResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _81.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.Params;
                fromPartial(object: Partial<_81.Params>): _81.Params;
                fromAmino(object: _81.ParamsAmino): _81.Params;
                toAmino(message: _81.Params): _81.ParamsAmino;
                fromAminoMsg(object: _81.ParamsAminoMsg): _81.Params;
                fromProtoMsg(message: _81.ParamsProtoMsg): _81.Params;
                toProto(message: _81.Params): Uint8Array;
                toProtoMsg(message: _81.Params): _81.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _80.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.GenesisState;
                fromPartial(object: Partial<_80.GenesisState>): _80.GenesisState;
                fromAmino(object: _80.GenesisStateAmino): _80.GenesisState;
                toAmino(message: _80.GenesisState): _80.GenesisStateAmino;
                fromAminoMsg(object: _80.GenesisStateAminoMsg): _80.GenesisState;
                fromProtoMsg(message: _80.GenesisStateProtoMsg): _80.GenesisState;
                toProto(message: _80.GenesisState): Uint8Array;
                toProtoMsg(message: _80.GenesisState): _80.GenesisStateProtoMsg;
            };
            ClaimRecord: {
                typeUrl: string;
                encode(message: _79.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.ClaimRecord;
                fromPartial(object: Partial<_79.ClaimRecord>): _79.ClaimRecord;
                fromAmino(object: _79.ClaimRecordAmino): _79.ClaimRecord;
                toAmino(message: _79.ClaimRecord): _79.ClaimRecordAmino;
                fromAminoMsg(object: _79.ClaimRecordAminoMsg): _79.ClaimRecord;
                fromProtoMsg(message: _79.ClaimRecordProtoMsg): _79.ClaimRecord;
                toProto(message: _79.ClaimRecord): Uint8Array;
                toProtoMsg(message: _79.ClaimRecord): _79.ClaimRecordProtoMsg;
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
            passage3d: {
                claim: {
                    v1beta1: _161.MsgClientImpl;
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
            passage3d: {
                claim: {
                    v1beta1: {
                        moduleAccountBalance(request?: _82.QueryModuleAccountBalanceRequest): Promise<_82.QueryModuleAccountBalanceResponse>;
                        params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                        claimRecord(request: _82.QueryClaimRecordRequest): Promise<_82.QueryClaimRecordResponse>;
                        claimableForAction(request: _82.QueryClaimableForActionRequest): Promise<_82.QueryClaimableForActionResponse>;
                        totalClaimable(request: _82.QueryTotalClaimableRequest): Promise<_82.QueryTotalClaimableResponse>;
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
            passage3d: {
                claim: {
                    v1beta1: _159.LCDQueryClient;
                };
            };
        }>;
    };
}
