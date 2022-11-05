package keeper

import (
	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetPrepare set a specific prepare in the store from its index
func (k Keeper) SetPrepare(ctx sdk.Context, prepare types.Prepare) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrepareKeyPrefix))
	b := k.cdc.MustMarshal(&prepare)
	store.Set(types.PrepareKey(
		prepare.Index,
	), b)
}

// GetPrepare returns a prepare from its index
func (k Keeper) GetPrepare(
	ctx sdk.Context,
	index string,

) (val types.Prepare, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrepareKeyPrefix))

	b := store.Get(types.PrepareKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePrepare removes a prepare from the store
func (k Keeper) RemovePrepare(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrepareKeyPrefix))
	store.Delete(types.PrepareKey(
		index,
	))
}

// GetAllPrepare returns all prepare
func (k Keeper) GetAllPrepare(ctx sdk.Context) (list []types.Prepare) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrepareKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Prepare
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
