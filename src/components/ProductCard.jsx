import styles from "./ProductCard.module.css";

export default function ProductCard({ product, size }) {
  const { id, title, price, image } = product;

  return (
    <div className={`card ${styles[size]}`}>
      <img src={image} className="card-img-top img-fluid" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">Price: ${price}</p>
        <button href="" className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
