import express from "express";
import { PORT } from "../constants";

const app = express();

export const server = app.listen(PORT, () => {
    console.info(`🚀 [server]: running on port:${PORT}`)
});