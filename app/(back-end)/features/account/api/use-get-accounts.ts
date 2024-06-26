import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono"

export const useGetAccounts = () => {
  const query = useQuery({
    queryKey: ["getAccounts"],
    queryFn: async () => {
      const response = await client.api.accounts["all-accounts"].$get()

      if (!response.ok) {
        throw new Error("Failed to get account")
      }

      const { data } = await response.json()
      return data
    },
    refetchIntervalInBackground: true,
    refetchInterval: 2000
  })
  return query;
}
