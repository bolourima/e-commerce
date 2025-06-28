"use client";

import { CartProductCard } from "@/components/cart/CartProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";

const Page = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.pieces;
  }, 0);

  return (
    <div className="h-screen bg-gray-100 p-6">
      <p>
        Сагс <span>{cartItems.length} бараа</span>
      </p>
      <div className="flex gap-6 w-full">
        <div className="w-[70%] rounded-xl bg-white">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Таны сагс хоосон байна
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="border-b">
                <CartProductCard {...item} />
              </div>
            ))
          )}
        </div>
        <Card className="w-96 h-fit p-4">
          <Button
            className="bg-green-600 text-white w-full mb-4"
            disabled={cartItems.length === 0}
          >
            Захиалах
          </Button>
          <div className="flex justify-between mb-2">
            <div className="flex gap-0.5">
              <span>Захиалгын дүн</span>
              <span className="text-gray-600">
                {cartItems.length} бүтээгдэхүүн
              </span>
            </div>
            <p>{totalPrice.toLocaleString("en-US")} ₮</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Төлөх дүн</p>
            <p>{totalPrice.toLocaleString("en-US")} ₮</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Page;
