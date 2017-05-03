/**
 * Created by YSingh on 03/05/17.
 */

var assert = require('assert');

describe('Array test: ', function () {

   describe('indexOf: ', function () {
       it('should return -1', function () {
           assert(-1, [1, 2, 3].indexOf(5));
       });
   });


    describe('splice: : ', function () {
        it('should return 1', function () {
            assert(1, [1, 2, 3].splice(1).length);
        });
    });
});