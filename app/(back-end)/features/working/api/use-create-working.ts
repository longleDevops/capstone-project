import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { client } from "@/lib/hono"

type ResponseType = InferResponseType<typeof client.api.working.$post>
type RequestType = InferRequestType<typeof client.api.working.$post>["json"]

export const useCreateWorking = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.working.$post({ json });
      return await response.json()
    },
    onSuccess: () => {
      console.log("Create Working Successful")
      queryClient.invalidateQueries({ queryKey: ["working"] })
    },
    onError: () => {
      console.log("Working student err")
    }
  })

  return mutation;
}