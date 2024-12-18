import * as _76 from "./claim/v1beta1/claim_record";
import * as _77 from "./claim/v1beta1/genesis";
import * as _78 from "./claim/v1beta1/params";
import * as _79 from "./claim/v1beta1/query";
import * as _80 from "./claim/v1beta1/tx";
import * as _149 from "./claim/v1beta1/tx.amino";
import * as _150 from "./claim/v1beta1/tx.registry";
import * as _151 from "./claim/v1beta1/query.lcd";
import * as _152 from "./claim/v1beta1/query.rpc.Query";
import * as _153 from "./claim/v1beta1/tx.rpc.msg";
import * as _163 from "./lcd";
import * as _164 from "./rpc.query";
import * as _165 from "./rpc.tx";
export namespace passage3d {
  export namespace claim {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153
    };
  }
  export const ClientFactory = {
    ..._163,
    ..._164,
    ..._165
  };
}