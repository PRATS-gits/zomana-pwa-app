
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/ui/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const isMobile = useIsMobile();
  const location = useLocation();
  const { cartItemsCount, toggleCart } = useCart();
  const { isAuthenticated, logout } = useAuth();

  const wishlistCount = 0; // This would be connected to your wishlist state

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Would implement search functionality here
    console.log('Searching for:', searchValue);
  };

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'Deals', href: '/deals' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-subtle" : "bg-transparent"
    )}>
      <div className="page-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo area */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium animated-underline",
                  location.pathname === item.href 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search & user actions */}
          <div className="hidden md:flex items-center space-x-2">
            <form onSubmit={handleSearch} className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search products..."
                className="pl-9 bg-muted/50"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
            
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>
            
            <Button variant="ghost" size="icon" className="relative" onClick={toggleCart}>
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {isAuthenticated ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/account">My Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/orders">Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>Sign Out</DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/login">Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/register">Register</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-smooth overflow-hidden",
        mobileMenuOpen ? "max-h-screen bg-background border-b" : "max-h-0"
      )}>
        <div className="page-container py-4 space-y-4">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search products..."
                className="pl-9 bg-muted/50 w-full"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </form>
          
          <nav className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "py-2 text-base font-medium",
                  location.pathname === item.href 
                    ? "text-primary" 
                    : "text-foreground/70"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex justify-between pt-2 border-t">
            <Link to="/wishlist" className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="relative p-0">
                <Heart className="h-5 w-5 mr-1.5" />
                Wishlist
                {wishlistCount > 0 && (
                  <Badge className="ml-1">{wishlistCount}</Badge>
                )}
              </Button>
            </Link>
            
            <Button variant="ghost" size="sm" className="relative p-0" onClick={toggleCart}>
              <ShoppingCart className="h-5 w-5 mr-1.5" />
              Cart
              {cartItemsCount > 0 && (
                <Badge className="ml-1">{cartItemsCount}</Badge>
              )}
            </Button>
            
            {isAuthenticated ? (
              <Link to="/account" className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="relative p-0">
                  <User className="h-5 w-5 mr-1.5" />
                  Account
                </Button>
              </Link>
            ) : (
              <Link to="/login" className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="relative p-0">
                  <User className="h-5 w-5 mr-1.5" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
          
          {isAuthenticated && (
            <div className="pt-2 border-t">
              <Button 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground text-sm" 
                onClick={handleLogout}
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
