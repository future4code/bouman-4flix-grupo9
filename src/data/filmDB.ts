import { BaseDB } from "./baseDataBase";
import { Film } from "../business/entities/films";
import moment from "moment";

export class FilmDB extends BaseDB {
    private filmTableName = "films";

    private mapDateToDbDate(input: string): string {
       return moment(input).format("YYYY-MM-DD")
    }

    public async createFilm(film: Film): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.filmTableName} (id, title, premiere_date, synopsis, link, length, picture)
            VALUES(
                '${film.getId()}',
                '${film.getTitle()}',
                '${this.mapDateToDbDate(film.getPremiereDate())}',
                '${film.getSynopsis()}',
                '${film.getLink()}',
                '${film.getLength()}',
                '${film.getPicture()}'
            );
        `)
    }
}