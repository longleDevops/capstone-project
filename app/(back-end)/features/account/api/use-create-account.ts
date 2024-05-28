import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { client } from "@/lib/hono"

type ResponseType = InferResponseType<typeof client.api.accounts["update-submission"]["$patch"]>
type RequestType = InferRequestType<typeof client.api.accounts["update-submission"]["$patch"]>["json"]

export const useCreateAccount = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.accounts["update-submission"].$patch({ json });
      return await response.json()
    },
    onSuccess: () => {
      console.log("Update Account Successful")
    },
    onError: (error) => {
      console.log("update account err" + error)
    }
  })

  return mutation;
}