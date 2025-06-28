import { useGetProductsQuery, useGetProductsByTitleQuery } from "@/generated";

type UseProductsDataProps = {
  searchQuery?: string;
};

export const useProductsData = ({ searchQuery }: UseProductsDataProps) => {
  const shouldSearch = searchQuery && searchQuery.trim().length > 0;

  const { data: allProductsData, loading: allProductsLoading } =
    useGetProductsQuery({
      skip: Boolean(shouldSearch),
    });

  const { data: searchData, loading: searchLoading } =
    useGetProductsByTitleQuery({
      variables: { title: searchQuery },
      skip: !shouldSearch,
    });

  const loading = shouldSearch ? searchLoading : allProductsLoading;
  const products = shouldSearch
    ? searchData?.products
    : allProductsData?.products;

  return {
    products,
    loading,
    shouldSearch,
  };
};
