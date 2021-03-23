import express from 'express';
import {categoriesRoutes} from './Routes/Categories.routes';

const app = express();

app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log("App started on port 3333"));
