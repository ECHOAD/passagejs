import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  passage3d: {
    claim: {
      v1beta1: new (await import("./claim/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});