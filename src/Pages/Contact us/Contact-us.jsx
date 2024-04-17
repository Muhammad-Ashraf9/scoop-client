import './Contact-us.css';
import './Contact-us.js';
import { Navbar } from '../../components'
import Map from '../../components/Map.jsx';

export default function ContactUs() {
    return (
        <div className=' container all mb-4'>
            <Navbar />
            <div className="row text-center">
                <div style={{ background: "#ced4da"}} className="col-6 rounded-5 p-4">
                    <div>
                        <h1 className='shake'>Contact Us</h1>

                        <div>
                            <form>
                                <div class="mb-3 text-start">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" pattern='[A-Za-z\s]+'/>
                                </div>
                                <div class="mb-3 text-start">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" />
                                </div>
                                <div class="mb-3 text-start">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea class="form-control" id="message" rows="3"></textarea>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <div className='col-4'>
                                        <button type="submit" class="btn btn-skew custom-btn-addToCart">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                <div className='col-6'>
                    <div id="map"></div>
                    <Map />
                </div>
            </div>
        </div>
    );
}