/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "chainjustice.chainjustice.justice";

export interface MsgCreateBelonging {
  creator: string;
  index: string;
  address: string;
  country: string;
}

export interface MsgCreateBelongingResponse {}

export interface MsgUpdateBelonging {
  creator: string;
  index: string;
  address: string;
  country: string;
}

export interface MsgUpdateBelongingResponse {}

export interface MsgDeleteBelonging {
  creator: string;
  index: string;
}

export interface MsgDeleteBelongingResponse {}

export interface MsgCreateCountry {
  creator: string;
  index: string;
  address: string;
  food: string;
}

export interface MsgCreateCountryResponse {}

export interface MsgUpdateCountry {
  creator: string;
  index: string;
  address: string;
  food: string;
}

export interface MsgUpdateCountryResponse {}

export interface MsgDeleteCountry {
  creator: string;
  index: string;
}

export interface MsgDeleteCountryResponse {}

const baseMsgCreateBelonging: object = {
  creator: "",
  index: "",
  address: "",
  country: "",
};

export const MsgCreateBelonging = {
  encode(
    message: MsgCreateBelonging,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBelonging {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBelonging } as MsgCreateBelonging;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBelonging {
    const message = { ...baseMsgCreateBelonging } as MsgCreateBelonging;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    return message;
  },

  toJSON(message: MsgCreateBelonging): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.address !== undefined && (obj.address = message.address);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBelonging>): MsgCreateBelonging {
    const message = { ...baseMsgCreateBelonging } as MsgCreateBelonging;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    return message;
  },
};

const baseMsgCreateBelongingResponse: object = {};

export const MsgCreateBelongingResponse = {
  encode(
    _: MsgCreateBelongingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateBelongingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBelongingResponse,
    } as MsgCreateBelongingResponse;
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

  fromJSON(_: any): MsgCreateBelongingResponse {
    const message = {
      ...baseMsgCreateBelongingResponse,
    } as MsgCreateBelongingResponse;
    return message;
  },

  toJSON(_: MsgCreateBelongingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateBelongingResponse>
  ): MsgCreateBelongingResponse {
    const message = {
      ...baseMsgCreateBelongingResponse,
    } as MsgCreateBelongingResponse;
    return message;
  },
};

const baseMsgUpdateBelonging: object = {
  creator: "",
  index: "",
  address: "",
  country: "",
};

export const MsgUpdateBelonging = {
  encode(
    message: MsgUpdateBelonging,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBelonging {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBelonging } as MsgUpdateBelonging;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBelonging {
    const message = { ...baseMsgUpdateBelonging } as MsgUpdateBelonging;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBelonging): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.address !== undefined && (obj.address = message.address);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBelonging>): MsgUpdateBelonging {
    const message = { ...baseMsgUpdateBelonging } as MsgUpdateBelonging;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    return message;
  },
};

const baseMsgUpdateBelongingResponse: object = {};

export const MsgUpdateBelongingResponse = {
  encode(
    _: MsgUpdateBelongingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateBelongingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBelongingResponse,
    } as MsgUpdateBelongingResponse;
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

  fromJSON(_: any): MsgUpdateBelongingResponse {
    const message = {
      ...baseMsgUpdateBelongingResponse,
    } as MsgUpdateBelongingResponse;
    return message;
  },

  toJSON(_: MsgUpdateBelongingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateBelongingResponse>
  ): MsgUpdateBelongingResponse {
    const message = {
      ...baseMsgUpdateBelongingResponse,
    } as MsgUpdateBelongingResponse;
    return message;
  },
};

const baseMsgDeleteBelonging: object = { creator: "", index: "" };

export const MsgDeleteBelonging = {
  encode(
    message: MsgDeleteBelonging,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBelonging {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBelonging } as MsgDeleteBelonging;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBelonging {
    const message = { ...baseMsgDeleteBelonging } as MsgDeleteBelonging;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteBelonging): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBelonging>): MsgDeleteBelonging {
    const message = { ...baseMsgDeleteBelonging } as MsgDeleteBelonging;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteBelongingResponse: object = {};

export const MsgDeleteBelongingResponse = {
  encode(
    _: MsgDeleteBelongingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteBelongingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBelongingResponse,
    } as MsgDeleteBelongingResponse;
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

  fromJSON(_: any): MsgDeleteBelongingResponse {
    const message = {
      ...baseMsgDeleteBelongingResponse,
    } as MsgDeleteBelongingResponse;
    return message;
  },

  toJSON(_: MsgDeleteBelongingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteBelongingResponse>
  ): MsgDeleteBelongingResponse {
    const message = {
      ...baseMsgDeleteBelongingResponse,
    } as MsgDeleteBelongingResponse;
    return message;
  },
};

const baseMsgCreateCountry: object = {
  creator: "",
  index: "",
  address: "",
  food: "",
};

export const MsgCreateCountry = {
  encode(message: MsgCreateCountry, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.food !== "") {
      writer.uint32(34).string(message.food);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCountry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCountry } as MsgCreateCountry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.food = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCountry {
    const message = { ...baseMsgCreateCountry } as MsgCreateCountry;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.food !== undefined && object.food !== null) {
      message.food = String(object.food);
    } else {
      message.food = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCountry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.address !== undefined && (obj.address = message.address);
    message.food !== undefined && (obj.food = message.food);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCountry>): MsgCreateCountry {
    const message = { ...baseMsgCreateCountry } as MsgCreateCountry;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.food !== undefined && object.food !== null) {
      message.food = object.food;
    } else {
      message.food = "";
    }
    return message;
  },
};

const baseMsgCreateCountryResponse: object = {};

export const MsgCreateCountryResponse = {
  encode(
    _: MsgCreateCountryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCountryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCountryResponse,
    } as MsgCreateCountryResponse;
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

  fromJSON(_: any): MsgCreateCountryResponse {
    const message = {
      ...baseMsgCreateCountryResponse,
    } as MsgCreateCountryResponse;
    return message;
  },

  toJSON(_: MsgCreateCountryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateCountryResponse>
  ): MsgCreateCountryResponse {
    const message = {
      ...baseMsgCreateCountryResponse,
    } as MsgCreateCountryResponse;
    return message;
  },
};

const baseMsgUpdateCountry: object = {
  creator: "",
  index: "",
  address: "",
  food: "",
};

export const MsgUpdateCountry = {
  encode(message: MsgUpdateCountry, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.food !== "") {
      writer.uint32(34).string(message.food);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCountry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCountry } as MsgUpdateCountry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.food = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCountry {
    const message = { ...baseMsgUpdateCountry } as MsgUpdateCountry;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.food !== undefined && object.food !== null) {
      message.food = String(object.food);
    } else {
      message.food = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCountry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.address !== undefined && (obj.address = message.address);
    message.food !== undefined && (obj.food = message.food);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCountry>): MsgUpdateCountry {
    const message = { ...baseMsgUpdateCountry } as MsgUpdateCountry;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.food !== undefined && object.food !== null) {
      message.food = object.food;
    } else {
      message.food = "";
    }
    return message;
  },
};

