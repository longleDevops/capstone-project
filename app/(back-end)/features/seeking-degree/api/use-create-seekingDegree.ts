import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { client } from "@/lib/hono"

type ResponseType = InferResponseType<typeof client.api.seekingDegree.$post>
type RequestType = InferRequestType<typeof client.api.seekingDegree.$post>["json"]

export const useCreateSeekingDegree = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.seekingDegree.$post({ json });
      return await response.json()
    },
    onSuccess: () => {
      console.log("Create Seeking Degree Successful")
    }
  })

  return mutation;
}