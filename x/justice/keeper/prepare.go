package keeper

import (
	"encoding/binary"

	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetPrepareCount get the total number of prepare
func (k Keeper) GetPrepareCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PrepareCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetPrepareCount set the total number of prepare
func (k Keeper) SetPrepareCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PrepareCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendPrepare appends a prepare in the store with a new id and update the count
func (k Keeper) AppendPrepare(
	ctx sdk.Context,
	prepare types.Prepare,
) uint64 {
	// Create the prepare
	count := k.GetPrepareCount(ctx)

	// Set the ID of the appended value
	prepare.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrepareKey))
	appendedValue := k.cdc.MustMarshal(&prepare)
	store.Set(GetPrepareIDBytes(prepare.Id), appendedValue)

	// Update prepare count
	k.SetPrepareCount(ctx, count+1)

	return count
}

// SetPrepare set a specific prepare in the store
func (k Keeper) SetPrepare(ctx sdk.Context, prepare types.Prepare) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrepareKey))
	b := k.cdc.MustMarshal(&prepare)
	store.Set(GetPrepareIDBytes(prepare.Id), b)
}

// GetPrepare returns a prepare from its id
func (k Keeper) GetPrepare(ctx sdk.Context, id uint64) (val types.Prepare, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrepareKey))
	b := store.Get(GetPrepareIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePrepare removes a prepare from the store
func (k Keeper) RemovePrepare(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrepareKey))
	store.Delete(GetPrepareIDBytes(id))
}

// GetAllPrepare returns all prepare
func (k Keeper) GetAllPrepare(ctx sdk.Context) (list []types.Prepare) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrepareKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Prepare
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPrepareIDBytes returns the byte representation of the ID
func GetPrepareIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPrepareIDFromBytes returns ID in uint64 format from a byte array
func GetPrepareIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
