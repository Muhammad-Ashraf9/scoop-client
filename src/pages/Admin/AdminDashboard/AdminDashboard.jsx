import { Link, NavLink, Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import styles from "./AdminDashboard.module.css";

export default function AdminDashboard() {
  return (
    <>
      <div className="row">
        <aside className=" col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar">
          <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
            style={{ width: 280 }}
          >
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <svg className="bi pe-none me-2" width={40} height={32}>
                <use xlinkHref="#bootstrap" />
              </svg>
              <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="#" className="nav-link" aria-current="page">
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#home" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-body-emphasis">
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#speedometer2" />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-body-emphasis">
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#table" />
                  </svg>
                  Orders
                </a>
              </li>
              <li>
                <NavLink
                  to="add-product"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? styles.pending
                      : isActive
                      ? `active nav-link link-body-emphasis`
                      : `nav-link link-body-emphasis`
                  }
                  end
                >
                  <FontAwesomeIcon icon={faSackDollar} width={16} height={16} />
                  Products
                </NavLink>
              </li>
              <li>
                <a href="#" className="nav-link link-body-emphasis">
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#people-circle" />
                  </svg>
                  Customers
                </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-circle me-2"
                />
                <strong>mdo</strong>
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
