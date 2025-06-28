import { ProductCard } from "./ProductCard";

type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: string;
    name: string;
  };
  images: string[];
};

type ProductsGridProps = {
  products: Product[];
};

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <div key={product.id || index}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};
