
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/ui/logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', href: '/products' },
        { name: 'New Arrivals', href: '/products/new' },
        { name: 'Featured', href: '/products/featured' },
        { name: 'Deals & Offers', href: '/deals' },
      ],
    },
    {
      title: 'Account',
      links: [
        { name: 'My Account', href: '/account' },
        { name: 'My Orders', href: '/account?tab=orders' },
        { name: 'Wishlist', href: '/account?tab=wishlist' },
        { name: 'Track Order', href: '/account?tab=track-order' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Shipping Policy', href: '/shipping' },
        { name: 'Returns & Refunds', href: '/returns' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="page-container pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="inline-block">
              <Logo variant="default" />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Premium shopping experience with quality products for every need.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@zomana.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Commerce St, Market City</span>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          
          {footerLinks.map((category) => (
            <div key={category.title} className="col-span-1">
              <h3 className="font-medium text-base mb-4">{category.title}</h3>
              <ul className="space-y-2.5">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-medium text-base mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter and get 10% off your first purchase.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="max-w-xs"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Zomana. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <div className="flex items-center justify-center space-x-2 bg-muted/40 rounded-md px-3 py-2">
              {/* Credit Card Icon */}
              <CreditCard className="h-6 w-6 text-muted-foreground" aria-label="Credit Card" />
              
              {/* Visa Card Icon */}
              <div className="relative w-10 h-6 bg-[#1434CB] rounded-sm flex items-center justify-center overflow-hidden">
                <div className="absolute bottom-0 right-0 w-full h-1/3 bg-[#F7B600]"></div>
                <span className="text-white font-bold text-xs relative z-10">VISA</span>
              </div>
              
              {/* Mastercard Icon */}
              <div className="relative w-10 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="absolute w-2.5 h-2.5 bg-[#EB001B] rounded-full left-2 top-1/2 transform -translate-y-1/2 opacity-90"></div>
                <div className="absolute w-2.5 h-2.5 bg-[#F79E1B] rounded-full right-2 top-1/2 transform -translate-y-1/2 opacity-90"></div>
                <div className="absolute w-1.5 h-2.5 bg-[#FF5F00] rounded-sm left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* American Express Icon */}
              <div className="relative w-10 h-6 bg-[#006FCF] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-[8px]">AMEX</span>
              </div>
              
              {/* PayPal Icon */}
              <div className="relative w-10 h-6 bg-white border border-gray-200 rounded-sm flex items-center justify-center">
                <div className="flex items-center">
                  <span className="text-[#003087] text-[8px] font-bold">Pay</span>
                  <span className="text-[#009CDE] text-[8px] font-bold">Pal</span>
                </div>
              </div>
              
              {/* Apple Pay Icon */}
              <div className="relative w-10 h-6 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">Apple Pay</span>
              </div>
              
              {/* Digital Wallet Icon */}
              <Wallet className="h-5 w-5 text-muted-foreground" aria-label="Digital Wallet" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
