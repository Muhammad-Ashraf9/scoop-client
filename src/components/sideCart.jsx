import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from './Card';

export default function SideCart({ show, handleClose }) {
    const viewCartStyle = {
        backgroundColor: '#EAEAEA',
        height: '50px',
        fontWeight: 'bold',
        fontSize: '20px',
    }

    const checkoutStyle = {
        backgroundColor: '#DA0037',
        color: 'white',
        height: '50px',
        fontWeight: 'bold',
        fontSize: '20px',
    }

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    <hr className='m-0'/>
                    <Card/>
                    <hr className='m-0' />
                    <Card />
                </Offcanvas.Body>
                <Offcanvas.Body className=' row align-items-end'>
                    <div>
                        <hr/>
                        <div className='d-flex justify-content-between'>
                            <h5>Subtotal:</h5>
                            <h5><font color="#DA0037">3000 EGP</font></h5>
                        </div>
                        <div className='flex-row ps-3 pe-3'>
                            <a href='/cart' style={viewCartStyle} className='col-12 mt-2 rounded-0 btn btn-skew'>VIEW CART</a>
                            <a href='#' style={checkoutStyle} className='col-12 mt-3 rounded-0 btn btn-skew'>CHECKOUT</a>
                            
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}