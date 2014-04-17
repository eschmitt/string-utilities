var expect = require('chai').expect
  , strings = require('../string-utilities.js')
  ;

describe('insert', function () {
  it('inserts character into string at a given index', function () {
    expect(strings.insert('a', 'b', '', 0)).to.equal('ba');
    expect(strings.insert('ab', 'c', '', 0)).to.equal('cab');
    expect(strings.insert('ab', 'c', '', 1)).to.equal('acb');
  });
  it('can be partially applied', function () {
    expect(strings.insert('a', 'b', '')(0)).to.equal('ba');
    expect(strings.insert('a', 'b')('', 0)).to.equal('ba');
    expect(strings.insert('a')('b', '', 0)).to.equal('ba');
    expect(strings.insert('a')('b')('')(0)).to.equal('ba');
  });
});
