import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { client } from "@/lib/hono"

type ResponseType = InferResponseType<typeof client.api.domesticStudent.$post>
type RequestType = InferRequestType<typeof client.api.domesticStudent.$post>["json"]

export const useCreateDomestic = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.domesticStudent.$post({ json });
      return await response.json()
    },
    onSuccess: () => {
      console.log("Successful")
      //queryClient.invalidateQueries({ queryKey: ["domestic-students"] })
    },
    onError: () => {
      console.log("Domestic Error")
    }
  })

  return mutation;
}