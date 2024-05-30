import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { client } from "@/lib/hono"

type ResponseType = InferResponseType<typeof client.api.backgrounds.$post>
type RequestType = InferRequestType<typeof client.api.backgrounds.$post>["json"]

export const useCreateBackground = () => {
  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.backgrounds.$post({ json });

      return await response.json()
    },
    onSuccess: () => {
      console.log("Update background Successful")

    },
    onError: (err) => {
      console.log("Background student error")
      console.error(err)
    }
  })

  return mutation;
}