import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative bg-brand-magenta after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-brand-blue"
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
          
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* Logo */}
              <Link to="/" className="flex items-end space-x-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src="/images/logoreactor.png" 
                    alt="Reactor Print Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-white">Impresiones Reactor</span>
              </Link>
            </div>
            
            <div className="hidden sm:flex sm:ml-auto">
              <div className="flex space-x-4">
                <Link 
                  to="/" 
                  className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Inicio
                </Link>
                <Link 
                  to="/catalog" 
                  className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Catálogo
                </Link>
                <a 
                  href="/#products" 
                  className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Productos
                </a>
                <a 
                  href="/#services" 
                  className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Servicios
                </a>
                <a 
                  href="/#about" 
                  className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Nosotros
                </a>
                <a 
                  href="/#contact" 
                  className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-brand-magenta hover:bg-brand-yellow hover:text-brand-blue transition-colors"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
          
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */}
            {/* WhatsApp Button */}
{/*             <button 
              type="button" 
              className="relative rounded-full bg-green-500 p-2 text-white hover:bg-green-600 focus:outline-2 focus:outline-offset-2 focus:outline-green-500 transition-colors"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Contactar por WhatsApp</span>
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="size-5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </button>
          </div> */}
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
            <a 
              href="/#products" 
              className="block rounded-md px-3 py-2 text-base font-medium text-brand-yellow hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Productos
            </a>
            <a 
              href="/#services" 
              className="block rounded-md px-3 py-2 text-base font-medium text-brand-yellow hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="/#about" 
              className="block rounded-md px-3 py-2 text-base font-medium text-brand-yellow hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nosotros
            </a>
            <a 
              href="/#contact" 
              className="block rounded-md px-3 py-2 text-base font-medium text-brand-yellow hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
