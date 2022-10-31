package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		BelongingList: []Belonging{},
		CountryList:   []Country{},
		PrepareList:   []Prepare{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in belonging
	belongingIndexMap := make(map[string]struct{})

	for _, elem := range gs.BelongingList {
		index := string(BelongingKey(elem.Index))
		if _, ok := belongingIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for belonging")
		}
		belongingIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in country
	countryIndexMap := make(map[string]struct{})

	for _, elem := range gs.CountryList {
		index := string(CountryKey(elem.Index))
		if _, ok := countryIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for country")
		}
		countryIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in prepare
	prepareIdMap := make(map[uint64]bool)
	prepareCount := gs.GetPrepareCount()
	for _, elem := range gs.PrepareList {
		if _, ok := prepareIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for prepare")
		}
		if elem.Id >= prepareCount {
			return fmt.Errorf("prepare id should be lower or equal than the last id")
		}
		prepareIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
