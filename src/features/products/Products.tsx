import Product from "./Product";
import Spinner from "../../components/Spinner";
import { useProducts } from "./useProducts";
import Pagination from "../../components/Pagination";

const Products = () => {
  const { isLoading, products, count } = useProducts();

  if (isLoading) return <Spinner />;

  if (!products?.length)
    return <p className="text-darkSlate">No products could be found.</p>;

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination count={count} />
    </>
  );
};

export default Products;
