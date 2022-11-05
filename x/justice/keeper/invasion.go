package keeper

import (
	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetInvasion set a specific invasion in the store from its index
func (k Keeper) SetInvasion(ctx sdk.Context, invasion types.Invasion) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InvasionKeyPrefix))
	b := k.cdc.MustMarshal(&invasion)
	store.Set(types.InvasionKey(
		invasion.Index,
	), b)
}

// GetInvasion returns a invasion from its index
func (k Keeper) GetInvasion(
	ctx sdk.Context,
	index string,

) (val types.Invasion, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InvasionKeyPrefix))

	b := store.Get(types.InvasionKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveInvasion removes a invasion from the store
func (k Keeper) RemoveInvasion(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InvasionKeyPrefix))
	store.Delete(types.InvasionKey(
		index,
	))
}

// GetAllInvasion returns all invasion
func (k Keeper) GetAllInvasion(ctx sdk.Context) (list []types.Invasion) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InvasionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Invasion
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
