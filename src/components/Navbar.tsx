
import { useState } from 'react';
import { Menu, X, Activity, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Menareps
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 rtl:space-x-reverse">
              <a href="#home" className="text-muted-foreground hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {t('home')}
              </a>
              <a href="#features" className="text-muted-foreground hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {t('features')}
              </a>
              <a href="#about" className="text-muted-foreground hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {t('about')}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {t('contact')}
              </a>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 rtl:space-x-reverse p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'العربية'}</span>
              </button>
              
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105">
                {t('getStarted')}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
            >
              <Globe className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-emerald-400 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-sm rounded-lg mt-2 p-4 border border-border">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-muted-foreground hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {t('home')}
              </a>
              <a href="#features" className="text-muted-foreground hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {t('features')}
              </a>
              <a href="#about" className="text-muted-foreground hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {t('about')}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {t('contact')}
              </a>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 mt-2">
                {t('getStarted')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
