const assert = require('assert');
const countRegNumber = require('../countRegNumber');

describe('The countRegNumber function', function(){


    it('should return the length', function(){
        // this test will fail - can you fix it?
        assert.equal(3, countRegNumber('CA182736, CY523519, CJ812328'));

    });
});
