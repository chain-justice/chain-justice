/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Belonging } from "./belonging";
import { Country } from "./country";
import { Invasion } from "./invasion";
import { Params } from "./params";
import { Prepare } from "./prepare";

export const protobufPackage = "chainjustice.chainjustice.justice";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetBelongingRequest {
  index: string;
}

export interface QueryGetBelongingResponse {
  belonging: Belonging | undefined;
}

export interface QueryAllBelongingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBelongingResponse {
  belonging: Belonging[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCountryRequest {
  index: string;
}

export interface QueryGetCountryResponse {
  country: Country | undefined;
}

export interface QueryAllCountryRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCountryResponse {
  country: Country[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPrepareRequest {
  id: number;
}

export interface QueryGetPrepareResponse {
  Prepare: Prepare | undefined;
}

export interface QueryAllPrepareRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPrepareResponse {
  Prepare: Prepare[];
  pagination: PageResponse | undefined;
}

export interface QueryGetInvasionRequest {
  id: number;
}

export interface QueryGetInvasionResponse {
  Invasion: Invasion | undefined;
}

export interface QueryAllInvasionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllInvasionResponse {
  Invasion: Invasion[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetBelongingRequest(): QueryGetBelongingRequest {
  return { index: "" };
}

export const QueryGetBelongingRequest = {
  encode(message: QueryGetBelongingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBelongingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBelongingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBelongingRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetBelongingRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBelongingRequest>, I>>(object: I): QueryGetBelongingRequest {
    const message = createBaseQueryGetBelongingRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetBelongingResponse(): QueryGetBelongingResponse {
  return { belonging: undefined };
}

export const QueryGetBelongingResponse = {
  encode(message: QueryGetBelongingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.belonging !== undefined) {
      Belonging.encode(message.belonging, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBelongingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBelongingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.belonging = Belonging.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBelongingResponse {
    return { belonging: isSet(object.belonging) ? Belonging.fromJSON(object.belonging) : undefined };
  },

  toJSON(message: QueryGetBelongingResponse): unknown {
    const obj: any = {};
    message.belonging !== undefined
      && (obj.belonging = message.belonging ? Belonging.toJSON(message.belonging) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBelongingResponse>, I>>(object: I): QueryGetBelongingResponse {
    const message = createBaseQueryGetBelongingResponse();
    message.belonging = (object.belonging !== undefined && object.belonging !== null)
      ? Belonging.fromPartial(object.belonging)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBelongingRequest(): QueryAllBelongingRequest {
  return { pagination: undefined };
}

export const QueryAllBelongingRequest = {
  encode(message: QueryAllBelongingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBelongingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBelongingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBelongingRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllBelongingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBelongingRequest>, I>>(object: I): QueryAllBelongingRequest {
    const message = createBaseQueryAllBelongingRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBelongingResponse(): QueryAllBelongingResponse {
  return { belonging: [], pagination: undefined };
}

export const QueryAllBelongingResponse = {
  encode(message: QueryAllBelongingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.belonging) {
      Belonging.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBelongingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBelongingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.belonging.push(Belonging.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBelongingResponse {
    return {
      belonging: Array.isArray(object?.belonging) ? object.belonging.map((e: any) => Belonging.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBelongingResponse): unknown {
    const obj: any = {};
    if (message.belonging) {
      obj.belonging = message.belonging.map((e) => e ? Belonging.toJSON(e) : undefined);
    } else {
      obj.belonging = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBelongingResponse>, I>>(object: I): QueryAllBelongingResponse {
    const message = createBaseQueryAllBelongingResponse();
    message.belonging = object.belonging?.map((e) => Belonging.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetCountryRequest(): QueryGetCountryRequest {
  return { index: "" };
}

export const QueryGetCountryRequest = {
  encode(message: QueryGetCountryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCountryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCountryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCountryRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetCountryRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCountryRequest>, I>>(object: I): QueryGetCountryRequest {
    const message = createBaseQueryGetCountryRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetCountryResponse(): QueryGetCountryResponse {
  return { country: undefined };
}

export const QueryGetCountryResponse = {
  encode(message: QueryGetCountryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.country !== undefined) {
      Country.encode(message.country, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCountryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCountryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.country = Country.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCountryResponse {
    return { country: isSet(object.country) ? Country.fromJSON(object.country) : undefined };
  },

  toJSON(message: QueryGetCountryResponse): unknown {
    const obj: any = {};
    message.country !== undefined && (obj.country = message.country ? Country.toJSON(message.country) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCountryResponse>, I>>(object: I): QueryGetCountryResponse {
    const message = createBaseQueryGetCountryResponse();
    message.country = (object.country !== undefined && object.country !== null)
      ? Country.fromPartial(object.country)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCountryRequest(): QueryAllCountryRequest {
  return { pagination: undefined };
}

export const QueryAllCountryRequest = {
  encode(message: QueryAllCountryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCountryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCountryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCountryRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllCountryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCountryRequest>, I>>(object: I): QueryAllCountryRequest {
    const message = createBaseQueryAllCountryRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCountryResponse(): QueryAllCountryResponse {
  return { country: [], pagination: undefined };
}

export const QueryAllCountryResponse = {
  encode(message: QueryAllCountryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.country) {
      Country.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCountryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCountryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.country.push(Country.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCountryResponse {
    return {
      country: Array.isArray(object?.country) ? object.country.map((e: any) => Country.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllCountryResponse): unknown {
    const obj: any = {};
    if (message.country) {
      obj.country = message.country.map((e) => e ? Country.toJSON(e) : undefined);
    } else {
      obj.country = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCountryResponse>, I>>(object: I): QueryAllCountryResponse {
    const message = createBaseQueryAllCountryResponse();
    message.country = object.country?.map((e) => Country.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPrepareRequest(): QueryGetPrepareRequest {
  return { id: 0 };
}

export const QueryGetPrepareRequest = {
  encode(message: QueryGetPrepareRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPrepareRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPrepareRequest();
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

  fromJSON(object: any): QueryGetPrepareRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetPrepareRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPrepareRequest>, I>>(object: I): QueryGetPrepareRequest {
    const message = createBaseQueryGetPrepareRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetPrepareResponse(): QueryGetPrepareResponse {
  return { Prepare: undefined };
}

export const QueryGetPrepareResponse = {
  encode(message: QueryGetPrepareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Prepare !== undefined) {
      Prepare.encode(message.Prepare, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPrepareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPrepareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Prepare = Prepare.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPrepareResponse {
    return { Prepare: isSet(object.Prepare) ? Prepare.fromJSON(object.Prepare) : undefined };
  },

  toJSON(message: QueryGetPrepareResponse): unknown {
    const obj: any = {};
    message.Prepare !== undefined && (obj.Prepare = message.Prepare ? Prepare.toJSON(message.Prepare) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPrepareResponse>, I>>(object: I): QueryGetPrepareResponse {
    const message = createBaseQueryGetPrepareResponse();
    message.Prepare = (object.Prepare !== undefined && object.Prepare !== null)
      ? Prepare.fromPartial(object.Prepare)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPrepareRequest(): QueryAllPrepareRequest {
  return { pagination: undefined };
}

export const QueryAllPrepareRequest = {
  encode(message: QueryAllPrepareRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPrepareRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPrepareRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPrepareRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPrepareRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPrepareRequest>, I>>(object: I): QueryAllPrepareRequest {
    const message = createBaseQueryAllPrepareRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPrepareResponse(): QueryAllPrepareResponse {
  return { Prepare: [], pagination: undefined };
}

export const QueryAllPrepareResponse = {
  encode(message: QueryAllPrepareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Prepare) {
      Prepare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPrepareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPrepareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Prepare.push(Prepare.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPrepareResponse {
    return {
      Prepare: Array.isArray(object?.Prepare) ? object.Prepare.map((e: any) => Prepare.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPrepareResponse): unknown {
    const obj: any = {};
    if (message.Prepare) {
      obj.Prepare = message.Prepare.map((e) => e ? Prepare.toJSON(e) : undefined);
    } else {
      obj.Prepare = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPrepareResponse>, I>>(object: I): QueryAllPrepareResponse {
    const message = createBaseQueryAllPrepareResponse();
    message.Prepare = object.Prepare?.map((e) => Prepare.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetInvasionRequest(): QueryGetInvasionRequest {
  return { id: 0 };
}

export const QueryGetInvasionRequest = {
  encode(message: QueryGetInvasionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInvasionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInvasionRequest();
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

  fromJSON(object: any): QueryGetInvasionRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetInvasionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetInvasionRequest>, I>>(object: I): QueryGetInvasionRequest {
    const message = createBaseQueryGetInvasionRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetInvasionResponse(): QueryGetInvasionResponse {
  return { Invasion: undefined };
}

export const QueryGetInvasionResponse = {
  encode(message: QueryGetInvasionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Invasion !== undefined) {
      Invasion.encode(message.Invasion, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInvasionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInvasionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Invasion = Invasion.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInvasionResponse {
    return { Invasion: isSet(object.Invasion) ? Invasion.fromJSON(object.Invasion) : undefined };
  },

  toJSON(message: QueryGetInvasionResponse): unknown {
    const obj: any = {};
    message.Invasion !== undefined && (obj.Invasion = message.Invasion ? Invasion.toJSON(message.Invasion) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetInvasionResponse>, I>>(object: I): QueryGetInvasionResponse {
    const message = createBaseQueryGetInvasionResponse();
    message.Invasion = (object.Invasion !== undefined && object.Invasion !== null)
      ? Invasion.fromPartial(object.Invasion)
      : undefined;
    return message;
  },
};

function createBaseQueryAllInvasionRequest(): QueryAllInvasionRequest {
  return { pagination: undefined };
}

export const QueryAllInvasionRequest = {
  encode(message: QueryAllInvasionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInvasionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInvasionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllInvasionRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllInvasionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllInvasionRequest>, I>>(object: I): QueryAllInvasionRequest {
    const message = createBaseQueryAllInvasionRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllInvasionResponse(): QueryAllInvasionResponse {
  return { Invasion: [], pagination: undefined };
}

export const QueryAllInvasionResponse = {
  encode(message: QueryAllInvasionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Invasion) {
      Invasion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInvasionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInvasionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Invasion.push(Invasion.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllInvasionResponse {
    return {
      Invasion: Array.isArray(object?.Invasion) ? object.Invasion.map((e: any) => Invasion.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllInvasionResponse): unknown {
    const obj: any = {};
    if (message.Invasion) {
      obj.Invasion = message.Invasion.map((e) => e ? Invasion.toJSON(e) : undefined);
    } else {
      obj.Invasion = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllInvasionResponse>, I>>(object: I): QueryAllInvasionResponse {
    const message = createBaseQueryAllInvasionResponse();
    message.Invasion = object.Invasion?.map((e) => Invasion.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Belonging by index. */
  Belonging(request: QueryGetBelongingRequest): Promise<QueryGetBelongingResponse>;
  /** Queries a list of Belonging items. */
  BelongingAll(request: QueryAllBelongingRequest): Promise<QueryAllBelongingResponse>;
  /** Queries a Country by index. */
  Country(request: QueryGetCountryRequest): Promise<QueryGetCountryResponse>;
  /** Queries a list of Country items. */
  CountryAll(request: QueryAllCountryRequest): Promise<QueryAllCountryResponse>;
  /** Queries a Prepare by id. */
  Prepare(request: QueryGetPrepareRequest): Promise<QueryGetPrepareResponse>;
  /** Queries a list of Prepare items. */
  PrepareAll(request: QueryAllPrepareRequest): Promise<QueryAllPrepareResponse>;
  /** Queries a Invasion by id. */
  Invasion(request: QueryGetInvasionRequest): Promise<QueryGetInvasionResponse>;
  /** Queries a list of Invasion items. */
  InvasionAll(request: QueryAllInvasionRequest): Promise<QueryAllInvasionResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Belonging = this.Belonging.bind(this);
    this.BelongingAll = this.BelongingAll.bind(this);
    this.Country = this.Country.bind(this);
    this.CountryAll = this.CountryAll.bind(this);
    this.Prepare = this.Prepare.bind(this);
    this.PrepareAll = this.PrepareAll.bind(this);
    this.Invasion = this.Invasion.bind(this);
    this.InvasionAll = this.InvasionAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Belonging(request: QueryGetBelongingRequest): Promise<QueryGetBelongingResponse> {
    const data = QueryGetBelongingRequest.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Query", "Belonging", data);
    return promise.then((data) => QueryGetBelongingResponse.decode(new _m0.Reader(data)));
  }

  BelongingAll(request: QueryAllBelongingRequest): Promise<QueryAllBelongingResponse> {
    const data = QueryAllBelongingRequest.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Query", "BelongingAll", data);
    return promise.then((data) => QueryAllBelongingResponse.decode(new _m0.Reader(data)));
  }

  Country(request: QueryGetCountryRequest): Promise<QueryGetCountryResponse> {
    const data = QueryGetCountryRequest.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Query", "Country", data);
    return promise.then((data) => QueryGetCountryResponse.decode(new _m0.Reader(data)));
  }

  CountryAll(request: QueryAllCountryRequest): Promise<QueryAllCountryResponse> {
    const data = QueryAllCountryRequest.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Query", "CountryAll", data);
    return promise.then((data) => QueryAllCountryResponse.decode(new _m0.Reader(data)));
  }

  Prepare(request: QueryGetPrepareRequest): Promise<QueryGetPrepareResponse> {
    const data = QueryGetPrepareRequest.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Query", "Prepare", data);
    return promise.then((data) => QueryGetPrepareResponse.decode(new _m0.Reader(data)));
  }

  PrepareAll(request: QueryAllPrepareRequest): Promise<QueryAllPrepareResponse> {
    const data = QueryAllPrepareRequest.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Query", "PrepareAll", data);
    return promise.then((data) => QueryAllPrepareResponse.decode(new _m0.Reader(data)));
  }

  Invasion(request: QueryGetInvasionRequest): Promise<QueryGetInvasionResponse> {
    const data = QueryGetInvasionRequest.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Query", "Invasion", data);
    return promise.then((data) => QueryGetInvasionResponse.decode(new _m0.Reader(data)));
  }

  InvasionAll(request: QueryAllInvasionRequest): Promise<QueryAllInvasionResponse> {
    const data = QueryAllInvasionRequest.encode(request).finish();
    const promise = this.rpc.request("chainjustice.chainjustice.justice.Query", "InvasionAll", data);
    return promise.then((data) => QueryAllInvasionResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
