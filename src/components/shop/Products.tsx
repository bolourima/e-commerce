import { useProductsData } from "@/hooks/useProductsData";
import { ProductGardSkeleton } from "./ProductCardSkeleton";
import { ProductsEmptyState } from "./ProductEmptyState";
import { ProductsGrid } from "./ProductGrid";

type ProductsProps = {
  searchQuery?: string;
};

export const Products = ({ searchQuery }: ProductsProps) => {
  const { products, loading, shouldSearch } = useProductsData({ searchQuery });

  if (loading) {
    return <ProductGardSkeleton />;
  }

  if (!products || products.length === 0) {
    return (
      <ProductsEmptyState
        shouldSearch={shouldSearch}
        searchQuery={searchQuery}
      />
    );
  }

  return <ProductsGrid products={products} />;
};
