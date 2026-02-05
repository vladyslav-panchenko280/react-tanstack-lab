import type { CartItem } from "../../../api";

interface CartProps {
  items: CartItem[];
  total: number;
  onUpdateQuantity: (pizzaId: number, quantity: number) => void;
  onRemove: (pizzaId: number) => void;
  onClear: () => void;
  onCheckout: () => void;
}

export function Cart({
  items,
  total,
  onUpdateQuantity,
  onRemove,
  onClear,
  onCheckout,
}: CartProps) {
  if (items.length === 0) {
    return (
      <div className="bg-dark-card p-6 rounded-lg text-center opacity-70 h-fit">
        <h2 className="text-xl font-semibold mb-4 border-b border-dark-border pb-2">
          Your Cart
        </h2>
        <p>Cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-dark-card p-6 rounded-lg h-fit">
      <h2 className="text-xl font-semibold mb-4 border-b border-dark-border pb-2">
        Your Cart
      </h2>
      <ul className="list-none">
        {items.map((item) => (
          <li
            key={item.pizza.id}
            className="flex flex-wrap justify-between items-center py-2 border-b border-dark-border gap-2"
          >
            <span className="flex-1 min-w-[100px]">
              {item.pizza.image} {item.pizza.name}
            </span>
            <div className="flex gap-1 items-center">
              <button
                onClick={() => onUpdateQuantity(item.pizza.id, item.quantity - 1)}
                className="bg-dark-border text-white w-6 h-6 rounded cursor-pointer"
              >
                -
              </button>
              <span className="min-w-[20px] text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.pizza.id, item.quantity + 1)}
                className="bg-dark-border text-white w-6 h-6 rounded cursor-pointer"
              >
                +
              </button>
              <button
                onClick={() => onRemove(item.pizza.id)}
                className="bg-primary text-white w-6 h-6 rounded cursor-pointer ml-2"
              >
                x
              </button>
            </div>
            <span className="font-bold min-w-[60px] text-right">
              ${(item.pizza.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-2 border-t-2 border-primary">
        <p className="text-xl font-bold text-right">Total: ${total.toFixed(2)}</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={onClear}
            className="flex-1 px-4 py-3 bg-dark-border text-white rounded cursor-pointer"
          >
            Clear Cart
          </button>
          <button
            onClick={onCheckout}
            className="flex-1 px-4 py-3 bg-primary text-white rounded cursor-pointer"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
