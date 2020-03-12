import express, { Request, Response } from "express";
import { createFilmEndpoint } from "./endpoints/films/createFilm";
import { getFilmByIdEndpoint } from "./endpoints/films/getFilmById";

const app = express();
app.use(express.json());

app.post("/createFilm", createFilmEndpoint)
app.get("/getFilm/:id", getFilmByIdEndpoint)

export default app;
