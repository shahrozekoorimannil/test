import { db } from "@/db";
import { products, productVariants } from "@/db/schema";
import { eq } from "drizzle-orm";
import PosClient from "./PosClient";

export default async function PosPage() {
  // Fetch active products and variants for POS search
  // const catalog = await db.query.products.findMany({
  //   where: eq(products.status, "ACTIVE"),
  //   with: {
  //     variants: true,
  //     category: true,
  //   }
  // });
  const catalog = [
    {
      id: "1", name: "Atomberg Renesa Smart Fan", sku: "ATMB-001", status: "ACTIVE",
      variants: [{ id: "v1", title: "White / 1200mm", price: "3500", inventoryQuantity: 50, sku: "ATMB-001-WH" }, { id: "v2", title: "Brown / 1200mm", price: "3500", inventoryQuantity: 0, sku: "ATMB-001-BR" }]
    },
    {
      id: "2", name: "Premium Crystal Chandelier", sku: "CHND-002", status: "ACTIVE",
      variants: [{ id: "v3", title: "Gold / 800mm", price: "12500", inventoryQuantity: 5, sku: "CHND-002-GL" }]
    }
  ];

  return (
    <div className="h-full flex flex-col -m-6">
      {/* Remove the default padding from layout by using negative margin for a full edge-to-edge POS experience */}
      <PosClient initialCatalog={catalog} />
    </div>
  );
}
