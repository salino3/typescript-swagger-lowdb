// npm i express lowdb  morgan nanoid
/// npm i swagger-jsdoc swagger-ui-express cors
// npm i -D typescript ts-node nodemon @types/cors @types/express @types/lowdb @types/morgan @types/swagger-jsdoc @types/swagger-ui-express
// npx tsc --init

import app from "./app";
import cors from 'cors';
import morgan from 'morgan';


console.log("Hello world!");

app.listen(3000);

console.log("Server listening on port: " + 3000);

app