export class Restaurant{
    id!:number;
    name!:string;
    tags?:string[];
    favorite?:boolean = false;
    stars?:number;
    imageURL?:string;
    location!:string;
    menu!: MenuItem[];
}

export interface MenuItem {
    foodName: string;
    foodPrice: number;
}