import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono"

export const useGetDomestics = () => {
  const query = useQuery({
    queryKey: ["getDomestics"],
    queryFn: async () => {
      const response = await client.api.domesticStudent.$get()

      if (!response.ok) {
        throw new Error("Failed to get all domestic students")
      }

      const { data } = await response.json()
      return data
    },
    refetchIntervalInBackground: true,
    refetchInterval: 5000
  })
  return query;
}
