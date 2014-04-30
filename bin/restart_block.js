var 
	exec = require('child_process').exec
	, opts = { timeout : 10000 }
;

function restart(err, stdout, stderr) {
	
	if(err) {

		console.log("Error restarting box.", err);
		return process.send({ 'action' : 'restartBlock', 'error' : err });
	}
	console.log("Restarting NOW!");
	process.send({ 'action' : 'restartBlock', 'data' : true });
};

module.exports = function() { 

	console.log("Attempting to restart box...");
	exec('shutdown -r now', opts, restart) 
}