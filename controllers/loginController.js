var connection = require('./../config.js');

module.exports.login = function(req,res){

	var Email = req.body.email;

	var Password = req.body.pass;

	//res.send("Email : " + Email + "Password : " + Password );

	connection.query('SELECT * FROM login WHERE Email = ?',[Email], function (error, results, fields) {

      if (error) {

          res.json({

            status:false,

            message:'there are some error with query'

            })

      }else{

        if(results.length >0){

            if(Password==results[0].password){
                
                res.redirect('/dashboard.ejs');

            }else{
                
                res.redirect('/index.html');

            }
         
        }
        else{

          res.json({

              status:false,  

            message:"Email does not exits"

          });

        }

      }
      
    });
	
};