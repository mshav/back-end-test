
const assert = require('assert');
const findItemsOver20 = require('../findItemsOver20');

describe('findItemsOver20', function() {

  it('should return all the products that more than qty ', function() {
    var itemList = [{
        name: 'apples',
        qty: 10
      },
      {
        name: 'pears',
        qty: 37
      },
      {
        name: 'bananas',
        qty: 27
      },
      {
        name: 'apples',
        qty: 3
      },
    ];
    assert.deepEqual(findItemsOver20(itemList), []);

  });
});
