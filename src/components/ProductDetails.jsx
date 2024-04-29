import { useParams } from "react-router-dom";
import { useFetchProductByIdQuery } from "../redux/features/api/apiSlice";
import { Spinner } from "react-bootstrap";
/*
   "product": {
        "_id": "660e03661f3b91fed584bf9c",
        "name": "update",
        "description": "High-quality whey protein supplement for muscle building and recovery.",
        "category": "63e7d9c9f8c7d8e7a4b2c3d4",
        "subcategory": "63e7d9c9f8c7d8e7a4b2c3d5",
        "price": 29.99,
        "discountedPrice": 24.99,
        "images": [
            "https://example.com/product-image-1.jpg",
            "https://example.com/product-image-2.jpg"
        ],
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "flavors": [
            "Chocolate",
            "Vanilla"
        ],
        "inventory": 100,
        "tags": [
            "Whey",
            "Protein Powder",
            "Muscle Building"
        ],
        "averageRating": 0,
        "numReviews": 0,
        "createdAt": "2024-04-04T01:33:26.113Z",
        "updatedAt": "2024-04-04T03:25:38.857Z",
        "__v": 0
    }
*/
export default function ProductDetails() {
  const { productId } = useParams();
  const { data, error, isLoading } = useFetchProductByIdQuery(productId);

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

  const { product } = data;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <img
            src={product.images[0]}
            className="img-fluid"
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
