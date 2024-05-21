import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { client } from "@/lib/hono"

type ResponseType = InferResponseType<typeof client.api.satisfaction.$post>
type RequestType = InferRequestType<typeof client.api.satisfaction.$post>["json"]

export const useSatisfaction = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.satisfaction.$post({ json });
      return await response.json()
    },
    onSuccess: () => {
      console.log("Successful")
    }
  })

  return mutation;
}