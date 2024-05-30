import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono"

export const useGetSubmittedAccounts = () => {
  const query = useQuery({
    queryKey: ["getSubmitted"],
    queryFn: async () => {
      const response = await client.api.accounts["submitted-accounts"].$get()

      if (!response.ok) {
        throw new Error("Failed to get account")
      }

      const { data } = await response.json()
      return data
    }
  })
  return query;
}
