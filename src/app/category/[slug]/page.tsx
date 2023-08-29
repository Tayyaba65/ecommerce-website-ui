import { Products } from "@/lib/mock"
import ProductCard from "@/component/layout/ProductCard"
import { StaticImageData } from "next/image"

const getProductsByCategory =(category: string) => {
    return Products .filter((product) => (product.category === category))
}



export default function Page({ params }: { params: { slug: string } }) {
const result = getProductsByCategory(params.slug);
return(
    <div className="flex justify-evenly mt-16 py-10 flex-wrap ">
        {
            result.length>0 ?result.map((Product)=>(
                <ProductCard 
                key={Product.id} 
                title={Product.name} 
                price={Product.price} 
                img={Product.image as StaticImageData}
                category={Product.category}
                id = {Product.id}
                />
              )):<p>No Products Found</p> 
        }
    </div>
)
}

