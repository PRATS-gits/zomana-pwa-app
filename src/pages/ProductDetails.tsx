import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Truck, ShoppingCart, Heart, ChevronRight, Check, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PriceTag } from '@/components/ui-components/PriceTag';
import { QuantitySelector } from '@/components/ui-components/QuantitySelector';
import { SectionHeading } from '@/components/ui-components/SectionHeading';
import { ProductGrid } from '@/components/ui-components/ProductGrid';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { getProductById, getFeaturedProducts } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addItem } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      setTimeout(() => {
        const foundProduct = getProductById(id);
        if (foundProduct) {
          setProduct(foundProduct);
          setRelatedProducts(getFeaturedProducts());
        }
        setLoading(false);
      }, 500);
    }
  }, [id]);
  
  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };
  
  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }, quantity);
      
      toast.success('Added to cart', {
        description: `${quantity} × ${product.title} added to your cart.`,
      });
    }
  };
  
  const handleAddToWishlist = () => {
    toast.success('Added to wishlist', {
      description: `${product.title} added to your wishlist.`,
    });
  };
  
  if (loading) {
    return (
      <div className="page-container py-16 flex items-center justify-center min-h-[50vh]">
        <div className="loader" />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="page-container py-16 text-center min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="page-container py-8">
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/products" className="hover:text-foreground">Products</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to={`/products?category=${product.category.toLowerCase()}`} className="hover:text-foreground">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.title}</span>
      </div>
      
      <div className="md:hidden mb-4">
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.images[currentImageIndex]}
              alt={product.title}
              className="h-full w-full object-cover object-center animate-fade-in"
            />
          </div>
          
          <div className="flex space-x-2 overflow-auto pb-1">
            {product.images.map((image: string, index: number) => (
              <button
                key={index}
                className={`relative aspect-square w-20 overflow-hidden rounded-md bg-muted flex-shrink-0 transition-all ${
                  currentImageIndex === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {product.isNew && <Badge>New</Badge>}
              {product.onSale && product.originalPrice && (
                <Badge variant="destructive">
                  Sale {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                </Badge>
              )}
              <Badge variant="outline" className="bg-muted">{product.category}</Badge>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{product.title}</h1>
              <div className="mt-3">
                <PriceTag 
                  price={product.price} 
                  originalPrice={product.originalPrice} 
                  size="lg" 
                />
              </div>
            </div>
            
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.rating.toFixed(1)}) {product.reviewCount} reviews
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              {product.stock > 10 ? (
                <p className="text-green-600 flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  In Stock
                </p>
              ) : product.stock > 0 ? (
                <p className="text-amber-600">Only {product.stock} left in stock</p>
              ) : (
                <p className="text-destructive">Out of Stock</p>
              )}
            </div>
            
            <Separator />
            
            <div>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <QuantitySelector 
                    initialValue={1} 
                    onChange={handleQuantityChange} 
                    max={product.stock}
                  />
                </div>
                <Button 
                  className="flex-1 gap-2" 
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleAddToWishlist}
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to Wishlist</span>
                </Button>
              </div>
            </div>
            
            <div className="rounded-md bg-muted/50 p-4 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span>Free shipping on orders over $50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <Tabs defaultValue="features">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger 
              value="features" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-3"
            >
              Features
            </TabsTrigger>
            <TabsTrigger 
              value="specifications" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-3"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-3"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="features">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Features</h3>
                <ul className="space-y-2">
                  {product.features?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold">{product.rating.toFixed(1)}</div>
                  <div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Based on {product.reviewCount} reviews
                    </p>
                  </div>
                </div>
                
                <div className="p-8 text-center border rounded-md">
                  <p className="text-muted-foreground mb-4">
                    Reviews will be displayed here in the future update.
                  </p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      <section className="mt-16">
        <SectionHeading 
          title="You might also like" 
          subtitle="Similar products you may be interested in"
        />
        <ProductGrid products={relatedProducts} />
      </section>
    </div>
  );
};

export default ProductDetails;
