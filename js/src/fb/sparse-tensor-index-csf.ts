// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Buffer } from './buffer.js';
import { Int } from './int.js';


/**
 * Compressed Sparse Fiber (CSF) sparse tensor index.
 */
export class SparseTensorIndexCSF {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SparseTensorIndexCSF {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSparseTensorIndexCSF(bb:flatbuffers.ByteBuffer, obj?:SparseTensorIndexCSF):SparseTensorIndexCSF {
  return (obj || new SparseTensorIndexCSF()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSparseTensorIndexCSF(bb:flatbuffers.ByteBuffer, obj?:SparseTensorIndexCSF):SparseTensorIndexCSF {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SparseTensorIndexCSF()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * CSF is a generalization of compressed sparse row (CSR) index.
 * See [smith2017knl](http://shaden.io/pub-files/smith2017knl.pdf)
 *
 * CSF index recursively compresses each dimension of a tensor into a set
 * of prefix trees. Each path from a root to leaf forms one tensor
 * non-zero index. CSF is implemented with two arrays of buffers and one
 * arrays of integers.
 *
 * For example, let X be a 2x3x4x5 tensor and let it have the following
 * 8 non-zero values:
 * ```text
 *   X[0, 0, 0, 1] := 1
 *   X[0, 0, 0, 2] := 2
 *   X[0, 1, 0, 0] := 3
 *   X[0, 1, 0, 2] := 4
 *   X[0, 1, 1, 0] := 5
 *   X[1, 1, 1, 0] := 6
 *   X[1, 1, 1, 1] := 7
 *   X[1, 1, 1, 2] := 8
 * ```
 * As a prefix tree this would be represented as:
 * ```text
 *         0          1
 *        / \         |
 *       0   1        1
 *      /   / \       |
 *     0   0   1      1
 *    /|  /|   |    /| |
 *   1 2 0 2   0   0 1 2
 * ```
 * The type of values in indptrBuffers
 */
indptrType(obj?:Int):Int|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Int()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * indptrBuffers stores the sparsity structure.
 * Each two consecutive dimensions in a tensor correspond to a buffer in
 * indptrBuffers. A pair of consecutive values at `indptrBuffers[dim][i]`
 * and `indptrBuffers[dim][i + 1]` signify a range of nodes in
 * `indicesBuffers[dim + 1]` who are children of `indicesBuffers[dim][i]` node.
 *
 * For example, the indptrBuffers for the above X is:
 * ```text
 *   indptrBuffer(X) = [
 *                       [0, 2, 3],
 *                       [0, 1, 3, 4],
 *                       [0, 2, 4, 5, 8]
 *                     ].
 * ```
 */
indptrBuffers(index: number, obj?:Buffer):Buffer|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Buffer()).__init(this.bb!.__vector(this.bb_pos + offset) + index * 16, this.bb!) : null;
}

indptrBuffersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * The type of values in indicesBuffers
 */
indicesType(obj?:Int):Int|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Int()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * indicesBuffers stores values of nodes.
 * Each tensor dimension corresponds to a buffer in indicesBuffers.
 * For example, the indicesBuffers for the above X is:
 * ```text
 *   indicesBuffer(X) = [
 *                        [0, 1],
 *                        [0, 1, 1],
 *                        [0, 0, 1, 1],
 *                        [1, 2, 0, 2, 0, 0, 1, 2]
 *                      ].
 * ```
 */
indicesBuffers(index: number, obj?:Buffer):Buffer|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new Buffer()).__init(this.bb!.__vector(this.bb_pos + offset) + index * 16, this.bb!) : null;
}

indicesBuffersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * axisOrder stores the sequence in which dimensions were traversed to
 * produce the prefix tree.
 * For example, the axisOrder for the above X is:
 * ```text
 *   axisOrder(X) = [0, 1, 2, 3].
 * ```
 */
axisOrder(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

axisOrderLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

axisOrderArray():Int32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? new Int32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startSparseTensorIndexCSF(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addIndptrType(builder:flatbuffers.Builder, indptrTypeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, indptrTypeOffset, 0);
}

static addIndptrBuffers(builder:flatbuffers.Builder, indptrBuffersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, indptrBuffersOffset, 0);
}

static startIndptrBuffersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(16, numElems, 8);
}

static addIndicesType(builder:flatbuffers.Builder, indicesTypeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, indicesTypeOffset, 0);
}

static addIndicesBuffers(builder:flatbuffers.Builder, indicesBuffersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, indicesBuffersOffset, 0);
}

static startIndicesBuffersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(16, numElems, 8);
}

static addAxisOrder(builder:flatbuffers.Builder, axisOrderOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, axisOrderOffset, 0);
}

static createAxisOrderVector(builder:flatbuffers.Builder, data:number[]|Int32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createAxisOrderVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createAxisOrderVector(builder:flatbuffers.Builder, data:number[]|Int32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startAxisOrderVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endSparseTensorIndexCSF(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // indptrType
  builder.requiredField(offset, 6) // indptrBuffers
  builder.requiredField(offset, 8) // indicesType
  builder.requiredField(offset, 10) // indicesBuffers
  builder.requiredField(offset, 12) // axisOrder
  return offset;
}

}
