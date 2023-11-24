import fs from 'fs';
import express from "express";
import swaggerUi from 'swagger-ui-express';

import swaggerJson from '../helps/swagger.json';

const swaggerRouter = express.Router();


swaggerRouter.use('/', swaggerUi.serve);

swaggerRouter.get('/', swaggerUi.setup(swaggerJson));

export default swaggerRouter;