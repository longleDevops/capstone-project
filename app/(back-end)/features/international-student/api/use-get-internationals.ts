import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono"

export const useGetInternationals = () => {
  const query = useQuery({
    queryKey: ["international-students"],
    queryFn: async () => {
      const response = await client.api.accounts["international-students"].$get()

      if (!response.ok) {
        throw new Error("Failed to get all international students")
      }

      const { data } = await response.json()
      return data
    }
  })
  return query;
}
