import express from 'express';
import {categoriesRoutes} from './Routes/Categories.routes';
import { specificationsRoutes } from './Routes/Specification.routes';

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("App started on port 3333"));
