import { Products } from "@/lib/mock"
import ProductCard from "@/component/layout/ProductCard"
import { StaticImageData } from "next/image"

const AllProducts = () =>{
    return(
        <div className="flex justify-evenly mt-16 py-10 flex-wrap ">
        {
          Products.map((Product)=>(
            <ProductCard 
            key={Product.id} 
            title={Product.name} 
            price={Product.price} 
            img={Product.image as StaticImageData}
            category={Product.category}
            id = {Product.id}
            />
          ))
        }
        </div>
    )
}
export default AllProducts 