var expect = require('chai').expect
, dstatsexec = require('../lib/dstatsexec')
, sinon      = require('sinon')
, child_process = require('child_process');

describe("Dstatsexec", function() {

  it("should send data", function() {

    var exec = dstatsexec;

    sinon.stub(exec, 'exec', function(){
      return true;
    });

    exec.on();

  });

});