import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeleteInvasion } from "./types/justice/tx";
import { MsgDeletePrepare } from "./types/justice/tx";
import { MsgCreateBelonging } from "./types/justice/tx";
import { MsgDeleteCountry } from "./types/justice/tx";
import { MsgCreatePrepare } from "./types/justice/tx";
import { MsgCreateInvasion } from "./types/justice/tx";
import { MsgDeleteBelonging } from "./types/justice/tx";
import { MsgCreateCountry } from "./types/justice/tx";
import { MsgUpdateCountry } from "./types/justice/tx";
import { MsgUpdatePrepare } from "./types/justice/tx";
import { MsgUpdateInvasion } from "./types/justice/tx";
import { MsgUpdateBelonging } from "./types/justice/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/chainjustice.chainjustice.justice.MsgDeleteInvasion", MsgDeleteInvasion],
    ["/chainjustice.chainjustice.justice.MsgDeletePrepare", MsgDeletePrepare],
    ["/chainjustice.chainjustice.justice.MsgCreateBelonging", MsgCreateBelonging],
    ["/chainjustice.chainjustice.justice.MsgDeleteCountry", MsgDeleteCountry],
    ["/chainjustice.chainjustice.justice.MsgCreatePrepare", MsgCreatePrepare],
    ["/chainjustice.chainjustice.justice.MsgCreateInvasion", MsgCreateInvasion],
    ["/chainjustice.chainjustice.justice.MsgDeleteBelonging", MsgDeleteBelonging],
    ["/chainjustice.chainjustice.justice.MsgCreateCountry", MsgCreateCountry],
    ["/chainjustice.chainjustice.justice.MsgUpdateCountry", MsgUpdateCountry],
    ["/chainjustice.chainjustice.justice.MsgUpdatePrepare", MsgUpdatePrepare],
    ["/chainjustice.chainjustice.justice.MsgUpdateInvasion", MsgUpdateInvasion],
    ["/chainjustice.chainjustice.justice.MsgUpdateBelonging", MsgUpdateBelonging],
    
];

export { msgTypes }