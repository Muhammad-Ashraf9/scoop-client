import { useState,useEffect } from 'react'
import './App.css'
import Logo  from './assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

//const element = <FontAwesomeIcon icon={faEnvelope} />

function App() {

  return (
    <>
{    console.log(Logo)
}      <Navbar />
      <Carousel />
      <Footer />
    </>
  )
}

function Footer() {
  return (
    <>
  <footer>
  <div className="footer-top ps-5 ">
    <div className="container-fluid">
      <div className="row">
        <div id="about" className="col-md-3 footer-about ">
        
          <h3> <img width="100vw" src={Logo} alt="logo" />  Scoop</h3>
          <p>
           here at scoop we are proude to provide the best quality products for our customers to help them achieve their goals in the best way possible.
          </p>
          <p className="fs-3 fw-bold ">&copy; Scoop Inc.</p>
              </div>
        <div id="contact" className="col-md-4 offset-md-1 footer-contact ">
          <h3 className="pb-3">Contact</h3>
              <p><FontAwesomeIcon icon={faMapLocation} /> 78 madrb st, Mansoura Egypt</p>
              <p><FontAwesomeIcon icon={faPhone} /> Phone: 01094335757</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:Scoop@domain.com">Scoop@domain.com</a></p>
              <p><FontAwesomeIcon icon={faTelegram} /> Telegram: 01094335757</p>
              </div>
              <div className="col-md-4 footer-links p">
                <div className="row">
                  <div className="col  ">
                    <h3 className="pb-3">Links</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p><a className="scroll-link" href="#">Home</a></p>
                    <p><a className="scroll-link" href="#">Supplements</a></p>
                    <p><a className="scroll-link" href="#">Clothes</a></p>                  
                  </div>
                </div>
        </div>
    </div>
  </div>
    <hr/>
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
           <div className="col footer-social">
                <a target="blank" href="https://www.facebook.com/search/top?q=muhammad%20ashraf"><FontAwesomeIcon icon={faFacebook} /></a> 
                <a target="blank" href="https://twitter.com/AbdoUsama18"><FontAwesomeIcon icon={faTwitter} /></a> 
                <a target="blank" href="https://www.instagram.com/abd_usama/?igshid=ZDdkNTZiNTM%3D"><FontAwesomeIcon icon={faInstagram} /></a> 
                <a target="blank" href="https://github.com/Muhammad-Ashraf9/E-Commerce"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
         </div>
    </div>
  </div>
  </div>
</footer>
    </>
  )
}
function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  }
  }, []);

  const handleMouseEnter = () => {
    if(isLargeScreen){
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if(isLargeScreen){
      setIsOpen(false);
    }
  };
    
  return (
    <>
      <nav className="navbar navbar-expand-xl fixed-top bg-dark " data-bs-theme="dark">
        <div className="container-fluid">
          <div className='NavHeader '>
            <div>
            <a className="navbar-brand brand "  href="#"><img width="200px" src={Logo} alt="logo"  /></a>
            </div>
          <div className='NI BrandName '>
          <a  href='#'>Scoop Supplements</a>
          </div>
          <div>
          <a className="navbar-toggler border-0"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="menueLogo"> 
            <FontAwesomeIcon icon={faBars} />
            </span>
          </a>
          </div>
          </div>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body Canvas">
              <ul className="navbar-nav me-auto mb-2 mt-lg-2 ">
                <li className="NI canvasItem ms-3">
                  <a className="" aria-current="page" href="#">HomePage</a>
                </li>
                <li className="NI canvasItem ms-3">
                  <a className="" href="#">Supplements</a>
                </li>
                <div className="NI canvasItem dropdown togBtn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <a className=" dropdown-toggle ms-3" id="navbarDropdownMenuLink-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Clothes
                  </a>
                  <ul  className={` dropdown-menu  ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink-1">
                    <li><a className="dropdown-item mx-0" href="#">Bra</a></li>
                    <li><a className="dropdown-item" href="#">Panty</a></li>
                    <li><a className="dropdown-item" href="#">kalson</a></li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>    
          <div></div>
          <div className='Invisible'>
              easterEgg
          </div>
          <div className='search'>
          <form className="d-flex my-1 " role="search">
                <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"></input>
                <select className="form-select" aria-label="Default select example">
                  <option selected>All Categories</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
          </form>
          </div>   
          <div className="NI Sign ms-5">
            <a className='Signin' href='#'><span className='me-2 '><FontAwesomeIcon icon={faUserNinja} /></span>SIGN IN</a>

            <a href='#' className='mx-3'>  <FontAwesomeIcon icon={faHeart} /></a>
            <a href='#'><FontAwesomeIcon icon={faBagShopping} /></a>
          </div>
        </div>
      </nav>
    </>
  )
}

function Carousel(){
  return(
    <>
    <div id="HeaderCarousel" className="carousel slide carousel-fade mt-5 ">
  <div className="carousel-inner">
    <div className="carousel-item active CarouselImg img1 text-center">
      <div className='carousel-caption d-none d-md-block'>
        <h1 className="display-1">Welcome to Scoop</h1>
        <h3 className="display-4 mb-4">Get the best Sports Wear Now!</h3>
        <CoolButton
          Title={'Shop Now'}
        />
        
      </div>
    </div>
    <div className="carousel-item CarouselImg img2">
    <div className='carousel-caption d-none d-md-block'>
        <h1 className="display-1">The Best body builders</h1>
        <h3 className="display-4 mb-4">Need the best Supplements!</h3>
        <CoolButton
          Title={'Get Yours Now'}
        />        
      </div>
    </div>
    <div className="carousel-item img3 CarouselImg">
    <div className='carousel-caption d-none d-md-block'>
        <h1 className="display-1 mb-4">We also sell the best Gym Equipments</h1>
        <CoolButton
          Title={'Get Yours Now'}
        />        
      </div>
      </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#HeaderCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#HeaderCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
function CoolButton({Title}){
  return(
    <div className="wrapper">
  <a className="cta" href="#">
    <span>{Title}</span>
    <span>
      <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
        </g>
      </svg>
    </span> 
  </a>
</div>
  )
  }
  CoolButton.defaultProps = {
    Title: 'Shop Now',
  }

export default App
