import { useQuery } from '@tanstack/react-query';
import { fetchPizzas } from '../../../api';

export const pizzaMenuQueryKey = ['pizzas'] as const;

export function usePizzaMenuQuery() {
  return useQuery({
    queryKey: pizzaMenuQueryKey,
    queryFn: fetchPizzas,
  });
}
