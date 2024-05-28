import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { client } from "@/lib/hono"

type ResponseType = InferResponseType<typeof client.api.backgrounds.$post>
type RequestType = InferRequestType<typeof client.api.backgrounds.$post>["json"]

export const useCreateBackground = () => {
  const queryClient = useQueryClient()

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
      console.log("Successful")
      queryClient.invalidateQueries({ queryKey: ["student-backgrounds"] })
    },
    onError: () => {
      console.log("Background student error")
    }
  })

  return mutation;
}