import { useState } from "react";
import { usePizzaMenuQuery, useOrderUpdate, useCart } from "./hooks";
import { PizzaMenu, Cart, OrderConfirmation } from "./components";

function App() {
  const { data: pizzas = [], isLoading: loading, error } = usePizzaMenuQuery();
  const { items, addToCart, removeFromCart, updateQuantity, clearCart, total } =
    useCart();

  const orderMutation = useOrderUpdate();

  const orderStatus = {
    status: orderMutation.isPending
      ? "processing"
      : orderMutation.isSuccess
        ? "confirmed"
        : orderMutation.isError
          ? "error"
          : "idle",
    orderId: orderMutation.data?.orderId ?? null,
    message: orderMutation.data?.message ?? "",
  } as const;

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleSubmitOrder = () => {
    if (customerName.trim() && customerEmail.trim()) {
      orderMutation.mutate({ customerName, items });
      clearCart();
      setShowCheckout(false);
    }
  };

  const handleReset = () => {
    orderMutation.reset();
  };

  console.log("App rendered");

  return (
    <div className="flex flex-col gap-6">
      <header className="text-center p-4 bg-gradient-to-br from-primary to-primary-light rounded-xl">
        <h1 className="text-3xl font-bold">Pizza Shop</h1>
        <p className="opacity-90 text-sm">Practice TanStack React tools</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
        {orderStatus.status !== "idle" ? (
          <OrderConfirmation orderStatus={orderStatus} onReset={handleReset} />
        ) : (
          <>
            <PizzaMenu
              pizzas={pizzas}
              loading={loading}
              error={error?.message ?? null}
              onAddToCart={addToCart}
            />

            <Cart
              items={items}
              total={total}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              onClear={clearCart}
              onCheckout={handleCheckout}
            />

            {showCheckout && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
                <div className="bg-dark-card p-8 rounded-xl min-w-[300px]">
                  <h3 className="text-xl font-semibold mb-4">Complete Your Order</h3>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-3 border border-dark-border rounded bg-dark-input text-white mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full p-3 border border-dark-border rounded bg-dark-input text-white mb-4"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowCheckout(false)}
                      className="flex-1 p-3 bg-dark-border text-white rounded cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmitOrder}
                      disabled={!customerName.trim() || !customerEmail.trim()}
                      className="flex-1 p-3 bg-primary text-white rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
