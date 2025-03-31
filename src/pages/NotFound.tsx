
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Zomana";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="page-container py-16 text-center max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center animate-bounce-subtle">
            <ShoppingBag className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">404</h1>
        <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Oops! We couldn't find the page you're looking for.
        </p>
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="w-full">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
