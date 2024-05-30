import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono"

export const useGetWorking = () => {
  const query = useQuery({
    queryKey: ["workings"],
    queryFn: async () => {
      const response = await client.api.working.$get()

      if (!response.ok) {
        throw new Error("Failed to get account")
      }

      const { data } = await response.json()
      return data
    },
    refetchIntervalInBackground: true,
    refetchInterval: 5000
  })
  return query;
}
