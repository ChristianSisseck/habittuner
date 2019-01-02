const mysql = require('mysql2/promise');
class Database{

  constructor(){
    this.connection = null;
  }

  async connectToDatabase(){
      // create the connection to database
    this.connection = await mysql.createConnection({
      host: 'sql2.freemysqlhosting.net',
      user: 'sql2272261',
      database: 'sql2272261',
      password: 'lA1!gB3!'
    });


  }
/*
makeInsertRequest(){
  this.connection.execute(
    'SELECT * FROM NoteElement',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available

      // If you execute same statement again, it will be picked form a LRU cache
      // which will save query preparation time and give better performance
    }
  );}
  */

}
module.exports = new Database;
