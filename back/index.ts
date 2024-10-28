import express from 'express';
import { console } from 'node:inspector/promises';

const app = express();


app.listen(5000, ()=> console.log("server open"));

