import type { Pizza } from "../../../api";

interface PizzaMenuProps {
  pizzas: Pizza[];
  loading: boolean;
  error: string | null;
  onAddToCart: (pizza: Pizza) => void;
}

export function PizzaMenu({ pizzas, loading, error, onAddToCart }: PizzaMenuProps) {
  if (loading) {
    return (
      <div className="text-center p-8 bg-dark-card rounded-lg">
        Loading pizzas...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-dark-card rounded-lg text-primary">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="bg-dark-card p-6 rounded-lg text-center">
            <span className="text-5xl block">{pizza.image}</span>
            <h3 className="text-lg font-medium my-2">{pizza.name}</h3>
            <p className="text-sm opacity-80">{pizza.description}</p>
            <p className="text-lg font-bold text-primary my-2">
              ${pizza.price.toFixed(2)}
            </p>
            <button
              onClick={() => onAddToCart(pizza)}
              className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded cursor-pointer transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
