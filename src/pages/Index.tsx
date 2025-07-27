import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-image.jpg";
import { ChefHat, Truck, Users, Star, ShoppingCart, Package, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Indian street food vendors and fresh ingredients"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              RasaConnect
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Connecting India's street food vendors with trusted, affordable suppliers. 
              Building the backbone of street food commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vendor/login">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <ChefHat className="mr-2" />
                  Join as Vendor
                </Button>
              </Link>
              <Link to="/supplier/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/30">
                  <Truck className="mr-2" />
                  Become Supplier
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Challenge We're Solving
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Street food vendors in India struggle daily to source quality raw materials at fair prices. 
              They face unpredictable suppliers, quality issues, and lack of transparency in pricing. 
              Meanwhile, wholesalers struggle to reach small vendors efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How RasaConnect Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A marketplace built on trust, transparency, and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vendor Side */}
            <Card className="shadow-card hover:shadow-primary transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <ChefHat className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">For Vendors</h3>
                  <p className="text-muted-foreground">Street food entrepreneurs</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Verified Suppliers</h4>
                      <p className="text-sm text-muted-foreground">Access only trusted, background-checked suppliers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Quality Ratings</h4>
                      <p className="text-sm text-muted-foreground">See real reviews from fellow vendors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShoppingCart className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Easy Ordering</h4>
                      <p className="text-sm text-muted-foreground">Simple mobile-first ordering system</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supplier Side */}
            <Card className="shadow-card hover:shadow-primary transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-primary">
                    <Truck className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">For Suppliers</h3>
                  <p className="text-muted-foreground">Wholesale distributors</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Reach More Vendors</h4>
                      <p className="text-sm text-muted-foreground">Connect with thousands of street food vendors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Bulk Orders</h4>
                      <p className="text-sm text-muted-foreground">Receive consistent, predictable orders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Digital Management</h4>
                      <p className="text-sm text-muted-foreground">Modern tools for inventory and orders</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built on Trust & Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every supplier is verified. Every transaction is transparent. Every review builds the community stronger.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Verified Vendors</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">150+</div>
                <p className="text-muted-foreground">Trusted Suppliers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-foreground mb-2">₹2L+</div>
                <p className="text-muted-foreground">Daily Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of vendors and suppliers already using RasaConnect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vendor/login">
                <Button variant="vendor" size="lg" className="w-full sm:w-auto">
                  Start as Vendor
                </Button>
              </Link>
              <Link to="/supplier/login">
                <Button variant="supplier" size="lg" className="w-full sm:w-auto">
                  Apply as Supplier
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-2">RasaConnect</div>
          <p className="text-primary-foreground/80">
            Connecting India's street food ecosystem, one order at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
