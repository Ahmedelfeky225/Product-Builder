import {v4 as uuid} from "uuid";
import { IProducts } from "../interfaces";
export const productList :IProducts[]= [
    {
        id:uuid(),
        title:"Luxury Sports Car",
        Description: "A luxury sports car that combines high performance with sleek design, equipped with a powerful engine",
        imageURL:"https://img.freepik.com/free-photo/white-coupe-sport-car-standing-road-front-view_114579-4005.jpg?t=st=1730533056~exp=1730536656~hmac=5d5634dbfadcb8d711c177629862fac66062f709feba289b2e355501b75b848e&w=740",
        price:" 75,000 U.S. dollars",
        colors:["#FF5733", "#33FF57", "#3357FF", "#FFC300"],
        category:{
            name:"Cars",
            imageURL:"https://img.freepik.com/free-photo/white-coupe-sport-car-standing-road-front-view_114579-4005.jpg?t=st=1730533056~exp=1730536656~hmac=5d5634dbfadcb8d711c177629862fac66062f709feba289b2e355501b75b848e&w=740",
            },
    },
    {
        id: uuid(),
        title: "Smart LED TV",
        Description: "A 55-inch 4K Ultra HD Smart LED TV that offers vibrant colors, deep contrasts, and a seamless streaming experience. ",
        imageURL: "https://img.freepik.com/premium-photo/flat-screen-tv-with-sunset-top_1236203-8107.jpg?ga=GA1.1.1891406925.1730442969&semt=ais_hybrid",
        price: "1,200 U.S. dollars",
        colors: ["#000000", "#FFFFFF", "#808080", "#FFD700"],
        category: {
            name: "Electronics",
            imageURL: "https://img.freepik.com/premium-photo/flat-screen-tv-with-sunset-top_1236203-8107.jpg?ga=GA1.1.1891406925.1730442969&semt=ais_hybrid",
        },
    },
        {
            id: uuid(),
            title: "Gaming Laptop",
            Description: "A high-performance gaming laptop featuring the latest graphics card and a powerful processor. ",
            imageURL: "https://img.freepik.com/premium-photo/laptop-with-video-game-screen-fire-screen_1277297-29001.jpg?w=740",
            price: "35.500",
            colors: ["#000080", "#B22222", "#FF8C00", "#8A2BE2"],
            category: {
                name: "Computers",
                imageURL: "https://img.freepik.com/premium-photo/laptop-with-video-game-screen-fire-screen_1277297-29001.jpg?w=740",
            },
        },
        {
            id: uuid(),
            title: "Mercedes-Benz E200 coupe 2023",
            Description: "The 2020 Mercedes-Benz C300 is a luxury sedan with a 2.0-liter turbocharged engine producing 255 horsepower. ",
            imageURL: "https://img.freepik.com/free-photo/yellow-car-gas-station_23-2150697544.jpg?t=st=1730533412~exp=1730537012~hmac=74ce28e27c31ad82380cf228bac659faf091b7758e6c54d06feaef581bab8b3c&w=740",
            price: "EGP 4,200,000",
            colors: ["#FF0000", "#0000FF", "#FFFF00", "#000000"],
            category: {
                name: "Cars",
                imageURL: "https://img.freepik.com/free-photo/yellow-car-gas-station_23-2150697544.jpg?t=st=1730533412~exp=1730537012~hmac=74ce28e27c31ad82380cf228bac659faf091b7758e6c54d06feaef581bab8b3c&w=740",
            },
        }
        
    
]

