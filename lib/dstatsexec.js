var spawn = require('child_process').spawn;

function dstatexec(cb) {
  var com = spawn('dstat', ['-c', '--nocolor', '--float']);

  com.stdout.on('data', function(data){
    var txt = new Buffer(data).toString('utf8', 0, data.length).replace(/\n$/, '');
    cb(txt);
  });

}

exports = module.exports = dstatexec;