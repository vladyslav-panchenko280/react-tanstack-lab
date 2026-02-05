import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../../../api';

export const userQueryKey = ['user'] as const;

export function useUserQuery() {
  return useQuery({
    queryKey: userQueryKey,
    queryFn: fetchUser,
  });
}
