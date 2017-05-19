const assert = require('assert');
const transportFee = require('../transportFee');

describe('The transportFee function', function(){


  it('should return free when one is on nigtshift  ', function(){
      // this test will fail - can you fix it?
      assert.equal(transportFee("nigtshift"));

  });
  // it("should return R20  when one is on  morning ", function(){
  //
  //   assert.equal(transportFee("morning"));
  //
  // });

  // it("should return R10  when one is on afternoon", function(){
  //
  //   assert.equal(transportFee("afternoon"));
  // });
});
