import { HttpStatusCode } from 'axios'
import z from 'zod'

export const generateReasonSchema = z.object({
  myName: z.string().max(20, 'maximum my name must have 20 character'),
  targetName: z.string().max(20, 'maximum target name must have 20 character'),
  language: z.enum(['id', 'en', 'jp'], {
    error: "language must be 'id', 'en', or 'jp'",
  }),
  reason: z.enum(['school', 'work', 'familyEvent', 'hangOut'], {
    error: "reason must be 'school', 'work', 'familyEvent', or 'hangOut'",
  }),
  style: z.enum(['normal', 'stupid', 'absurd'], {
    error: "style must be 'normal', 'stupid', or 'absurd'",
  }),
})
export type GenerateReasonPayload = z.infer<typeof generateReasonSchema>

export interface ReasonResponse {
  status: HttpStatusCode
  message: string
  data: {
    reason: string
  } | null
  meta: null
  errors: null
}
