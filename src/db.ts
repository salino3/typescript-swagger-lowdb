import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";



export const createConnection = () => {
  const adapter = new FileSync('db.json');
  const db = lowdb(adapter);

  db.defaults({ tasks: [] }).write();
};
