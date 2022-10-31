import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateBelonging } from "./types/justice/tx";
import { MsgDeleteBelonging } from "./types/justice/tx";
import { MsgUpdateBelonging } from "./types/justice/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/chainjustice.chainjustice.justice.MsgCreateBelonging", MsgCreateBelonging],
    ["/chainjustice.chainjustice.justice.MsgDeleteBelonging", MsgDeleteBelonging],
    ["/chainjustice.chainjustice.justice.MsgUpdateBelonging", MsgUpdateBelonging],
    
];

export { msgTypes }