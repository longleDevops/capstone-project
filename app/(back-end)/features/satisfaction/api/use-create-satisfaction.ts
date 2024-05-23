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
    onSuccess: async () => {
      try {
        await client.api.accounts["update-submission"].$patch();
        queryClient.invalidateQueries({ queryKey: ['student-backgrounds'] })
        queryClient.invalidateQueries({ queryKey: ['accounts'] })
      } catch (e) {
        console.error(e)
      }
    }
  })

  return mutation;
}