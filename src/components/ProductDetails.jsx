import { useParams } from "react-router-dom";
import { useFetchProductByIdQuery } from "../redux/features/api/apiSlice";
import { Spinner } from "react-bootstrap";

export default function ProductDetails() {
  const { productId } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useFetchProductByIdQuery(productId);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status" variant="danger">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
