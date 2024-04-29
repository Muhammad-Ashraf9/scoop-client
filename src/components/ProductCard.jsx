import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useState } from "react";

export default function ProductCard({ product, size }) {
  const { _id: id, name, price, images } = product;

  const [currentImage, setCurrentImage] = useState(0);

  const image = images[currentImage];
  console.log(image);
  function handleHover() {
    if (images.length > 1) {
      setCurrentImage(1);
    }
  }

  return (
    <div className={`card ${styles[size]}`}>
      <Link to={`/test/${id}`}>
        <img
          src={image}
          className="card-img-top img-fluid"
          alt={name}
          onMouseEnter={() => handleHover()}
          onMouseLeave={() => setCurrentImage(0)}
        />
        <div className="card-body">
          <h5 className="card-title">{name.slice(0, 50)}</h5>
          <p className="card-text">Price: ${price}</p>
          <button href="" className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
}
