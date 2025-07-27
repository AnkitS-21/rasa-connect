import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Package, Phone } from "lucide-react";
import { Order } from "@/data/mockData";

interface OrderCardProps {
  order: Order;
  onViewDetails?: (orderId: string) => void;
  onTrackOrder?: (orderId: string) => void;
}

const OrderCard = ({ order, onViewDetails, onTrackOrder }: OrderCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'confirmed': return 'bg-blue-500';
      case 'preparing': return 'bg-orange-500';
      case 'out-for-delivery': return 'bg-purple-500';
      case 'delivered': return 'bg-green-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'out-for-delivery': return 'Out for Delivery';
      default: return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  return (
    <Card className="hover:shadow-card transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-foreground">Order #{order.id}</h3>
            <p className="text-sm text-muted-foreground">{order.supplierName}</p>
          </div>
          <Badge 
            className={`text-white ${getStatusColor(order.status)}`}
          >
            {getStatusText(order.status)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span className="text-foreground">
                {item.productName} ({item.quantity} {item.unit})
              </span>
              <span className="font-medium">₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between items-center font-semibold">
            <span>Total Amount</span>
            <span className="text-primary">₹{order.total}</span>
          </div>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Ordered: {new Date(order.orderDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4" />
            <span>Expected: {new Date(order.expectedDelivery).toLocaleDateString()}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5" />
            <span className="line-clamp-2">{order.deliveryAddress}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onViewDetails?.(order.id)}
          >
            View Details
          </Button>
          {(order.status === 'confirmed' || order.status === 'preparing' || order.status === 'out-for-delivery') && (
            <Button 
              variant="default" 
              size="sm" 
              className="flex-1"
              onClick={() => onTrackOrder?.(order.id)}
            >
              Track Order
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;