import { useGetReason } from '@/hooks/useGetReason'
import { ListChevronsDownUp, Loader2Icon } from 'lucide-react'
import { CardContent, CardHeader, CardTitle } from '../ui/card'
import { FaBriefcase, FaCopy, FaUserAstronaut, FaWhatsapp, FaGraduationCap, FaUsers, FaHouse, FaFaceLaugh, FaFaceSmile, FaFaceFlushed } from 'react-icons/fa6'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { Badge } from '../ui/badge'

export default function ListReason() {
  const { data, isPending } = useGetReason()

  // function
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    toast.success('Berhasil di Salin!')
  }

  const filterStyle = (value: string) => {
    switch (value) {
      case 'normal':
        return (
          <div className="flex items-center gap-1 text-sky-500">
            <FaFaceSmile className="mr-1 size-3 inline" />
            Normal
          </div>
        )
      case 'funny':
        return (
          <div className="flex items-center gap-1 text-yellow-500">
            <FaFaceLaugh className="mr-1 size-3 inline" />
            Lucu
          </div>
        )
      case 'absurd':
        return (
          <div className="flex items-center gap-1 text-destructive">
            <FaFaceFlushed className="mr-1 size-3 inline" />
            Aneh
          </div>
        )
      default:
        return value
    }
  }

  const filterScenario = (value: string) => {
    switch (value) {
      case 'school':
        return (
          <div className="flex items-center gap-1">
            <FaGraduationCap className="mr-1 size-3 inline" />
            Sekolah
          </div>
        )
      case 'work':
        return (
          <div className="flex items-center gap-1">
            <FaBriefcase className="mr-1 size-3 inline" />
            Kerja
          </div>
        )
      case 'familyEvent':
        return (
          <div className="flex items-center gap-1">
            <FaHouse className="mr-1 size-3 inline" />
            Acara Keluarga
          </div>
        )
      case 'hangOut':
        return (
          <div className="flex items-center gap-1 ">
            <FaUsers className="mr-1 size-3 inline" />
            Nongkrong
          </div>
        )
      default:
        return value
    }
  }

  const formatRelativeTime = (dateString: string): string => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()

    if (isNaN(diffMs) || diffMs < 0) {
      return 'Baru saja'
    }

    const diffSecs = Math.floor(diffMs / 1000)
    const diffMins = Math.floor(diffSecs / 60)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)
    const diffWeeks = Math.floor(diffDays / 7)
    const diffMonths = Math.floor(diffDays / 30)
    const diffYears = Math.floor(diffDays / 365)

    if (diffSecs < 60) {
      return `${diffSecs || 1} detik lalu`
    }
    if (diffMins < 60) {
      return `${diffMins} menit lalu`
    }
    if (diffHours < 24) {
      return `${diffHours} jam lalu`
    }
    if (diffDays < 7) {
      const remainingHours = diffHours % 24
      if (remainingHours > 0) {
        return `${diffDays} hari ${remainingHours} jam lalu`
      }
      return `${diffDays} hari lalu`
    }
    if (diffWeeks < 4) {
      return `${diffWeeks} minggu lalu`
    }
    if (diffMonths < 12) {
      return `${diffMonths} bulan lalu`
    }
    return `${diffYears} tahun lalu`
  }

  return (
    <div>
      {isPending ? (
        <div className="flex items-center justify-center">
          <Loader2Icon className="animate-spin size-5 text-primary" />
        </div>
      ) : (
        <div>
          <CardHeader className="mb-4">
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <ListChevronsDownUp className="size-5" /> Alasan Terbaru
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4">
            {data?.data?.map((item) => (
              <div key={item.reason} className="border rounded-[min(var(--radius-4xl),24px)] p-4 bg-background">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 capitalize">
                    <Badge variant={'default'}>{filterScenario(item.scenario)}</Badge>
                    <Badge variant={'outline'}>{filterStyle(item.style)}</Badge>
                  </div>
                  <span className="text-xs text-foreground/50">{formatRelativeTime(item.createdAt)}</span>
                </div>
                <p className="text-sm my-4">"{item.reason}"</p>
                <div className="grid grid-cols-2 items-center">
                  <div className="text-xs text-foreground/50 truncate">
                    <FaUserAstronaut className="size-3 inline mr-1" /> Dibuat oleh {item.maker.length > 1 ? item.maker : 'Anonim'}
                  </div>
                  <div className="space-x-2 text-end">
                    <Button variant={'secondary'} onClick={() => handleCopy(item.reason)}>
                      <FaCopy className="size-4"></FaCopy> Salin
                    </Button>
                    <Button variant={'secondary'} size={'icon'} onClick={() => window.open(`https://wa.me/?text=${item.reason}`)}>
                      <FaWhatsapp className="size-4"></FaWhatsapp>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </div>
      )}
    </div>
  )
}
