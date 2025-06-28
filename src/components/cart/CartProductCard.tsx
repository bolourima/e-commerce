import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { ProductImage } from "../product";

export const CartProductCard = ({
  id,
  title,
  images,
  price,
  pieces,
}: {
  id: string;
  title: string;
  images: string[];
  price: number;
  pieces: number;
}) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    if (pieces < 10) {
      updateQuantity(id, pieces + 1);
    }
  };

  const handleDecrement = () => {
    if (pieces > 1) {
      updateQuantity(id, pieces - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <div className="flex justify-between w-full p-4">
      <Link href={`/${id}`}>
        <div className="flex gap-4">
          <ProductImage imageUrl={images[0]} title={title} size={96} />

          <div>
            <p>{price.toLocaleString("en-US")} ₮</p>
            <p>{title}</p>
          </div>
        </div>
      </Link>
      <div className="w-48 flex flex-col justify-between items-end gap-4">
        <p>{(price * pieces).toLocaleString("en-US")} ₮</p>
        <div className="flex justify-between w-full gap-2">
          <Button
            variant="secondary"
            className="w-10"
            onClick={handleRemove}
            title="Remove from cart"
          >
            <Trash2 />
          </Button>
          <Button
            variant="secondary"
            className="w-10"
            onClick={handleDecrement}
            disabled={pieces <= 1}
          >
            <Minus />
          </Button>
          <span className="flex items-center justify-center w-10">
            {pieces}
          </span>
          <Button
            variant="secondary"
            className="w-10 bg-green-600 text-white"
            onClick={handleIncrement}
            disabled={pieces >= 10}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
};
