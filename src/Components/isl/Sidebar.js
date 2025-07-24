// import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div
//       className="position-fixed top-50 start-0 translate-middle-y p-2"
//       style={{ zIndex: 1030 }}
//     >
//       <ul className="list-unstyled m-0">
//         <li className="mb-2">
//           <Link to="#" className="text-decoration-none text-dark"><FaFacebook/></Link>
//         </li>
//         <li className="mb-2">
//           <Link to="#" className="text-decoration-none text-dark"><FaTwitter/></Link>
//         </li>
//         <li className="mb-2">
//           <Link to="#" className="text-decoration-none text-dark"><FaInstagram/></Link>
//         </li>
//         <li>
//           <Link to="#" className="text-decoration-none text-dark"><FaWhatsapp/></Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



















import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    // Desktop sidebar (hidden on mobile)
    <div
      className="position-fixed top-50 start-0 translate-middle-y p-2 d-none d-md-block"
      style={{ zIndex: 1030 }}
    >
      <ul className="list-unstyled m-0">
        <li className="mb-3">
          <Link to="#" className="text-decoration-none text-primary fs-1">
            <FaFacebook />
          </Link>
        </li>
        <li className="mb-3">
          <Link to="#" className="text-decoration-none text-info fs-1">
            <FaTwitter />
          </Link>
        </li>
        <li className="mb-3">
          <Link to="#" className="text-decoration-none text-danger fs-1">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link to="#" className="text-decoration-none text-success fs-1">
            <FaWhatsapp />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
