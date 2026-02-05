interface OrderStatus {
  status: "idle" | "processing" | "confirmed" | "error";
  orderId: string | null;
  message: string;
}

interface OrderConfirmationProps {
  orderStatus: OrderStatus;
  onReset: () => void;
}

export function OrderConfirmation({ orderStatus, onReset }: OrderConfirmationProps) {
  if (orderStatus.status === "idle") {
    return null;
  }

  return (
    <div className="text-center p-12 bg-dark-card rounded-xl col-span-full">
      {orderStatus.status === "processing" && (
        <div>
          <span className="text-5xl block mb-4">⏳</span>
          <p>{orderStatus.message}</p>
        </div>
      )}

      {orderStatus.status === "confirmed" && (
        <div>
          <span className="text-5xl block mb-4">✅</span>
          <p>{orderStatus.message}</p>
          <button
            onClick={onReset}
            className="mt-4 px-6 py-3 bg-primary text-white rounded cursor-pointer"
          >
            Order More Pizza
          </button>
        </div>
      )}

      {orderStatus.status === "error" && (
        <div>
          <span className="text-5xl block mb-4">❌</span>
          <p className="text-primary">{orderStatus.message}</p>
          <button
            onClick={onReset}
            className="mt-4 px-6 py-3 bg-primary text-white rounded cursor-pointer"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
