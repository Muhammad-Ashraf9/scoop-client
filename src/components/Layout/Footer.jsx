import "./Footer.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top ps-5 ">
          <div className="container-fluid">
            <div className="row">
              <div id="about" className="col-md-3 footer-about ">
                <h3>
                  {" "}
                  <img width="100vw" src={Logo} alt="logo" /> Scoop
                </h3>
                <p>
                  here at scoop we are proude to provide the best quality
                  products for our customers to help them achieve their goals in
                  the best way possible.
                </p>
                <p className="fs-3 fw-bold ">&copy; Scoop Inc.</p>
              </div>
              <div
                id="contact"
                className="col-md-4 offset-md-1 footer-contact "
              >
                <h3 className="pb-3">Contact</h3>
                <p>
                  <FontAwesomeIcon icon={faMapLocation} /> 78 madrb st, Mansoura
                  Egypt
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> Phone: 01094335757
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
                  <a href="mailto:Scoop@domain.com">Scoop@domain.com</a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faTelegram} /> Telegram: 01094335757
                </p>
              </div>
              <div className="col-md-4 footer-links p">
                <div className="row">
                  <div className="col  ">
                    <h3 className="pb-3">Links</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <a className="scroll-link" href="#">
                        Home
                      </a>
                    </p>
                    <p>
                      <a className="scroll-link" href="#">
                        Supplements
                      </a>
                    </p>
                    <p>
                      <a className="scroll-link" href="#">
                        Clothes
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col footer-social">
                  <a
                    target="blank"
                    href="https://www.facebook.com/search/top?q=muhammad%20ashraf"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a target="blank" href="https://twitter.com/AbdoUsama18">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/abd_usama/?igshid=ZDdkNTZiNTM%3D"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="blank"
                    href="https://github.com/Muhammad-Ashraf9/E-Commerce"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
