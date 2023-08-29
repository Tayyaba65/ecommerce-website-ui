import P1 from "/public/p1.webp"
import Image, { StaticImageData } from "next/image"
import ProductCard from "@/component/layout/ProductCard"
import { Products } from "@/lib/mock"

const ProductList = () => {

  const productChecks = Products.slice(0,3)
 
  return (
   <div className="flex justify-evenly mt-16 py-10">
    {
      productChecks.map((Product)=>(
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
   


    
    {/*<ProductCard title="abc" price={100} img={P1}/>
    <ProductCard title="def" price={100} img={P1}/>
    <ProductCard title="ghi" price={1000} img={P1}/> */}
    </div>
  ) 
}

export default ProductList