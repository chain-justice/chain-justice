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

func (k Keeper) CountryAll(c context.Context, req *types.QueryAllCountryRequest) (*types.QueryAllCountryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var countrys []types.Country
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	countryStore := prefix.NewStore(store, types.KeyPrefix(types.CountryKeyPrefix))

	pageRes, err := query.Paginate(countryStore, req.Pagination, func(key []byte, value []byte) error {
		var country types.Country
		if err := k.cdc.Unmarshal(value, &country); err != nil {
			return err
		}

		countrys = append(countrys, country)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCountryResponse{Country: countrys, Pagination: pageRes}, nil
}

func (k Keeper) Country(c context.Context, req *types.QueryGetCountryRequest) (*types.QueryGetCountryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCountry(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCountryResponse{Country: val}, nil
}
