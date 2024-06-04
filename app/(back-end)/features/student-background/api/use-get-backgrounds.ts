import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono"

export const useGetBackgrounds = () => {
  const query = useQuery({
    queryKey: ['getBackground'],
    queryFn: async () => {
      const response = await client.api.backgrounds.$get()

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
