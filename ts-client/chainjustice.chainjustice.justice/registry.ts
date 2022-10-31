import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeleteBelonging } from "./types/justice/tx";
import { MsgUpdateBelonging } from "./types/justice/tx";
import { MsgUpdateCountry } from "./types/justice/tx";
import { MsgCreateCountry } from "./types/justice/tx";
import { MsgDeleteCountry } from "./types/justice/tx";
import { MsgCreateBelonging } from "./types/justice/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/chainjustice.chainjustice.justice.MsgDeleteBelonging", MsgDeleteBelonging],
    ["/chainjustice.chainjustice.justice.MsgUpdateBelonging", MsgUpdateBelonging],
    ["/chainjustice.chainjustice.justice.MsgUpdateCountry", MsgUpdateCountry],
    ["/chainjustice.chainjustice.justice.MsgCreateCountry", MsgCreateCountry],
    ["/chainjustice.chainjustice.justice.MsgDeleteCountry", MsgDeleteCountry],
    ["/chainjustice.chainjustice.justice.MsgCreateBelonging", MsgCreateBelonging],
    
];

export { msgTypes }