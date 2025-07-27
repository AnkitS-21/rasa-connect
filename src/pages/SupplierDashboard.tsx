import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { mockProducts, mockOrders, mockSuppliers } from "@/data/mockData";
import { Package, DollarSign, Users, TrendingUp, Plus, Edit, Eye, Check, X } from "lucide-react";

const SupplierDashboard = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    unit: "kg",
    description: ""
  });

  // Mock data for current supplier (assuming supplier ID "1")
  const currentSupplier = mockSuppliers[0];
  const supplierProducts = mockProducts.filter(p => p.supplierId === "1");
  const supplierOrders = mockOrders.filter(o => o.supplierId === "1");

  const pendingOrders = supplierOrders.filter(o => o.status === 'pending' || o.status === 'confirmed');
  const totalRevenue = supplierOrders.reduce((sum, order) => sum + order.total, 0);
  const completedOrders = supplierOrders.filter(o => o.status === 'delivered').length;

  const handleAddProduct = () => {
    console.log("Adding product:", newProduct);
    // Reset form
    setNewProduct({
      name: "",
      category: "",
      price: "",
      unit: "kg",
      description: ""
    });
  };

  const handleOrderAction = (orderId: string, action: 'accept' | 'reject') => {
    console.log(`${action} order:`, orderId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Supplier Dashboard</h1>
                <p className="text-muted-foreground">{currentSupplier.name} • {currentSupplier.location}</p>
              </div>
              <Badge variant="default" className="bg-green-500">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                Online
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Products</p>
                      <p className="text-2xl font-bold">{supplierProducts.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                      <p className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Orders</p>
                      <p className="text-2xl font-bold">{pendingOrders.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Completed Orders</p>
                      <p className="text-2xl font-bold">{completedOrders}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supplierOrders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">Order #{order.id}</h4>
                            <p className="text-sm text-muted-foreground">
                              {new Date(order.orderDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={order.status === 'delivered' ? 'default' : 'secondary'}>
                              {order.status}
                            </Badge>
                            <span className="font-semibold">₹{order.total}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-1 mb-3">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.productName} ({item.quantity} {item.unit})</span>
                              <span>₹{item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>

                        {(order.status === 'pending' || order.status === 'confirmed') && (
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="default"
                              onClick={() => handleOrderAction(order.id, 'accept')}
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Accept
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleOrderAction(order.id, 'reject')}
                            >
                              <X className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Product Inventory</CardTitle>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Product
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supplierProducts.map((product) => (
                      <div key={product.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <h4 className="font-semibold">{product.name}</h4>
                              <p className="text-sm text-muted-foreground">{product.category}</p>
                              <p className="text-sm">₹{product.price}/{product.unit}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={product.inStock ? 'default' : 'destructive'}>
                              {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </Badge>
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Monthly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">₹{totalRevenue.toLocaleString()}</div>
                    <p className="text-sm text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Customer Rating</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">{currentSupplier.rating}/5</div>
                    <p className="text-sm text-muted-foreground">Based on {currentSupplier.totalOrders} orders</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Supplier Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Business Name</label>
                      <Input value={currentSupplier.name} readOnly />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Business Type</label>
                      <Input value={currentSupplier.type} readOnly />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input value={currentSupplier.email} readOnly />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <Input value={currentSupplier.phone} readOnly />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium">Location</label>
                      <Input value={currentSupplier.location} readOnly />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium">Description</label>
                      <textarea 
                        className="w-full p-2 border rounded-md"
                        rows={3}
                        value={currentSupplier.description}
                        readOnly
                      />
                    </div>
                  </div>
                  <Button>Edit Profile</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;