package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CountryKeyPrefix is the prefix to retrieve all Country
	CountryKeyPrefix = "Country/value/"
)

// CountryKey returns the store key to retrieve a Country from the index fields
func CountryKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
