export default class ArrayBufferConverter {
  load(data) {
    this.buffer = new Uint16Array(data);
  }

  toString() {
    this.buffer = String.fromCharCode(...this.buffer);
  }
}
