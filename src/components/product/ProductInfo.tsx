type ProductInfoProps = {
  title: string;
  description: string;
};

export const ProductInfo = ({ title, description }: ProductInfoProps) => {
  return (
    <div className="bg-white w-[390px] h-fit rounded-2xl p-4">
      <p className="text-xl font-semibold mb-2">{title}</p>
      <p className="text-gray-600 mb-2">Дэлгэрэнгүй мэдээлэл</p>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};
