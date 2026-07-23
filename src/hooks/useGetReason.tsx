import { getReasonService } from '@/api/services'
import { useQuery } from '@tanstack/react-query'
import { handleErrorResponse } from '@/lib/handler'
import type { GetReasonResponse } from '@/schema/reason.schema'

const fetch = async (): Promise<GetReasonResponse> => {
  try {
    const results = await getReasonService()
    return results.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetReason = () => {
  return useQuery({
    queryKey: ['reason'],
    queryFn: () => fetch(),
  })
}
