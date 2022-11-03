package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BelongingKeyPrefix is the prefix to retrieve all Belonging
	BelongingKeyPrefix = "Belonging/value/"
)

// BelongingKey returns the store key to retrieve a Belonging from the index fields
func BelongingKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
