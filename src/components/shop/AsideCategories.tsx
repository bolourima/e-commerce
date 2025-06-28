import { useGetCategoriesQuery } from "@/generated";
import { CategorySkeleton } from "./CategorySkeleton";
import { Button } from "../ui/button";

export const AsideCategories = () => {
  const { data, loading } = useGetCategoriesQuery();

  if (loading) {
    return <CategorySkeleton />;
  }

  return (
    <div className="bg-white rounded-2xl p-6 w-[20%] h-fit">
      <p className="font-semibold">Ангилал</p>

      {data?.categories.map((category, index) => (
        <div key={index} className="w-full">
          <Button className="w-full flex justify-start" variant={`ghost`}>
            {category.name}
            {category.id}
          </Button>
        </div>
      ))}
    </div>
  );
};
