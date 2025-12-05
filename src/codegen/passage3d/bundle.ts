import * as _9 from "./claim/v1beta1/claim_record";
import * as _10 from "./claim/v1beta1/genesis";
import * as _11 from "./claim/v1beta1/params";
import * as _12 from "./claim/v1beta1/query";
import * as _13 from "./claim/v1beta1/tx";
import * as _21 from "./claim/v1beta1/tx.amino";
import * as _22 from "./claim/v1beta1/tx.registry";
import * as _23 from "./claim/v1beta1/query.rpc.Query";
import * as _24 from "./claim/v1beta1/tx.rpc.msg";
import * as _27 from "./rpc.query";
import * as _28 from "./rpc.tx";
export namespace passage3d {
  export namespace claim {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._21,
      ..._22,
      ..._23,
      ..._24
    };
  }
  export const ClientFactory = {
    ..._27,
    ..._28
  };
}