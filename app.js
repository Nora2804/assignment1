import mongoose from "mongoose";
import express from "express";
import productRouter from "./src/routers/product";
import authRouter from ".routers/auth";

const app = express();

app.use(express.json());

app.use("/api", productRouter);
app.use("/api", authRouter);

mongoose.connect("mongodb://127.0.0.1:27017/web17301")

export const viteNodeApp = app;