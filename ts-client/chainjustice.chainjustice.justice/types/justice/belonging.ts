/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "chainjustice.chainjustice.justice";

export interface Belonging {
  index: string;
  address: string;
  country: string;
}

function createBaseBelonging(): Belonging {
  return { index: "", address: "", country: "" };
}

export const Belonging = {
  encode(message: Belonging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.country !== "") {
      writer.uint32(26).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Belonging {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBelonging();
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
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Belonging {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      address: isSet(object.address) ? String(object.address) : "",
      country: isSet(object.country) ? String(object.country) : "",
    };
  },

  toJSON(message: Belonging): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.address !== undefined && (obj.address = message.address);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Belonging>, I>>(object: I): Belonging {
    const message = createBaseBelonging();
    message.index = object.index ?? "";
    message.address = object.address ?? "";
    message.country = object.country ?? "";
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
