import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEvent } from "../../api";

export const useCreateEvent = () => {
  const queryClient = useQueryClient()

  return useMutation(async (data) => createEvent(data), {
    onMutate: async events => {
      await queryClient.cancelQueries(['events'])
      const previousTodos = queryClient.getQueryData(['events'])

      // @ts-ignore
      queryClient.setQueryData(['events'], old => [...old, events])
      return { previousTodos }
    },
    onError: (err, events, context) => {
      queryClient.setQueryData(['events'], context?.previousTodos)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['events'])
    },
  })
}