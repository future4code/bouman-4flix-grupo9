import { BaseDB } from "./baseDataBase";
import { Episodes } from "../business/entities/episodes";

export class EpisodesDB extends BaseDB {
    private episodesTableName = "episodes"

    public async createEpisodes(episodes: Episodes): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.episodesTableName}
            (id, title, length, link, picture, synopsis, series_id)
            VALUES(
                '${episodes.getId()}',
                '${episodes.getTitle()}',
                '${episodes.getLength()}',
                '${episodes.getLink()}',
                '${episodes.getPicture()}',
                "${episodes.getSynopsis()}",
                '${episodes.getSeriesId()}'
            );
        `)
    }
}