import express from 'express';
import parkRouters from './routers/park_route';

const app = express();

app.use(express.json());

app.use('/park', parkRouters);

app.listen(5001);