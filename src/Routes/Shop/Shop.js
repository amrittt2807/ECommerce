import React, { useContext } from "react";
import "./Shop.scss"
import ShopCard from "../../Components/ShopCard/ShopCard";

import { ProductContext } from "../../Context/Products/ProductsContxt";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="Card-Container">
      {products.map((product)=>{
        return(          
        <ShopCard key={product.id} product={product}/>
        )
      })}
    </div>
  );
};

export default Shop;
