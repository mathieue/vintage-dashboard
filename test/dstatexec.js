var expect = require('chai').expect
, sinon      = require('sinon')
, rewire = require('rewire');

var dstatsexec = rewire('../lib/dstatsexec')


describe("Dstatsexec", function() {

  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();

    // mocking inside the required module with rewire
    dstatsexec.__set__("spawn", function() {
      return {
        stdout: {
          on: function (data, cb) {
            cb('1.0 0.7  97 1.2   0   0');
          }
        }
      }
    });

  });

  afterEach(function() {
    sandbox.restore();
  });

  it("should send data", function(done) {

    dstatsexec(function (data) {
      console.log(data);
      done();
    });

  });

});