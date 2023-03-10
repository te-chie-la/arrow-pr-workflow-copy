// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class FixedSizeBinary {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):FixedSizeBinary {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsFixedSizeBinary(bb:flatbuffers.ByteBuffer, obj?:FixedSizeBinary):FixedSizeBinary {
  return (obj || new FixedSizeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsFixedSizeBinary(bb:flatbuffers.ByteBuffer, obj?:FixedSizeBinary):FixedSizeBinary {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new FixedSizeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * Number of bytes per value
 */
byteWidth():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startFixedSizeBinary(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addByteWidth(builder:flatbuffers.Builder, byteWidth:number) {
  builder.addFieldInt32(0, byteWidth, 0);
}

static endFixedSizeBinary(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createFixedSizeBinary(builder:flatbuffers.Builder, byteWidth:number):flatbuffers.Offset {
  FixedSizeBinary.startFixedSizeBinary(builder);
  FixedSizeBinary.addByteWidth(builder, byteWidth);
  return FixedSizeBinary.endFixedSizeBinary(builder);
}
}
