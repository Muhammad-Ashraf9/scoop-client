import Table from 'react-bootstrap/Table'
import PlusMinusInput from '../../components/PlusMinusInput'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function Cart() {
    return (
        <div className="container col-12">
            <div className="col-8">
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
    )
}