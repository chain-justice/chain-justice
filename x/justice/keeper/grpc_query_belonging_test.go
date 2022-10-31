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

func TestBelongingQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNBelonging(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetBelongingRequest
		response *types.QueryGetBelongingResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetBelongingRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetBelongingResponse{Belonging: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetBelongingRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetBelongingResponse{Belonging: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetBelongingRequest{
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
			response, err := keeper.Belonging(wctx, tc.request)
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

func TestBelongingQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.JusticeKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNBelonging(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllBelongingRequest {
		return &types.QueryAllBelongingRequest{
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
			resp, err := keeper.BelongingAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Belonging), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Belonging),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.BelongingAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Belonging), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Belonging),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.BelongingAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Belonging),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.BelongingAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
