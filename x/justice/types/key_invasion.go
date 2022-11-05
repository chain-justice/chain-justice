package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// InvasionKeyPrefix is the prefix to retrieve all Invasion
	InvasionKeyPrefix = "Invasion/value/"
)

// InvasionKey returns the store key to retrieve a Invasion from the index fields
func InvasionKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
