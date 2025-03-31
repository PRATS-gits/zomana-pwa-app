
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ArrowRight, ChevronRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui-components/SectionHeading';
import { ProductGrid } from '@/components/ui-components/ProductGrid';
import { ProductCarousel } from '@/components/ui-components/ProductCarousel';
import { motion } from 'framer-motion';

// Fetch featured products from Supabase
const fetchFeaturedProducts = async () => {
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
    .order('rating', { ascending: false })
    .limit(8);

  if (error) {
    throw error;
  }

  return data || [];
};

// Fetch new arrivals from Supabase
const fetchNewArrivals = async () => {
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
    .eq('is_new', true)
    .order('created_at', { ascending: false })
    .limit(8);

  if (error) {
    throw error;
  }

  return data || [];
};

// Fetch on sale products from Supabase
const fetchOnSaleProducts = async () => {
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
    .order('price', { ascending: true })
    .limit(8);

  if (error) {
    throw error;
  }

  return data || [];
};

const categories = [{
  name: 'Electronics',
  image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80',
  href: '/products?category=electronics'
}, {
  name: 'Furniture',
  image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  href: '/products?category=furniture'
}, {
  name: 'Fashion',
  image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  href: '/products?category=fashion'
}, {
  name: 'Home & Kitchen',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  href: '/products?category=home-kitchen'
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { data: featuredProducts, isLoading: loadingFeatured } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: fetchFeaturedProducts,
  });

  const { data: newArrivals, isLoading: loadingNewArrivals } = useQuery({
    queryKey: ['newArrivals'],
    queryFn: fetchNewArrivals,
  });

  const { data: saleProducts, isLoading: loadingSale } = useQuery({
    queryKey: ['saleProducts'],
    queryFn: fetchOnSaleProducts,
  });

  useEffect(() => {
    // Set isLoaded when all data is fetched
    if (!loadingFeatured && !loadingNewArrivals && !loadingSale) {
      setIsLoaded(true);
    }
  }, [loadingFeatured, loadingNewArrivals, loadingSale]);

  return <div className="pb-16">
      {/* Hero Section - Enhanced with improved animations and styling */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Zomana Shopping" className="absolute inset-0 h-full w-full object-cover object-center animate-fade-in transition-transform duration-10000 hover:scale-105" />
        <div className="relative z-20 h-full page-container flex flex-col justify-center">
          <motion.div className="max-w-2xl" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            <motion.span className="inline-block px-4 py-1.5 bg-primary/90 text-white text-sm font-medium rounded-full mb-5" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4,
            delay: 0.5
          }}>Summer Collection 2025</motion.span>
            <motion.h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }}>
              Discover Your Perfect Style
            </motion.h1>
            <motion.p className="mt-6 text-xl text-white/90 max-w-lg" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.9
          }}>
              Shop the latest trends with confidence. Premium quality products delivered to your doorstep.
            </motion.p>
            <motion.div className="mt-10 flex flex-col sm:flex-row gap-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 1.1
          }}>
              <Button asChild size="lg" className="font-medium text-base px-8 py-6">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20 font-medium text-base px-8 py-6">
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section page-container">
        <SectionHeading title="Shop by Category" subtitle="Browse our popular categories and find what you're looking for" animationDelay={200} />
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.2
      }}>
          {categories.map((category, index) => <motion.div key={category.name} variants={itemVariants}>
              <Link to={category.href} className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-elevated transition-all duration-300">
                <div className="aspect-square w-full overflow-hidden">
                  <img src={category.image} alt={category.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-center">
                  <h3 className="text-xl font-medium text-white">{category.name}</h3>
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:bg-white/40 group-hover:translate-x-1">
                    <ChevronRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </Link>
            </motion.div>)}
        </motion.div>
      </section>

      {/* Featured Products Carousel */}
      <section className="section page-container bg-gray-50 rounded-2xl py-16 px-6">
        <SectionHeading title="Featured Products" subtitle="Handpicked by our experts just for you" alignment="center" animationDelay={300} />
        
        {!isLoaded ? <div className="loader" /> : <ProductCarousel products={featuredProducts || []} />}
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2 px-8 py-6 text-base font-medium hover:bg-primary hover:text-white transition-colors duration-300">
            <Link to="/products">
              View All Products <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Banner - Enhanced with improved design */}
      <section className="section page-container">
        <motion.div className="relative rounded-2xl overflow-hidden shadow-elevated" initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true,
        amount: 0.2
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
          <img src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Special offer" className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-10000 hover:scale-105" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="page-container">
              <motion.div className="max-w-lg" initial={{
              x: -50,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true,
              amount: 0.5
            }}>
                <div className="mb-4 inline-block bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold text-primary">
                  Limited Time Offer
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Up to 50% Off Summer Sale</h2>
                <p className="mt-4 text-lg text-white/90 mb-8 max-w-md">
                  Shop our special summer collection and enjoy amazing discounts on all your favorite items
                </p>
                <Button asChild size="lg" className="font-medium text-base px-8 py-6 hover:scale-105 transition-transform duration-200">
                  <Link to="/deals">Shop the Sale</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* New Arrivals */}
      <section className="section page-container">
        <SectionHeading title="New Arrivals" subtitle="The latest additions to our collection" alignment="center" animationDelay={300} />
        
        {!isLoaded ? <div className="loader" /> : <ProductGrid products={newArrivals || []} />}
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2 px-8 py-6 text-base font-medium hover:bg-primary hover:text-white transition-colors duration-300">
            <Link to="/products?filter=new">
              View All New Arrivals <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Sale Products */}
      <section className="section page-container bg-gray-50 rounded-2xl py-16 px-6">
        <SectionHeading title="On Sale" subtitle="Great products at even better prices" alignment="center" animationDelay={300} />
        
        {!isLoaded ? <div className="loader" /> : <ProductCarousel products={saleProducts || []} />}
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2 px-8 py-6 text-base font-medium hover:bg-primary hover:text-white transition-colors duration-300">
            <Link to="/products?filter=sale">
              View All Sale Items <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Features - Enhanced with improved styling */}
      <section className="section page-container">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.2
      }}>
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 rounded-lg transition-transform hover:translate-y-[-5px] duration-300">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-3">Free Shipping</h3>
            <p className="text-muted-foreground">On orders over $50</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 rounded-lg transition-transform hover:translate-y-[-5px] duration-300">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-3">Easy Returns</h3>
            <p className="text-muted-foreground">30-day return policy</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 rounded-lg transition-transform hover:translate-y-[-5px] duration-300">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-3">Secure Payments</h3>
            <p className="text-muted-foreground">Protected by encryption</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-6 rounded-lg transition-transform hover:translate-y-[-5px] duration-300">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-3">24/7 Support</h3>
            <p className="text-muted-foreground">We're here to help</p>
          </motion.div>
        </motion.div>
      </section>
    </div>;
};
export default Index;
