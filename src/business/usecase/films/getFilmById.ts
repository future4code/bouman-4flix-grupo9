import { FilmDB } from "../../../data/filmDB";

export class GetFilmByIdUC {
    constructor(private db: FilmDB) { }

    public async execute(input: GetFilmByIdUCInput): Promise<GetFilmByIdUCOutput> {
        if(!input.id) {
            throw new Error("ID is missing")
        }

        const response = await this.db.getFilmById(input.id)
        return {
            title: response?.getTitle(),
            premiere_date: response?.getPremiereDate(),
            synopsis: response?.getSynopsis(),
            link: response?.getLink(),
            length: response?.getLength(),
            picture: response?.getPicture()
        }
    }
}

export interface GetFilmByIdUCInput {
    id: string
}

export interface GetFilmByIdUCOutput {
    title: string | undefined;
    premiere_date: string | undefined;
    synopsis: string | undefined;
    link: string | undefined;
    length: number | undefined;
    picture: string | undefined;
}