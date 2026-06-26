import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  decimal,
  uuid,
  json,
} from "drizzle-orm/pg-core";

// Users & Auth
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  role: text("role").default("USER").notNull(), // 'USER' | 'ADMIN'
  password: text("password"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const addresses = pgTable("addresses", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId").references(() => users.id, { onDelete: "cascade" }).notNull(),
  street: text("street").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  postalCode: text("postalCode").notNull(),
  country: text("country").notNull(),
  isDefault: boolean("isDefault").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Catalog
export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  imageId: text("imageId"), // Cloudinary public_id
  parentId: uuid("parentId"), // For subcategories
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const brands = pgTable("brands", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  logoId: text("logoId"), // Cloudinary public_id
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  basePrice: decimal("basePrice", { precision: 10, scale: 2 }).notNull(),
  compareAtPrice: decimal("compareAtPrice", { precision: 10, scale: 2 }),
  sku: text("sku").unique(),
  status: text("status").default("DRAFT").notNull(), // 'DRAFT' | 'ACTIVE' | 'ARCHIVED'
  categoryId: uuid("categoryId").references(() => categories.id),
  brandId: uuid("brandId").references(() => brands.id),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Product Variants (Color, Sweep Size, Wattage, Finish Type, Remote Control)
export const productVariants = pgTable("product_variants", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("productId").references(() => products.id, { onDelete: "cascade" }).notNull(),
  title: text("title").notNull(),
  sku: text("sku").unique(),
  color: text("color"),
  sweepSize: text("sweepSize"),
  wattage: text("wattage"),
  finishType: text("finishType"),
  hasRemote: boolean("hasRemote").default(false),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  inventoryQuantity: integer("inventoryQuantity").default(0).notNull(),
  reservedQuantity: integer("reservedQuantity").default(0).notNull(),
  imageId: text("imageId"), 
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const productImages = pgTable("product_images", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("productId").references(() => products.id, { onDelete: "cascade" }).notNull(),
  publicId: text("publicId").notNull(), // Cloudinary ID
  url: text("url").notNull(),
  altText: text("altText"),
  position: integer("position").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const productFaqs = pgTable("product_faqs", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("productId").references(() => products.id, { onDelete: "cascade" }).notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  position: integer("position").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const productSpecifications = pgTable("product_specifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("productId").references(() => products.id, { onDelete: "cascade" }).notNull(),
  name: text("name").notNull(), 
  value: text("value").notNull(), 
  position: integer("position").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// Orders & E-Commerce
export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId").references(() => users.id),
  totalAmount: decimal("totalAmount", { precision: 10, scale: 2 }).notNull(),
  discountAmount: decimal("discountAmount", { precision: 10, scale: 2 }).default("0"),
  status: text("status").default("PENDING").notNull(), // PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const orderItems = pgTable("order_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("orderId").references(() => orders.id, { onDelete: "cascade" }).notNull(),
  productId: uuid("productId").references(() => products.id).notNull(),
  variantId: uuid("variantId").references(() => productVariants.id),
  quantity: integer("quantity").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("orderId").references(() => orders.id, { onDelete: "cascade" }).notNull(),
  razorpayOrderId: text("razorpayOrderId"),
  razorpayPaymentId: text("razorpayPaymentId"),
  razorpaySignature: text("razorpaySignature"),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  status: text("status").default("PENDING").notNull(), // PENDING, SUCCESS, FAILED, REFUNDED
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const shippingDetails = pgTable("shipping_details", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("orderId").references(() => orders.id, { onDelete: "cascade" }).notNull(),
  street: text("street").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  postalCode: text("postalCode").notNull(),
  country: text("country").notNull(),
  trackingNumber: text("trackingNumber"),
  courierName: text("courierName"),
  estimatedDelivery: timestamp("estimatedDelivery"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// Marketing & CRM
export const reviews = pgTable("reviews", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("productId").references(() => products.id, { onDelete: "cascade" }).notNull(),
  userId: uuid("userId").references(() => users.id).notNull(),
  rating: integer("rating").notNull(),
  title: text("title"),
  content: text("content"),
  status: text("status").default("PENDING").notNull(), // PENDING, APPROVED, REJECTED
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const coupons = pgTable("coupons", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: text("code").notNull().unique(),
  discountType: text("discountType").notNull(), // PERCENTAGE, FIXED
  discountValue: decimal("discountValue", { precision: 10, scale: 2 }).notNull(),
  minOrderAmount: decimal("minOrderAmount", { precision: 10, scale: 2 }),
  maxDiscountAmount: decimal("maxDiscountAmount", { precision: 10, scale: 2 }),
  startDate: timestamp("startDate"),
  endDate: timestamp("endDate"),
  usageLimit: integer("usageLimit"),
  usedCount: integer("usedCount").default(0).notNull(),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const wishlist = pgTable("wishlist", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId").references(() => users.id, { onDelete: "cascade" }).notNull(),
  productId: uuid("productId").references(() => products.id, { onDelete: "cascade" }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  isActive: boolean("isActive").default(true),
  subscribedAt: timestamp("subscribedAt").defaultNow().notNull(),
});

// Admin & Logs
export const inventoryHistoryLogs = pgTable("inventory_history_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  variantId: uuid("variantId").references(() => productVariants.id, { onDelete: "cascade" }).notNull(),
  adminId: uuid("adminId").references(() => users.id),
  changeType: text("changeType").notNull(), // MANUAL_ADJUSTMENT, ORDER_PLACED, ORDER_CANCELLED, RESTOCK
  quantityChanged: integer("quantityChanged").notNull(),
  previousQuantity: integer("previousQuantity").notNull(),
  newQuantity: integer("newQuantity").notNull(),
  reason: text("reason"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const adminAuditLogs = pgTable("admin_audit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  adminId: uuid("adminId").references(() => users.id).notNull(),
  action: text("action").notNull(),
  entityType: text("entityType").notNull(), // PRODUCT, ORDER, USER, etc.
  entityId: text("entityId"),
  details: json("details"),
  ipAddress: text("ipAddress"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

import { relations } from "drizzle-orm";

export const ordersRelations = relations(orders, ({ many, one }) => ({
  items: many(orderItems),
  shippingDetails: one(shippingDetails, {
    fields: [orders.id],
    references: [shippingDetails.orderId],
  }),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
  product: one(products, {
    fields: [orderItems.productId],
    references: [products.id],
  }),
  variant: one(productVariants, {
    fields: [orderItems.variantId],
    references: [productVariants.id],
  }),
}));

// Suppliers & Purchase Management (Architecture for Phase 4 / Future)
export const suppliers = pgTable("suppliers", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  contactPerson: text("contactPerson"),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
  gstNumber: text("gstNumber"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const purchaseOrders = pgTable("purchase_orders", {
  id: uuid("id").primaryKey().defaultRandom(),
  supplierId: uuid("supplierId").references(() => suppliers.id).notNull(),
  status: text("status").default("DRAFT").notNull(), // DRAFT, SENT, RECEIVED, CANCELLED
  totalAmount: decimal("totalAmount", { precision: 10, scale: 2 }),
  expectedDeliveryDate: timestamp("expectedDeliveryDate"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const purchaseOrderItems = pgTable("purchase_order_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  purchaseOrderId: uuid("purchaseOrderId").references(() => purchaseOrders.id, { onDelete: "cascade" }).notNull(),
  variantId: uuid("variantId").references(() => productVariants.id).notNull(),
  quantity: integer("quantity").notNull(),
  unitPrice: decimal("unitPrice", { precision: 10, scale: 2 }).notNull(),
});


