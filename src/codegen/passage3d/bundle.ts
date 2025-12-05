import * as _11 from "./claim/v1beta1/claim_record";
import * as _12 from "./claim/v1beta1/genesis";
import * as _13 from "./claim/v1beta1/params";
import * as _14 from "./claim/v1beta1/query";
import * as _15 from "./claim/v1beta1/tx";
import * as _23 from "./claim/v1beta1/tx.amino";
import * as _24 from "./claim/v1beta1/tx.registry";
import * as _25 from "./claim/v1beta1/query.rpc.Query";
import * as _26 from "./claim/v1beta1/tx.rpc.msg";
import * as _29 from "./rpc.query";
import * as _30 from "./rpc.tx";
export namespace passage3d {
  export namespace claim {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._23,
      ..._24,
      ..._25,
      ..._26
    };
  }
  export const ClientFactory = {
    ..._29,
    ..._30
  };
}