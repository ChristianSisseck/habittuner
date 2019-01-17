const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const database = require("./database"); //Fordi det er en fil og ikke et biblioket ./

//Make an instance of the express class;
const route = express();

route.use(bodyParser.urlencoded({
  extended: false
})) //middleware, alt det som Express kan kører igennem bodyParser.
route.use(bodyParser.json())


route.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "app", "index.html"));
  //Når du ikke gør noget så finder den index-filen,
  //path.join tager hensyn til fx windows og mac, eller servertyper
  //'..' er fordi at SLASH laves på forskellige systemer... fx MAC og WINDOWS ".." sætter den rigtige SLASH
})

route.post("/notes", async (req, res) => {
  const query = await database.connection.query('INSERT INTO `NoteElement` SET ?', {
    DateTime: new Date(),
    HeadlineText: req.body.headlinetext,
    NoteText: req.body.notetext
  });
  console.log(query);
  res.json(query);
});

route.get("/notes", async (req, res) => {
  if (req.query.search) {
    const [rows, fields] = await database.connection.execute('SELECT * FROM `NoteElement` where NoteText LIKE ?', ["%" + req.query.search + "%"]);
    res.json(rows);
  } else {
    const [rows, fields] = await database.connection.execute('SELECT * FROM `NoteElement`');
    res.json(rows);
  }
});

//:id er Express syntax for at her kommer der noget
route.get("/notes/:id", async (req, res) => {
  const [rows, fields] = await database.connection.execute('SELECT * FROM `NoteElement` where Id = ?', [req.params.id]);
  if (rows.length === 1) {
    res.json(rows[0]);
  } else {
    res.status(404).json({
      msg: "The ID that you want doesn't exist... he he"
    });
  }
});

//DELETE
route.delete("/notes/:id", async (req, res) => {
  const [rows, fields] = await database.connection.execute('DELETE FROM `NoteElement` where Id = ?', [req.params.id]);
  console.log(rows);
  if (rows.affectedRows === 1) {
    res.status(200).json({
      msg: "The row you requested deleted, is deleted now... Everything is fine :) "
    })
  } else {
    res.status(404).json({
      msg: "The ID that you want doesn't exist... he he"
    });
  }
});

route.patch("/notes/:id", async (req, res) => {
  console.log("route.patch");
  const [rows, fields] = await database.connection.execute(
    'UPDATE `NoteElement` SET HeadlineText = ?, NoteText = ?  WHERE Id = ?',
    [
      req.body.headlinetext,
      req.body.notetext,
      req.params.id
    ]);
  console.log(rows);
  if (rows.affectedRows === 1) {
    res.status(200).json({
      msg: "The row you have updated, is updated... Everything is fine :) "
    })
  } else {
    res.status(404).json({
      msg: "The ID that you want doesn't exist... he he"
    });
  }
});





route.use(express.static(path.join(__dirname, '..', "app"))); //når der findes en anden path, så finder den app-mappen frem.


(async () => {
  await database.connectToDatabase();
  route.listen(80);
  console.log("Server is running")
})();
