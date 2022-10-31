/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../justice/params";
import { Belonging } from "../justice/belonging";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Country } from "../justice/country";
import { Prepare } from "../justice/prepare";

export const protobufPackage = "chainjustice.chainjustice.justice";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetBelongingRequest: object = { index: "" };

export const QueryGetBelongingRequest = {
  encode(
    message: QueryGetBelongingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBelongingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBelongingRequest,
    } as QueryGetBelongingRequest;
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
    const message = {
      ...baseQueryGetBelongingRequest,
    } as QueryGetBelongingRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetBelongingRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBelongingRequest>
  ): QueryGetBelongingRequest {
    const message = {
      ...baseQueryGetBelongingRequest,
    } as QueryGetBelongingRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetBelongingResponse: object = {};

export const QueryGetBelongingResponse = {
  encode(
    message: QueryGetBelongingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.belonging !== undefined) {
      Belonging.encode(message.belonging, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBelongingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBelongingResponse,
    } as QueryGetBelongingResponse;
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
    const message = {
      ...baseQueryGetBelongingResponse,
    } as QueryGetBelongingResponse;
    if (object.belonging !== undefined && object.belonging !== null) {
      message.belonging = Belonging.fromJSON(object.belonging);
    } else {
      message.belonging = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBelongingResponse): unknown {
    const obj: any = {};
    message.belonging !== undefined &&
      (obj.belonging = message.belonging
        ? Belonging.toJSON(message.belonging)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBelongingResponse>
  ): QueryGetBelongingResponse {
    const message = {
      ...baseQueryGetBelongingResponse,
    } as QueryGetBelongingResponse;
    if (object.belonging !== undefined && object.belonging !== null) {
      message.belonging = Belonging.fromPartial(object.belonging);
    } else {
      message.belonging = undefined;
    }
    return message;
  },
};

const baseQueryAllBelongingRequest: object = {};

export const QueryAllBelongingRequest = {
  encode(
    message: QueryAllBelongingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBelongingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBelongingRequest,
    } as QueryAllBelongingRequest;
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
    const message = {
      ...baseQueryAllBelongingRequest,
    } as QueryAllBelongingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBelongingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBelongingRequest>
  ): QueryAllBelongingRequest {
    const message = {
      ...baseQueryAllBelongingRequest,
    } as QueryAllBelongingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBelongingResponse: object = {};

export const QueryAllBelongingResponse = {
  encode(
    message: QueryAllBelongingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.belonging) {
      Belonging.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBelongingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBelongingResponse,
    } as QueryAllBelongingResponse;
    message.belonging = [];
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
    const message = {
      ...baseQueryAllBelongingResponse,
    } as QueryAllBelongingResponse;
    message.belonging = [];
    if (object.belonging !== undefined && object.belonging !== null) {
      for (const e of object.belonging) {
        message.belonging.push(Belonging.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBelongingResponse): unknown {
    const obj: any = {};
    if (message.belonging) {
      obj.belonging = message.belonging.map((e) =>
        e ? Belonging.toJSON(e) : undefined
      );
    } else {
      obj.belonging = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBelongingResponse>
  ): QueryAllBelongingResponse {
    const message = {
      ...baseQueryAllBelongingResponse,
    } as QueryAllBelongingResponse;
    message.belonging = [];
    if (object.belonging !== undefined && object.belonging !== null) {
      for (const e of object.belonging) {
        message.belonging.push(Belonging.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCountryRequest: object = { index: "" };

export const QueryGetCountryRequest = {
  encode(
    message: QueryGetCountryRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCountryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCountryRequest } as QueryGetCountryRequest;
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
    const message = { ...baseQueryGetCountryRequest } as QueryGetCountryRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetCountryRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCountryRequest>
  ): QueryGetCountryRequest {
    const message = { ...baseQueryGetCountryRequest } as QueryGetCountryRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetCountryResponse: object = {};

export const QueryGetCountryResponse = {
  encode(
    message: QueryGetCountryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.country !== undefined) {
      Country.encode(message.country, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCountryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCountryResponse,
    } as QueryGetCountryResponse;
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
    const message = {
      ...baseQueryGetCountryResponse,
    } as QueryGetCountryResponse;
    if (object.country !== undefined && object.country !== null) {
      message.country = Country.fromJSON(object.country);
    } else {
      message.country = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCountryResponse): unknown {
    const obj: any = {};
    message.country !== undefined &&
      (obj.country = message.country
        ? Country.toJSON(message.country)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCountryResponse>
  ): QueryGetCountryResponse {
    const message = {
      ...baseQueryGetCountryResponse,
    } as QueryGetCountryResponse;
    if (object.country !== undefined && object.country !== null) {
      message.country = Country.fromPartial(object.country);
    } else {
      message.country = undefined;
    }
    return message;
  },
};

const baseQueryAllCountryRequest: object = {};

export const QueryAllCountryRequest = {
  encode(
    message: QueryAllCountryRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCountryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCountryRequest } as QueryAllCountryRequest;
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
    const message = { ...baseQueryAllCountryRequest } as QueryAllCountryRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCountryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCountryRequest>
  ): QueryAllCountryRequest {
    const message = { ...baseQueryAllCountryRequest } as QueryAllCountryRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCountryResponse: object = {};

export const QueryAllCountryResponse = {
  encode(
    message: QueryAllCountryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.country) {
      Country.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCountryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCountryResponse,
    } as QueryAllCountryResponse;
    message.country = [];
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
    const message = {
      ...baseQueryAllCountryResponse,
    } as QueryAllCountryResponse;
    message.country = [];
    if (object.country !== undefined && object.country !== null) {
      for (const e of object.country) {
        message.country.push(Country.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCountryResponse): unknown {
    const obj: any = {};
    if (message.country) {
      obj.country = message.country.map((e) =>
        e ? Country.toJSON(e) : undefined
      );
    } else {
      obj.country = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCountryResponse>
  ): QueryAllCountryResponse {
    const message = {
      ...baseQueryAllCountryResponse,
    } as QueryAllCountryResponse;
    message.country = [];
    if (object.country !== undefined && object.country !== null) {
      for (const e of object.country) {
        message.country.push(Country.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPrepareRequest: object = { id: 0 };

export const QueryGetPrepareRequest = {
  encode(
    message: QueryGetPrepareRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPrepareRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPrepareRequest } as QueryGetPrepareRequest;
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
    const message = { ...baseQueryGetPrepareRequest } as QueryGetPrepareRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPrepareRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPrepareRequest>
  ): QueryGetPrepareRequest {
    const message = { ...baseQueryGetPrepareRequest } as QueryGetPrepareRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPrepareResponse: object = {};

export const QueryGetPrepareResponse = {
  encode(
    message: QueryGetPrepareResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Prepare !== undefined) {
      Prepare.encode(message.Prepare, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPrepareResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPrepareResponse,
    } as QueryGetPrepareResponse;
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
    const message = {
      ...baseQueryGetPrepareResponse,
    } as QueryGetPrepareResponse;
    if (object.Prepare !== undefined && object.Prepare !== null) {
      message.Prepare = Prepare.fromJSON(object.Prepare);
    } else {
      message.Prepare = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPrepareResponse): unknown {
    const obj: any = {};
    message.Prepare !== undefined &&
      (obj.Prepare = message.Prepare
        ? Prepare.toJSON(message.Prepare)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPrepareResponse>
  ): QueryGetPrepareResponse {
    const message = {
      ...baseQueryGetPrepareResponse,
    } as QueryGetPrepareResponse;
    if (object.Prepare !== undefined && object.Prepare !== null) {
      message.Prepare = Prepare.fromPartial(object.Prepare);
    } else {
      message.Prepare = undefined;
    }
    return message;
  },
};

const baseQueryAllPrepareRequest: object = {};

export const QueryAllPrepareRequest = {
  encode(
    message: QueryAllPrepareRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPrepareRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPrepareRequest } as QueryAllPrepareRequest;
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
    const message = { ...baseQueryAllPrepareRequest } as QueryAllPrepareRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPrepareRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPrepareRequest>
  ): QueryAllPrepareRequest {
    const message = { ...baseQueryAllPrepareRequest } as QueryAllPrepareRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPrepareResponse: object = {};

export const QueryAllPrepareResponse = {
  encode(
    message: QueryAllPrepareResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Prepare) {
      Prepare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPrepareResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPrepareResponse,
    } as QueryAllPrepareResponse;
    message.Prepare = [];
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
    const message = {
      ...baseQueryAllPrepareResponse,
    } as QueryAllPrepareResponse;
    message.Prepare = [];
    if (object.Prepare !== undefined && object.Prepare !== null) {
      for (const e of object.Prepare) {
        message.Prepare.push(Prepare.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPrepareResponse): unknown {
    const obj: any = {};
    if (message.Prepare) {
      obj.Prepare = message.Prepare.map((e) =>
        e ? Prepare.toJSON(e) : undefined
      );
    } else {
      obj.Prepare = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPrepareResponse>
  ): QueryAllPrepareResponse {
    const message = {
      ...baseQueryAllPrepareResponse,
    } as QueryAllPrepareResponse;
    message.Prepare = [];
    if (object.Prepare !== undefined && object.Prepare !== null) {
      for (const e of object.Prepare) {
        message.Prepare.push(Prepare.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Belonging by index. */
  Belonging(
    request: QueryGetBelongingRequest
  ): Promise<QueryGetBelongingResponse>;
  /** Queries a list of Belonging items. */
  BelongingAll(
    request: QueryAllBelongingRequest
  ): Promise<QueryAllBelongingResponse>;
  /** Queries a Country by index. */
  Country(request: QueryGetCountryRequest): Promise<QueryGetCountryResponse>;
  /** Queries a list of Country items. */
  CountryAll(request: QueryAllCountryRequest): Promise<QueryAllCountryResponse>;
  /** Queries a Prepare by id. */
  Prepare(request: QueryGetPrepareRequest): Promise<QueryGetPrepareResponse>;
  /** Queries a list of Prepare items. */
  PrepareAll(request: QueryAllPrepareRequest): Promise<QueryAllPrepareResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Belonging(
    request: QueryGetBelongingRequest
  ): Promise<QueryGetBelongingResponse> {
    const data = QueryGetBelongingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Query",
      "Belonging",
      data
    );
    return promise.then((data) =>
      QueryGetBelongingResponse.decode(new Reader(data))
    );
  }

  BelongingAll(
    request: QueryAllBelongingRequest
  ): Promise<QueryAllBelongingResponse> {
    const data = QueryAllBelongingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Query",
      "BelongingAll",
      data
    );
    return promise.then((data) =>
      QueryAllBelongingResponse.decode(new Reader(data))
    );
  }

  Country(request: QueryGetCountryRequest): Promise<QueryGetCountryResponse> {
    const data = QueryGetCountryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Query",
      "Country",
      data
    );
    return promise.then((data) =>
      QueryGetCountryResponse.decode(new Reader(data))
    );
  }

  CountryAll(
    request: QueryAllCountryRequest
  ): Promise<QueryAllCountryResponse> {
    const data = QueryAllCountryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Query",
      "CountryAll",
      data
    );
    return promise.then((data) =>
      QueryAllCountryResponse.decode(new Reader(data))
    );
  }

  Prepare(request: QueryGetPrepareRequest): Promise<QueryGetPrepareResponse> {
    const data = QueryGetPrepareRequest.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Query",
      "Prepare",
      data
    );
    return promise.then((data) =>
      QueryGetPrepareResponse.decode(new Reader(data))
    );
  }

  PrepareAll(
    request: QueryAllPrepareRequest
  ): Promise<QueryAllPrepareResponse> {
    const data = QueryAllPrepareRequest.encode(request).finish();
    const promise = this.rpc.request(
      "chainjustice.chainjustice.justice.Query",
      "PrepareAll",
      data
    );
    return promise.then((data) =>
      QueryAllPrepareResponse.decode(new Reader(data))
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
