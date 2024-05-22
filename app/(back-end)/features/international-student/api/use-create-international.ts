import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { client } from "@/lib/hono"

type ResponseType = InferResponseType<typeof client.api.internationalStudent.$post>
type RequestType = InferRequestType<typeof client.api.internationalStudent.$post>["json"]

export const useCreateInternational = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.internationalStudent.$post({ json });
      return await response.json()
    },
    onSuccess: () => {
      console.log("Create International Successful")
    }
  })

  return mutation;
}