import express from "express";
import { app } from "../connections";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan(":status :method :url :response-time ms"));

export * from "./validator";
