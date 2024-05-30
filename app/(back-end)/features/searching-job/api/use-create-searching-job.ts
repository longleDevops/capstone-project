import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { client } from "@/lib/hono"

type ResponseType = InferResponseType<typeof client.api.searchingJob.$post>
type RequestType = InferRequestType<typeof client.api.searchingJob.$post>["json"]

export const useCreateSearchingJob = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.searchingJob.$post({ json });
      return await response.json()
    },
    onSuccess: () => {
      console.log("Create Searching Successful")
    },
    onError: () => {
      console.log("Searching student err")
    }
  })

  return mutation;
}