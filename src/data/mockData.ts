// Mock data for RasaConnect platform

export interface Supplier {
  id: string;
  name: string;
  type: string;
  location: string;
  rating: number;
  totalOrders: number;
  verified: boolean;
  phone: string;
  email: string;
  description: string;
  specialties: string[];
  deliveryTime: string;
  minOrder: number;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  supplier: string;
  supplierId: string;
  price: number;
  unit: string;
  minQuantity: number;
  maxQuantity: number;
  description: string;
  image: string;
  inStock: boolean;
  quality: string;
}

export interface Order {
  id: string;
  vendorId: string;
  supplierId: string;
  supplierName: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  items: OrderItem[];
  total: number;
  orderDate: string;
  expectedDelivery: string;
  deliveryAddress: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  unit: string;
}

export interface Vendor {
  id: string;
  name: string;
  ownerName: string;
  location: string;
  phone: string;
  email: string;
  businessType: string;
  rating: number;
  totalOrders: number;
  verified: boolean;
}

export const mockSuppliers: Supplier[] = [
  {
    id: "1",
    name: "Fresh Vegetables Co.",
    type: "Vegetable Wholesaler",
    location: "Azadpur Mandi, Delhi",
    rating: 4.8,
    totalOrders: 1250,
    verified: true,
    phone: "+91 98765 43210",
    email: "contact@freshveggies.com",
    description: "Premium quality vegetables sourced directly from farms. Specializing in fresh produce for street food vendors.",
    specialties: ["Onions", "Tomatoes", "Potatoes", "Green Vegetables", "Seasonal Fruits"],
    deliveryTime: "6-8 hours",
    minOrder: 500,
    image: "/api/placeholder/300/200"
  },
  {
    id: "2", 
    name: "Spice Masters",
    type: "Spice Distributor",
    location: "Khari Baoli, Delhi",
    rating: 4.9,
    totalOrders: 890,
    verified: true,
    phone: "+91 98765 43211",
    email: "orders@spicemasters.com",
    description: "Authentic Indian spices and masalas. Over 50 years of experience in spice trading.",
    specialties: ["Garam Masala", "Chaat Masala", "Red Chili Powder", "Turmeric", "Coriander"],
    deliveryTime: "4-6 hours",
    minOrder: 300,
    image: "/api/placeholder/300/200"
  },
  {
    id: "3",
    name: "Oil & Ghee Suppliers",
    type: "Oil Distributor", 
    location: "Karol Bagh, Delhi",
    rating: 4.7,
    totalOrders: 567,
    verified: true,
    phone: "+91 98765 43212",
    email: "info@oilsuppliers.com",
    description: "Quality cooking oils and pure ghee for street food preparation.",
    specialties: ["Mustard Oil", "Sunflower Oil", "Pure Ghee", "Coconut Oil"],
    deliveryTime: "8-12 hours",
    minOrder: 1000,
    image: "/api/placeholder/300/200"
  }
];

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Onions",
    category: "Vegetables",
    supplier: "Fresh Vegetables Co.",
    supplierId: "1",
    price: 25,
    unit: "kg",
    minQuantity: 10,
    maxQuantity: 100,
    description: "Premium quality red onions, perfect for street food preparations",
    image: "/api/placeholder/200/200",
    inStock: true,
    quality: "Grade A"
  },
  {
    id: "2",
    name: "Tomatoes",
    category: "Vegetables", 
    supplier: "Fresh Vegetables Co.",
    supplierId: "1",
    price: 30,
    unit: "kg",
    minQuantity: 5,
    maxQuantity: 50,
    description: "Fresh ripe tomatoes for curries and gravies",
    image: "/api/placeholder/200/200",
    inStock: true,
    quality: "Grade A"
  },
  {
    id: "3",
    name: "Garam Masala",
    category: "Spices",
    supplier: "Spice Masters",
    supplierId: "2", 
    price: 180,
    unit: "kg",
    minQuantity: 1,
    maxQuantity: 10,
    description: "Authentic blend of aromatic spices",
    image: "/api/placeholder/200/200",
    inStock: true,
    quality: "Premium"
  },
  {
    id: "4",
    name: "Red Chili Powder",
    category: "Spices",
    supplier: "Spice Masters", 
    supplierId: "2",
    price: 120,
    unit: "kg",
    minQuantity: 1,
    maxQuantity: 10,
    description: "Fiery red chili powder with perfect heat level",
    image: "/api/placeholder/200/200",
    inStock: true,
    quality: "Premium"
  },
  {
    id: "5",
    name: "Mustard Oil",
    category: "Oils",
    supplier: "Oil & Ghee Suppliers",
    supplierId: "3",
    price: 150,
    unit: "liter", 
    minQuantity: 5,
    maxQuantity: 20,
    description: "Pure mustard oil for authentic Indian cooking",
    image: "/api/placeholder/200/200",
    inStock: true,
    quality: "Pure"
  }
];

export const mockOrders: Order[] = [
  {
    id: "ORD001",
    vendorId: "V001",
    supplierId: "1",
    supplierName: "Fresh Vegetables Co.",
    status: "delivered",
    items: [
      { productId: "1", productName: "Fresh Onions", quantity: 20, price: 25, unit: "kg" },
      { productId: "2", productName: "Tomatoes", quantity: 15, price: 30, unit: "kg" }
    ],
    total: 950,
    orderDate: "2024-01-25",
    expectedDelivery: "2024-01-25",
    deliveryAddress: "Shop 15, Connaught Place, Delhi"
  },
  {
    id: "ORD002", 
    vendorId: "V001",
    supplierId: "2",
    supplierName: "Spice Masters",
    status: "confirmed",
    items: [
      { productId: "3", productName: "Garam Masala", quantity: 2, price: 180, unit: "kg" },
      { productId: "4", productName: "Red Chili Powder", quantity: 3, price: 120, unit: "kg" }
    ],
    total: 720,
    orderDate: "2024-01-26",
    expectedDelivery: "2024-01-26",
    deliveryAddress: "Shop 15, Connaught Place, Delhi"
  }
];

export const mockVendor: Vendor = {
  id: "V001",
  name: "Delhi Chaat Corner",
  ownerName: "Raj Kumar",
  location: "Connaught Place, Delhi",
  phone: "+91 98765 12345",
  email: "raj@delchaat.com",
  businessType: "Street Food Stall",
  rating: 4.6,
  totalOrders: 156,
  verified: true
};