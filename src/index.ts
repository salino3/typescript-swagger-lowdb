// npm i express lowdb  morgan nanoid
/// npm i swagger-jsdoc swagger-ui-express cors
// npm i -D typescript ts-node nodemon @types/cors @types/express @types/lowdb @types/morgan @types/swagger-jsdoc @types/swagger-ui-express
// npx tsc --init

import app from "./app";
import {createConnection} from './db';

createConnection();

app.listen(app.get('port'));

console.log("Server listening on port: " + app.get("port"));

