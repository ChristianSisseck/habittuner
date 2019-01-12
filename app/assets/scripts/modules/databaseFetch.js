class DatabaseFetch {

  //Get All notes from the database - READ

  static async getJsonFile(){
  let data = await DatabaseFetch.getAllNotes();
  return data;
}

   static getAllNotes() {
    return fetch("/getnotes").then(result => {
      console.log(result);
      return result.json()
    });

  }

  //Post a new TextNote to database, CREATES a new row
  static sendTextNote(headlinetext, notetext) {
    return fetch("/newnote", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        headlinetext,
        notetext,

      })
    }).then(result => {
      console.log(result);
      return result.json()
    })
  }

  //Post a new UPDATE to an existing TextNote Element in the database


  //Post an id to the database, that DELETES a single TextNote Element
  static deleteTextNote(id) {
    return fetch("/delete?id=" + id).then(result => {
      console.log(result);
      return result.json();
    })
  }

}

/*
(async _=>{
 let data = await DatabaseFetch.getAllNotes();
 data = data[0];
 console.log(` Tid: ${data.DateTime} Overskrift: ${data.HeadlineText} Text: ${data.NoteText});
})()
*/

export default DatabaseFetch;

//await fetch("/getnotes").then(r => r.json());

/*
.then(r => r.json())
.then((r) => r.json())
.then((r) => {return r.json()})
*/
