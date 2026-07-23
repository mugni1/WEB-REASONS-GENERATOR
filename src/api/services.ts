import type { AxiosResponse } from 'axios'
import { httpClient } from './httpClient'
import { ENDPOINT } from './endpoints'
import type { GenerateReasonPayload, ReasonResponse } from '@/schema/reason.schema'

export const createReasonService = async (payload: GenerateReasonPayload): Promise<AxiosResponse<ReasonResponse>> => {
	return httpClient.post(ENDPOINT.REASON + '/generate', payload)
}
