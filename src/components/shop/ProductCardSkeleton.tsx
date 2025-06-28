import { Skeleton } from "../ui/skeleton";

export const ProductGardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index}>
          <div className="w-56 p-4 h-96 flex flex-col gap-2 items-center justify-between">
            <div className="relative h-[196px] w-[196px] rounded-lg overflow-hidden">
              <Skeleton className="w-full h-full rounded-lg" />
            </div>

            <div className="w-full">
              <Skeleton className="h-5 w-24 mb-1" />
              <Skeleton className="h-5 w-full" />
            </div>

            <Skeleton className="h-10 w-full rounded-md" />

            <div className="flex justify-between w-full gap-2">
              <Skeleton className="w-10 h-10 rounded-md" />
              <Skeleton className="w-10 h-10 rounded-md" />
              <Skeleton className="w-10 h-10 rounded-md" />
              <Skeleton className="w-10 h-10 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
