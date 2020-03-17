import { Episodes } from "../../entities/episodes";
import { v4 } from "uuid";
import { Series } from "../../entities/series";
import { EpisodesDB } from "../../../data/episodesDB";
import { SeriesDB } from "../../../data/seriesDB";


export class CreateSeriesUC {
    constructor(private dbSeries: SeriesDB, private dbEpisodes: EpisodesDB) { }

    public async execute(inputSeries: CreateSeriesUCInput): Promise<CreateSeriesUCOutput> {

        const idSeries = v4()

        if (
            !inputSeries.title
            || !inputSeries.premiere_date
            || !inputSeries.synopsis
            || !inputSeries.link
            || !inputSeries.picture
        ) {
            throw new Error("some input field is missing or empty")
        }

        const series =  new Series(
            idSeries,
            inputSeries.title,
            inputSeries.premiere_date,
            inputSeries.synopsis,
            inputSeries.link,
            inputSeries.picture
        )

        await this.dbSeries.createSeries(series)

        inputSeries.episodes.forEach( async(inputEpisode) => {
            const idEpisode = v4()
            
            const episodeOfSeries = new Episodes(
                idEpisode,
                inputEpisode.title,
                inputEpisode.length,
                inputEpisode.link,
                inputEpisode.synopsis,
                inputEpisode.picture,
                idSeries
            )
            await this.dbEpisodes.createEpisodes(episodeOfSeries)
        } )

        return {
            message: "Series created successfully"
        }
    }
}

export interface CreateSeriesUCInput {
    title: string;
    premiere_date: string;
    synopsis: string;
    link: string;
    picture: string;
    episodes: CreateEpisodesUCInput[];
}

export interface CreateEpisodesUCInput {
    title: string;
    length: number;
    link: string;
    synopsis: string;
    picture: string;
}


export interface CreateSeriesUCOutput {
    message: string;
}