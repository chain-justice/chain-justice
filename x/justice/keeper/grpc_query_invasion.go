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

func (k Keeper) InvasionAll(c context.Context, req *types.QueryAllInvasionRequest) (*types.QueryAllInvasionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var invasions []types.Invasion
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	invasionStore := prefix.NewStore(store, types.KeyPrefix(types.InvasionKeyPrefix))

	pageRes, err := query.Paginate(invasionStore, req.Pagination, func(key []byte, value []byte) error {
		var invasion types.Invasion
		if err := k.cdc.Unmarshal(value, &invasion); err != nil {
			return err
		}

		invasions = append(invasions, invasion)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllInvasionResponse{Invasion: invasions, Pagination: pageRes}, nil
}

func (k Keeper) Invasion(c context.Context, req *types.QueryGetInvasionRequest) (*types.QueryGetInvasionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetInvasion(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetInvasionResponse{Invasion: val}, nil
}
