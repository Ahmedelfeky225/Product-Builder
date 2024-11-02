export interface IProducts{
    id?:string | undefined;
    title:string;
    Description:string;
    imageURL:string;
    price:string;
    colors:string[];
    category:{
        name:string;
        imageURL:string;
    }
}