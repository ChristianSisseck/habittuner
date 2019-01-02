const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const database = require("./database"); //Fordi det er en fil og ikke et biblioket ./
const route = express();

route.get("/", (req, res)=> {
  res.sendfile(path.join(__dirname, '..', "app", "index.html"));
  //Når du ikke gør noget så finder den index-filen,
})


route.get("/getnotes", async(req, res)=> {
   const [rows, fields] = await database.connection.execute('SELECT * FROM `NoteElement`');
   res.json(rows);
});

route.use(express.static(path.join(__dirname, '..', "app"))); //når der findes en anden path, så finder den app-mappen frem.



(async () => {
    await database.connectToDatabase();
    route.listen(80);
    console.log("Server is running")
})();




/*

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

  request("https://api.instagram.com/v1/users/self/media/recent/?prettyprint=true&access_token=1275283077.90ea76e.045c85bf27e041748760e7ca3d4a0f92",
   function(error, response, body){

    //console.log(response.statusCode); Her får man statuskoden tilbage
    //console.log(response.body); Her får man hele alt responsekoden tilbage

    var data = JSON.parse(body); //omskriver JSON til et Javascript object

console.log(data.data[0].images.standard_resolution.url);

    var billede = "<div style='width:800px; margin:0 auto; transform: scale(0.65);'> <img src='gold-frame.png'> <div style='position: absolute; left: 172px; top: 176px;'> <img src='" + data.data[0].images.standard_resolution.url +"'></div> </div>";

    res.write("<h1 style='font-size:4rem; text-align:center; color: #595959; margin-bottom: -100px;'> Tak fordi I havde <span style='color: #FF0100;'> 10 </span> minutter :) </h1>" + billede);

    res.send();


  });

});
*/
