var connection = require('./../config.js');

module.exports.signup = function(req,res){


	var User = req.body.username;

	var Email = req.body.email;

	var Password = req.body.pass;

	res.send("Email : " + Email + "Password : " + Password );

	var sql = "INSERT INTO login (username,password,email) VALUES ('"+User+"','"+Password+"','"+Email+"')";

	console.log(sql);

	connection.query(sql,function(err,result,res){

		if(err) throw err;
		
		console.log("Data inserted Successfully");

		//res.redirect('/login');
		
	});
}