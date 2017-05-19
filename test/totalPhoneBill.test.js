const assert = require('assert');
const totalPhoneBill = require('../totalPhoneBill');



describe('The totalPhoneBill function', function(){

    it('should return R7.45', function(){
        assert.equal('R7.45',totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return  total', function(){
        // this test will fail - can you fix it?
        assert.equal('R7.45',totalPhoneBill('call, sms, call, sms, sms'));

    });
});
