import { faWeight } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
        <Card className='rounded-0 border-0'>
            <div className='row g-0'>
                <div className='col-3'>
                    <Card.Img src="./03149df0-ef7d-44b1-b256-8853ef0e5190.jpg" className=' img-fluid p-3' />
                </div>
                <div className='col-8'>
                    <Card.Body className=' bg-white ps-0'>
                        <Card.Title className='bold'>Product name</Card.Title>
                        <Card.Text>
                            1 x <font color="#DA0037">1500 EGP</font>
                        </Card.Text>
                    </Card.Body>
                </div>
                <div className='col-1'>
                    <a href='#' className='text-decoration-none'>
                        {/* <FontAwesomeIcon icon={faWeight} /> */}
                    </a>
                </div>
            </div>
        </Card>
    );
}

export default BasicExample;