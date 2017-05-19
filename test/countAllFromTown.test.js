const assert = require('assert');
const countAllFromTown = require('../countAllFromTown');


describe('The countAllFromTown function', function(){

    it('should return all regPlates startswith C', function(){
        assert.equal(countAllFromTown('C'));
    });

   it('should not return if regPlates  !startswith C  ', function(){
    //     // this test will fail - can you fix it?
      assert.equal(countAllFromTown('LT,GT,LM '));

     });
});
