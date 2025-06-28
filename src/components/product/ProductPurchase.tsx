import { Button } from "@/components/ui/button";
import { QuantitySelector } from "./QuantitySelector";
import { CartActions } from "./CartActions";

type ProductPurchaseProps = {
  price: number;
  pieces: number;
  isAdded: boolean;
  onQuantityChange: (newPieces: number) => void;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  onGoToCart: () => void;
};

export const ProductPurchase = ({
  price,
  pieces,
  isAdded,
  onQuantityChange,
  onAddToCart,
  onRemoveFromCart,
  onGoToCart,
}: ProductPurchaseProps) => {
  return (
    <div className="bg-white w-[330px] h-fit flex flex-col gap-4 rounded-2xl p-4">
      <div className="w-full flex justify-end">
        <p className="text-2xl font-bold text-green-700">
          {price.toLocaleString("en-US")} ₮
        </p>
      </div>

      <QuantitySelector pieces={pieces} onQuantityChange={onQuantityChange} />

      {isAdded && pieces > 1 && (
        <div className="flex justify-between items-center py-2 border-t">
          <span className="text-sm text-gray-600">Нийт дүн:</span>
          <span className="font-bold text-green-700">
            {(price * pieces).toLocaleString("en-US")} ₮
          </span>
        </div>
      )}

      <CartActions
        isAdded={isAdded}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        onGoToCart={onGoToCart}
      />

      <Button variant="secondary" className="w-full">
        Шууд авах
      </Button>
    </div>
  );
};
