import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

export const CategorySkeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-6 w-[20%] h-fit">
      <p className="font-semibold">Ангилал</p>
      <div className="w-full">
        <Button className="w-full flex justify-start" variant={`ghost`}>
          <Skeleton className="h-6 w-[250px]" />
        </Button>
        <Button className="w-full flex justify-start" variant={`ghost`}>
          <Skeleton className="h-6 w-[250px]" />
        </Button>
        <Button className="w-full flex justify-start" variant={`ghost`}>
          <Skeleton className="h-6 w-[250px]" />
        </Button>
      </div>
    </div>
  );
};
