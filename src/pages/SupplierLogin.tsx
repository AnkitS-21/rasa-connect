import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Truck, Package, Star } from "lucide-react";

const SupplierLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-card flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-secondary/10"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/10"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="shadow-card">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-primary">
              <Truck className="w-8 h-8 text-secondary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              {isLogin ? "Supplier Portal" : "Become a Supplier"}
            </CardTitle>
            <p className="text-muted-foreground">
              {isLogin 
                ? "Manage your inventory and serve street food vendors" 
                : "Join our network and connect with local vendors"
              }
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <Input 
                      placeholder="Business/Company Name" 
                      className="transition-all duration-300 focus:shadow-primary" 
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Contact Person Name" 
                      className="transition-all duration-300 focus:shadow-primary" 
                    />
                  </div>
                </>
              )}
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Business Email" 
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
                      placeholder="Business Phone Number" 
                      className="transition-all duration-300 focus:shadow-primary" 
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Business Address" 
                      className="transition-all duration-300 focus:shadow-primary" 
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="GST Number (Optional)" 
                      className="transition-all duration-300 focus:shadow-primary" 
                    />
                  </div>
                </>
              )}

              <Button 
                type="submit" 
                variant="supplier" 
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/supplier/dashboard';
                }}
              >
                {isLogin ? "Access Portal" : "Submit Application"}
              </Button>
            </form>

            <div className="text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-secondary hover:text-secondary/80 transition-colors text-sm"
              >
                {isLogin 
                  ? "New supplier? Apply to join" 
                  : "Already registered? Access portal"
                }
              </button>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">Bulk Orders</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">Build Trust</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/vendor/login" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Are you a vendor? Login here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupplierLogin;