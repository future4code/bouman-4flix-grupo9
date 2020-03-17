import moment from "moment"

export class Film {
    constructor(
        private id:string,
        private title:string,
        private premiere_date:string,
        private synopsis:string,
        private link:string,
        private length:number,
        private picture:string
    ){}

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

    public getPremiereDate():string{
        return moment(this.premiere_date).format('DD/MM/YYYY')
    }

    public setPremiereDate(premiere_date:string):void{
        this.premiere_date = premiere_date
    }

    public getSynopsis():string{
        return this.synopsis
    }

    public setSynopsis(synopsis:string):void{
        this.synopsis = synopsis
    }

    public getLink():string{
        return this.link
    }

    public setLink(link:string):void{
        this.link = link
    }
    
    public getLength():number{
        return this.length
    }

    public setLength(length:number):void{
        this.length = length
    }

    public getPicture():string{
        return this.picture
    }

    public setPicture(picture:string):void{
        this.picture = picture
    }
}