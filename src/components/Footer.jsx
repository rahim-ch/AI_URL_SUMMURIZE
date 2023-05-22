
import { logo } from '../assets';

const Footer = () => {
  return (
    <footer className=" bg-opacity-50 backdrop-filter backdrop-blur-lg py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
            <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
            <p className="text-gray-900 mt-4">
              Simplify your reading with Smize, an open-source article summarization tool powered by AI.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
            <h3 className="text-black font-semibold mb-3">Product</h3>
            <ul className="text-gray-900">
              <li className="mb-2">
                <a href="/features" className="hover:text-gray-900">Features</a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="hover:text-gray-900">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="/documentation" className="hover:text-black">Documentation</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
            <h3 className="text-black font-semibold mb-3">Company</h3>
            <ul className="text-black">
              <li className="mb-2">
                <a href="/about" className="hover:text-black">About</a>
              </li>
              <li className="mb-2">
                <a href="/team" className="hover:text-black">Team</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-black">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
            <h3 className="text-black font-semibold mb-3">Connect</h3>
            <ul className="text-black">
              <li className="mb-2">
                <a href="https://twitter.com" className="hover:text-black">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="https://linkedin.com" className="hover:text-black">LinkedIn</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com" className="hover:text-black">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4">
            <p className="text-black text-sm">
              &copy; {new Date().getFullYear()} Smize. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <ul className="flex justify-end list-none">
              <li className="mr-2">
                <a href="/privacy" className="text-black text-sm hover:text-black">Privacy Policy</a>
              </li>
              <li className="mr-2">
                <a href="/terms" className="text-black text-sm hover:text-black">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
