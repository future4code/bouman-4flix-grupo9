import { Request, Response } from "express";
import { SeriesDB } from "../../../data/seriesDB";
import { CreateSeriesUC } from "../../../business/usecase/series/createSeries";
import { EpisodesDB } from "../../../data/episodesDB";

export const createSeriesEndpoint = async (req: Request, res: Response) => {
    try {
        const createSeriesUC = new CreateSeriesUC(new SeriesDB(), new EpisodesDB())
        const result = await createSeriesUC.execute({
            title: req.body.title,
            premiere_date: req.body.premiere_date,
            synopsis: req.body.synopsis,
            link: req.body.link,
            picture: req.body.picture,
            episodes: req.body.episodes
        })

        res.status(200).send(result)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}