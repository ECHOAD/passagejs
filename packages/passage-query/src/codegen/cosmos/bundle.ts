import * as _2 from "./authz/v1beta1/authz";
import * as _3 from "./authz/v1beta1/event";
import * as _4 from "./authz/v1beta1/genesis";
import * as _5 from "./authz/v1beta1/query";
import * as _6 from "./authz/v1beta1/tx";
import * as _7 from "./bank/v1beta1/authz";
import * as _8 from "./bank/v1beta1/bank";
import * as _9 from "./bank/v1beta1/genesis";
import * as _10 from "./bank/v1beta1/query";
import * as _11 from "./bank/v1beta1/tx";
import * as _12 from "./base/abci/v1beta1/abci";
import * as _13 from "./base/query/v1beta1/pagination";
import * as _14 from "./base/reflection/v2alpha1/reflection";
import * as _15 from "./base/v1beta1/coin";
import * as _16 from "./capability/v1beta1/capability";
import * as _17 from "./capability/v1beta1/genesis";
import * as _18 from "./crypto/ed25519/keys";
import * as _19 from "./crypto/hd/v1/hd";
import * as _20 from "./crypto/keyring/v1/record";
import * as _21 from "./crypto/multisig/keys";
import * as _22 from "./crypto/secp256k1/keys";
import * as _23 from "./crypto/secp256r1/keys";
import * as _24 from "./distribution/v1beta1/distribution";
import * as _25 from "./distribution/v1beta1/genesis";
import * as _26 from "./distribution/v1beta1/query";
import * as _27 from "./distribution/v1beta1/tx";
import * as _28 from "./gov/v1/genesis";
import * as _29 from "./gov/v1/gov";
import * as _30 from "./gov/v1/query";
import * as _31 from "./gov/v1/tx";
import * as _32 from "./gov/v1beta1/genesis";
import * as _33 from "./gov/v1beta1/gov";
import * as _34 from "./gov/v1beta1/query";
import * as _35 from "./gov/v1beta1/tx";
import * as _36 from "./tx/signing/v1beta1/signing";
import * as _37 from "./tx/v1beta1/service";
import * as _38 from "./tx/v1beta1/tx";
import * as _39 from "./upgrade/v1beta1/query";
import * as _40 from "./upgrade/v1beta1/tx";
import * as _41 from "./upgrade/v1beta1/upgrade";
import * as _92 from "./authz/v1beta1/tx.amino";
import * as _93 from "./bank/v1beta1/tx.amino";
import * as _94 from "./distribution/v1beta1/tx.amino";
import * as _95 from "./gov/v1/tx.amino";
import * as _96 from "./gov/v1beta1/tx.amino";
import * as _97 from "./upgrade/v1beta1/tx.amino";
import * as _98 from "./authz/v1beta1/tx.registry";
import * as _99 from "./bank/v1beta1/tx.registry";
import * as _100 from "./distribution/v1beta1/tx.registry";
import * as _101 from "./gov/v1/tx.registry";
import * as _102 from "./gov/v1beta1/tx.registry";
import * as _103 from "./upgrade/v1beta1/tx.registry";
import * as _104 from "./authz/v1beta1/query.lcd";
import * as _105 from "./bank/v1beta1/query.lcd";
import * as _106 from "./distribution/v1beta1/query.lcd";
import * as _107 from "./gov/v1/query.lcd";
import * as _108 from "./gov/v1beta1/query.lcd";
import * as _109 from "./tx/v1beta1/service.lcd";
import * as _110 from "./upgrade/v1beta1/query.lcd";
import * as _111 from "./authz/v1beta1/query.rpc.Query";
import * as _112 from "./bank/v1beta1/query.rpc.Query";
import * as _113 from "./distribution/v1beta1/query.rpc.Query";
import * as _114 from "./gov/v1/query.rpc.Query";
import * as _115 from "./gov/v1beta1/query.rpc.Query";
import * as _116 from "./tx/v1beta1/service.rpc.Service";
import * as _117 from "./upgrade/v1beta1/query.rpc.Query";
import * as _118 from "./authz/v1beta1/tx.rpc.msg";
import * as _119 from "./bank/v1beta1/tx.rpc.msg";
import * as _120 from "./distribution/v1beta1/tx.rpc.msg";
import * as _121 from "./gov/v1/tx.rpc.msg";
import * as _122 from "./gov/v1beta1/tx.rpc.msg";
import * as _123 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _154 from "./lcd";
import * as _155 from "./rpc.query";
import * as _156 from "./rpc.tx";
export namespace cosmos {
  export namespace authz {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._92,
      ..._98,
      ..._104,
      ..._111,
      ..._118
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._93,
      ..._99,
      ..._105,
      ..._112,
      ..._119
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._12
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._13
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._16,
      ..._17
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._18
    };
    export namespace hd {
      export const v1 = {
        ..._19
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._20
      };
    }
    export const multisig = {
      ..._21
    };
    export const secp256k1 = {
      ..._22
    };
    export const secp256r1 = {
      ..._23
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._94,
      ..._100,
      ..._106,
      ..._113,
      ..._120
    };
  }
  export namespace gov {
    export const v1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._95,
      ..._101,
      ..._107,
      ..._114,
      ..._121
    };
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._96,
      ..._102,
      ..._108,
      ..._115,
      ..._122
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._36
      };
    }
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._109,
      ..._116
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._97,
      ..._103,
      ..._110,
      ..._117,
      ..._123
    };
  }
  export const ClientFactory = {
    ..._154,
    ..._155,
    ..._156
  };
}