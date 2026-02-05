import type { Pizza } from './pizzas';

export interface CartItem {
  pizza: Pizza;
  quantity: number;
}

export interface OrderData {
  orderId: string;
  customerName: string;
  items: CartItem[];
  timestamp: string;
}

export interface OrderResponse {
  orderId: string;
  message: string;
}

export async function submitOrder(customerName: string, items: CartItem[]): Promise<OrderResponse> {
  const orderId = `ORD-${Date.now()}`;
  const orderData: OrderData = {
    orderId,
    customerName,
    items,
    timestamp: new Date().toISOString(),
  };

  await fetch('/api/orders.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  }).catch(() => {
    console.log('Order data that would be saved:', orderData);
  });

  return {
    orderId,
    message: `Order ${orderId} confirmed!`,
  };
}
