// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

/**
 * A Struct_ in the flatbuffer metadata is the same as an Arrow Struct
 * (according to the physical memory layout). We used Struct_ here as
 * Struct is a reserved word in Flatbuffers
 */
export class Struct_ {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Struct_ {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStruct_(bb:flatbuffers.ByteBuffer, obj?:Struct_):Struct_ {
  return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStruct_(bb:flatbuffers.ByteBuffer, obj?:Struct_):Struct_ {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startStruct_(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endStruct_(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createStruct_(builder:flatbuffers.Builder):flatbuffers.Offset {
  Struct_.startStruct_(builder);
  return Struct_.endStruct_(builder);
}
}
