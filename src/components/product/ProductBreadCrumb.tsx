import { Dot } from "lucide-react";

type ProductBreadcrumbProps = {
  categoryName: string;
  productTitle: string;
};

export const ProductBreadCrumb = ({
  categoryName,
  productTitle,
}: ProductBreadcrumbProps) => {
  return (
    <div className="flex my-6">
      <span className="text-gray-600">{categoryName}</span>
      <Dot />
      <span>{productTitle}</span>
    </div>
  );
};
