export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export async function fetchPizzas(): Promise<Pizza[]> {
  const response = await fetch('/api/pizzas.json');

  if (!response.ok) {
    throw new Error('Failed to fetch pizza menu');
  }

  return response.json();
}
