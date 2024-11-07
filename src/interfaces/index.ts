export interface IProducts{
    id?:string | undefined;
    title:string;
    description:string;
    imageURL:string;
    price:string;
    colors:string[];
    category:{
        name:string;
        imageURL:string;
    }
}


export interface IInput{
    type:string;
    name:"title" | "description" | "imageURL" | "price";
    id:string;
    label:string;
}