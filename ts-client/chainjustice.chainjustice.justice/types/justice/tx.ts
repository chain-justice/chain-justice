/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "chainjustice.chainjustice.justice";

export interface MsgFundCountry {
  creator: string;
}

export interface MsgFundCountryResponse {}

export interface MsgBelongContry {
  creator: string;
  countryAddress: string;
}

export interface MsgBelongContryResponse {}

export interface MsgPrepareStart {
  creator: string;
}

export interface MsgPrepareStartResponse {}

export interface MsgPrepareResult {
  creator: string;
}

export interface MsgPrepareResultResponse {}

export interface MsgInvasionStart {
  creator: string;
  countryAddress: string;
}

export interface MsgInvasionStartResponse {}

export interface MsgInvasionResult {
  creator: string;
}

export interface MsgInvasionResultResponse {}

const baseMsgFundCountry: object = { creator: "" };

export const MsgFundCountry = {
  encode(message: MsgFundCountry, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFundCountry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundCountry } as MsgFundCountry;
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
    const message = { ...baseMsgFundCountry } as MsgFundCountry;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgFundCountry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFundCountry>): MsgFundCountry {
    const message = { ...baseMsgFundCountry } as MsgFundCountry;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgFundCountryResponse: object = {};

export const MsgFundCountryResponse = {
  encode(_: MsgFundCountryResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFundCountryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundCountryResponse } as MsgFundCountryResponse;
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
    const message = { ...baseMsgFundCountryResponse } as MsgFundCountryResponse;
    return message;
  },

  toJSON(_: MsgFundCountryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgFundCountryResponse>): MsgFundCountryResponse {
    const message = { ...baseMsgFundCountryResponse } as MsgFundCountryResponse;
    return message;
  },
};

const baseMsgBelongContry: object = { creator: "", countryAddress: "" };

export const MsgBelongContry = {
  encode(message: MsgBelongContry, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.countryAddress !== "") {
      writer.uint32(18).string(message.countryAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBelongContry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBelongContry } as MsgBelongContry;
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
    const message = { ...baseMsgBelongContry } as MsgBelongContry;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.countryAddress !== undefined && object.countryAddress !== null) {
      message.countryAddress = String(object.countryAddress);
    } else {
      message.countryAddress = "";
    }
    return message;
  },

  toJSON(message: MsgBelongContry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.countryAddress !== undefined &&
      (obj.countryAddress = message.countryAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBelongContry>): MsgBelongContry {
    const message = { ...baseMsgBelongContry } as MsgBelongContry;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.countryAddress !== undefined && object.countryAddress !== null) {
      message.countryAddress = object.countryAddress;
    } else {
      message.countryAddress = "";
    }
    return message;
  },
};

const baseMsgBelongContryResponse: object = {};

export const MsgBelongContryResponse = {
  encode(_: MsgBelongContryResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBelongContryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgBelongContryResponse,
    } as MsgBelongContryResponse;
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
    const message = {
      ...baseMsgBelongContryResponse,
    } as MsgBelongContryResponse;
    return message;
  },

  toJSON(_: MsgBelongContryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgBelongContryResponse>
  ): MsgBelongContryResponse {
    const message = {
      ...baseMsgBelongContryResponse,
    } as MsgBelongContryResponse;
    return message;
  },
};

const baseMsgPrepareStart: object = { creator: "" };

export const MsgPrepareStart = {
  encode(message: MsgPrepareStart, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPrepareStart {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPrepareStart } as MsgPrepareStart;
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
    const message = { ...baseMsgPrepareStart } as MsgPrepareStart;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgPrepareStart): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPrepareStart>): MsgPrepareStart {
    const message = { ...baseMsgPrepareStart } as MsgPrepareStart;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgPrepareStartResponse: object = {};

export const MsgPrepareStartResponse = {
  encode(_: MsgPrepareStartResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPrepareStartResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPrepareStartResponse,
    } as MsgPrepareStartResponse;
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
    const message = {
      ...baseMsgPrepareStartResponse,
    } as MsgPrepareStartResponse;
    return message;
  },

  toJSON(_: MsgPrepareStartResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgPrepareStartResponse>
  ): MsgPrepareStartResponse {
    const message = {
      ...baseMsgPrepareStartResponse,
    } as MsgPrepareStartResponse;
    return message;
  },
};

const baseMsgPrepareResult: object = { creator: "" };

export const MsgPrepareResult = {
  encode(message: MsgPrepareResult, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPrepareResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPrepareResult } as MsgPrepareResult;
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
    const message = { ...baseMsgPrepareResult } as MsgPrepareResult;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgPrepareResult): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPrepareResult>): MsgPrepareResult {
    const message = { ...baseMsgPrepareResult } as MsgPrepareResult;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgPrepareResultResponse: object = {};

export const MsgPrepareResultResponse = {
  encode(
    _: MsgPrepareResultResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgPrepareResultResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPrepareResultResponse,
    } as MsgPrepareResultResponse;
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
    const message = {
      ...baseMsgPrepareResultResponse,
    } as MsgPrepareResultResponse;
    return message;
  },

  toJSON(_: MsgPrepareResultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgPrepareResultResponse>
  ): MsgPrepareResultResponse {
    const message = {
      ...baseMsgPrepareResultResponse,
    } as MsgPrepareResultResponse;
    return message;
  },
};

