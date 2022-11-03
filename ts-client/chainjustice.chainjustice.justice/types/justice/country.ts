/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "chainjustice.chainjustice.justice";

export interface Country {
  index: string;
  address: string;
  food: string;
  nmembers: string;
}

const baseCountry: object = { index: "", address: "", food: "", nmembers: "" };

export const Country = {
  encode(message: Country, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.food !== "") {
      writer.uint32(26).string(message.food);
    }
    if (message.nmembers !== "") {
      writer.uint32(34).string(message.nmembers);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Country {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCountry } as Country;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.food = reader.string();
          break;
        case 4:
          message.nmembers = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Country {
    const message = { ...baseCountry } as Country;
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
    if (object.nmembers !== undefined && object.nmembers !== null) {
      message.nmembers = String(object.nmembers);
    } else {
      message.nmembers = "";
    }
    return message;
  },

  toJSON(message: Country): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.address !== undefined && (obj.address = message.address);
    message.food !== undefined && (obj.food = message.food);
    message.nmembers !== undefined && (obj.nmembers = message.nmembers);
    return obj;
  },

  fromPartial(object: DeepPartial<Country>): Country {
    const message = { ...baseCountry } as Country;
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
    if (object.nmembers !== undefined && object.nmembers !== null) {
      message.nmembers = object.nmembers;
    } else {
      message.nmembers = "";
    }
    return message;
  },
};

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
