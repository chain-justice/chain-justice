package keeper

import (
	"context"
	"fmt"
	"strconv"

	"github.com/chain-justice/chain-justice/x/justice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) InvasionStart(goCtx context.Context, msg *types.MsgInvasionStart) (*types.MsgInvasionStartResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, isFound := k.GetBelonging(
		ctx,
		msg.Creator,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You have to belong to a contry")
	}

	country, isFoundCountry := k.GetCountry(
		ctx,
		msg.CountryAddress,
	)
	if !isFoundCountry {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "No Such Country")
	}
	food, err := strconv.ParseInt(country.Food, 10, 64)
	if err != nil {
		panic(err)
	}

	_, isFound = k.GetPrepare(
		ctx,
		msg.Creator,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You are in another action")
	}

	_, isFound = k.GetInvasion(
		ctx,
		msg.Creator,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You are in another action")
	}

	if food < 10 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Not enough Food! at least 10 is needed")
	}

	var invasion = types.Invasion{
		Index:             msg.Creator,
		FromAddress:       msg.Creator,
		ToAddress:         msg.CountryAddress,
		RequireBlockHeigt: fmt.Sprint(strconv.FormatInt(ctx.BlockHeight(), 10)),
	}
	k.SetInvasion(ctx, invasion)

	k.SetCountry(ctx, types.Country{
		Index:    country.Index,
		Address:  country.Address,
		Food:     strconv.FormatInt(food-10, 10),
		Nmembers: country.Nmembers,
	})
	return &types.MsgInvasionStartResponse{}, nil
}
