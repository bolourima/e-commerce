import { useState, useEffect } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProductImage } from "../product";

export const ProductCard = ({
  id,
  title,
  images,
  price,
}: {
  id: string;
  title: string;
  images: string[];
  price: number;
}) => {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const [pieces, setPieces] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      setIsAdded(true);
      setPieces(existingItem.pieces);
    } else {
      setIsAdded(false);
      setPieces(1);
    }
  }, [cartItems, id]);

  const handleCartAdd = () => {
    addToCart({
      id,
      title,
      images,
      price,
      pieces,
    });
    setIsAdded(true);
  };

  const handleQuantityChange = (newPieces: number) => {
    setPieces(newPieces);

    if (isAdded) {
      updateQuantity(id, newPieces);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    setIsAdded(false);
    setPieces(1);
  };

  return (
    <Card className="w-56 p-4 h-96 flex flex-col gap-1 items-center justify-between">
      <Link href={`/${id}`}>
        <div className="relative h-[196px] w-[196px] flex justify-center items-center rounded-lg overflow-hidden">
          <ProductImage imageUrl={images[0]} title={title} size={196} />

          {isAdded && (
            <div className="absolute top-0 right-0 h-[196px] w-[196px] flex justify-center items-center">
              <div className="absolute inset-0 bg-gray-500 opacity-50" />
              <span className="z-10 text-white text-4xl">{pieces}</span>
            </div>
          )}
        </div>
      </Link>

      <div>
        <p className="text-base font-medium text-green-700">{price}₮</p>
        <p className="text-lg font-semibold h-[24px] overflow-hidden">
          {title}
        </p>
      </div>

      {!isAdded ? (
        <Button variant="secondary" className="w-full" onClick={handleCartAdd}>
          Сагслах
        </Button>
      ) : (
        <div className="flex justify-between w-full gap-2">
          <Button
            variant="secondary"
            className="w-10"
            onClick={() => handleQuantityChange(Math.max(1, pieces - 1))}
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
            onClick={() => handleQuantityChange(Math.min(10, pieces + 1))}
            disabled={pieces >= 10}
          >
            <Plus />
          </Button>
          <Button
            variant="destructive"
            className="w-10"
            onClick={handleRemoveFromCart}
          >
            <Trash2 />
          </Button>
        </div>
      )}
    </Card>
  );
};
