
const mysql=require('mysql');

const conn=mysql.createConnection({
   /* host:"localhost",
    user:"root",
    password:"",
    database:"besttrain"
*/
    host:"sql12.freemysqlhosting.net",
    user:"sql12322378",
    password:"dBbRczdtnt",
    database:"sql12322378"
});

conn.connect(function(err){

    if(err)throw err;
    console.log("Connected");


});

module.exports=conn;
