import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-glow transition-colors">
          RasaConnect
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/vendor/login">
            <Button variant="outline" size="sm">Vendor Login</Button>
          </Link>
          <Link to="/supplier/login">
            <Button variant="secondary" size="sm">Supplier Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;