import { toast } from 'sonner'

export const handleCopy = (value: string) => {
  navigator.clipboard.writeText(value)
  toast.success('Berhasil di Salin!')
}
