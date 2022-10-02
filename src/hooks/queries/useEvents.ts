import { useQuery } from '@tanstack/react-query'
import { getEvents } from '../../api';

export const useEvents = () => useQuery((["events"]), getEvents)