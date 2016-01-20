var reply = require('./../');

reply.confirm('Is it raining in Seattle?', function(err, yes){
  var answer = "";
  if (!err && yes)
    answer = "Of course it is, it always is."
  else
    answer = "Did you really check if it was raining?";

	console.log(answer);
});