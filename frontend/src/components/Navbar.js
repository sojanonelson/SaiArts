import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import logo from '../Data/sailogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // "light" or "dark"

  // Effect to apply theme to the document
  useEffect(() => {
    // Apply theme classes to the entire document
    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [theme]);

  // Toggle between light and dark themes
  const swapTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Get dynamic colors based on current theme
  const getThemeStyles = () => {
    return {
      navBg: theme === "light" ? "bg-red-500" : "bg-gray-800",
      textColor: "text-white",
      mobileMenuBg: theme === "light" ? "bg-gray-800" : "bg-gray-900",
      dropdownBg: theme === "light" ? "bg-gray-800" : "bg-gray-900",
      hoverColor: "hover:text-yellow-400",
      accentColor: "text-yellow-400"
    };
  };

  const styles = getThemeStyles();

  return (
    <nav className={`${styles.navBg} ${styles.textColor} shadow-md relative transition-colors duration-300`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo with same branding */}
        <Link to="/" className="text-2xl font-bold text-white flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-10" />
          SAI ARTS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex space-x-6">
          <Link to="/" className={`${styles.hoverColor} transition`}>Home</Link>
          <Link to="/products" className={`${styles.hoverColor} transition`}>Products</Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <button className={`flex items-center ${styles.hoverColor} transition`}>
              Services <ChevronDown size={18} className="ml-1" />
            </button>
            {isServiceOpen && (
              <div className={`absolute left-0 top-8 w-64 ${styles.dropdownBg} p-4 rounded-md shadow-lg z-50`}>
                <p className={styles.accentColor + " font-semibold"}>Our Services</p>
                <ul className="mt-2 space-y-2">
                  <li><Link to="/sticker-printing" className={`${styles.textColor} ${styles.hoverColor} transition`}>Sticker Printing</Link></li>
                  <li><Link to="/light-board" className={`${styles.textColor} ${styles.hoverColor} transition`}>Light Board Making</Link></li>
                  <li><Link to="/flex-printing" className={`${styles.textColor} ${styles.hoverColor} transition`}>Flex Printing</Link></li>
                  <li><Link to="/custom-designs" className={`${styles.textColor} ${styles.hoverColor} transition`}>Custom Designs</Link></li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/works" className={`${styles.hoverColor} transition`}>Works</Link>
          <Link to="/feedback" className={`${styles.hoverColor} transition`}>Feedback</Link>

          {/* Theme Toggle Button */}
          <button 
            onClick={swapTheme} 
            className="p-2 rounded-full hover:bg-opacity-20 hover:bg-white transition-colors"
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          >
            {theme === "light" ? (
              <Moon size={20} className="text-white" />
            ) : (
              <Sun size={20} className="text-white" />
            )}
          </button>

          <Link to='/register'>
            <div className="flex flex-row px-10 items-center gap-2">
              <p className="font-bold">Sojan</p>
              <img className="w-10 h-auto rounded-xl" alt="profile" src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          {/* Theme Toggle Button - Mobile */}
          <button 
            onClick={swapTheme} 
            className="p-2 mr-2 rounded-full hover:bg-opacity-20 hover:bg-white transition-colors"
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          >
            {theme === "light" ? (
              <Moon size={20} className="text-white" />
            ) : (
              <Sun size={20} className="text-white" />
            )}
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 ${styles.mobileMenuBg} transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="p-4 text-white">
          <X size={28} />
        </button>
        <div className="flex flex-col items-start space-y-6 p-6">
          <Link to="/" className={`${styles.textColor} ${styles.hoverColor} transition`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className={`${styles.textColor} ${styles.hoverColor} transition`} onClick={() => setIsOpen(false)}>Products</Link>

          {/* Mobile Services Dropdown */}
          <button
            className={`${styles.textColor} ${styles.hoverColor} transition flex items-center`}
            onClick={() => setIsServiceOpen(!isServiceOpen)}
          >
            Services <ChevronDown size={18} className="ml-1" />
          </button>
          {isServiceOpen && (
            <div className="ml-4 space-y-2">
              <Link to="/sticker-printing" className={`${styles.textColor} ${styles.hoverColor} transition block py-1`} onClick={() => setIsOpen(false)}>Sticker Printing</Link>
              <Link to="/light-board" className={`${styles.textColor} ${styles.hoverColor} transition block py-1`} onClick={() => setIsOpen(false)}>Light Board Making</Link>
              <Link to="/flex-printing" className={`${styles.textColor} ${styles.hoverColor} transition block py-1`} onClick={() => setIsOpen(false)}>Flex Printing</Link>
              <Link to="/custom-designs" className={`${styles.textColor} ${styles.hoverColor} transition block py-1`} onClick={() => setIsOpen(false)}>Custom Designs</Link>
            </div>
          )}

          <Link to="/works" className={`${styles.textColor} ${styles.hoverColor} transition`} onClick={() => setIsOpen(false)}>Works</Link>
          <Link to="/feedback" className={`${styles.textColor} ${styles.hoverColor} transition`} onClick={() => setIsOpen(false)}>Feedback</Link>
          
          {/* User profile in mobile menu */}
          <Link to='/register' className="flex items-center gap-2 pt-4" onClick={() => setIsOpen(false)}>
            <p className="font-bold text-white">Sojan</p>
            <img className="w-8 h-auto rounded-xl" alt="profile" src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  