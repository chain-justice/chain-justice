package keeper

import (
	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCountry set a specific country in the store from its index
func (k Keeper) SetCountry(ctx sdk.Context, country types.Country) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CountryKeyPrefix))
	b := k.cdc.MustMarshal(&country)
	store.Set(types.CountryKey(
		country.Index,
	), b)
}

// GetCountry returns a country from its index
func (k Keeper) GetCountry(
	ctx sdk.Context,
	index string,

) (val types.Country, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CountryKeyPrefix))

	b := store.Get(types.CountryKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCountry removes a country from the store
func (k Keeper) RemoveCountry(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CountryKeyPrefix))
	store.Delete(types.CountryKey(
		index,
	))
}

// GetAllCountry returns all country
func (k Keeper) GetAllCountry(ctx sdk.Context) (list []types.Country) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CountryKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Country
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
