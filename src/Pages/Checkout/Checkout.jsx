import logo from '../../assets/Img1.jpg';
import './Checkout.css';
// const items = [

// ];
export function Checkout(){
    <>
    <div className="Content" >
  <div id="all">
    <div id="content" className="container ">
      <div className="row ">
      <form id="checkoutForm" className="row g-3 needs-validation"  noValidate>
        <div className="col-lg-8 col-md-10">
            <div className="rounded-4 p-4 row g-3 bgPaige">
              <span className="fs-4">Personal information:</span>
              <div className="col-md-6 ">
                <label htmlFor="FirstName" className="form-label">First name</label>
                <input pattern="[A-Za-z]{3,}" name="FirstName" type="text" className="form-control" id="FirstName" required/>
                <div className="valid-feedback">
                  Cool name!
                </div>
                <div className="invalid-feedback">
                  Please enter your name.
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Last name</label>
                <input pattern="[A-Za-z]{3,}" name="lastname" type="text" className="form-control" id="lastname" required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Please enter your last name.
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="userAddress" className="form-label">Residence Address</label>
                <input type="text" name="userAddress" className="form-control"  id="userAddress" required/>
                <div className="invalid-feedback">
                  Please provide a valid Address.
                </div>
              </div>
              <div className="col-md-6 ">
                <label htmlFor="Email" className="form-label">Email Address</label>
                <input type="email" name="Email" className="form-control" id="Email" required/>
                <div className="valid-feedback">
                  nice email!
                </div>
                <div className="invalid-feedback">
                  Please enter your email.
                </div>
              </div>
              <div className="col-md-6 ">
                <label htmlFor="Phone" className="form-label">Phone Number</label>
                <input name="Phone" pattern="^01(0|1|2|5)[0-9]{8}$" type="tel" className="form-control" id="Phone" required/>
                <div className="valid-feedback">
                  Looks good.
                </div>
                <div className="invalid-feedback">
                  Please enter your number which consists of 11 numbers.
                </div>
              </div>
            </div>
            
            <div className="rounded-4 p-4 row g-3 bgPaige">
              <span className="fs-4">Shipping Details:</span>
              <div className="col-md-12 ">
                <label htmlFor="streetAddress" className="form-label">Street Address</label>
                <input type="text" name="streetAddress" className="form-control" id="streetAddress" required/>
                <div className="valid-feedback">
                  Now I know where you live.
                </div>
                <div className="invalid-feedback">
                  Please enter your street address.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="Governerate" name="Governerate" className="form-label">Governerate</label>
                <select className="form-select" id="Governerate" required>
                  <option selected disabled value="">Choose your state</option>
                  <option value="Alexandria">Alexandria</option>
                  <option value="Aswan">Aswan</option>
                  <option value="Asyut">Asyut</option>
                  <option value="Beheira">Beheira</option>
                  <option value="Beni Suef">Beni Suef</option>
                  <option value="Cairo">Cairo</option>
                  <option value="Dakahlia">Dakahlia</option>
                  <option value="Damietta">Damietta</option>
                  <option value="Faiyum">Faiyum</option>
                  <option value="Gharbia">Gharbia</option>
                  <option value="Giza">Giza</option>
                  <option value="Ismailia">Ismailia</option>
                  <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                  <option value="Luxor">Luxor</option>
                  <option value="Matruh">Matruh</option>
                  <option value="Minya">Minya</option>
                  <option value="Monufia">Monufia</option>
                  <option value="New Valley">New Valley</option>
                  <option value="North Sinai">North Sinai</option>
                  <option value="Port Said">Port Said</option>
                  <option value="Qalyubia">Qalyubia</option>
                  <option value="Qena">Qena</option>
                  <option value="Red Sea">Red Sea</option>
                  <option value="Sharqia">Sharqia</option>
                  <option value="Sohag">Sohag</option>
                  <option value="South Sinai">South Sinai</option>
                  <option value="Suez">Suez</option>
              </select>
                <div className="valid-feedback">
                  The best people.
                </div>
                <div className="invalid-feedback">
                  Please enter your Governerate.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="City" className="form-label">City</label>
                <input name="City" pattern="[A-Za-z]{3,}" type="text" className="form-control" id="City" required/>
                <div className="valid-feedback">
                  Sounds good.
                </div>
                <div className="invalid-feedback">
                  Please enter your city name.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="Zip" className="form-label">Zip</label>
                <input name="Zip" pattern="[0-9]{5}" type="text" className="form-control" id="Zip" required/>
                <div className="invalid-feedback">
                  Please enter a calid code.
                </div>
                <div className="valid-feedback">
                  Looks good.
                </div>
              </div>
            </div>
    
    
            <div className="rounded-4 p-4 row g-3 mb-3 Shipping">
              <span className="fs-4">Shipping Details</span>
              <div id="items" className=" p-3 d-flex flex-column gap-3">
              <div id="${flag}" className="card m-auto">
        <div className="row g-0">
          <div  className="col-lg-2">
            <img  src={logo} className="img-fluid rounded" alt="${item.product.title}"/>
          </div>
          <div className="col-md-10">
            
            <div className="card-body d-flex gap-3 flex-nowrap">
            {/* <!-- Information --> */}
            <div className="col-sm-7 flex-grow-1">
                <h5 className="card-title">*title*</h5>
                <p className="card-text">*description*</p>
                <p className="card-text"><small className="text-body-secondary">*ProductName* only *numberInStock* left in the stock</small></p>
            </div>
            {/*<!-- End of information -->
              <!-- Controls --> */}
              <div className="col-4 pt-4 text-center">
                <button id="close" className="float-end btn btn-lg btn-close rounded-circle" data-id="${
                  item.product.id
                }"> </button>
                <h3 className="price mt-2 mb-3">*price*</h3>
                <div className="btn-group numOfItems">
                  <button style="background: #eec28c; color:white" id="${flag}" className="btn fs-4">-</button>
                  <span className="fs-2 mx-3">*Num*</span>
                  <button style="background: #B88E2F; color:white" id="${flag}" className="btn">+</button>
                </div>
              </div>
              {/* <!-- End of controls --> */}
            </div>
            {/* <!-- End of Control and information --> */}
            </div>
        </div>
      </div>


                {/* items */}


              </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-6">
          <div id="placeOrder" className="rounded-4 pt-5 p-4 mb-3 bgPaige">
            <h5>Unfortunatey we only support payment on deliver, but soon online paymet will be available</h5>
            <button id="placing"  className="btn w-100" >Place Order</button>
            <p className="pt-3">By placing your order, you agree to our companys <strong>Privacy Policy</strong> and <strong>Conditions of use.</strong></p>
            <hr/>
            <p className="fs-3">Order Summary</p> 
            <div className="d-flex justify-content-between ">
              <span id="numOfItems"></span>
              <span id="SubTotal"></span>
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
            <hr/>
            <div className="d-flex justify-content-between total ">
              <h5>Total</h5>
              <h5 id="AfterTax"></h5>
            </div>
          </div>
        </div>
      </form>
    
      </div>
    </div>
  </div>
</div>
</>
}
// export function NoItems(){
//     <div className="row p-3 empty">
//       <div className="col-lg-6">
//         <span className="fs-1 empty">your cart is empty !</span>  
//       </div>      
//       <div className="pt-3 col-lg-6">
//         <button className="btn backs"><a className="text-decoration-none text-light" href="newMain.html">Go to home page</a></button>
//         <button className="btn ms-2 backs"><a className="text-decoration-none text-light" href="Products_tester.html">Go to Products page</a></button>
//       </div>
//     </div>
// }