import { db } from "@/db";
import { products, productVariants, categories } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { ProductCard } from "@/components/product/ProductCard";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await db.query.categories.findFirst({
    where: eq(categories.slug, params.slug),
  });

  if (!category) {
    notFound();
  }

  // Fetch products in this category
  const categoryProducts = await db.query.products.findMany({
    where: eq(products.categoryId, category.id),
    with: {
      variants: true,
      category: true,
    },
    orderBy: [desc(products.createdAt)],
  });

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl lg:text-5xl font-heading font-bold text-navy dark:text-white mb-4">
          {category.name}
        </h1>
        {category.description && (
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {category.description}
          </p>
        )}
      </div>

      {categoryProducts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-900/20 rounded-3xl">
          <h3 className="text-xl font-bold text-navy dark:text-white mb-2">No products found</h3>
          <p className="text-gray-500">We're currently updating our inventory for this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      )}
    </div>
  );
}
