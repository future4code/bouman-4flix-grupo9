import { SeriesDB } from "../../../data/seriesDB";
import { Episodes } from "../../entities/episodes";

export class GetSeriesByIdUC {
    constructor(private db: SeriesDB) { }

    public async execute(input: GetSeriesByIdUCInput): Promise<GetSeriesByIdUCOutput> {
        if(!input.id) {
            throw new Error("ID is missing")
        }

        console.log(input.id)
        const response = await this.db.getSeriesById(input.id)
        return {
            title: response?.getTitle(),
            premiere_date: response?.getPremiereDate(),
            synopsis: response?.getSynopsis(),
            link: response?.getLink(),
            picture: response?.getPicture()
        }
    }
}

export interface GetSeriesByIdUCInput {
    id: string
}

export interface GetSeriesByIdUCOutput {
    title: string | undefined;
    premiere_date: string | undefined;
    synopsis: string | undefined;
    link: string | undefined;
    picture: string | undefined;
}