const baseMsgUpdateCountryResponse: object = {};

export const MsgUpdateCountryResponse = {
  encode(
    _: MsgUpdateCountryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCountryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCountryResponse,
    } as MsgUpdateCountryResponse;
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

  fromJSON(_: any): MsgUpdateCountryResponse {
    const message = {
      ...baseMsgUpdateCountryResponse,
    } as MsgUpdateCountryResponse;
    return message;
  },

  toJSON(_: MsgUpdateCountryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCountryResponse>
  ): MsgUpdateCountryResponse {
    const message = {
      ...baseMsgUpdateCountryResponse,
    } as MsgUpdateCountryResponse;
    return message;
  },
};

const baseMsgDeleteCountry: object = { creator: "", index: "" };

export const MsgDeleteCountry = {
  encode(message: MsgDeleteCountry, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCountry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCountry } as MsgDeleteCountry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCountry {
    const message = { ...baseMsgDeleteCountry } as MsgDeleteCountry;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteCountry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteCountry>): MsgDeleteCountry {
    const message = { ...baseMsgDeleteCountry } as MsgDeleteCountry;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteCountryResponse: object = {};

export const MsgDeleteCountryResponse = {
  encode(
    _: MsgDeleteCountryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCountryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCountryResponse,
    } as MsgDeleteCountryResponse;
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

  fromJSON(_: any): MsgDeleteCountryResponse {
    const message = {
      ...baseMsgDeleteCountryResponse,
    } as MsgDeleteCountryResponse;
    return message;
  },

  toJSON(_: MsgDeleteCountryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCountryResponse>
  ): MsgDeleteCountryResponse {
    const message = {
      ...baseMsgDeleteCountryResponse,
    } as MsgDeleteCountryResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateBelonging(
    request: MsgCreateBelonging
  ): Promise<MsgCreateBelongingResponse>;
  UpdateBelonging(
    request: MsgUpdateBelonging
  ): Promise<MsgUpdateBelongingResponse>;
  DeleteBelonging(
    request: MsgDeleteBelonging
  ): Promise<MsgDeleteBelongingResponse>;
  CreateCountry(request: MsgCreateCountry): Promise<MsgCreateCountryResponse>;
  UpdateCountry(request: MsgUpdateCountry): Promise<MsgUpdateCountryResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteCountry(request: MsgDeleteCountry): Promise<MsgDeleteCountryResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateBelonging(
    request: MsgCreateBelonging
  ): Promise<MsgCreateBelongingResponse> {
    const data = MsgCreateBelonging.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "CreateBelonging",
      data
    );
    return promise.then((data) =>
      MsgCreateBelongingResponse.decode(new Reader(data))
    );
  }

  UpdateBelonging(
    request: MsgUpdateBelonging
  ): Promise<MsgUpdateBelongingResponse> {
    const data = MsgUpdateBelonging.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "UpdateBelonging",
      data
    );
    return promise.then((data) =>
      MsgUpdateBelongingResponse.decode(new Reader(data))
    );
  }

  DeleteBelonging(
    request: MsgDeleteBelonging
  ): Promise<MsgDeleteBelongingResponse> {
    const data = MsgDeleteBelonging.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "DeleteBelonging",
      data
    );
    return promise.then((data) =>
      MsgDeleteBelongingResponse.decode(new Reader(data))
    );
  }

  CreateCountry(request: MsgCreateCountry): Promise<MsgCreateCountryResponse> {
    const data = MsgCreateCountry.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "CreateCountry",
      data
    );
    return promise.then((data) =>
      MsgCreateCountryResponse.decode(new Reader(data))
    );
  }

  UpdateCountry(request: MsgUpdateCountry): Promise<MsgUpdateCountryResponse> {
    const data = MsgUpdateCountry.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "UpdateCountry",
      data
    );
    return promise.then((data) =>
      MsgUpdateCountryResponse.decode(new Reader(data))
    );
  }

  DeleteCountry(request: MsgDeleteCountry): Promise<MsgDeleteCountryResponse> {
    const data = MsgDeleteCountry.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "DeleteCountry",
      data
    );
    return promise.then((data) =>
      MsgDeleteCountryResponse.decode(new Reader(data))
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
