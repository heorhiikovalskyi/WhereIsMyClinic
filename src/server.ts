import express from 'express';
import 'dotenv/config.js';
import { schema } from './graphQL/schema.js';
import { graphqlHTTP } from 'express-graphql';
//import { fillDb } from './db/createDb/fillDb.js';
import { errorHandler } from './errorHandler.js';

//await fillDb();

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: errorHandler,
  })
);

app.listen(PORT);
