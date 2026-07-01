import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  LogOut, 
  User, 
  Sparkles, 
  Shirt, 
  Info, 
  Users, 
  MessageSquare, 
  Home 
} from 'lucide-react';

function Navbar({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 350); // 350ms delay gives plenty of time to click
  };

  const handleToggleClick = (e) => {
    e.stopPropagation();
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(!dropdownOpen);
  };

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  // Styling helper for active links
  const linkClass = (path) => `
    nav-link flex items-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300
    ${isActive(path) 
      ? 'text-purple-400 bg-purple-500/10 border-b-2 border-purple-500 rounded-b-none' 
      : 'text-gray-300 hover:text-white hover:bg-white/5'}
  `;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0c26]/75 backdrop-blur-md border-b border-purple-500/20 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <Link to="/" className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-[#a855f7] animate-pulse" />
        <span className="logo-text">COUTURE AI</span>
      </Link>

      {/* Desktop Navigation */}
      {user && (
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className={linkClass('/dashboard')}>
            <Home className="h-4 w-4" /> Home
          </Link>
          <Link to="/about" className={linkClass('/about')}>
            <Info className="h-4 w-4" /> About
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="dropdown-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="dropdown-trigger"
              onClick={handleToggleClick}
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div className="dropdown-menu animate-scale-in">
                <Link 
                  to="/services/generate" 
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <Sparkles className="h-4 w-4 text-purple-400" /> Cloth Generation
                </Link>
                <Link 
                  to="/services/wardrobe" 
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  <Shirt className="h-4 w-4 text-cyan-400" /> Personal Wardrobe
                </Link>
              </div>
            )}
          </div>

          <Link to="/team" className={linkClass('/team')}>
            <Users className="h-4 w-4" /> Team
          </Link>
          <Link to="/feedback" className={linkClass('/feedback')}>
            <MessageSquare className="h-4 w-4" /> Feedback
          </Link>
        </nav>
      )}

      {/* Auth Block */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
              <User className="h-4 w-4 text-[#a855f7]" />
              <span className="text-sm font-semibold text-purple-300">{user}</span>
            </div>
            <button 
              onClick={onLogout}
              className="flex items-center gap-1.5 px-4.5 py-2 rounded-full text-sm font-semibold text-white bg-red-600/90 hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 active:scale-95 border-none cursor-pointer"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </div>
        ) : (
          <Link 
            to="/login" 
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 border-none"
          >
            Get Started
          </Link>
        )}
      </div>

      {/* Mobile Toggle Button */}
      {user && (
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white cursor-pointer"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      )}
      {!user && (
        <div className="md:hidden">
          <Link 
            to="/login" 
            className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#a855f7]"
          >
            Get Started
          </Link>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {user && isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0e0c24] border-b border-purple-500/20 p-6 flex flex-col gap-4 md:hidden animate-fade-in shadow-2xl">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 w-fit">
            <User className="h-4 w-4 text-[#a855f7]" />
            <span className="text-sm font-semibold text-purple-300">{user}</span>
          </div>

          <Link 
            to="/dashboard" 
            className="flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
            onClick={() => setIsOpen(false)}
          >
            <Home className="h-4 w-4" /> Home
          </Link>
          <Link 
            to="/about" 
            className="flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
            onClick={() => setIsOpen(false)}
          >
            <Info className="h-4 w-4" /> About
          </Link>
          <Link 
            to="/services/generate" 
            className="flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
            onClick={() => setIsOpen(false)}
          >
            <Sparkles className="h-4 w-4 text-purple-400" /> Cloth Generation
          </Link>
          <Link 
            to="/services/wardrobe" 
            className="flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
            onClick={() => setIsOpen(false)}
          >
            <Shirt className="h-4 w-4 text-cyan-400" /> Virtual Wardrobe
          </Link>
          <Link 
            to="/team" 
            className="flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
            onClick={() => setIsOpen(false)}
          >
            <Users className="h-4 w-4" /> Team
          </Link>
          <Link 
            to="/feedback" 
            className="flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
            onClick={() => setIsOpen(false)}
          >
            <MessageSquare className="h-4 w-4" /> Feedback
          </Link>
          
          <button 
            onClick={() => {
              onLogout();
              setIsOpen(false);
            }}
            className="flex items-center justify-center gap-2 p-3 mt-2 rounded-xl text-white bg-red-600/90 hover:bg-red-700 font-semibold cursor-pointer border-none"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      )}

      {/* Styled inline helper classes for React/Vite compilation */}
      <style>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: var(--primary);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          width: 80%;
        }
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* Flex & tailwind utility fallbacks for compile safety without Tailwind CSS */
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .flex-col { flex-direction: column; }
        .gap-1\\.5 { gap: 6px; }
        .gap-2 { gap: 8px; }
        .gap-4 { gap: 16px; }
        .gap-6 { gap: 24px; }
        .hidden { display: none; }
        .w-fit { width: fit-content; }
        
        @media (min-width: 768px) {
          .md\\:flex { display: flex; }
          .md\\:hidden { display: none; }
        }
        .p-2 { padding: 8px; }
        .p-2\\.5 { padding: 10px; }
        .p-3 { padding: 12px; }
        .py-2 { padding-top: 8px; padding-bottom: 8px; }
        .px-3 { padding-left: 12px; padding-right: 12px; }
        .px-4\\.5 { padding-left: 18px; padding-right: 18px; }
        .px-5 { padding-left: 20px; padding-right: 20px; }
        .py-2\\.5 { padding-top: 10px; padding-bottom: 10px; }
        .px-3\\.5 { padding-left: 14px; padding-right: 14px; }
        .py-1\\.5 { padding-top: 6px; padding-bottom: 6px; }
        .rounded-lg { border-radius: 8px; }
        .rounded-xl { border-radius: 12px; }
        .rounded-full { border-radius: 9999px; }
        .text-sm { font-size: 14px; }
        .text-xs { font-size: 12px; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .text-gray-300 { color: var(--text-secondary); }
        .text-purple-300 { color: #d8b4fe; }
        .text-purple-400 { color: #c084fc; }
        .bg-purple-500\\/10 { background-color: rgba(168, 85, 247, 0.1); }
        .border-purple-500\\/20 { border: 1px solid rgba(168, 85, 247, 0.2); }
        .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .hover\\:bg-white\\/5:hover { background-color: rgba(255, 255, 255, 0.05); }
        .hover\\:text-white:hover { color: #ffffff; }
        
        /* Dropdown component styles */
        .dropdown-container {
          position: relative;
        }
        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .dropdown-trigger:hover {
          color: white;
          background-color: rgba(255, 255, 255, 0.05);
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 6px;
          width: 200px;
          border-radius: 12px;
          background-color: #0f0c24;
          border: 1px solid rgba(168, 85, 247, 0.25);
          padding: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(168, 85, 247, 0.15);
          z-index: 100;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px;
          border-radius: 8px;
          font-size: 14px;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .dropdown-item:hover {
          color: white;
          background-color: rgba(168, 85, 247, 0.1);
        }
      `}</style>
    </header>
  );
}

export default Navbar;
