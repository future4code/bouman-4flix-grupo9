import { Request, Response } from "express";
import { GetFilmByIdUC } from "../../../business/usecase/films/getFilmById";
import { FilmDB } from "../../../data/filmDB";

export const getFilmByIdEndpoint = async (req: Request, res: Response) => {
    try {
        const getFilmByIdUC = new GetFilmByIdUC(new FilmDB())
        const result = await getFilmByIdUC.execute({
            id: req.params.id
        })

        res.status(200).send(result)
    } catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}