import * as _79 from "./claim/v1beta1/claim_record";
import * as _80 from "./claim/v1beta1/genesis";
import * as _81 from "./claim/v1beta1/params";
import * as _82 from "./claim/v1beta1/query";
import * as _83 from "./claim/v1beta1/tx";
import * as _157 from "./claim/v1beta1/tx.amino";
import * as _158 from "./claim/v1beta1/tx.registry";
import * as _159 from "./claim/v1beta1/query.lcd";
import * as _160 from "./claim/v1beta1/query.rpc.Query";
import * as _161 from "./claim/v1beta1/tx.rpc.msg";
import * as _171 from "./lcd";
import * as _172 from "./rpc.query";
import * as _173 from "./rpc.tx";
export namespace passage3d {
  export namespace claim {
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161
    };
  }
  export const ClientFactory = {
    ..._171,
    ..._172,
    ..._173
  };
}