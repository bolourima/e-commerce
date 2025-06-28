import { Button } from "@/components/ui/button";

type CartActionsProps = {
  isAdded: boolean;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  onGoToCart: () => void;
};

export const CartActions = ({
  isAdded,
  onAddToCart,
  onRemoveFromCart,
  onGoToCart,
}: CartActionsProps) => {
  if (!isAdded) {
    return (
      <Button className="bg-green-600 w-full" onClick={onAddToCart}>
        Сагслах
      </Button>
    );
  }

  return (
    <div className="flex gap-2">
      <Button
        variant="destructive"
        className="flex-1"
        onClick={onRemoveFromCart}
      >
        Хасах
      </Button>
      <Button className="bg-green-600 flex-1" onClick={onGoToCart}>
        Сагс руу
      </Button>
    </div>
  );
};
