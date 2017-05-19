const assert = require('assert');
const mostProfitableDepartment = require('../mostProfitableDepartment');

describe('The mostProfitableDepartment function', function(){


  it('should return the biggest items in the mostProfitableDepartment  salesData', function(){
      // this test will fail - can you fix it?
       assert.equal(mostProfitableDepartment('hardware'));

  });
  it('should return the biggest items in the mostProfitableDepartment salesData', function(){
    assert.equal(mostProfitableDepartment('carpentry'));

  });
  it('should return the biggest items in the mostProfitableDepartment salesData', function(){
   assert.equal(mostProfitableDepartment("outdoor"));

  });
});
