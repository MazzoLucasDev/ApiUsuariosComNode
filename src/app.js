import express from "express";
import statusRoutes from "./routes/statusRoute.js";
import usuariosRoute from "./routes/usuariosRoute.js";
import produtosRoute from "./routes/produtosRoute.js";
import {logger} from "./middlewares/loggerMiddleware.js"

const app = express();

app.use(express.json());

app.use(logger);

app.use(statusRoutes);

app.use(usuariosRoute);

app.use(produtosRoute);

export default app;
