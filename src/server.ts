import express from 'express';
import { router } from './Routes';

import "./Database";

const app = express();

app.use(express.json());
app.use(router)

app.listen(3333, () => console.log("App started on port 3333"));
