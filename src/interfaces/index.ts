export interface IProductsCategories{
    id?:string | undefined;
    name:string;
    imageURL:string;
}
export interface IProducts{
    id?:string | undefined;
    title:string;
    description:string;
    imageURL:string;
    price:string;
    colors:string[];
    category:IProductsCategories;
}


export interface IInput{
    type:string;
    name:"title" | "description" | "imageURL" | "price";
    id:string;
    label:string;
}