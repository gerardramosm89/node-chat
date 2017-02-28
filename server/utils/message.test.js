var expect = require('expect');
var generateMessage = require('./message');
// var generateMessage = (from, text) => {
//   return {
//     from,
//     text,
//     createdAt: new Date().getTime()
//   };
// };
describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage.generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});