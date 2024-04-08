import  { useState } from "react";
import { Form } from "react-bootstrap";
import { Navbar } from "../../components/Layout/Navbar.jsx";
import "./Checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
var cartItems=[
  {
    _id: 1, // Unique identifier for the product
    name: "Rainbow Six Siege shirt", // Name of the product
    description: "a very good shirt that you can wear every where and everyday any thing i don't know what else to say but i will keep on writing.",
    category: "Sportswear", // Or "Sportswear ,Supplements"
    subcategory: "Shirts", // Or "Shirts", "Shorts", "Protein" etc.
    price: 400000,
    //discountedPrice: 24.99, // Optional, for sales or promotions
    images: [
    "https://ih1.redbubble.net/image.5027671498.5011/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.webp",
    "https://ih1.redbubble.net/image.5027671498.5011/ssrco,classic_tee,two_models,101010:01c5ca27c6,front,tall_portrait,750x1000.1.webp"
    ],
    size: ["S"], // For sportswear products
    //flavors: ["Chocolate", "Vanilla"], // For supplement products
    inventory: 100,
    //tags: ["Whey", "Protein Powder", "Muscle Building"],
   // averageRating: 4.2, // Computed from reviews
    //numReviews: 25,
    //totalSales: 1000, // property to track total sales
    //createdAt: ("2023-04-01T10:30:00Z"), //ISODate,
    //updatedAt: ("2023-04-05T15:45:00Z")  //ISODate
    },
  {
    _id: 2, // Unique identifier for the product
    name: "Protien Powder", // Name of the product
    description: "a very good Powder.",
    category: "Supplements", // Or "Sportswear ,Supplements"
    subcategory: "Protein", // Or "Shirts", "Shorts", "Protein" etc.
    price: 1500,
    images: [
    "https://www.nbs-supplements.com/wp-content/uploads/2024/04/Stenabolic_front-copy.webp",
    "https://www.nbs-supplements.com/wp-content/uploads/2024/04/Stenabolic_front-copy.webp"
    ],
   // sizes: ["S", "M", "L", "XL"], // For sportswear products
    flavor: "Chocolate", // For supplement products
    inventory: 100,
   // tags: ["Whey", "Protein Powder", "Muscle Building"],
   // averageRating: 4.2, // Computed from reviews
    //numReviews: 25,
    //totalSales: 1000, // property to track total sales
    //createdAt: ("2023-04-01T10:30:00Z"), //ISODate,
    //updatedAt: ("2023-04-05T15:45:00Z")  //ISODate
    },
    
];
export function Checkout() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <Navbar/>
      <div className="Content">
        <div id="all">
          <div id="content" className="container ">
            <div className="row ">
              <Form
                id="checkoutForm"
                validated={validated} onSubmit={handleSubmit}
                className="row g-3 "
                noValidate 
              >
                <div className="col-lg-8 col-md-12">
                  <div className="rounded-4 p-4 row g-3 bgPaige">
                    <span className="fs-4">Personal information:</span>
                    <div className="col-md-6 ">
                      <label htmlFor="FirstName" className="form-label">
                        First name
                      </label>
                      <input
                        pattern="[A-Za-z]{3,}"
                        name="FirstName"
                        type="text"
                        className="form-control"
                        id="FirstName"
                        required
                      />
                      <div className="valid-feedback">Cool name!</div>
                      <div className="invalid-feedback">
                        Please enter your first name.
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastname" className="form-label">
                        Last name
                      </label>
                      <input
                        pattern="[A-Za-z]{3,}"
                        name="lastname"
                        type="text"
                        className="form-control"
                        id="lastname"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please enter your last name.
                      </div>
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="userAddress" className="form-label">
                        Residence Address
                      </label>
                      <input
                        type="text"
                        name="userAddress"
                        className="form-control"
                        id="userAddress"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please provide a valid Address.
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <label htmlFor="Email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="Email"
                        className="form-control"
                        id="Email"
                        required
                      />
                      <div className="valid-feedback">nice email!</div>
                      <div className="invalid-feedback">
                        Please enter your email.
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <label htmlFor="Phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        name="Phone"
                        pattern="^01(0|1|2|5)[0-9]{8}$"
                        type="tel"
                        className="form-control"
                        id="Phone"
                        required
                      />
                      <div className="valid-feedback">Looks good.</div>
                      <div className="invalid-feedback">
                        Please enter your number which consists of 11 numbers.
                      </div>
                    </div>
                  </div>

                  <div className="rounded-4 p-4 row g-3 bgPaige">
                    <span className="fs-4">Shipping Details:</span>
                    <div className="col-md-12 ">
                      <label htmlFor="streetAddress" className="form-label">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        className="form-control"
                        id="streetAddress"
                        required
                      />
                      <div className="valid-feedback">
                        Now I know where you live.
                      </div>
                      <div className="invalid-feedback">
                        Please enter your street address.
                      </div>
                    </div>
                    <div className="col-md-4">
                    <label htmlFor="Governerate" className="form-label">
                    Governerate
                      </label>
                      <input
                        name="Governerate"
                        pattern="[A-Za-z]{3,}"
                        type="text"
                        className="form-control"
                        id="Governerate"
                        required
                      />
                      <div className="valid-feedback">Sounds good.</div>
                      <div className="invalid-feedback">
                        Please enter your city name.
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="City" className="form-label">
                        City
                      </label>
                      <input
                        name="City"
                        pattern="[A-Za-z]{3,}"
                        type="text"
                        className="form-control"
                        id="City"
                        required
                      />
                      <div className="valid-feedback">Sounds good.</div>
                      <div className="invalid-feedback">
                        Please enter your city name.
                      </div>
                    </div>
                    <div className="col-md-4">
                    <label
                        htmlFor="Payment"
                        name="Payment"
                        className="form-label"
                      >
                        Way OF Payment
                      </label>
                      <select className="form-select" id="Payment" required>
                        <option selected value="COD">Cash on delivery</option>
                        <option value="Credit">Credit</option>
                        <option value="MW">Mobile Wallet</option>
                        </select>
                      <div className="invalid-feedback">
                        Please enter a a way of payment.
                      </div>
                      <div className="valid-feedback">Looks good.</div>
                    </div>
                  </div>

                  <div className="rounded-4 p-4 row g-2 my-3 Shipping">
                    <span className="fs-4">Order Details</span>
                    <div id="items" className=" p-3 d-flex flex-column gap-3">
                      {cartItems.map(item => {
                        return (<>
                        <div id={item._id} className="card lg-auto">
                        <div className="row g-0">
                          <div className="col-lg-2 my-auto">
                            <img
                              src={item.images[1]}
                              className="w-100 rounded mt-0"
                              alt={item.name}
                            />
                          </div>
                          <div className="col-lg-10 ">
                            <div className="card-body bg-white d-flex gap-3 flex-nowrap">
                              {/* <!-- Information --> */}
                              <div className="col-sm-7 flex-grow-1">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text mb-2">{item.description}</p>
                                {item.size!=null ? <p className="card-text my-0">
                                  Size : {" "}
                                  <small className="text-body-secondary">
                                    {item.size}
                                  </small>
                                </p> : ""}
                                {item.flavor!=null ? <p className="card-text my-0">
                                  Flavor : {" "}
                                  <small className="text-body-secondary">
                                    {item.flavor}
                                  </small>
                                </p> : ""}
                                <p className="card-text my-0">
                                  <small className="text-body-secondary">
                                    only {item.inventory} left in
                                    the stock
                                  </small>
                                </p>
                                <p className="card-text my-0">
                                Category : 
                                  <small className="text-body-secondary ms-1">
                                    {item.category} - {item.subcategory}
                                  </small>
                                </p>                              </div>
                              {/*<!-- End of information -->
                              <!-- Controls --> */}
                              <div className="col-5 pt-4 text-center">
                                <a
                                  id="close"
                                  className="float-end   border-0 btn-close rounded-circle">                                  
                                </a>
                                <h3 className="price mt-2 mb-3">{item.price}.LE</h3>
                                <div className="d-flex justify-content-center px-lg-0 px-md-5 ">
                                  <p className="btn btn-dark fw-bold fs-6">+</p>
                                  <div className="px-2 fs-4 ">20</div>
                                  <p className="btn btn-danger fw-bold fs-6 ">-</p>
                                </div>
                              </div>
                              {/* <!-- End of controls --> */}
                            </div>
                            {/* <!-- End of Control and information --> */}
                          </div>
                        </div>
                      </div>
                      </>
                          )})}

                      {/* items */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-0  ">
                  <div
                    id="placeOrder"
                    className=" rounded-4 text-dark  p-4 mb-3 bgPaige "
                  >
                    <div className="fs-5">
                     <p className="fs-2 title ">Order Summary</p>
                    <div className="d-flex justify-content-between ">
                      <span id="numOfItems">Number of Items</span>
                      <span id="SubTotal">15</span>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <span>Shipping and handling</span>
                      <span id="Shipping">25</span>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <span>Before Tax</span>
                      <span id="beforeTax">56</span>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <span>Tax Collected</span>
                      <span id="Tax">56</span>
                    </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between total ">
                      <h3>Total</h3>
                      <h3 id="AfterTax">200</h3>
                    </div>
                    <hr className="my-1" />
                    <p className="mb-2 fs-5 title">The Scoop experience</p>
                    <div className="exp ps-2">
                        <p><span><FontAwesomeIcon icon={faHourglassEnd}/></span>14 Days guarantee</p>
                        <p><span><FontAwesomeIcon icon={faTruckFast} /></span>Free Shipping</p>
                        <p><span><FontAwesomeIcon icon={faShieldHeart} /></span>100% Secure Payment</p>
                        <p><span><FontAwesomeIcon icon={faScroll} /></span>Free useage guideline </p>
                    </div>
                    
                    <button  type="submit" id="placing" className="btn w-100 mt-0">
                      Place Order
                    </button>
                    <p className="pt-3">
                      By placing your order, you agree to our company&apos;s{" "}
                      <strong>Privacy Policy</strong> and{" "}
                      <strong>Conditions of use.</strong>
                    </p>
                    <hr />
                   
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}