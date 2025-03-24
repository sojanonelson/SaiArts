import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Paintbrush ,TreePalmIcon} from "lucide-react"; // Import Paintbrush icon
import logo from '../Data/sailogo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  return (
    <nav className="bg-red-500 text-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo with Paintbrush Icon */}
        <Link to="/" className="text-2xl font-bold text-white flex gap-2 items-center">
        {/* <TreePalmIcon size={28} className="mr-2 text-white-600" />  */}
        <img src={logo} alt="logo" className="w-10 "></img>
          SAI ARTS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <button className="flex items-center hover:text-yellow-400 transition">
              Services <ChevronDown size={18} className="ml-1" />
            </button>
            {isServiceOpen && (
              <div className="absolute left-0 top-8 w-64 bg-gray-800 p-4 rounded-md shadow-lg z-50">
                <p className="text-yellow-400 font-semibold">Our Services</p>
                <ul className="mt-2 space-y-2">
                  <li><Link to="/sticker-printing" className="text-white hover:text-yellow-400 transition">Sticker Printing</Link></li>
                  <li><Link to="/light-board" className="text-white hover:text-yellow-400 transition">Light Board Making</Link></li>
                  <li><Link to="/flex-printing" className="text-white hover:text-yellow-400 transition">Flex Printing</Link></li>
                  <li><Link to="/custom-designs" className="text-white hover:text-yellow-400 transition">Custom Designs</Link></li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/works" className="hover:text-yellow-400 transition">Works</Link>
          <Link to="/feedback" className="hover:text-yellow-400 transition">Feedback</Link>

          <Link to='/register'>
          <div className=" flex flex-row px-10 items-center gap-2">
          <p className="font-bold">Sojan</p>
          <img className="w-10 h-auto rounded-xl" alt="profile" src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"></img>

          </div>
          </Link>
        
         
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="p-4 text-white">
          <X size={28} />
        </button>
        <div className="flex flex-col items-start space-y-6 p-6">
          <Link to="/" className="text-white hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="text-white hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Products</Link>

          {/* Mobile Services Dropdown */}
          <button
            className="text-white hover:text-yellow-400 transition flex items-center"
            onClick={() => setIsServiceOpen(!isServiceOpen)}
          >
            Services <ChevronDown size={18} className="ml-1" />
          </button>
          {isServiceOpen && (
            <div className="ml-4 space-y-2">
              <Link to="/sticker-printing" className="text-white hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Sticker Printing</Link>
              <Link to="/light-board" className="text-white hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Light Board Making</Link>
              <Link to="/flex-printing" className="text-white hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Flex Printing</Link>
              <Link to="/custom-designs" className="text-white hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Custom Designs</Link>
            </div>
          )}

          <Link to="/works" className="text-white hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Works</Link>
          <Link to="/feedback" className="text-white hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Feedback</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;