package keeper

import (
	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetBelonging set a specific belonging in the store from its index
func (k Keeper) SetBelonging(ctx sdk.Context, belonging types.Belonging) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BelongingKeyPrefix))
	b := k.cdc.MustMarshal(&belonging)
	store.Set(types.BelongingKey(
		belonging.Index,
	), b)
}

// GetBelonging returns a belonging from its index
func (k Keeper) GetBelonging(
	ctx sdk.Context,
	index string,

) (val types.Belonging, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BelongingKeyPrefix))

	b := store.Get(types.BelongingKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBelonging removes a belonging from the store
func (k Keeper) RemoveBelonging(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BelongingKeyPrefix))
	store.Delete(types.BelongingKey(
		index,
	))
}

// GetAllBelonging returns all belonging
func (k Keeper) GetAllBelonging(ctx sdk.Context) (list []types.Belonging) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BelongingKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Belonging
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
