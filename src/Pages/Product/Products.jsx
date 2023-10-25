import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div>
      <img src="https://i.ibb.co/4Fm9MgB/image.png" alt="" />
      <h2 className="text-3xl font-semibold my-7">Featured Products </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 ">
        {products.map((productInfo) => (
          <ProductCard
            key={productInfo.id}
            productData={productInfo}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
