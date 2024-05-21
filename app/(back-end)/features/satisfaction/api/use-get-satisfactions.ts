import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono"

export const useGetSatisfactions = () => {
  const query = useQuery({
    queryKey: ["satisfactions"],
    queryFn: async () => {
      const response = await client.api.accounts["satisfactions"].$get()

      if (!response.ok) {
        throw new Error("Failed to get account")
      }

      const { data } = await response.json()
      return data
    }
  })
  return query;
}
