import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import SupplierCard from "@/components/SupplierCard";
import ProductCard from "@/components/ProductCard";
import OrderCard from "@/components/OrderCard";
import { mockSuppliers, mockProducts, mockOrders, mockVendor, Product } from "@/data/mockData";
import { Search, ShoppingCart, Package, User, Bell } from "lucide-react";

const VendorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState<string | null>(null);

  const categories = ["all", "Vegetables", "Spices", "Oils", "Grains", "Dairy"];
  
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSupplier = !selectedSupplier || product.supplierId === selectedSupplier;
    return matchesSearch && matchesCategory && matchesSupplier;
  });

  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  const handleViewProducts = (supplierId: string) => {
    setSelectedSupplier(supplierId);
  };

  const clearSupplierFilter = () => {
    setSelectedSupplier(null);
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
                <h1 className="text-3xl font-bold text-foreground">Welcome back, {mockVendor.ownerName}!</h1>
                <p className="text-muted-foreground">{mockVendor.name} • {mockVendor.location}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Button variant="outline" size="icon">
                    <Bell className="w-5 h-5" />
                  </Button>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="relative">
                  <Button variant="outline" size="icon">
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                  {cart.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs">
                      {cart.length}
                    </Badge>
                  )}
                </div>
              </div>
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
                      <p className="text-sm text-muted-foreground">Total Orders</p>
                      <p className="text-2xl font-bold">{mockVendor.totalOrders}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Orders</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <p className="text-2xl font-bold">{mockVendor.rating}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Cart Items</p>
                      <p className="text-2xl font-bold">{cart.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="browse" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="browse">Browse Products</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
              <TabsTrigger value="orders">My Orders</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="browse" className="space-y-6">
              {/* Search and Filter */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search products or suppliers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category === "all" ? "All Categories" : category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  {selectedSupplier && (
                    <div className="mt-4 flex items-center gap-2">
                      <Badge variant="secondary">
                        Showing products from: {mockSuppliers.find(s => s.id === selectedSupplier)?.name}
                      </Badge>
                      <Button variant="ghost" size="sm" onClick={clearSupplierFilter}>
                        Clear Filter
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="suppliers" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockSuppliers.map((supplier) => (
                  <SupplierCard
                    key={supplier.id}
                    supplier={supplier}
                    onViewProducts={handleViewProducts}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockOrders.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                    onViewDetails={(id) => console.log("View order", id)}
                    onTrackOrder={(id) => console.log("Track order", id)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Vendor Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Business Name</label>
                      <Input value={mockVendor.name} readOnly />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Owner Name</label>
                      <Input value={mockVendor.ownerName} readOnly />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input value={mockVendor.email} readOnly />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <Input value={mockVendor.phone} readOnly />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium">Location</label>
                      <Input value={mockVendor.location} readOnly />
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

export default VendorDashboard;