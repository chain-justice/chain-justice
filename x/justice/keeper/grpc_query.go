package keeper

import (
	"github.com/chain-justice/chain-justice/x/justice/types"
)

var _ types.QueryServer = Keeper{}
