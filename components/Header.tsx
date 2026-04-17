
import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

interface HeaderProps {
  onOpenBookings?: () => void;
  onOpenDoctorPlatform?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenBookings, onOpenDoctorPlatform }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLangMenuOpen(false);
  };

  const navLinks = [
    { name: t('header.home'), id: 'top' },
    { name: t('header.about'), id: 'about' },
    { name: t('header.services'), id: 'services-package' },
    { name: t('header.features'), id: 'features' },
    { name: t('header.myBookings'), id: 'bookings' },
    { name: t('header.amanDoctor'), id: 'doctor' },
    { name: t('header.merchantPlatform'), id: 'merchant' },
    { name: t('header.blog'), id: 'blog' },
    { name: t('header.contact'), id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (targetId === 'bookings' && onOpenBookings) {
      onOpenBookings();
      return;
    }

    if (targetId === 'doctor' && onOpenDoctorPlatform) {
      onOpenDoctorPlatform();
      return;
    }

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header 
      className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl shadow-md py-1.5 md:py-2 transition-all duration-300"
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center gap-1 sm:gap-2">
          {/* Logo Section - Optimized for all screens */}
          <div 
            className="flex items-center gap-1.5 sm:gap-2 md:gap-3 group cursor-pointer flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative transition-all duration-300 transform group-hover:scale-105 flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <Logo className="w-full h-full drop-shadow-xl" />
              <div className="absolute inset-0 bg-[#4d8080]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col min-w-0 max-w-[120px] sm:max-w-[160px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-none">
              <span className="font-black text-[#4d8080] tracking-tight leading-[1.1] text-[9px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
                {t('header.brandAr')}
              </span>
              <span className="font-bold text-gray-400 uppercase tracking-tight truncate text-[5px] sm:text-[7px] md:text-[8px] lg:text-[9px]">
                {t('header.brandEn')}
              </span>
            </div>
          </div>

          {/* Desktop Nav - Show from lg screens */}
          <nav className="hidden lg:flex items-center gap-x-0.5 xl:gap-x-1 2xl:gap-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="font-black transition-all duration-300 text-[8px] xl:text-[9px] 2xl:text-[10px] hover:text-[#4d8080] text-gray-600 relative group whitespace-nowrap px-0.5 xl:px-1"
              >
                {link.name}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#4d8080] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions - Responsive */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2 flex-shrink-0">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 px-1.5 xl:px-2 py-1 xl:py-1.5 rounded-xl font-bold text-[8px] xl:text-[9px] text-gray-600 hover:bg-gray-100 transition-all"
              >
                <Globe size={12} className="xl:w-3.5 xl:h-3.5" />
                <span className="hidden xl:inline">{currentLanguage.flag} {currentLanguage.name}</span>
                <span className="xl:hidden">{currentLanguage.flag}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[150px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                        i18n.language === lang.code ? 'bg-teal-50 text-[#4d8080] font-bold' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="px-2 xl:px-3 2xl:px-4 py-1 xl:py-1.5 rounded-full border border-[#4d8080] text-[#4d8080] hover:bg-teal-50 font-bold text-[8px] xl:text-[9px] 2xl:text-[10px] transition-all whitespace-nowrap">
              {t('header.login')}
            </button>
            <button className="px-2.5 xl:px-4 2xl:px-5 py-1 xl:py-1.5 rounded-full bg-[#4d8080] text-white font-bold text-[8px] xl:text-[9px] 2xl:text-[10px] hover:bg-[#3d6666] transition-all shadow-lg shadow-teal-900/20 whitespace-nowrap">
              {t('header.subscribe')}
            </button>
          </div>

          {/* Mobile Menu Toggle - Show on smaller screens */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-1.5 sm:p-2 rounded-xl text-gray-600 bg-gray-50 transition-colors"
              >
                <Globe size={16} className="sm:w-5 sm:h-5" />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[130px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                        i18n.language === lang.code ? 'bg-teal-50 text-[#4d8080] font-bold' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-xs">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button 
              className="p-1.5 sm:p-2 rounded-xl text-gray-600 bg-gray-50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={16} className="sm:w-5 sm:h-5" /> : <Menu size={16} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-2xl animate-in slide-in-from-top-4 duration-300 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-6">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-gray-700 hover:text-[#4d8080] font-black py-3 text-center text-base border-b border-gray-50 last:border-0 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="pt-6 mt-4 border-t border-gray-200 flex flex-col gap-3">
                <button className="w-full py-3 rounded-xl border-2 border-[#4d8080] text-[#4d8080] font-black hover:bg-teal-50 transition-colors text-sm">
                  {t('header.login')}
                </button>
                <button className="w-full py-3 rounded-xl bg-[#4d8080] text-white font-black shadow-xl active:scale-95 transition-transform text-sm">
                  {t('header.subscribe')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
