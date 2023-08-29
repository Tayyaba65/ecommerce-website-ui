import { Product } from "./types";
import P1 from "/public/p1.webp";
import P2 from "/public/p2.webp"
import P3 from "/public/p3.webp"
import M1  from "/public/m1.webp"
import M2 from "/public/m2.webp"
import K1 from "/public/k1.webp"

export const Products:Product[] = [{
    id: 1,
    name:  "Product 1",
    category: "female",
    price: 20,
    image: P1,
},
{
    id: 2,
    name:  "Product 2",
    category: "female",
    price: 200,
    image: P2,
},{
    id: 3,
    name:  "Product 3",
    category: "female",
    price: 203,
    image: P3,
},{
    id: 4,
    name:  "Product 4",
    category: "male",
    price: 204,
    image: M1,
},{
    id: 5,
    name:  "Product 5",
    category: "male",
    price: 205,
    image: M2,
},{
    id: 6,
    name:  "Product 6",
    category: "kids",
    price: 203,
    image: K1,
}
];