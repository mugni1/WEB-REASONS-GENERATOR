import { createReasonV2Service } from '@/api/services'
import { useMutation } from '@tanstack/react-query'
import { handleErrorResponse } from '@/lib/handler'
import type { CreateReasonPayload, ReasonResponse } from '@/schema/reason.schema'

const fetch = async (payload: CreateReasonPayload): Promise<ReasonResponse> => {
  try {
    const results = await createReasonV2Service(payload)
    return results.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useCreateReasonV2 = () => {
  return useMutation({
    mutationFn: (payload: CreateReasonPayload) => fetch(payload),
  })
}
