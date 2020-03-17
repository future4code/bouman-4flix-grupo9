import { Series } from "./series"

export class Episodes {
    constructor(
        private id:string,
        private title:string,
        private length: number,
        private link: string,
        private synopsis:string,
        private picture:string,
        private series_id:string,
    ) {}

    public getId():string {
        return this.id
    }

    public setId(id:string):void{
        this.id = id
    }

    public getTitle():string{
        return this.title
    }

    public setTitle(title:string):void{
        this.title = title
    }

    public getLength():number{
        return this.length
    }

    public setLength(length:number):void{
        this.length = length
    }
    
    public getLink():string{
        return this.link
    }

    public setLink(link:string):void{
        this.link = link
    }

    public getSynopsis():string{
        return this.synopsis
    }

    public setSynopsis(synopsis:string):void{
        this.synopsis = synopsis
    }

    public getSeriesId():string {
        return this.series_id
    }

    public setSerieId(series_id:string):void{
        this.series_id = series_id
    }

    public getPicture():string{
        return this.picture
    }

    public setPicture(picture:string):void{
        this.picture = picture
    }
}