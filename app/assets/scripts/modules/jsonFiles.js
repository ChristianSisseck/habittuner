import DatabaseFetch from './databaseFetch';

export const getJsonFile = async () => {
  let data = await DatabaseFetch.getAllNotes();
  return data;
}
