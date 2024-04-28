import { Spinner } from "react-bootstrap";
import { useAddProductMutation } from "../../../redux/features/api/apiSlice";
import styles from "./ProductForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductForm() {
  const navigate = useNavigate();
  const [addNewProduct, { isSuccess, isLoading, isError }] =
    useAddProductMutation();
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);
    const data = JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    });
    try {
      await addNewProduct(data).unwrap();
      navigate("/products");
    } catch (error) {
      setError(error);
    }
  }
  return (
    <div className={styles.container}>
      {isSuccess && (
        <div className="alert alert-success">Product added successfully</div>
      )}
      {isError && (
        <div className="alert alert-danger">Failed to add product</div>
      )}
      {isLoading && <Spinner animation="border" />}
      {error && <div className="alert alert-danger">{error.message}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}
