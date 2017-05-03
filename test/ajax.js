/**
 * Created by YSingh on 03/05/17.
 */
var chai = require('chai');
var should = require('chai').should();
var chaiHttp = require('chai-http');
var server = 'https://api.github.com';

chai.use(chaiHttp);

describe('ajax', function () {
    describe('get', function () {
        it('return response', function (done) {
            chai.request(server)
                .get('/users/gs-ysingh') //Example of put :- .put('/blob/'+res.body[0]._id).send({'name': 'Spider'})
                .end(function (err, res) {
                    should.not.exist(err);
                    should.exist(res);
                    res.should.be.an('object');
                    done();
            })
        })
    })
})




