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
      name: "Ash Protein",
      description:
        "High-quality Ash protein supplement for muscle building and recovery.",
      category: "661abd4620be186540f81404",
      subcategory: "661abd4620be186540f813fe",
      price: 99999.99,
      images: ["https://i.pravatar.cc", "https://picsum.photos/200"],
      inventory: 99,
    });
    try {
      console.log("data :>> ", data);
      const addedProduct = await addNewProduct(data).unwrap();
      console.log("addedProduct :>> ", addedProduct);
      // navigate("/products");
    } catch (error) {
      console.log("error :>> ", error);
      setError(error.data.message);
    }
  }
  return (
    <div className={styles.container}>
      {isSuccess && (
        <div className="alert alert-success">Product added successfully</div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}

      {isLoading && <Spinner animation="border" />}

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
