import "./ProductList.css";
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

function chunk(array, size) {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

export default function ProductList() {
  const chunkedProductList = chunk(list, 3); // Chunk the list into groups of 3

  return (
    <div
      id="productCarousel"
      className="carousel carousel-dark slide m-auto col-12"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {chunkedProductList.map((productChunk, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row justify-content-center">
              {productChunk.map((product) => (
                <div className="col-3" key={product.id}>
                  <div className="card col-10 ">
                    <img
                      src={product.image}
                      className="card-img-top "
                      alt={product.title}
                    />
                    <div className="card-body card-footer ">
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
        ))}
      </div>
      <button
        className="carousel-control-prev  "
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon  border-0"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next  "
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon " aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
