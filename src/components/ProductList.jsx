import { Spinner } from "react-bootstrap";
import { useFetchProductsQuery } from "../redux/features/api/apiSlice";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { data, isLoading, isError, error } = useFetchProductsQuery();
  // const { data: products, isLoading, isError, error } = useFetchProductsQuery();

  // const { products, totalCount } = data;

  if (isLoading) {
    return (
      <>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Spinner animation="border" className="d-block w-30 mx-auto" />;
        </div>
      </>
    );
  }
  if (isError) {
    return <div>Error: {error.toString()}</div>;
  }

  const { products, totalCount } = data;
  console.log(products);

  return (
    <>
      <div className="row">
        {totalCount === 0 && <div>No products found</div>}
        {totalCount > 0 &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} size="bg" />
          ))}
      </div>
    </>
  );
}
