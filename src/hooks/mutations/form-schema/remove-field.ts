import { useMutation, useQueryClient } from "@tanstack/react-query";
import _default from "antd/lib/grid";
import { removeFormField } from "../../../api";
import _ from 'lodash';

export const useRemoveField = () => {
  const queryClient = useQueryClient()

  return useMutation(async (data) => removeFormField(data), {
    onMutate: async id => {
      await queryClient.cancelQueries(['form-schema'])
      const previousFormSchema = queryClient.getQueryData(['form-schema'])

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