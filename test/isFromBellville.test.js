const assert = require('assert');
const isFromBellville = require('../isFromBellville');

describe('The isFromBellville function', function(){

    it('should return true for reg startswith CY', function(){
        assert.equal(true, isFromBellville('CY 254'));
    });
    it('should return false for reg !startswith CJ', function(){
        // this test will fail - can you fix it?
        assert.equal(false, isFromBellville('CJ 221'));

    });
});
