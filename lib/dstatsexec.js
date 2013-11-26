var spawn = require('child_process').spawn;

function dstatexec () { 

}

dstatexec.prototype.on = function () {
  this.exec();
}

dstatexec.prototype.exec = function () {
  var com = spawn('dstat', ['-cdngy', '--nocolor', '--float']);

  com.stdout.on('data', function(data){
    var txt = new Buffer(data).toString('utf8', 0, data.length);
    console.log(txt);
  });
}


exports = module.exports = new dstatexec;