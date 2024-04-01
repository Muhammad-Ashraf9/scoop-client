import React from "react";
const list = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    image: "./03149df0-ef7d-44b1-b256-8853ef0e5190.jfif",
  },
  {
    id: 2,
    title: "Product 2",
    price: 100,
    image: "./03149df0-ef7d-44b1-b256-8853ef0e5190.jfif",
  },
  {
    id: 3,
    title: "Product 3",
    price: 100,
    image: "./03149df0-ef7d-44b1-b256-8853ef0e5190.jfif",
  },
  {
    id: 4,
    title: "Product 4",
    price: 100,
    image: "./03149df0-ef7d-44b1-b256-8853ef0e5190.jfif",
  },
  {
    id: 5,
    title: "Product 5",
    price: 100,
    image: "./03149df0-ef7d-44b1-b256-8853ef0e5190.jfif",
  },
  {
    id: 6,
    title: "Product 6",
    price: 100,
    image: "./03149df0-ef7d-44b1-b256-8853ef0e5190.jfif",
  },
  {
    id: 7,
    title: "Product 7",
    price: 100,
    image: "./03149df0-ef7d-44b1-b256-8853ef0e5190.jfif",
  },
  {
    id: 8,
    title: "Product 8",
    price: 100,
    image: "./03149df0-ef7d-44b1-b256-8853ef0e5190.jfif",
  },
  {
    id: 9,
    title: "Product 9",
    price: 100,
    image: "./03149df0-ef7d-44b1-b256-8853ef0e5190.jfif",
  },
  {
    id: 10,
    title: "Product 10",
    price: 100,
    image: "./03149df0-ef7d-44b1-b256-8853ef0e5190.jfif",
  },
];

export default function ProductList() {
  return (
    <div className="container">
      <div className="row">
        {list.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
