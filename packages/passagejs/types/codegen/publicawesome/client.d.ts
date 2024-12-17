import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as stargazeAllocV1beta1TxAmino from "../stargaze/alloc/v1beta1/tx.amino";
import * as stargazeClaimV1beta1TxAmino from "../stargaze/claim/v1beta1/tx.amino";
export declare const publicawesomeAminoConverters: {
    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
        aminoType: string;
        toAmino: ({ sender }: import("../stargaze/claim/v1beta1/tx").MsgInitialClaim) => stargazeClaimV1beta1TxAmino.MsgInitialClaimAminoType["value"];
        fromAmino: ({ sender }: stargazeClaimV1beta1TxAmino.MsgInitialClaimAminoType["value"]) => import("../stargaze/claim/v1beta1/tx").MsgInitialClaim;
    };
    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: ({ sender, address, action }: import("../stargaze/claim/v1beta1/tx").MsgClaimFor) => stargazeClaimV1beta1TxAmino.MsgClaimForAminoType["value"];
        fromAmino: ({ sender, address, action }: stargazeClaimV1beta1TxAmino.MsgClaimForAminoType["value"]) => import("../stargaze/claim/v1beta1/tx").MsgClaimFor;
    };
    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount) => stargazeAllocV1beta1TxAmino.MsgCreateVestingAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, amount, start_time, end_time, delayed }: stargazeAllocV1beta1TxAmino.MsgCreateVestingAccountAminoType["value"]) => import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount;
    };
};
export declare const publicawesomeProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPublicawesomeClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPublicawesomeClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
