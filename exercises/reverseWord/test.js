const reverseWord = require('./index');

test('reverseWord function exists', () => {
  expect(reverseWord).toBeDefined();
});

test('Reverse reverses a character as seintun', () => {
  expect(reverseWord(['n','u','t','n','i','e','s'])).toEqual(['s','e','i','n','t','u','n']);
});

test('Reverse reverses a character as sein tun! ', () => {
  expect(reverseWord(['!','n','u','t',' ','n','i','e','s'])).toEqual(['s','e','i','n',' ','t','u','n','!']);
});
