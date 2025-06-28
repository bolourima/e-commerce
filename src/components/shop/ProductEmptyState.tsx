type ProductsEmptyStateProps = {
  shouldSearch: string | boolean | undefined;
  searchQuery?: string;
};

export const ProductsEmptyState = ({
  shouldSearch,
  searchQuery,
}: ProductsEmptyStateProps) => {
  const message = shouldSearch
    ? `No products found for "${searchQuery}"`
    : "No products available";

  return (
    <div className="bg-white rounded-2xl p-6 text-center">
      <p className="text-gray-500">{message}</p>
    </div>
  );
};
