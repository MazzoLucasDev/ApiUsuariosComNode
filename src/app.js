import express from "express";
import statusRoutes from "./routes/statusRoute.js";

const app = express();

app.use(express.json());

app.use(statusRoutes);

export default app;
