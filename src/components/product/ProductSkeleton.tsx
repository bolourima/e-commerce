import { Skeleton } from "../ui/skeleton";

export const ProductSkeleton = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center">
      <div className="max-w-[1300px] w-full">
        <div className="flex my-6 gap-2">
          <Skeleton className="h-5 w-24 rounded bg-gray-200" />
          <Skeleton className="h-5 w-40 rounded bg-gray-200" />
        </div>

        <div className="flex gap-5 justify-between w-full">
          <Skeleton className="w-[478px] h-[478px] rounded-2xl bg-gray-200" />

          <div className="bg-white w-[390px] h-fit rounded-2xl p-4 flex flex-col gap-2">
            <Skeleton className="h-6 w-48 rounded" />
            <Skeleton className="h-5 w-40 rounded" />
            <Skeleton className="h-20 w-full rounded" />
          </div>

          <div className="bg-white w-[330px] h-fit flex flex-col gap-4 rounded-2xl p-4">
            <div className="flex justify-end">
              <Skeleton className="h-8 w-24 rounded" />
            </div>

            <div className="flex items-center justify-between gap-2">
              <Skeleton className="h-5 w-20 rounded" />
              <div className="flex items-center gap-2">
                <Skeleton className="w-8 h-8 rounded-md" />
                <Skeleton className="w-8 h-5 rounded" />
                <Skeleton className="w-8 h-8 rounded-md" />
              </div>
            </div>

            <div className="flex justify-between items-center border-t pt-2">
              <Skeleton className="h-5 w-20 rounded" />
              <Skeleton className="h-5 w-24 rounded" />
            </div>

            <Skeleton className="h-10 w-full rounded-md" />

            <div className="flex gap-2">
              <Skeleton className="h-10 flex-1 rounded-md" />
              <Skeleton className="h-10 flex-1 rounded-md" />
            </div>

            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};
