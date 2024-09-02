var mysql = require("mysql2");
//create connection
const pool = mysql.createPool({
    host : "nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com",
    user: "candidate",
    password: "NoTeDeSt^C10.6?SxwY882}",
    database: "conqtvms_dev"
  })
  
  //To connect with db
  pool.getConnection(function(err){
    if(err){
      console.log(err);
      return ""
    }
    console.log("Database connected.");
  })

  module.exports = pool.promise();
  