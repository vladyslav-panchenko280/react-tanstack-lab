export interface User {
  id: number;
  name: string;
  email: string;
  orders: string[];
}

export async function fetchUser(): Promise<User> {
  const response = await fetch('/api/user.json');

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  return response.json();
}

export async function updateUser(user: Partial<User>): Promise<User> {
  await fetch('/api/user.json', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).catch(() => {
    console.log('User data that would be saved:', user);
  });

  const current = await fetchUser();
  return { ...current, ...user };
}