const baseMsgInvasionStart: object = { creator: "", countryAddress: "" };

export const MsgInvasionStart = {
  encode(message: MsgInvasionStart, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.countryAddress !== "") {
      writer.uint32(18).string(message.countryAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInvasionStart {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInvasionStart } as MsgInvasionStart;
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
    const message = { ...baseMsgInvasionStart } as MsgInvasionStart;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.countryAddress !== undefined && object.countryAddress !== null) {
      message.countryAddress = String(object.countryAddress);
    } else {
      message.countryAddress = "";
    }
    return message;
  },

  toJSON(message: MsgInvasionStart): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.countryAddress !== undefined &&
      (obj.countryAddress = message.countryAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInvasionStart>): MsgInvasionStart {
    const message = { ...baseMsgInvasionStart } as MsgInvasionStart;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.countryAddress !== undefined && object.countryAddress !== null) {
      message.countryAddress = object.countryAddress;
    } else {
      message.countryAddress = "";
    }
    return message;
  },
};

const baseMsgInvasionStartResponse: object = {};

export const MsgInvasionStartResponse = {
  encode(
    _: MsgInvasionStartResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInvasionStartResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInvasionStartResponse,
    } as MsgInvasionStartResponse;
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
    const message = {
      ...baseMsgInvasionStartResponse,
    } as MsgInvasionStartResponse;
    return message;
  },

  toJSON(_: MsgInvasionStartResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgInvasionStartResponse>
  ): MsgInvasionStartResponse {
    const message = {
      ...baseMsgInvasionStartResponse,
    } as MsgInvasionStartResponse;
    return message;
  },
};

const baseMsgInvasionResult: object = { creator: "" };

export const MsgInvasionResult = {
  encode(message: MsgInvasionResult, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInvasionResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInvasionResult } as MsgInvasionResult;
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
    const message = { ...baseMsgInvasionResult } as MsgInvasionResult;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgInvasionResult): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInvasionResult>): MsgInvasionResult {
    const message = { ...baseMsgInvasionResult } as MsgInvasionResult;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgInvasionResultResponse: object = {};

export const MsgInvasionResultResponse = {
  encode(
    _: MsgInvasionResultResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInvasionResultResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInvasionResultResponse,
    } as MsgInvasionResultResponse;
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
    const message = {
      ...baseMsgInvasionResultResponse,
    } as MsgInvasionResultResponse;
    return message;
  },

  toJSON(_: MsgInvasionResultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgInvasionResultResponse>
  ): MsgInvasionResultResponse {
    const message = {
      ...baseMsgInvasionResultResponse,
    } as MsgInvasionResultResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  FundCountry(request: MsgFundCountry): Promise<MsgFundCountryResponse>;
  BelongContry(request: MsgBelongContry): Promise<MsgBelongContryResponse>;
  PrepareStart(request: MsgPrepareStart): Promise<MsgPrepareStartResponse>;
  PrepareResult(request: MsgPrepareResult): Promise<MsgPrepareResultResponse>;
  InvasionStart(request: MsgInvasionStart): Promise<MsgInvasionStartResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  InvasionResult(
    request: MsgInvasionResult
  ): Promise<MsgInvasionResultResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  FundCountry(request: MsgFundCountry): Promise<MsgFundCountryResponse> {
    const data = MsgFundCountry.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "FundCountry",
      data
    );
    return promise.then((data) =>
      MsgFundCountryResponse.decode(new Reader(data))
    );
  }

  BelongContry(request: MsgBelongContry): Promise<MsgBelongContryResponse> {
    const data = MsgBelongContry.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "BelongContry",
      data
    );
    return promise.then((data) =>
      MsgBelongContryResponse.decode(new Reader(data))
    );
  }

  PrepareStart(request: MsgPrepareStart): Promise<MsgPrepareStartResponse> {
    const data = MsgPrepareStart.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "PrepareStart",
      data
    );
    return promise.then((data) =>
      MsgPrepareStartResponse.decode(new Reader(data))
    );
  }

  PrepareResult(request: MsgPrepareResult): Promise<MsgPrepareResultResponse> {
    const data = MsgPrepareResult.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "PrepareResult",
      data
    );
    return promise.then((data) =>
      MsgPrepareResultResponse.decode(new Reader(data))
    );
  }

  InvasionStart(request: MsgInvasionStart): Promise<MsgInvasionStartResponse> {
    const data = MsgInvasionStart.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "InvasionStart",
      data
    );
    return promise.then((data) =>
      MsgInvasionStartResponse.decode(new Reader(data))
    );
  }

  InvasionResult(
    request: MsgInvasionResult
  ): Promise<MsgInvasionResultResponse> {
    const data = MsgInvasionResult.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "InvasionResult",
      data
    );
    return promise.then((data) =>
      MsgInvasionResultResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
