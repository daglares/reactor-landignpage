import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    // Pequeño delay para asegurar que la navegación se complete
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="relative bg-brand-magenta after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-brand-yellow hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-brand-blue"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Abrir menú principal</span>
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className={`size-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                aria-hidden="true"
              >
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className={`size-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                aria-hidden="true"
              >
                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* Logo */}
              <Link to="/" className="flex items-end space-x-3 hover:opacity-80 transition-opacity">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src="/images/logoreactor.png" 
                      alt="Reactor Print Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xl font-bold text-white">Impresiones Reactor</span>
                </div>
              </Link>
            </div>
            
            <div className="hidden sm:flex sm:ml-auto">
              <div className="flex space-x-4">
                <Link 
                  to="/" 
                  className="rounded-xl bg-white p-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Inicio
                </Link>
                <Link 
                  to="/catalog" 
                  className="rounded-xl bg-white p-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Catálogo
                </Link>
                <button 
                  onClick={() => handleSectionNavigation('products')}
                  className="rounded-xl bg-white p-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Servicios
                </button>
                <button 
                  onClick={() => handleSectionNavigation('services')}
                  className="rounded-xl bg-white p-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Productos
                </button>
                <button 
                  onClick={() => handleSectionNavigation('about')}
                  className="rounded-xl bg-white p-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Nosotros
                </button>
                <button 
                  onClick={() => handleSectionNavigation('contact')}
                  className="rounded-xl bg-white p-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="block bg-brand-magenta sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link 
              to="/" 
              className="block rounded-md px-3 py-2 text-base font-medium text-brand-yellow hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/catalog" 
              className="block rounded-md px-3 py-2 text-base font-medium text-brand-yellow hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Catálogo
            </Link>
            <button 
              onClick={() => {
                handleSectionNavigation('products');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-center rounded-md px-3 py-2 text-base font-medium text-brand-yellow hover:bg-white/5 hover:text-white transition-colors"
            >
              Productos
            </button>
            <button 
              onClick={() => {
                handleSectionNavigation('services');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-center rounded-md px-3 py-2 text-base font-medium text-brand-yellow hover:bg-white/5 hover:text-white transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => {
                handleSectionNavigation('about');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-center rounded-md px-3 py-2 text-base font-medium text-brand-yellow hover:bg-white/5 hover:text-white transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => {
                handleSectionNavigation('contact');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-center rounded-md px-3 py-2 text-base font-medium text-brand-yellow hover:bg-white/5 hover:text-white transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
