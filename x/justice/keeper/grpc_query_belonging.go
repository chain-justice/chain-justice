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

func (k Keeper) BelongingAll(c context.Context, req *types.QueryAllBelongingRequest) (*types.QueryAllBelongingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var belongings []types.Belonging
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	belongingStore := prefix.NewStore(store, types.KeyPrefix(types.BelongingKeyPrefix))

	pageRes, err := query.Paginate(belongingStore, req.Pagination, func(key []byte, value []byte) error {
		var belonging types.Belonging
		if err := k.cdc.Unmarshal(value, &belonging); err != nil {
			return err
		}

		belongings = append(belongings, belonging)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBelongingResponse{Belonging: belongings, Pagination: pageRes}, nil
}

func (k Keeper) Belonging(c context.Context, req *types.QueryGetBelongingRequest) (*types.QueryGetBelongingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBelonging(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBelongingResponse{Belonging: val}, nil
}
