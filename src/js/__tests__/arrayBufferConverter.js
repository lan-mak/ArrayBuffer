import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../arrayBufferConverter';

test('Загрузка данных в data', () => {
  const data = new ArrayBufferConverter();
  const buffer = getBuffer();
  data.load(buffer);
  expect(data.buffer).toBeInstanceOf(Uint16Array);
});

test('Загрузка данных в data', () => {
  const data = new ArrayBufferConverter();
  const buffer = getBuffer();
  data.load(buffer);
  data.toString();
  expect(typeof data.buffer).toBe('string');
});
