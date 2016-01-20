var reply = require('./../');
console.log("Test Control C")

var bye = function(){
  console.log('Closing successful.');
}

function get_timezone() {
  var date = new Date();
  return date.getTimezoneOffset();
}

var opts = {
  country: {
    message: 'Answer this question'
  },
  timezone: {
    message: 'Dont answer this questions and press Cntrl C',
    default: get_timezone
  }
}

reply.get(opts, function(err, result){
  if (err) return bye();

  console.log(result);
})