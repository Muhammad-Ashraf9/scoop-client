import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../assets/Logo2.png';
import profile from '../../../assets/Profile.jpg';
import mystyle from './AdminNavbar.module.css';
import { Button, Form, NavItem } from 'react-bootstrap';

function AdminNavbar() {
    const css = `
    .active {
        color: #DA0037 !important;
    }
    
    .active::after{
        position: absolute;
        content: "";
        height: 3px;
        width: 100%;
        background-color: #DA0037;
        left: 0;
        bottom: -14px;
    }

    .dropdown-menu.show {
        right: 0;
        left: auto;
        background-color: #393E46;
    }

    .dropdown-item{
        color: white;
    }

    .dropdown-item:hover {
        color: white;
        background-color: #DA0037;
        border-radius: 0.5rem;
    }
    `
    return (
        <Navbar expand="lg" className={[mystyle.Navbar, "p-1 navbar-dark"]}>
            <style>{css}</style>
            <Container fluid className='ms-3 me-3'>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="100%"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    {' '}
                    <div>
                        <h4 className={mystyle.logoText}>COOP</h4>
                        <h6 className={mystyle.logoText}>UPPLEMENTS</h6>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <div className=' position-relative styledLinkContainer me-3'>
                            <Nav.Link href="#link1" className={[mystyle.styledLink]}>
                                <div className={["position-relative"]}>
                                    Overview
                                </div>
                            </Nav.Link>
                        </div>

                        <div className=' position-relative styledLinkContainer me-3'>
                            <Nav.Link href="#link2" className={[mystyle.styledLink]}>
                                <div className={["position-relative"]}>
                                    Products
                                </div>
                            </Nav.Link>
                        </div>

                        <div className=' position-relative styledLinkContainer me-3'>
                            <Nav.Link href="#link3" className={[mystyle.styledLink]}>
                                <div className={["position-relative"]}>
                                    Reports
                                </div>
                            </Nav.Link>
                        </div>
                    </Nav>

                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 rounded-3"
                        aria-label="Search"
                        style={{ width: '15rem', color: '#EAEAEA' }}
                    />
                    <img
                        src={profile}
                        width="40"
                        height="40"
                        className={[mystyle.circleImage]}
                        alt="React Bootstrap logo"
                    />
                    <NavDropdown title="Elon Mask" className='text-white' id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AdminNavbar;