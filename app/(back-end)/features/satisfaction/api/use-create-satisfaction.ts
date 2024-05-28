import { client } from "@/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";


type ResponseType = InferResponseType<typeof client.api.satisfaction.$post>
type RequestType = InferRequestType<typeof client.api.satisfaction.$post>["json"]

export const useCreateSatisfaction = () => {
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
      console.log("create satisfaction successful")
    },
    onError: () => {
      console.log("Satisfaction error")
    }
  })

  return mutation;
}