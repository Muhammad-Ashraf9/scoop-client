import "./ProductList.css";
const productList = [
  {
    id: 1, // Unique identifier for the product
    title: "Product Name",
    description: "This is a detailed description of the product.",
    category: [
      "Supplements", // Or "Sportswear"
      "Protein",
    ], // Or "Shirts", "Shorts", etc.
    price: 29.99,
    discountedPrice: 24.99, // Optional, for sales or promotions
    images: [
      "/src/images/3c08e55c8a3e17e888022d70934f49e7.jpg",
      "/src/images/61bPLpDUtWL.jpg",
      "/src/images/Healthbox-Fitness-Addict-whey-protein-SDL781254375-1-e9111.jpg",
      "/src/images/71xDEv3pJL._AC_SL1500_.jpg",
      "/src/images/IMG_2805.jpg",
      "/src/images/925917713s.jpg",
    ],
    sizes: ["S", "M", "L", "XL"], // For sportswear products
    flavors: ["Chocolate", "Vanilla"], // For supplement products
    inventory: 100,
    tags: ["Whey", "Protein Powder", "Muscle Building"],
    averageRating: 4.2, // Computed from reviews
    numReviews: 25,
    totalSales: 1000, // property to track total sales
    createdAt: "2023-04-01T10:30:00Z",
    updatedAt: "2023-04-05T15:45:00Z",
  },
];

function chunk(array, size) {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

export function ProductList() {
  // Flatten the list of products into a list of images, preserving the product data
  const imagesList = productList.flatMap((product) =>
    product.images.map((image) => ({
      ...product,
      image, // add image as a property
    }))
  );

  // Optional: Chunk the images list if needed
  const chunkedImagesList = chunk(imagesList, 3); // Adjust the chunk size as per your requirement

  return (
    <div
      id="productCarousel"
      className="carousel carousel-dark slide m-auto col-12"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-inner">
        {chunkedImagesList.map((imageChunk, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row justify-content-center">
              {imageChunk.map((product, imageIndex) => (
                <div className="col-4" key={imageIndex}>
                  {" "}
                  {/* Increase the width of the card by changing col-3 to col-4 */}
                  <div className="card col-12">
                    <img
                      id="productImage"
                      src={product.image}
                      className="card-img-top m-auto "
                      alt={product.title}
                    />
                    <div className="card-body card-footer">
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
        className="carousel-control-prev"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon border-0"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export function ProductListFilters() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            {/* Title on the left */}
            <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
              LATEST PRODUCTS
            </h2>

            {/* Buttons on the right */}
            <div>
              <button
                className="btn btn-outline-dark"
                style={{ marginRight: "5px" }}
              >
                Sale
              </button>
              <button className="btn btn-dark" style={{ marginRight: "5px" }}>
                New Arrivals
              </button>
              <button className="btn btn-outline-dark">Latest</button>
            </div>
          </div>
        </div>

        {/* ProductList component */}
        <div className="col-12">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
