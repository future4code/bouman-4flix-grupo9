import { BaseDB } from "./baseDataBase";
import { Series } from "../business/entities/series";
import moment from "moment";

export class SeriesDB extends BaseDB {
    private seriesTableName = "series";

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
}