import type { AxiosResponse } from 'axios'
import { httpClient } from './httpClient'
import { ENDPOINT } from './endpoints'
import type { LoginPayload, AuthResponse, RegisterPayload } from '../schema/auth'

export const loginService = async (payload: LoginPayload): Promise<AxiosResponse<AuthResponse>> => {
	return httpClient.post(ENDPOINT.LOGIN, payload)
}

export const registerService = async (payload: RegisterPayload): Promise<AxiosResponse<AuthResponse>> => {
	return httpClient.post(ENDPOINT.REGISTER, payload)
}
