import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFormField } from "../../../api";

export const useAddField = () => {
  const queryClient = useQueryClient()

  return useMutation(async (data) => addFormField(data), {
    onMutate: async field => {
      await queryClient.cancelQueries(['form-schema'])
      const previousFormSchema = queryClient.getQueryData(['form-schema'])

      // @ts-ignore
      queryClient.setQueryData(['form-schema'], old => [...old, field])
      return { previousFormSchema }
    },
    onError: (err, events, context) => {
      queryClient.setQueryData(['form-schema'], context?.previousFormSchema)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['form-schema'])
    },
  })
}