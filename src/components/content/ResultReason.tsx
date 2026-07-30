import { handleCopy } from '@/utils/copy'
import { Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { FaCopy, FaWhatsapp } from 'react-icons/fa6'

export interface ResultReasonProps {
  reason: string
  scenario: string
  style: string
}

export default function ResultReason({ reason, scenario, style }: ResultReasonProps) {
  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className=" size-5" /> Hasil Ngeles
          </div>
        </CardTitle>
        <CardDescription>
          Alasan <span className="font-semibold">{scenario}</span> dengan gaya <span className="font-semibold">{style}.</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base">"{reason}"</p>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button variant={'secondary'} onClick={() => handleCopy(reason)}>
          <FaCopy className="size-4"></FaCopy> Salin
        </Button>
        <Button variant={'secondary'} size={'icon'} onClick={() => window.open(`https://wa.me/?text=${reason}`)}>
          <FaWhatsapp className="size-4"></FaWhatsapp>
        </Button>
      </CardFooter>
    </Card>
  )
}
