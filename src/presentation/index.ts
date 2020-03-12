import express, { Request, Response } from "express";
import { createFilmEndpoit } from "./endpoints/films/createFilm";

const app = express();
app.use(express.json());

app.post("/createFilm", createFilmEndpoit)

export default app;
