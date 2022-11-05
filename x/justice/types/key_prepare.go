package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PrepareKeyPrefix is the prefix to retrieve all Prepare
	PrepareKeyPrefix = "Prepare/value/"
)

// PrepareKey returns the store key to retrieve a Prepare from the index fields
func PrepareKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
