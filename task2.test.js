const task2 = require('./task2.js');

test('reverseString', () => {
  expect(task2('hello')).toBe('olleh');
});

test('reverseStringError', () => {
  expect(() => {
    task2('');
  }).toThrow('There is no string');
});
