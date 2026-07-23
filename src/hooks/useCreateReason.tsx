import { createReasonService } from '@/api/services'
import { useMutation } from '@tanstack/react-query'
import { handleErrorResponse } from '@/lib/handler'
import type { GenerateReasonPayload, ReasonResponse } from '@/schema/reason.schema'

const fetch = async (payload: GenerateReasonPayload): Promise<ReasonResponse> => {
  try {
    const results = await createReasonService(payload)
    return results.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useCreateReason = () => {
  return useMutation({
    mutationFn: (payload: GenerateReasonPayload) => fetch(payload),
  })
}
