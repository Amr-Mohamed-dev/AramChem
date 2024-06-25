import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:example@gmail.com"
            className="text-white hover:text-gray-400"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Birthday Event. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
