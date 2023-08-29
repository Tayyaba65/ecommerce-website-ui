import ProductCard from "@/component/layout/ProductCard"
import { Products } from "@/lib/mock"
import { StaticImageData } from "next/image"
import  Image  from "next/image"


const getProductsDetail =(id: number  | string) => {
    return Products .filter((product) => product.id === id)
}



export default function Page({ params }: { params: { id: string} }) {
const result = getProductsDetail(params.id);
return(
    <div className="flex justify-evenly mt-16 py-10 flex-wrap ">
       {result.map((Products)=> (
        <div key={Products.id} className="flex justify-between">
            <div>
                <Image src={Products.image} alt={Products.name}/>
            </div>
            <div>Product Detail</div>
        </div>
        ))
        }
      </div>
    )}