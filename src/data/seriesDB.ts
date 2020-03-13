import { BaseDB } from "./baseDataBase";
import { Series } from "../business/entities/series";
import moment from "moment";

export class SeriesDB extends BaseDB {
    private seriesTableName = "series";
    private episodesTableName = "episodes";

    private mapDateToDbDate(input: string): string {
        return moment(input).format("YYYY-MM-DD")
     }

    public async createSeries(series: Series): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.seriesTableName}
            ( id, title, premiere_date, synopsis, link, picture ) 
            VALUES(
                '${series.getId()}',
                '${series.getTitle()}',
                '${this.mapDateToDbDate(series.getPremiereDate())}',
                '${series.getSynopsis()}',
                '${series.getLink()}',
                '${series.getPicture()}'
            );
        `)
    }

    public async getSeriesById(id: string): Promise<Series | undefined> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.seriesTableName}
            JOIN ${this.episodesTableName} ON ${this.episodesTableName}.series_id = ${this.seriesTableName}.id 
            WHERE series.id = "${id}"
        `)

        const series = new Series(
            result[0][0].id, result[0][0].title, result[0][0].premiere_date,
            result[0][0].synopsis, result[0][0].link, result[0][0].picture, 
            result[0][0].episodes
        )

        return series
    }
}