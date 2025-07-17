
import { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Menareps
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#features" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Features
              </a>
              <a href="#about" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </a>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-emerald-400 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 p-4 border border-slate-700">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#features" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Features
              </a>
              <a href="#about" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </a>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
