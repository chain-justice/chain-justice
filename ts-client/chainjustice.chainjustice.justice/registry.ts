import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgInvasionResult } from "./types/justice/tx";
import { MsgPrepareStart } from "./types/justice/tx";
import { MsgBelongContry } from "./types/justice/tx";
import { MsgPrepareResult } from "./types/justice/tx";
import { MsgInvasionStart } from "./types/justice/tx";
import { MsgFundCountry } from "./types/justice/tx";
import { MsgFallCountry } from "./types/justice/tx";
import { MsgLeaveCountry } from "./types/justice/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/chainjustice.chainjustice.justice.MsgInvasionResult", MsgInvasionResult],
    ["/chainjustice.chainjustice.justice.MsgPrepareStart", MsgPrepareStart],
    ["/chainjustice.chainjustice.justice.MsgBelongContry", MsgBelongContry],
    ["/chainjustice.chainjustice.justice.MsgPrepareResult", MsgPrepareResult],
    ["/chainjustice.chainjustice.justice.MsgInvasionStart", MsgInvasionStart],
    ["/chainjustice.chainjustice.justice.MsgFundCountry", MsgFundCountry],
    ["/chainjustice.chainjustice.justice.MsgFallCountry", MsgFallCountry],
    ["/chainjustice.chainjustice.justice.MsgLeaveCountry", MsgLeaveCountry],
    
];

export { msgTypes }