const assert = require('assert');
const countAllPaarl = require('../countAllPaarl');

describe('The countAllPaarl function', function(){


    it('should return 0 if not number of Plates !startswith CJ', function(){
        // this test will fail - can you fix it?
        assert.equal(0, countAllPaarl('CY 221'));

    });
    it("should return number if  number of Plates startswith CJ", function(){


    });
});
