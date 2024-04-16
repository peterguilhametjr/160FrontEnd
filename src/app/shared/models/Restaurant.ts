export class Restaurant{
    id!:number;
    name!:string;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageURL!:string;
    location!:string;
}