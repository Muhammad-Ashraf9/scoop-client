import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import SideCart from "../sideCart";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isLargeScreen) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isLargeScreen) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <SideCart handleClose={handleClose} show={show} />
      <nav
        className="navbar navbar-expand-xl fixed-top bg-dark "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="NavHeader ">
            <div>
              <a className="navbar-brand brand " href="#">
                <img width="200px" src={Logo} alt="logo" />
              </a>
            </div>
            <div className="NI BrandName mt-3">
              <a href="#">Scoop Supplements</a>
            </div>
            <div className="mt-3">
              <a
                className="navbar-toggler border-0 "
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="menueLogo fs">
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </a>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-end bg-dark"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">
                Scoop Supplements
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body Canvas">
              <ul className="navbar-nav me-auto mb-2 mt-lg-2 ">
                <li className="NI c-item canvasItem ms-3">
                  <a className="" aria-current="page" href="#">
                    HomePage
                  </a>
                </li>
                <li className="NI c-item canvasItem ms-3">
                  <a className="" href="#">
                    Supplements
                  </a>
                </li>
                <li
                  className="NI canvasItem c-item dropdown togBtn"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className=" dropdown-toggle ms-3"
                    id="navbarDropdownMenuLink-1"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Clothes
                  </a>
                  <ul
                    className={` dropdown-menu  ${isOpen ? "show" : ""}`}
                    aria-labelledby="navbarDropdownMenuLink-1"
                  >
                    <li>
                      <a className="dropdown-item mx-0 d-item" href="#">
                        Bra
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item d-item" href="#">
                        Panty
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item d-item" href="#">
                        kalson
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
          <div className="Invisible">easterEgg</div>
          <div className="search">
            <form className="d-flex my-1 " role="search">
              <input
                className="form-control mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>All Categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </form>
          </div>
          <div className="NI Sign ms-5">
            <NavLink className="Signin" to="/login">
              <span className="me-2 ">
                <FontAwesomeIcon icon={faUserNinja} />
              </span>
              SIGN IN
            </NavLink>

            <a href="#" className="mx-3">
              {" "}
              <FontAwesomeIcon icon={faHeart} />
            </a>
            <a href="#" onClick={handleShow}>
              <FontAwesomeIcon icon={faBagShopping} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
