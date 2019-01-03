import DatabaseFetch from './databaseFetch';

  export const getJsonFile = async()=>{
    let data = await DatabaseFetch.getAllNotes();
    data = data[0];
    return data;
}
