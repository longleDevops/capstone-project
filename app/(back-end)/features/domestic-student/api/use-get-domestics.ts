import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono"

export const useGetDomestics = () => {
  const query = useQuery({
    queryKey: ["domestic-students"],
    queryFn: async () => {
      const response = await client.api.accounts["domestic-students"].$get()

      if (!response.ok) {
        throw new Error("Failed to get all domestic students")
      }

      const { data } = await response.json()
      return data
    }
  })
  return query;
}
