import React from 'react';
import { User, Clock } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import { useToggle } from '../hooks/useToggle';
import Button from '../components/Button';
import CartIcon from '../components/CartIcon';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { cn } from '../utils/cn';

const Navbar = () => {
  const isScrolled = useScroll();
  const [isMenuOpen, { toggle: toggleMenu }] = useToggle();

  const handleCartClick = () => {
    console.log('Open cart');
  };

  const handleUserClick = () => {
    console.log('Open user menu');
  };

  const handleReservationClick = () => {
    console.log('Open reservation modal');
  };

  return (
    <>
      <nav className={cn(
        "bg-white shadow-lg sticky top-0 z-50 transition-all duration-300",
        isScrolled ? 'py-2 shadow-xl' : 'py-4'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">

            <Logo />

            <DesktopMenu />

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">

              <CartIcon onClick={handleCartClick} />

              {/* User Account */}
              <Button
                variant="icon"
                icon={User}
                onClick={handleUserClick}
                className="hidden sm:flex"
              />

              {/* Reserve Table Button - Desktop */}
              <Button
                onClick={handleReservationClick}
                className="hidden lg:flex"
              >
                <Clock size={16} />
                Reserve Table
              </Button>

              {/* Reserve Button - Tablet */}
              <Button
                onClick={handleReservationClick}
                size="sm"
                className="hidden md:flex lg:hidden"
              >
                <Clock size={14} />
                Reserve
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="xl:hidden p-2.5 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-all duration-200 relative"
              >
                <div className="relative w-6 h-6">
                  <span className={cn(
                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  )}></span>
                  <span className={cn(
                    "absolute h-0.5 w-6 bg-current transition-all duration-300",
                    isMenuOpen ? 'opacity-0' : 'top-2.5'
                  )}></span>
                  <span className={cn(
                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
                    isMenuOpen ? '-rotate-45 top-3' : 'top-4'
                  )}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} />
      </nav>
    </>
  );
};

export default Navbar;