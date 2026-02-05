import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../../../api';
import type { User } from '../../../api';
import { userQueryKey } from './useUserQuery';

export function useUserUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: Partial<User>) => updateUser(user),
    onSuccess: (data) => {
      queryClient.setQueryData(userQueryKey, data);
    },
  });
}
