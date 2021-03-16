import useSWR from 'swr'

const useGetApi = (key, service, formData) => {
  const { data, error, isValidating: isLoading, mutate } = useSWR(
    key,
    async () => (!formData ? await service() : await service(formData)),

    { revalidateOnFocus: false }
  )
  return { data, error, isLoading, mutate }
}

export default useGetApi
