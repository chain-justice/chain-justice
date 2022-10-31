package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/chain-justice/chain-justice/testutil/keeper"
	"github.com/chain-justice/chain-justice/testutil/nullify"
	"github.com/chain-justice/chain-justice/x/justice/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestCountryQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCountry(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetCountryRequest
		response *types.QueryGetCountryResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetCountryRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetCountryResponse{Country: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetCountryRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetCountryResponse{Country: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetCountryRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Country(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestCountryQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCountry(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllCountryRequest {
		return &types.QueryAllCountryRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CountryAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Country), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Country),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CountryAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Country), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Country),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.CountryAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Country),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.CountryAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
