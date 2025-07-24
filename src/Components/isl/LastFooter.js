import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const LastFooter = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 mt-5 border-top">
      <div className="container">
        {/* Support Us Section */}
        <div className="row mb-4">
          <div className="col-12">
            <h5 className="fw-bold mb-3">Support Us</h5>
            <p>
              The <strong>Al-Islam.org</strong> site and the DILP are entirely
              supported by individual donors and well-wishers. If you regularly
              visit this site and wish to show your appreciation, or if you
              wish to see further development of Al-Islam.org, please donate
              online.
            </p>
            <p className="small text-muted">
              <strong>IMPORTANT:</strong> All content hosted on Al-Islam.org is
              solely for non-commercial purposes and with the permission of
              original copyright holders. Any other use of the hosted content,
              such as for financial gain, requires express approval from the
              copyright owners.
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="row mb-4">
          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-decoration-none text-dark">
                  About Al-Islam.org
                </Link>
              </li>
              <li>
                <Link to="#" className="text-decoration-none text-dark">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-decoration-none text-dark">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-decoration-none text-dark">
                  Support Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-decoration-none text-dark">
                  Fatiha Appeal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons for mobile only */}
        <div className="d-block d-md-none text-center mt-4">
          <Link to="#" className="text-primary me-3 fs-4">
            <FaFacebook />
          </Link>
          <Link to="#" className="text-info me-3 fs-4">
            <FaTwitter />
          </Link>
          <Link to="#" className="text-danger me-3 fs-4">
            <FaInstagram />
          </Link>
          <Link to="#" className="text-success fs-4">
            <FaWhatsapp />
          </Link>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12 text-center text-muted small">
            © Ahlul Bayt Digital Islamic Library Project 199
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LastFooter;
