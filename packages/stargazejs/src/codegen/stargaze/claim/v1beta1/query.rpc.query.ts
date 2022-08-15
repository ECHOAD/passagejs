import { Action, ClaimRecord } from "./claim_record";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  moduleAccountBalance(request: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
  /*this line is used by starport scaffolding # 2*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*null*/

  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
  /*null*/

  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
  /*null*/

  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
  }

  moduleAccountBalance(request: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse> {
    const data = QueryModuleAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Query", "ModuleAccountBalance", data);
    return promise.then(data => QueryModuleAccountBalanceResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Query", "ClaimRecord", data);
    return promise.then(data => QueryClaimRecordResponse.decode(new _m0.Reader(data)));
  }

  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const data = QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Query", "ClaimableForAction", data);
    return promise.then(data => QueryClaimableForActionResponse.decode(new _m0.Reader(data)));
  }

  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const data = QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Query", "TotalClaimable", data);
    return promise.then(data => QueryTotalClaimableResponse.decode(new _m0.Reader(data)));
  }

}