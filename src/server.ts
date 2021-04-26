import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import { router } from './Routes';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import "./Database";
import "./Shared/Container"

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router)

app.listen(3333, () => console.log("App started on port 3333"));
