import { getAudioBooks } from "@/api/audiobooks"
import { useQuery } from "@tanstack/react-query"

export const useAudiobooks = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['audiobooks'],
        queryFn: async () => getAudioBooks()
    })

    return { audiobooks: data, isError, isLoading }
}