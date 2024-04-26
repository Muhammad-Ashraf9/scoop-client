import { useFetchProductsQuery } from "../redux/features/api/apiSlice";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { data: products, isLoading, isError, error } = useFetchProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} size="bg" />
        ))}
      </div>
    </>
  );
}
