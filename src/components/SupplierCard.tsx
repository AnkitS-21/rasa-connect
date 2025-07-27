import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Phone, CheckCircle } from "lucide-react";
import { Supplier } from "@/data/mockData";

interface SupplierCardProps {
  supplier: Supplier;
  onViewProducts?: (supplierId: string) => void;
}

const SupplierCard = ({ supplier, onViewProducts }: SupplierCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-primary transition-all duration-300 transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={supplier.image} 
          alt={supplier.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-foreground">{supplier.name}</h3>
              {supplier.verified && (
                <CheckCircle className="w-5 h-5 text-primary" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">{supplier.type}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="font-semibold">{supplier.rating}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{supplier.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Delivery in {supplier.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>{supplier.phone}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {supplier.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {supplier.specialties.slice(0, 3).map((specialty, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
          {supplier.specialties.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{supplier.specialties.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {supplier.totalOrders} orders completed
          </span>
          <span className="text-muted-foreground">
            Min order: ₹{supplier.minOrder}
          </span>
        </div>

        <Button 
          onClick={() => onViewProducts?.(supplier.id)}
          className="w-full"
          variant="outline"
        >
          View Products
        </Button>
      </CardContent>
    </Card>
  );
};

export default SupplierCard;