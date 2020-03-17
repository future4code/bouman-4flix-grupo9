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

    public async getFilmById(id: string): Promise<Film | undefined> {
        const result = await this.connection.raw(`
        SELECT * FROM ${this.filmTableName} 
        WHERE id = "${id}";
        `)

        const film = new Film(
            result[0][0].id, result[0][0].title, result[0][0].premiere_date,
            result[0][0].synopsis, result[0][0].link, result[0][0].length, 
            result[0][0].picture
            )
        return film
    }
}