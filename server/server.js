const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const database = require("./database"); //Fordi det er en fil og ikke et biblioket ./
const route = express();

route.use(bodyParser.urlencoded({
  extended: false
}))
route.use(bodyParser.json())

route.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "app", "index.html"));
  //Når du ikke gør noget så finder den index-filen,
})
route.post("/newnote", async (req, res) => {
  const query = await database.connection.query('INSERT INTO `NoteElement` SET ?', {
    HeadlineText: req.body.headlinetext,
    NoteText: req.body.notetext
  });
  console.log(query);
  res.json(query);
})

route.get("/getnotes", async (req, res) => {

  //const query =  await database.connection.query('INSERT INTO `NoteElement` SET ?', { HeadlineText: 'john', NoteText: 'johnjohn' });
  //console.log(query);
  const [rows, fields] = await database.connection.execute('SELECT * FROM `NoteElement`');
  res.json(rows);
   //const [rows, fields] = await database.connection.execute('SELECT * FROM `NoteElement` where Id = ?', [req.query.id]);
  // req.query.ost
});

route.get("/search", async (req, res) => {

  //const query =  await database.connection.query('INSERT INTO `NoteElement` SET ?', { HeadlineText: 'john', NoteText: 'johnjohn' });
  //console.log(query);

  const [rows, fields] = await database.connection.execute('SELECT * FROM `NoteElement` where NoteText LIKE ?', ["%" + req.query.search + "%"]);
  res.json(rows);

  // req.query.ost
});




route.use(express.static(path.join(__dirname, '..', "app"))); //når der findes en anden path, så finder den app-mappen frem.


(async () => {
  await database.connectToDatabase();
  route.listen(80);
  console.log("Server is running")
})();
