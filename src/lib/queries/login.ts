import { userLogin } from "@/api/token";
import { useQuery } from "@tanstack/react-query";

export const useLogin = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["login"],
    queryFn: async () => userLogin(),
    enabled: false,
  });
  return { login: data, isLoading, isError, error, refetch };
};
