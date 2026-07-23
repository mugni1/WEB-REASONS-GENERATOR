import type { AxiosResponse } from 'axios'
import { httpClient } from './httpClient'
import { ENDPOINT } from './endpoints'
import type { CreateReasonPayload, GenerateReasonPayload, GetReasonResponse, ReasonResponse } from '@/schema/reason.schema'

export const createReasonService = async (payload: GenerateReasonPayload): Promise<AxiosResponse<ReasonResponse>> => {
  return httpClient.post(ENDPOINT.REASON_GENERATE_V1, payload)
}

export const createReasonV2Service = async (payload: CreateReasonPayload): Promise<AxiosResponse<ReasonResponse>> => {
  return httpClient.post(ENDPOINT.REASON_GENERATE_V2, payload)
}

export const getReasonService = async (): Promise<AxiosResponse<GetReasonResponse>> => {
  return httpClient.get(ENDPOINT.REASON)
}
