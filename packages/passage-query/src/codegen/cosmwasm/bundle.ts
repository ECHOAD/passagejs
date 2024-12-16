import * as _42 from "./wasm/v1/genesis";
import * as _43 from "./wasm/v1/ibc";
import * as _44 from "./wasm/v1/proposal";
import * as _45 from "./wasm/v1/query";
import * as _46 from "./wasm/v1/tx";
import * as _47 from "./wasm/v1/types";
import * as _124 from "./wasm/v1/tx.amino";
import * as _125 from "./wasm/v1/tx.registry";
import * as _126 from "./wasm/v1/query.lcd";
import * as _127 from "./wasm/v1/query.rpc.Query";
import * as _128 from "./wasm/v1/tx.rpc.msg";
import * as _157 from "./lcd";
import * as _158 from "./rpc.query";
import * as _159 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128
    };
  }
  export const ClientFactory = {
    ..._157,
    ..._158,
    ..._159
  };
}