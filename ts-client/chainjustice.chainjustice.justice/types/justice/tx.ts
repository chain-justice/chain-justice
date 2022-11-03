/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "chainjustice.chainjustice.justice";

export interface MsgFundCountry {
  creator: string;
}

export interface MsgFundCountryResponse {
}

export interface MsgFallCountry {
  creator: string;
}

export interface MsgFallCountryResponse {
}

export interface MsgPrepareStart {
  creator: string;
}

export interface MsgPrepareStartResponse {
}

export interface MsgPrepareResult {
  creator: string;
}

export interface MsgPrepareResultResponse {
}

export interface MsgBelongContry {
  creator: string;
  countryAddress: string;
}

export interface MsgBelongContryResponse {
}

export interface MsgLeaveCountry {
  creator: string;
}

export interface MsgLeaveCountryResponse {
}

export interface MsgInvasionResult {
  creator: string;
}

export interface MsgInvasionResultResponse {
}

export interface MsgInvasionStart {
  creator: string;
  countryAddress: string;
}

export interface MsgInvasionStartResponse {
}

function createBaseMsgFundCountry(): MsgFundCountry {
  return { creator: "" };
}

export const MsgFundCountry = {
  encode(message: MsgFundCountry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCountry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCountry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFundCountry {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgFundCountry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundCountry>, I>>(object: I): MsgFundCountry {
    const message = createBaseMsgFundCountry();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgFundCountryResponse(): MsgFundCountryResponse {
  return {};
}

export const MsgFundCountryResponse = {
  encode(_: MsgFundCountryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCountryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCountryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgFundCountryResponse {
    return {};
  },

  toJSON(_: MsgFundCountryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundCountryResponse>, I>>(_: I): MsgFundCountryResponse {
    const message = createBaseMsgFundCountryResponse();
    return message;
  },
};

function createBaseMsgFallCountry(): MsgFallCountry {
  return { creator: "" };
}

export const MsgFallCountry = {
  encode(message: MsgFallCountry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFallCountry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFallCountry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFallCountry {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgFallCountry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFallCountry>, I>>(object: I): MsgFallCountry {
    const message = createBaseMsgFallCountry();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgFallCountryResponse(): MsgFallCountryResponse {
  return {};
}

export const MsgFallCountryResponse = {
  encode(_: MsgFallCountryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFallCountryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFallCountryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgFallCountryResponse {
    return {};
  },

  toJSON(_: MsgFallCountryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFallCountryResponse>, I>>(_: I): MsgFallCountryResponse {
    const message = createBaseMsgFallCountryResponse();
    return message;
  },
};

function createBaseMsgPrepareStart(): MsgPrepareStart {
  return { creator: "" };
}

export const MsgPrepareStart = {
  encode(message: MsgPrepareStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPrepareStart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPrepareStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPrepareStart {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgPrepareStart): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPrepareStart>, I>>(object: I): MsgPrepareStart {
    const message = createBaseMsgPrepareStart();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgPrepareStartResponse(): MsgPrepareStartResponse {
  return {};
}

export const MsgPrepareStartResponse = {
  encode(_: MsgPrepareStartResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPrepareStartResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPrepareStartResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgPrepareStartResponse {
    return {};
  },

  toJSON(_: MsgPrepareStartResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPrepareStartResponse>, I>>(_: I): MsgPrepareStartResponse {
    const message = createBaseMsgPrepareStartResponse();
    return message;
  },
};

function createBaseMsgPrepareResult(): MsgPrepareResult {
  return { creator: "" };
}

export const MsgPrepareResult = {
  encode(message: MsgPrepareResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPrepareResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPrepareResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPrepareResult {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgPrepareResult): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPrepareResult>, I>>(object: I): MsgPrepareResult {
    const message = createBaseMsgPrepareResult();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgPrepareResultResponse(): MsgPrepareResultResponse {
  return {};
}

export const MsgPrepareResultResponse = {
  encode(_: MsgPrepareResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPrepareResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPrepareResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgPrepareResultResponse {
    return {};
  },

  toJSON(_: MsgPrepareResultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPrepareResultResponse>, I>>(_: I): MsgPrepareResultResponse {
    const message = createBaseMsgPrepareResultResponse();
    return message;
  },
};

function createBaseMsgBelongContry(): MsgBelongContry {
  return { creator: "", countryAddress: "" };
}

export const MsgBelongContry = {
  encode(message: MsgBelongContry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.countryAddress !== "") {
      writer.uint32(18).string(message.countryAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBelongContry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBelongContry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.countryAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBelongContry {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      countryAddress: isSet(object.countryAddress) ? String(object.countryAddress) : "",
    };
  },

  toJSON(message: MsgBelongContry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.countryAddress !== undefined && (obj.countryAddress = message.countryAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBelongContry>, I>>(object: I): MsgBelongContry {
    const message = createBaseMsgBelongContry();
    message.creator = object.creator ?? "";
    message.countryAddress = object.countryAddress ?? "";
    return message;
  },
};

function createBaseMsgBelongContryResponse(): MsgBelongContryResponse {
  return {};
}

export const MsgBelongContryResponse = {
  encode(_: MsgBelongContryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBelongContryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBelongContryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBelongContryResponse {
    return {};
  },

  toJSON(_: MsgBelongContryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBelongContryResponse>, I>>(_: I): MsgBelongContryResponse {
    const message = createBaseMsgBelongContryResponse();
    return message;
  },
};

function createBaseMsgLeaveCountry(): MsgLeaveCountry {
  return { creator: "" };
}

export const MsgLeaveCountry = {
  encode(message: MsgLeaveCountry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveCountry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveCountry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLeaveCountry {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgLeaveCountry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaveCountry>, I>>(object: I): MsgLeaveCountry {
    const message = createBaseMsgLeaveCountry();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgLeaveCountryResponse(): MsgLeaveCountryResponse {
  return {};
}

export const MsgLeaveCountryResponse = {
  encode(_: MsgLeaveCountryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveCountryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveCountryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLeaveCountryResponse {
    return {};
  },

  toJSON(_: MsgLeaveCountryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaveCountryResponse>, I>>(_: I): MsgLeaveCountryResponse {
    const message = createBaseMsgLeaveCountryResponse();
    return message;
  },
};

function createBaseMsgInvasionResult(): MsgInvasionResult {
  return { creator: "" };
}

export const MsgInvasionResult = {
  encode(message: MsgInvasionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInvasionResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInvasionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInvasionResult {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgInvasionResult): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInvasionResult>, I>>(object: I): MsgInvasionResult {
    const message = createBaseMsgInvasionResult();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgInvasionResultResponse(): MsgInvasionResultResponse {
  return {};
}

export const MsgInvasionResultResponse = {
  encode(_: MsgInvasionResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInvasionResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInvasionResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgInvasionResultResponse {
    return {};
  },

  toJSON(_: MsgInvasionResultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInvasionResultResponse>, I>>(_: I): MsgInvasionResultResponse {
    const message = createBaseMsgInvasionResultResponse();
    return message;
  },
};

function createBaseMsgInvasionStart(): MsgInvasionStart {
  return { creator: "", countryAddress: "" };
}

export const MsgInvasionStart = {
  encode(message: MsgInvasionStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.countryAddress !== "") {
      writer.uint32(18).string(message.countryAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInvasionStart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInvasionStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.countryAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInvasionStart {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      countryAddress: isSet(object.countryAddress) ? String(object.countryAddress) : "",
    };
  },

  toJSON(message: MsgInvasionStart): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.countryAddress !== undefined && (obj.countryAddress = message.countryAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInvasionStart>, I>>(object: I): MsgInvasionStart {
    const message = createBaseMsgInvasionStart();
    message.creator = object.creator ?? "";
    message.countryAddress = object.countryAddress ?? "";
    return message;
  },
};

function createBaseMsgInvasionStartResponse(): MsgInvasionStartResponse {
  return {};
}

export const MsgInvasionStartResponse = {
  encode(_: MsgInvasionStartResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInvasionStartResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInvasionStartResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgInvasionStartResponse {
    return {};
  },

  toJSON(_: MsgInvasionStartResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInvasionStartResponse>, I>>(_: I): MsgInvasionStartResponse {
    const message = createBaseMsgInvasionStartResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  FundCountry(request: MsgFundCountry): Promise<MsgFundCountryResponse>;
  FallCountry(request: MsgFallCountry): Promise<MsgFallCountryResponse>;
  PrepareStart(request: MsgPrepareStart): Promise<MsgPrepareStartResponse>;
  PrepareResult(request: MsgPrepareResult): Promise<MsgPrepareResultResponse>;
  BelongContry(request: MsgBelongContry): Promise<MsgBelongContryResponse>;
  LeaveCountry(request: MsgLeaveCountry): Promise<MsgLeaveCountryResponse>;
  InvasionResult(request: MsgInvasionResult): Promise<MsgInvasionResultResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  InvasionStart(request: MsgInvasionStart): Promise<MsgInvasionStartResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FundCountry = this.FundCountry.bind(this);
    this.FallCountry = this.FallCountry.bind(this);
    this.PrepareStart = this.PrepareStart.bind(this);
    this.PrepareResult = this.PrepareResult.bind(this);
    this.BelongContry = this.BelongContry.bind(this);
    this.LeaveCountry = this.LeaveCountry.bind(this);
    this.InvasionResult = this.InvasionResult.bind(this);
    this.InvasionStart = this.InvasionStart.bind(this);
  }
  FundCountry(request: MsgFundCountry): Promise<MsgFundCountryResponse> {
    const data = MsgFundCountry.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Msg", "FundCountry", data);
    return promise.then((data) => MsgFundCountryResponse.decode(new _m0.Reader(data)));
  }

  FallCountry(request: MsgFallCountry): Promise<MsgFallCountryResponse> {
    const data = MsgFallCountry.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Msg", "FallCountry", data);
    return promise.then((data) => MsgFallCountryResponse.decode(new _m0.Reader(data)));
  }

  PrepareStart(request: MsgPrepareStart): Promise<MsgPrepareStartResponse> {
    const data = MsgPrepareStart.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Msg", "PrepareStart", data);
    return promise.then((data) => MsgPrepareStartResponse.decode(new _m0.Reader(data)));
  }

  PrepareResult(request: MsgPrepareResult): Promise<MsgPrepareResultResponse> {
    const data = MsgPrepareResult.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Msg", "PrepareResult", data);
    return promise.then((data) => MsgPrepareResultResponse.decode(new _m0.Reader(data)));
  }

  BelongContry(request: MsgBelongContry): Promise<MsgBelongContryResponse> {
    const data = MsgBelongContry.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Msg", "BelongContry", data);
    return promise.then((data) => MsgBelongContryResponse.decode(new _m0.Reader(data)));
  }

  LeaveCountry(request: MsgLeaveCountry): Promise<MsgLeaveCountryResponse> {
    const data = MsgLeaveCountry.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Msg", "LeaveCountry", data);
    return promise.then((data) => MsgLeaveCountryResponse.decode(new _m0.Reader(data)));
  }

  InvasionResult(request: MsgInvasionResult): Promise<MsgInvasionResultResponse> {
    const data = MsgInvasionResult.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Msg", "InvasionResult", data);
    return promise.then((data) => MsgInvasionResultResponse.decode(new _m0.Reader(data)));
  }

  InvasionStart(request: MsgInvasionStart): Promise<MsgInvasionStartResponse> {
    const data = MsgInvasionStart.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Msg", "InvasionStart", data);
    return promise.then((data) => MsgInvasionStartResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
