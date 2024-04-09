import Table from 'react-bootstrap/Table'
import PlusMinusInput from '../../components/PlusMinusInput'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Cart() {
    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col-8">
                    <div className="row">
                        <div className="col">
                            <Table className='text-center align-middle'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>PRODUCT</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                        <th>SUBTOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="#" className='custom-a'><FontAwesomeIcon icon={faX} /></a></td>
                                        <td>
                                            <a href="#">
                                                <img src="https://www.nbs-supplements.com/wp-content/uploads/2024/03/d2d55f_d7317c8ee3804ab193a3a88cfa50da9emv2-copy.webp" width={"100px"} />
                                            </a>
                                        </td>
                                        <td><a href="#" className='custom-a'>Casein pro BigMan</a></td>
                                        <td>2200 EGP</td>
                                        <td><PlusMinusInput /></td>
                                        <td>2200 EGP</td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" className='custom-a'><FontAwesomeIcon icon={faX} /></a></td>
                                        <td>
                                            <a href="#">
                                                <img src="https://www.nbs-supplements.com/wp-content/uploads/2023/11/61q7oNwsmTL._AC_SY879_-675x1024.webp" width={"100px"} />
                                            </a>
                                        </td>
                                        <td><a href="#" className='custom-a'>glutamine 5000mg core champs</a></td>
                                        <td>1200 EGP</td>
                                        <td><PlusMinusInput /></td>
                                        <td>1200 EGP</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="row justify-content-between mb-4 mt-2">
                        <div className="col-7">
                            <InputGroup size='lg'>
                                <Form.Control size='lg' type='text' className='text-center custom-coupon-text me-3' placeholder='Coupon code' />
                                <Form.Control size='lg' type='button' className='rounded-0 btn btn-skew bg-black text-white' value={"APPLY COUPON"} />
                            </InputGroup>
                        </div>

                        <div className="col-3">
                            <InputGroup size='lg'>
                                <Form.Control size='lg' type='button' className='rounded-0 btn btn-skew bg-secondary text-white' value={"UPDATE CART"} />
                            </InputGroup>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='custom-summary p-4'>
                        <div className="row mb-4">
                            <div className="col-12 custom-cart-total">CART TOTALS</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Subtotal</div>
                            <div className="col-8 text-end">3400 EGP</div>
                            <div className="col"><hr /></div>
                        </div>
                        <div className="row">
                            <div className="col-4">Shipping</div>
                            <div className="col-8 text-end">
                                <div className="row">
                                    <div className="col">shipping Cost: 50 EGP</div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        shipping to: <font className="fw-bold">Cairo</font>
                                    </div>
                                </div>
                                <a href="#" className=' custom-a'>Change address</a>
                            </div>
                            <div className="col"><hr /></div>
                        </div>
                        <div className="row">
                            <div className="col-4">Total</div>
                            <div className="col-8 custom-totalPrice text-end">3450 EGP</div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 text-center">
                                <button className="custom-btn-checkout">Proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}