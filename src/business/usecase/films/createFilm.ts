import { FilmDB } from "../../../data/filmDB";
import { v4 } from "uuid";
import { Film } from "../../entities/films";

export class CreateFilmUC {
    constructor(private db: FilmDB) { }

    public async execute(input: CreateFilmUCInput): Promise<CreateFilmUCOutput> {
        const id = v4()

        if (
            !input.title
            || !input.premiere_date
            || !input.synopsis
            || !input.link
            || input.length <= 0
            || !input.picture
        ) {
            throw new Error("some input field is missing or empty")
        }

        await this.db.createFilm(
            new Film(
                id,
                input.title,
                input.premiere_date,
                input.synopsis,
                input.link,
                input.length,
                input.picture
            )
        )

        return {
            message: "Movie created successfully"
        }
    }
}

export interface CreateFilmUCInput {
    title: string;
    premiere_date: string;
    synopsis: string;
    link: string;
    length: number;
    picture: string;
}

export interface CreateFilmUCOutput {
    message: string;
}