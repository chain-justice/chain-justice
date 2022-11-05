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

	belonging, isFound := k.GetBelonging(
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
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "No Such Country :"+msg.CountryAddress)
	}

	myCountry, _ := k.GetCountry(
		ctx,
		belonging.Country,
	)

	food, err := strconv.ParseInt(myCountry.Food, 10, 64)
	if err != nil {
		panic(err)
	}

	if food < 10 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "at least 10 food is needed:"+myCountry.Food)
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

	var invasion = types.Invasion{
		Index:             msg.Creator,
		FromAddress:       msg.Creator,
		ToAddress:         msg.CountryAddress,
		RequireBlockHeigt: fmt.Sprint(strconv.FormatInt(ctx.BlockHeight()+10, 10)),
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
