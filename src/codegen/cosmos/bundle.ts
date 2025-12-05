import * as _1 from "./bank/v1beta1/authz";
import * as _2 from "./bank/v1beta1/bank";
import * as _3 from "./bank/v1beta1/genesis";
import * as _4 from "./bank/v1beta1/query";
import * as _5 from "./bank/v1beta1/tx";
import * as _6 from "./base/query/v1beta1/pagination";
import * as _7 from "./base/v1beta1/coin";
import * as _17 from "./bank/v1beta1/tx.amino";
import * as _18 from "./bank/v1beta1/tx.registry";
import * as _19 from "./bank/v1beta1/query.rpc.Query";
import * as _20 from "./bank/v1beta1/tx.rpc.msg";
import * as _25 from "./rpc.query";
import * as _26 from "./rpc.tx";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._17,
      ..._18,
      ..._19,
      ..._20
    };
  }
  export namespace base {
    export namespace query {
      export const v1beta1 = {
        ..._6
      };
    }
    export const v1beta1 = {
      ..._7
    };
  }
  export const ClientFactory = {
    ..._25,
    ..._26
  };
}