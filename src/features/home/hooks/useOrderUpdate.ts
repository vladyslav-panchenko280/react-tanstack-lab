import { useMutation } from '@tanstack/react-query';
import { submitOrder } from '../../../api';
import type { CartItem } from '../../../api';

interface SubmitOrderParams {
  customerName: string;
  items: CartItem[];
}

export function useOrderUpdate() {
  return useMutation({
    mutationFn: ({ customerName, items }: SubmitOrderParams) =>
      submitOrder(customerName, items),
  });
}
