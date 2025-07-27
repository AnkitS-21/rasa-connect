import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChefHat, Users, ShoppingCart } from "lucide-react";

const VendorLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-card flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/10"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="shadow-card">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <ChefHat className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              {isLogin ? "Welcome Back, Vendor!" : "Join RasaConnect"}
            </CardTitle>
            <p className="text-muted-foreground">
              {isLogin 
                ? "Access trusted suppliers for your street food business" 
                : "Connect with reliable suppliers and grow your business"
              }
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <Input 
                      placeholder="Business Name" 
                      className="transition-all duration-300 focus:shadow-primary" 
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Owner Name" 
                      className="transition-all duration-300 focus:shadow-primary" 
                    />
                  </div>
                </>
              )}
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="transition-all duration-300 focus:shadow-primary" 
                />
              </div>
              
              <div>
                <Input 
                  type="password" 
                  placeholder="Password" 
                  className="transition-all duration-300 focus:shadow-primary" 
                />
              </div>

              {!isLogin && (
                <>
                  <div>
                    <Input 
                      placeholder="Phone Number" 
                      className="transition-all duration-300 focus:shadow-primary" 
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Location (City, Area)" 
                      className="transition-all duration-300 focus:shadow-primary" 
                    />
                  </div>
                </>
              )}

              <Button 
                type="submit" 
                variant="vendor" 
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/vendor/dashboard';
                }}
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary-glow transition-colors text-sm"
              >
                {isLogin 
                  ? "New vendor? Create your account" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">Trusted Network</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">Easy Ordering</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">Quality Supply</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/supplier/login" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Are you a supplier? Login here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendorLogin;