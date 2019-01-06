class DatabaseFetch {

  static getAllNotes() {
    return fetch("/getnotes").then(result => {
      console.log(result);
      return result.json()
    })

  }


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
