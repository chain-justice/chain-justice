package keeper

import (
	"context"

	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PrepareAll(c context.Context, req *types.QueryAllPrepareRequest) (*types.QueryAllPrepareResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var prepares []types.Prepare
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	prepareStore := prefix.NewStore(store, types.KeyPrefix(types.PrepareKeyPrefix))

	pageRes, err := query.Paginate(prepareStore, req.Pagination, func(key []byte, value []byte) error {
		var prepare types.Prepare
		if err := k.cdc.Unmarshal(value, &prepare); err != nil {
			return err
		}

		prepares = append(prepares, prepare)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPrepareResponse{Prepare: prepares, Pagination: pageRes}, nil
}

func (k Keeper) Prepare(c context.Context, req *types.QueryGetPrepareRequest) (*types.QueryGetPrepareResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetPrepare(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetPrepareResponse{Prepare: val}, nil
}
