package keeper

import (
	"encoding/binary"

	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetInvasionCount get the total number of invasion
func (k Keeper) GetInvasionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.InvasionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetInvasionCount set the total number of invasion
func (k Keeper) SetInvasionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.InvasionCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendInvasion appends a invasion in the store with a new id and update the count
func (k Keeper) AppendInvasion(
	ctx sdk.Context,
	invasion types.Invasion,
) uint64 {
	// Create the invasion
	count := k.GetInvasionCount(ctx)

	// Set the ID of the appended value
	invasion.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InvasionKey))
	appendedValue := k.cdc.MustMarshal(&invasion)
	store.Set(GetInvasionIDBytes(invasion.Id), appendedValue)

	// Update invasion count
	k.SetInvasionCount(ctx, count+1)

	return count
}

// SetInvasion set a specific invasion in the store
func (k Keeper) SetInvasion(ctx sdk.Context, invasion types.Invasion) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InvasionKey))
	b := k.cdc.MustMarshal(&invasion)
	store.Set(GetInvasionIDBytes(invasion.Id), b)
}

// GetInvasion returns a invasion from its id
func (k Keeper) GetInvasion(ctx sdk.Context, id uint64) (val types.Invasion, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InvasionKey))
	b := store.Get(GetInvasionIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveInvasion removes a invasion from the store
func (k Keeper) RemoveInvasion(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InvasionKey))
	store.Delete(GetInvasionIDBytes(id))
}

// GetAllInvasion returns all invasion
func (k Keeper) GetAllInvasion(ctx sdk.Context) (list []types.Invasion) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InvasionKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Invasion
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetInvasionIDBytes returns the byte representation of the ID
func GetInvasionIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetInvasionIDFromBytes returns ID in uint64 format from a byte array
func GetInvasionIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
