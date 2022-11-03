/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "chainjustice.chainjustice.justice";

export interface Country {
  index: string;
  address: string;
  food: string;
  nmembers: string;
}

function createBaseCountry(): Country {
  return { index: "", address: "", food: "", nmembers: "" };
}

export const Country = {
  encode(message: Country, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Country {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountry();
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
    return {
      index: isSet(object.index) ? String(object.index) : "",
      address: isSet(object.address) ? String(object.address) : "",
      food: isSet(object.food) ? String(object.food) : "",
      nmembers: isSet(object.nmembers) ? String(object.nmembers) : "",
    };
  },

  toJSON(message: Country): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.address !== undefined && (obj.address = message.address);
    message.food !== undefined && (obj.food = message.food);
    message.nmembers !== undefined && (obj.nmembers = message.nmembers);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Country>, I>>(object: I): Country {
    const message = createBaseCountry();
    message.index = object.index ?? "";
    message.address = object.address ?? "";
    message.food = object.food ?? "";
    message.nmembers = object.nmembers ?? "";
    return message;
  },
};

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
