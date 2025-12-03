// import { NavLink } from "react-router";
// import Logo from "../assets/logo.png";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { PiXLogo } from "react-icons/pi";

// const Footer = () => {
//   return (
//     <footer className="bg-base-200 mt-10 border-t border-[#2d2d2d]/30">
//       <div className="w-11/12 mx-auto py-10 flex flex-col md:flex-row justify-between items-center gap-8 text-base-100">
//         {/* Logo + Description */}
//         <div className="flex flex-col items-center md:items-start gap-3">
//           <NavLink to="/">
//             <img src={Logo} alt="GreenNest Logo" className="w-28" />
//           </NavLink>
//           <p className="text-center md:text-left text-white/80 max-w-xs leading-relaxed">
//             GreenNest — Your trusted eco-friendly plant store. Bringing nature
//             closer to your home.
//           </p>
//         </div>

//         {/* Footer Links */}
//         <nav className="flex flex-col md:flex-row gap-4 text-center md:text-left">
//           <NavLink
//             to="/about-us"
//             className="link link-hover hover:text-[#41bf01] transition"
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className="link link-hover hover:text-[#41bf01] transition"
//           >
//             Contact
//           </NavLink>
//           <NavLink
//             to=""
//             className="link link-hover hover:text-[#41bf01] transition"
//           >
//             Privacy Policy
//           </NavLink>
//         </nav>

//         {/* Social Icons */}
//         <div className="flex gap-4 mt-3 text-primary">
//           <a
//             href="#"
//             aria-label="Facebook"
//             className="hover:text-secondary hover:drop-shadow-[0_0_6px_#38AD2D] transition-all duration-300 hover:scale-110"
//           >
//             <FaFacebook size={22} />
//           </a>

//           <a
//             href="#"
//             aria-label="Twitter"
//             className="hover:text-secondary hover:drop-shadow-[0_0_6px_#38AD2D] transition-all duration-300 hover:scale-110"
//           >
//             <PiXLogo size={22} />
//           </a>

//           <a
//             href="#"
//             aria-label="Instagram"
//             className="hover:text-secondary hover:drop-shadow-[0_0_6px_#38AD2D] transition-all duration-300 hover:scale-110"
//           >
//             <FaInstagram size={22} />
//           </a>

//           <a
//             href="#"
//             aria-label="LinkedIn"
//             className="hover:text-secondary hover:drop-shadow-[0_0_6px_#38AD2D] transition-all duration-300 hover:scale-110"
//           >
//             <FaLinkedin size={22} />
//           </a>
//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="py-4 text-center border-t border-[#2d2d2d]/30 text-white/70">
//         <p>
//           © {new Date().getFullYear()}{" "}
//           <span className="text-[#41bf01]">GreenNest</span>. All Rights
//           Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { NavLink } from "react-router";
import Logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-10 border-t border-[#2d2d2d]/30">
      <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-base-100">
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <NavLink
            to="/"
            className="hover:scale-105 transition-all duration-300"
          >
            <img
              src={Logo}
              alt="GreenNest Logo"
              className="w-32 drop-shadow-md"
            />
          </NavLink>

          <p className="text-center md:text-left text-white/80 max-w-xs leading-relaxed">
            GreenNest — Your trusted eco-friendly plant store. Bringing nature
            closer to your home.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-primary mb-3">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-2 text-center md:text-left">
            <NavLink to="/about-us" className="hover:text-primary transition">
              About Us
            </NavLink>
            <NavLink to="/contact" className="hover:text-primary transition">
              Contact
            </NavLink>
            <NavLink
              to="/privacy-policy"
              className="hover:text-primary transition"
            >
              Privacy Policy
            </NavLink>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-primary mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-1 text-primary">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-secondary hover:drop-shadow-[0_0_6px_#38AD2D] transition-all duration-300 hover:scale-110"
            >
              <FaFacebook size={22} />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              aria-label="X"
              className="hover:text-secondary hover:drop-shadow-[0_0_6px_#38AD2D] transition-all duration-300 hover:scale-110"
            >
              <PiXLogo size={22} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-secondary hover:drop-shadow-[0_0_6px_#38AD2D] transition-all duration-300 hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="http://linkedin.com/in/rabin-khandakar"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-secondary hover:drop-shadow-[0_0_6px_#38AD2D] transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="py-4 text-center border-t border-[#2d2d2d]/30 text-white/70">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">GreenNest</span>. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
