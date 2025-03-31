
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { 
  Percent, 
  ShoppingBag, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Gift, 
  BadgePercent,
  Star,
  Truck,
  Flame
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { ProductGrid } from '@/components/ui-components/ProductGrid';
import { ProductCarousel } from '@/components/ui-components/ProductCarousel';

// Types for our deal data
interface FeaturedDeal {
  id: number;
  title: string;
  description: string;
  discount: string;
  expiryDays: number;
  image: string;
  category: string;
  itemsLeft: number;
  totalItems: number;
}

interface SpecialOffer {
  id: number;
  title: string;
  description: string;
  code: string;
  color: string;
  icon: React.ReactNode;
}

// Fetch products on sale from Supabase
const fetchSaleProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      id, 
      title, 
      price, 
      original_price, 
      category, 
      rating, 
      review_count, 
      is_new, 
      on_sale, 
      stock,
      product_images (
        image_url, 
        is_primary, 
        display_order
      )
    `)
    .eq('on_sale', true)
    .order('rating', { ascending: false })
    .limit(6);

  if (error) {
    throw error;
  }

  return data || [];
};

// Fetch flash deals (products with biggest discounts)
const fetchFlashDeals = async () => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      id, 
      title, 
      price, 
      original_price, 
      category, 
      rating, 
      review_count, 
      is_new, 
      on_sale, 
      stock,
      product_images (
        image_url, 
        is_primary, 
        display_order
      )
    `)
    .not('original_price', 'is', null)
    .order('price', { ascending: true })
    .limit(4);

  if (error) {
    throw error;
  }

  // Calculate discount percentage and sort by it
  const productsWithDiscount = data
    .map(product => {
      const discountPercentage = product.original_price 
        ? Math.round(((product.original_price - product.price) / product.original_price) * 100) 
        : 0;
      return { ...product, discountPercentage };
    })
    .sort((a, b) => b.discountPercentage - a.discountPercentage);
  
  return productsWithDiscount.slice(0, 4) || [];
};

