const mysql=require("mysql");
 if(process.env.JAWSDB_URL){
   connection=mysql.createConnection(process.env.JAWSDB_URL)
 }
 else {
const connection= mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "@87@ZIpi@@",
    database: "burgers_db"
})
 }

// Make connection to mysql
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  
  // Export connection for our ORM to use.
  module.exports = connection;