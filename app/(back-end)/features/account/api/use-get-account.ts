import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono"

export const useGetAccount = () => {
  const query = useQuery({
    queryKey: ["getAccount"],
    queryFn: async () => {
      const response = await client.api.accounts.$get()

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
