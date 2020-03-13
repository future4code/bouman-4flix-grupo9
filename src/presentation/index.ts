import express, { Request, Response } from "express";
import { createFilmEndpoint } from "./endpoints/films/createFilm";
import { getFilmByIdEndpoint } from "./endpoints/films/getFilmById";
import { createSeriesEndpoint } from "./endpoints/series/createSeries";
import { getSeriesByIdEndpoint } from "./endpoints/series/getSeriesById";

const app = express();
app.use(express.json());

app.post("/createFilm", createFilmEndpoint)
app.get("/getFilm/:id", getFilmByIdEndpoint)
app.post("/createSeries", createSeriesEndpoint)
app.get("/getSeries/:id", getSeriesByIdEndpoint)

export default app;
