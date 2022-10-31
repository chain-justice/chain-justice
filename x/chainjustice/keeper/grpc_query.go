package keeper

import (
	"github.com/chain-justice/chain-justice/x/chainjustice/types"
)

var _ types.QueryServer = Keeper{}
