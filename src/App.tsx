import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { ShoppingCart } from "./components/ui-components/ShoppingCart";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import PWAUpdateToast from "./components/ui/pwa-update-toast";
import InstallPWA from "./components/ui/install-pwa";
import OfflineIndicator from "./components/ui/offline-indicator";
import Index from "./pages/Index";
import Products from "./pages/Products";
import NewArrivals from "./pages/NewArrivals";
import FeaturedProducts from "./pages/FeaturedProducts";
import ProductDetails from "./pages/ProductDetails";
import Account from "./pages/Account";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnsPolicy from "./pages/ReturnsPolicy";
import TermsConditions from "./pages/TermsConditions";
import Categories from "./pages/Categories";
import Deals from "./pages/Deals";
import NotFound from "./pages/NotFound";

// Category Pages
import ClothingCategory from "./pages/category/ClothingCategory";
import AccessoriesCategory from "./pages/category/AccessoriesCategory";
import HealthCategory from "./pages/category/HealthCategory";
import SportsCategory from "./pages/category/SportsCategory";
import HomeKitchenCategory from "./pages/category/HomeKitchenCategory";

const queryClient = new QueryClient();

// Get the base URL from the Vite config for GitHub Pages
const BASE_PATH = import.meta.env.BASE_URL;

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={BASE_PATH}>
        <TooltipProvider>
          <AuthProvider>
            <CartProvider>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/new" element={<NewArrivals />} />
                  <Route path="/products/featured" element={<FeaturedProducts />} />
                  <Route path="/products/:id" element={<ProductDetails />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  {/* Routes for additional pages */}
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/shipping" element={<ShippingPolicy />} />
                  <Route path="/returns" element={<ReturnsPolicy />} />
                  <Route path="/terms" element={<TermsConditions />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/deals" element={<Deals />} />
                  
                  {/* Category Pages */}
                  <Route path="/category/clothing" element={<ClothingCategory />} />
                  <Route path="/category/accessories" element={<AccessoriesCategory />} />
                  <Route path="/category/health" element={<HealthCategory />} />
                  <Route path="/category/sports" element={<SportsCategory />} />
                  <Route path="/category/home" element={<HomeKitchenCategory />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ShoppingCart />
              <Sonner />
              <PWAUpdateToast />
              <InstallPWA />
              <OfflineIndicator />
            </CartProvider>
          </AuthProvider>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
