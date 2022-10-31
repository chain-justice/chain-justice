/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

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

export interface MsgCreatePrepare {
  creator: string;
  address: string;
  requireBlockHeigt: string;
}

export interface MsgCreatePrepareResponse {
  id: number;
}

export interface MsgUpdatePrepare {
  creator: string;
  id: number;
  address: string;
  requireBlockHeigt: string;
}

export interface MsgUpdatePrepareResponse {}

export interface MsgDeletePrepare {
  creator: string;
  id: number;
}

export interface MsgDeletePrepareResponse {}

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

const baseMsgCreatePrepare: object = {
  creator: "",
  address: "",
  requireBlockHeigt: "",
};

export const MsgCreatePrepare = {
  encode(message: MsgCreatePrepare, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.requireBlockHeigt !== "") {
      writer.uint32(26).string(message.requireBlockHeigt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePrepare {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePrepare } as MsgCreatePrepare;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.requireBlockHeigt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePrepare {
    const message = { ...baseMsgCreatePrepare } as MsgCreatePrepare;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (
      object.requireBlockHeigt !== undefined &&
      object.requireBlockHeigt !== null
    ) {
      message.requireBlockHeigt = String(object.requireBlockHeigt);
    } else {
      message.requireBlockHeigt = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePrepare): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.requireBlockHeigt !== undefined &&
      (obj.requireBlockHeigt = message.requireBlockHeigt);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePrepare>): MsgCreatePrepare {
    const message = { ...baseMsgCreatePrepare } as MsgCreatePrepare;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (
      object.requireBlockHeigt !== undefined &&
      object.requireBlockHeigt !== null
    ) {
      message.requireBlockHeigt = object.requireBlockHeigt;
    } else {
      message.requireBlockHeigt = "";
    }
    return message;
  },
};

const baseMsgCreatePrepareResponse: object = { id: 0 };

export const MsgCreatePrepareResponse = {
  encode(
    message: MsgCreatePrepareResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePrepareResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePrepareResponse,
    } as MsgCreatePrepareResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePrepareResponse {
    const message = {
      ...baseMsgCreatePrepareResponse,
    } as MsgCreatePrepareResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePrepareResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePrepareResponse>
  ): MsgCreatePrepareResponse {
    const message = {
      ...baseMsgCreatePrepareResponse,
    } as MsgCreatePrepareResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePrepare: object = {
  creator: "",
  id: 0,
  address: "",
  requireBlockHeigt: "",
};

export const MsgUpdatePrepare = {
  encode(message: MsgUpdatePrepare, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.requireBlockHeigt !== "") {
      writer.uint32(34).string(message.requireBlockHeigt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePrepare {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePrepare } as MsgUpdatePrepare;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.requireBlockHeigt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePrepare {
    const message = { ...baseMsgUpdatePrepare } as MsgUpdatePrepare;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (
      object.requireBlockHeigt !== undefined &&
      object.requireBlockHeigt !== null
    ) {
      message.requireBlockHeigt = String(object.requireBlockHeigt);
    } else {
      message.requireBlockHeigt = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePrepare): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined && (obj.address = message.address);
    message.requireBlockHeigt !== undefined &&
      (obj.requireBlockHeigt = message.requireBlockHeigt);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePrepare>): MsgUpdatePrepare {
    const message = { ...baseMsgUpdatePrepare } as MsgUpdatePrepare;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (
      object.requireBlockHeigt !== undefined &&
      object.requireBlockHeigt !== null
    ) {
      message.requireBlockHeigt = object.requireBlockHeigt;
    } else {
      message.requireBlockHeigt = "";
    }
    return message;
  },
};

const baseMsgUpdatePrepareResponse: object = {};

export const MsgUpdatePrepareResponse = {
  encode(
    _: MsgUpdatePrepareResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePrepareResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePrepareResponse,
    } as MsgUpdatePrepareResponse;
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

  fromJSON(_: any): MsgUpdatePrepareResponse {
    const message = {
      ...baseMsgUpdatePrepareResponse,
    } as MsgUpdatePrepareResponse;
    return message;
  },

  toJSON(_: MsgUpdatePrepareResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePrepareResponse>
  ): MsgUpdatePrepareResponse {
    const message = {
      ...baseMsgUpdatePrepareResponse,
    } as MsgUpdatePrepareResponse;
    return message;
  },
};

const baseMsgDeletePrepare: object = { creator: "", id: 0 };

export const MsgDeletePrepare = {
  encode(message: MsgDeletePrepare, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePrepare {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePrepare } as MsgDeletePrepare;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePrepare {
    const message = { ...baseMsgDeletePrepare } as MsgDeletePrepare;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePrepare): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePrepare>): MsgDeletePrepare {
    const message = { ...baseMsgDeletePrepare } as MsgDeletePrepare;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeletePrepareResponse: object = {};

export const MsgDeletePrepareResponse = {
  encode(
    _: MsgDeletePrepareResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePrepareResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePrepareResponse,
    } as MsgDeletePrepareResponse;
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

  fromJSON(_: any): MsgDeletePrepareResponse {
    const message = {
      ...baseMsgDeletePrepareResponse,
    } as MsgDeletePrepareResponse;
    return message;
  },

  toJSON(_: MsgDeletePrepareResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePrepareResponse>
  ): MsgDeletePrepareResponse {
    const message = {
      ...baseMsgDeletePrepareResponse,
    } as MsgDeletePrepareResponse;
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
  DeleteCountry(request: MsgDeleteCountry): Promise<MsgDeleteCountryResponse>;
  CreatePrepare(request: MsgCreatePrepare): Promise<MsgCreatePrepareResponse>;
  UpdatePrepare(request: MsgUpdatePrepare): Promise<MsgUpdatePrepareResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeletePrepare(request: MsgDeletePrepare): Promise<MsgDeletePrepareResponse>;
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

  CreatePrepare(request: MsgCreatePrepare): Promise<MsgCreatePrepareResponse> {
    const data = MsgCreatePrepare.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "CreatePrepare",
      data
    );
    return promise.then((data) =>
      MsgCreatePrepareResponse.decode(new Reader(data))
    );
  }

  UpdatePrepare(request: MsgUpdatePrepare): Promise<MsgUpdatePrepareResponse> {
    const data = MsgUpdatePrepare.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "UpdatePrepare",
      data
    );
    return promise.then((data) =>
      MsgUpdatePrepareResponse.decode(new Reader(data))
    );
  }

  DeletePrepare(request: MsgDeletePrepare): Promise<MsgDeletePrepareResponse> {
    const data = MsgDeletePrepare.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Msg",
      "DeletePrepare",
      data
    );
    return promise.then((data) =>
      MsgDeletePrepareResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
