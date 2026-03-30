import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/users';

export const useUsers = () => {
  const result = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  return result;
};