const assert = require('assert');
const isWeekday = require('../isWeekday');

describe('The isWeekday function', function(){

    it('should return true correctly', function(){
        assert.equal(false,isWeekday('Tuesday'));
    });
    it('should return false  correctly', function(){
        // this test will fail - can you fix it?
        assert.equal(true,isWeekday('Sunday'));

    });
});
