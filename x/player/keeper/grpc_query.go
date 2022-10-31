package keeper

import (
	"github.com/chain-justice/chain-justice/x/player/types"
)

var _ types.QueryServer = Keeper{}
