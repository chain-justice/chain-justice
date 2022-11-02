package types_test

import (
	"testing"

	"github.com/chain-justice/chain-justice/x/justice/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				BelongingList: []types.Belonging{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				CountryList: []types.Country{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				PrepareList: []types.Prepare{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				PrepareCount: 2,
				InvasionList: []types.Invasion{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				InvasionCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated belonging",
			genState: &types.GenesisState{
				BelongingList: []types.Belonging{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated country",
			genState: &types.GenesisState{
				CountryList: []types.Country{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated prepare",
			genState: &types.GenesisState{
				PrepareList: []types.Prepare{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid prepare count",
			genState: &types.GenesisState{
				PrepareList: []types.Prepare{
					{
						Id: 1,
					},
				},
				PrepareCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated invasion",
			genState: &types.GenesisState{
				InvasionList: []types.Invasion{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid invasion count",
			genState: &types.GenesisState{
				InvasionList: []types.Invasion{
					{
						Id: 1,
					},
				},
				InvasionCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
