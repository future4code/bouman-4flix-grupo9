import { Request, Response } from "express";
import { CreateFilmUC } from "../../../business/usecase/films/createFilm";
import { FilmDB } from "../../../data/filmDB";

export const createFilmEndpoit = async (req: Request, res: Response) => {
    try {
        const createFilmUC = new CreateFilmUC(new FilmDB())
        const result = await createFilmUC.execute({
            title: req.body.title,
            premiere_date: req.body.premiere_date,
            synopsis: req.body.synopsis,
            link: req.body.link,
            length: req.body.length,
            picture: req.body.picture
        })

        res.status(200).send(result)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}