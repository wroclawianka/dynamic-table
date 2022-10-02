import { useQuery } from '@tanstack/react-query'
import { getFormSchema } from '../../api'

export const useFormSchema = () => useQuery((["form-schema"]), getFormSchema)