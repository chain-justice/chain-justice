// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: justice/prepare.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Prepare struct {
	Index             string `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	Address           string `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	RequireBlockHeigt string `protobuf:"bytes,3,opt,name=requireBlockHeigt,proto3" json:"requireBlockHeigt,omitempty"`
}

func (m *Prepare) Reset()         { *m = Prepare{} }
func (m *Prepare) String() string { return proto.CompactTextString(m) }
func (*Prepare) ProtoMessage()    {}
func (*Prepare) Descriptor() ([]byte, []int) {
	return fileDescriptor_b1699a680fe5a400, []int{0}
}
func (m *Prepare) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Prepare) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Prepare.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Prepare) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Prepare.Merge(m, src)
}
func (m *Prepare) XXX_Size() int {
	return m.Size()
}
func (m *Prepare) XXX_DiscardUnknown() {
	xxx_messageInfo_Prepare.DiscardUnknown(m)
}

var xxx_messageInfo_Prepare proto.InternalMessageInfo

func (m *Prepare) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *Prepare) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *Prepare) GetRequireBlockHeigt() string {
	if m != nil {
		return m.RequireBlockHeigt
	}
	return ""
}

func init() {
	proto.RegisterType((*Prepare)(nil), "chainjustice.chainjustice.justice.Prepare")
}

func init() { proto.RegisterFile("justice/prepare.proto", fileDescriptor_b1699a680fe5a400) }

var fileDescriptor_b1699a680fe5a400 = []byte{
	// 191 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0xcd, 0x2a, 0x2d, 0x2e,
	0xc9, 0x4c, 0x4e, 0xd5, 0x2f, 0x28, 0x4a, 0x2d, 0x48, 0x2c, 0x4a, 0xd5, 0x2b, 0x28, 0xca, 0x2f,
	0xc9, 0x17, 0x52, 0x4c, 0xce, 0x48, 0xcc, 0xcc, 0x83, 0xca, 0xe9, 0xa1, 0x70, 0xa0, 0xb4, 0x52,
	0x3a, 0x17, 0x7b, 0x00, 0x44, 0x8f, 0x90, 0x08, 0x17, 0x6b, 0x66, 0x5e, 0x4a, 0x6a, 0x85, 0x04,
	0xa3, 0x02, 0xa3, 0x06, 0x67, 0x10, 0x84, 0x23, 0x24, 0xc1, 0xc5, 0x9e, 0x98, 0x92, 0x52, 0x94,
	0x5a, 0x5c, 0x2c, 0xc1, 0x04, 0x16, 0x87, 0x71, 0x85, 0x74, 0xb8, 0x04, 0x8b, 0x52, 0x0b, 0x4b,
	0x33, 0x8b, 0x52, 0x9d, 0x72, 0xf2, 0x93, 0xb3, 0x3d, 0x52, 0x33, 0xd3, 0x4b, 0x24, 0x98, 0xc1,
	0x6a, 0x30, 0x25, 0x9c, 0x02, 0x4e, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23,
	0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0xca,
	0x2c, 0x3d, 0xb3, 0x24, 0xa3, 0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0xec, 0x46, 0x5d, 0x98,
	0x6f, 0x50, 0x79, 0x15, 0xfa, 0x30, 0x56, 0x49, 0x65, 0x41, 0x6a, 0x71, 0x12, 0x1b, 0xd8, 0x93,
	0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0xc8, 0x9c, 0xf2, 0xac, 0xfd, 0x00, 0x00, 0x00,
}

func (m *Prepare) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Prepare) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Prepare) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.RequireBlockHeigt) > 0 {
		i -= len(m.RequireBlockHeigt)
		copy(dAtA[i:], m.RequireBlockHeigt)
		i = encodeVarintPrepare(dAtA, i, uint64(len(m.RequireBlockHeigt)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Address) > 0 {
		i -= len(m.Address)
		copy(dAtA[i:], m.Address)
		i = encodeVarintPrepare(dAtA, i, uint64(len(m.Address)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintPrepare(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPrepare(dAtA []byte, offset int, v uint64) int {
	offset -= sovPrepare(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Prepare) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovPrepare(uint64(l))
	}
	l = len(m.Address)
	if l > 0 {
		n += 1 + l + sovPrepare(uint64(l))
	}
	l = len(m.RequireBlockHeigt)
	if l > 0 {
		n += 1 + l + sovPrepare(uint64(l))
	}
	return n
}

func sovPrepare(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPrepare(x uint64) (n int) {
	return sovPrepare(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Prepare) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPrepare
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Prepare: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Prepare: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPrepare
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPrepare
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPrepare
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Address", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPrepare
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPrepare
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPrepare
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Address = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RequireBlockHeigt", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPrepare
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPrepare
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPrepare
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RequireBlockHeigt = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPrepare(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPrepare
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPrepare(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPrepare
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPrepare
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPrepare
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPrepare
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPrepare
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPrepare
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPrepare        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPrepare          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPrepare = fmt.Errorf("proto: unexpected end of group")
)
