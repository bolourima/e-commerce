import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

type QuantitySelectorProps = {
  pieces: number;
  onQuantityChange: (newPieces: number) => void;
  maxQuantity?: number;
};

export const QuantitySelector = ({
  pieces,
  onQuantityChange,
  maxQuantity = 10,
}: QuantitySelectorProps) => {
  return (
    <div className="flex items-center justify-between gap-2 mb-2">
      <span className="text-sm text-gray-600">Тоо ширхэг:</span>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          className="w-8 h-8"
          onClick={() => onQuantityChange(Math.max(1, pieces - 1))}
          disabled={pieces <= 1}
        >
          <Minus size={16} />
        </Button>
        <span className="w-8 text-center font-semibold">{pieces}</span>
        <Button
          variant="secondary"
          size="sm"
          className="w-8 h-8 bg-green-600 text-white"
          onClick={() => onQuantityChange(Math.min(maxQuantity, pieces + 1))}
          disabled={pieces >= maxQuantity}
        >
          <Plus size={16} />
        </Button>
      </div>
    </div>
  );
};
