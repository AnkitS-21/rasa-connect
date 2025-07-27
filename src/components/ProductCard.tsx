import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/data/mockData";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-primary transition-all duration-300 transform hover:scale-105">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-foreground">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.supplier}</p>
          </div>
          <Badge 
            variant={product.inStock ? "default" : "destructive"}
            className="text-xs"
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {product.quality}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">₹{product.price}</span>
            <span className="text-sm text-muted-foreground">/{product.unit}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Min: {product.minQuantity} {product.unit}
          </div>
        </div>

        <Button 
          onClick={() => onAddToCart?.(product)}
          disabled={!product.inStock}
          className="w-full"
          variant="default"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;