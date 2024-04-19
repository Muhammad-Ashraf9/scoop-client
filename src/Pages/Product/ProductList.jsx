import s from "./ProductList.module.css";
import { useState, useEffect, useCallback } from "react";

//testing Redux 
import { useFilter } from '../../context/FilterContext';
import { getProducts } from '../../services/productService';



const productListHissen = [
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
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
      "/src/images/925917713s.jpg",
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
  //test redux

  const { productList, FetchProducts } = useFilter()
  const[error,setError] = useState('')
  const fetchProducts = useCallback(async () => {
    try {
      const response = await getProducts("searchParamWord");
      FetchProducts(response.data)
    }
    catch (err) {
      setError("Sorry, Server Error! Failed To Load Data")
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  

  // Flatten the list of products into a list of images, preserving the product data
  const imagesList = productListHissen.flatMap((product) =>
    product.images.map((image) => ({
      ...product,
      image, // add image as a property
    }))
  );

  // Chunk the images list into groups of 5 for the carousel slides
  const chunkedImagesList = chunk(imagesList, 5); // Adjust the chunk size to 5 items per slide

  return (
    <div
      id="productCarousel"
      className="carousel slide position-relative"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-inner">
        {chunkedImagesList.map((imageChunk, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row flex-nowrap justify-content-center">
              {" "}
              {/* Changed to flex-nowrap for continuous row */}
              {imageChunk.map((product, imageIndex) => (
                <div className="col-2" key={imageIndex}>
                  {" "}
                  {/* Use col-2 to make five items per row */}
                  <div className={s.card}>
                    <img
                      src={product.image}
                      className={s.cardTop}
                      alt={product.title}
                    />
                    <div className={s.cardBody}>
                      <h5 className={s.cardTitle}>{product.title}</h5>
                      <p className={s.cardText}>Price: ${product.price}</p>
                      <a href="#" className={s.btnProduct}>
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

      <div className="carousel-controls-container position-absolute top-0 end-0 m-3">
        {/* Carousel control prev */}
        <button
          className={s.carouselControlPrev} // Adjust spacing as needed
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span className={s.carouselControlPrevicon} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Carousel control next */}
        <button
          className={s.carouselControlNext}
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span className={s.carouselControlNexticon} aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
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
            <div id="FilterBtn">
              <FilterButtons />
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
//buttons//

export const FilterButtons = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState("New Arrivals");

  // Function to handle button click
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Function to get the button class
  const getButtonClass = (buttonName) => {
    return buttonName === activeButton ? s.btnMain : s.btnSide;
  };

  return (
    <div id="FilterBtn">
      <button
        className={getButtonClass("Sale")}
        onClick={() => handleButtonClick("Sale")}
      >
        Sale
      </button>
      <button
        className={getButtonClass("New Arrivals")}
        onClick={() => handleButtonClick("New Arrivals")}
      >
        New Arrivals
      </button>
      <button
        className={getButtonClass("Latest")}
        onClick={() => handleButtonClick("Latest")}
      >
        Latest
      </button>
    </div>
  );
};
