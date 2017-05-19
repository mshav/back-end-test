const assert = require('assert');
const regCheck = require('../regCheck');

describe('The regCheck function', function(){

    it('should return true for reg startswith CY', function(){
        assert.equal(true, regCheck('CY 254'));
    });
    it('should return false for reg startswith CJ,CA', function(){
        // this test will fail - can you fix it?
        assert.equal(false, regCheck('CJ 221'));

    });
});
