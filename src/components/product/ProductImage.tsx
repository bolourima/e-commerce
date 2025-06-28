import Image from "next/image";

type ProductImageProps = {
  imageUrl: string;
  title: string;
  size: number;
};

export const ProductImage = ({ imageUrl, title, size }: ProductImageProps) => {
  const absoluteUrl = imageUrl.startsWith("http") ? imageUrl : `/no-image.png`;

  return (
    <div>
      <Image
        src={absoluteUrl}
        alt={title}
        width={size}
        height={size}
        className="object-cover rounded-2xl"
      />
    </div>
  );
};