const Deals = () => {
  const currentDate = new Date();
  // Format date as "Month Day, Year"
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Fetch daily deals from Supabase
  const { 
    data: dailyDeals, 
    isLoading: isLoadingDeals, 
    error: dealsError 
  } = useQuery({
    queryKey: ['dailyDeals'],
    queryFn: fetchSaleProducts,
  });

  // Fetch flash deals from Supabase
  const {
    data: flashDeals,
    isLoading: isLoadingFlash,
    error: flashError
  } = useQuery({
    queryKey: ['flashDeals'],
    queryFn: fetchFlashDeals,
  });

  // Featured deals - these could be moved to Supabase in the future
  const featuredDeals: FeaturedDeal[] = [
    {
      id: 1,
      title: "Summer Flash Sale",
      description: "Up to 70% off on summer essentials. Limited time offer!",
      discount: "70%",
      expiryDays: 3,
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2215&auto=format&fit=crop",
      category: "Fashion",
      itemsLeft: 45,
      totalItems: 100
    },
    {
      id: 2,
      title: "Tech Week Specials",
      description: "Exclusive discounts on the latest gadgets and electronics.",
      discount: "35%",
      expiryDays: 5,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop",
      category: "Electronics",
      itemsLeft: 28,
      totalItems: 75
    },
    {
      id: 3,
      title: "Home Decor Clearance",
      description: "Refresh your living space with our home decor sale.",
      discount: "50%",
      expiryDays: 7,
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2374&auto=format&fit=crop",
      category: "Home & Living",
      itemsLeft: 65,
      totalItems: 120
    }
  ];

  // Special offers
  const specialOffers: SpecialOffer[] = [
    {
      id: 1,
      title: "Buy One Get One",
      description: "On selected clothing items",
      code: "BOGO2023",
      color: "bg-blue-100 text-blue-800",
      icon: <Gift className="h-8 w-8 mb-3" />
    },
    {
      id: 2,
      title: "Free Shipping",
      description: "On orders over $50",
      code: "SHIPFREE",
      color: "bg-green-100 text-green-800",
      icon: <Truck className="h-8 w-8 mb-3" />
    },
    {
      id: 3,
      title: "10% Off First Order",
      description: "For new customers",
      code: "WELCOME10",
      color: "bg-purple-100 text-purple-800",
      icon: <BadgePercent className="h-8 w-8 mb-3" />
    },
    {
      id: 4,
      title: "Loyalty Discount",
      description: "15% off for members",
      code: "LOYAL15",
      color: "bg-amber-100 text-amber-800",
      icon: <Star className="h-8 w-8 mb-3" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Header with animated banner */}
        <div className="text-center mb-6">
          <Badge variant="outline" className="mb-2">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            {formattedDate}
          </Badge>
          <motion.h1 
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Today's Special Deals & Offers
          </motion.h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Discover incredible savings across our store with limited-time offers, flash sales, and exclusive discounts.
          </p>
        </div>
        
        {/* Hero Banner - Animated */}
        <motion.div 
          className="relative overflow-hidden rounded-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="bg-gradient-to-r from-primary/20 via-purple-500/10 to-primary/5 p-8 md:p-12">
            <div className="max-w-xl">
              <Badge className="mb-4 bg-primary/90">Limited Time</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">End of Season Sale</h2>
              <p className="text-muted-foreground mb-6">
                Enjoy up to 60% off on a wide selection of products. Don't miss out on these amazing deals!
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Button>Shop Now</Button>
                <Button variant="outline">View Catalog</Button>
              </div>
              
              <div className="mt-6 flex items-center text-sm">
                <Clock className="h-4 w-4 mr-1.5" />
                <span>Offer ends in 5 days</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flash Deals - New Carousel Section */}
        <section className="py-8">
          <div className="flex items-center mb-8">
            <Flame className="h-6 w-6 mr-2 text-red-500" />
            <h2 className="text-2xl font-bold">Flash Deals</h2>
          </div>
          
          {isLoadingFlash ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-gray-200 rounded-lg h-80" />
              ))}
            </div>
          ) : flashError ? (
            <div className="text-center py-12 text-destructive">
              Error loading flash deals: {(flashError as Error).message}
            </div>
          ) : (
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent rounded-lg -z-10"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {flashDeals?.map((deal) => {
                  const primaryImage = deal.product_images?.find(img => img.is_primary)?.image_url || 
                                    (deal.product_images && deal.product_images[0]?.image_url) || 
                                    "https://placehold.co/300x400?text=No+Image";
                  
                  return (
                    <Card key={deal.id} className="overflow-hidden group border-2 border-red-200 hover:border-red-400 transition-colors">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img 
                          src={primaryImage} 
                          alt={deal.title} 
                          className="w-full h-[180px] object-cover" 
                        />
                        <div className="absolute top-2 right-2 z-20">
                          <motion.div
                            initial={{ rotate: -5 }}
                            animate={{ rotate: 5 }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
                          >
                            <Badge className="bg-red-500 text-white font-bold px-3 py-1 text-base">
                              {deal.discountPercentage}% OFF
                            </Badge>
                          </motion.div>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 z-20">
                          <h3 className="text-white font-medium line-clamp-1">{deal.title}</h3>
                          <div className="flex justify-between items-center mt-1">
                            <div className="flex items-baseline space-x-1.5">
                              <span className="text-white font-bold">${deal.price.toFixed(2)}</span>
                              {deal.original_price && (
                                <span className="text-white/70 text-sm line-through">
                                  ${deal.original_price.toFixed(2)}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                              <span className="text-white text-sm">{deal.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardFooter className="border-t p-3">
                        <Button variant="default" className="w-full text-sm" size="sm" asChild>
                          <Link to={`/products/${deal.id}`}>
                            <ShoppingBag className="h-3.5 w-3.5 mr-1.5" />
                            Shop Now
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
          
          <div className="text-center mt-6">
            <Button variant="outline" size="sm" asChild>
              <Link to="/products">
                View All Flash Deals <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Featured Deals */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Deals</h2>
            <Button variant="ghost" className="text-sm" asChild>
              <Link to="/products">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDeals.map((deal) => (
              <motion.div 
                key={deal.id}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48">
                    <img 
                      src={deal.image} 
                      alt={deal.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary">
                        <Percent className="h-3.5 w-3.5 mr-1" /> {deal.discount} OFF
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <Badge variant="outline" className="mb-2">{deal.category}</Badge>
                    <h3 className="text-lg font-semibold mb-2">{deal.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{deal.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Items Remaining</span>
                        <span className="font-medium">{deal.itemsLeft} of {deal.totalItems}</span>
                      </div>
                      <Progress value={(deal.itemsLeft / deal.totalItems) * 100} className="h-2" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Ends in {deal.expiryDays} days</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/products?deal=${deal.id}`}>Shop Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        
        <Separator />
        
        {/* Special Offers and Coupons - Redesigned */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Exclusive Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {specialOffers.map((offer) => (
              <motion.div
                key={offer.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className={`${offer.color} border-0 h-full`}>
                  <CardContent className="p-6">
                    {offer.icon}
                    <h3 className="font-semibold mb-1">{offer.title}</h3>
                    <p className="text-sm mb-3">{offer.description}</p>
                    <div className="bg-white/80 rounded p-2 text-center">
                      <code className="text-sm font-mono font-bold">{offer.code}</code>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Daily Deals from Supabase - with ProductCarousel */}
        <section>
          <div className="flex items-center mb-6">
            <BadgePercent className="h-6 w-6 mr-2 text-primary" />
            <h2 className="text-2xl font-bold">Daily Deals</h2>
          </div>
          
          {isLoadingDeals ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-gray-200 rounded-lg h-80" />
              ))}
            </div>
          ) : dealsError ? (
            <div className="text-center py-12 text-destructive">
              Error loading deals: {(dealsError as Error).message}
            </div>
          ) : (
            <ProductCarousel products={dailyDeals || []} />
          )}
          
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <Link to="/products">
                View All Deals <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Newsletter for deals - Redesigned */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 md:p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-3">Get Exclusive Deals</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and be the first to know about special promotions, flash sales, and limited-time offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Deals;
