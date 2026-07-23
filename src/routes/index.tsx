import FormCreateReason from '@/components/content/FormCreateReason'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useGetReason } from '@/hooks/useGetReason'
import { createFileRoute } from '@tanstack/react-router'
import { Sparkles } from 'lucide-react'
import { useState } from 'react'
import { FaChartSimple, FaCircleInfo, FaCopy, FaWhatsapp } from 'react-icons/fa6'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [result, setResult] = useState<{ reason: string; scenario: string; style: string } | null>(null)
  const { data, isPending } = useGetReason()

  return (
    <section className="container max-w-2xl mx-auto py-10 space-y-8 p-4">
      {/* header  */}
      <div className="flex items-center justify-between">
        <Button variant={'outline'} size={'sm'}>
          <FaChartSimple className="size-3 text-primary mr-1" />
          <span className="font-semibold">{isPending ? 'Loading...' : data?.meta?.total}</span>
          <span className="text-foreground/50">Di Buat</span>
        </Button>
        <Button variant={'outline'} size={'sm'}>
          <FaCircleInfo className="size-3 text-primary mr-1" /> Bantuan
        </Button>
      </div>

      {/* title and subtitle  */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 justify-center">
          <div className="h-px w-6 bg-linear-to-r from-transparent to-primary/30"></div>
          <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">Generator Alasan Terbaik</span>{' '}
          <div className="h-px w-6 bg-linear-to-l from-transparent to-primary/30"></div>
        </div>
        <h1 className="text-6xl font-bold text-center text-foreground">Ngeles</h1>
        <p className="max-w-md text-sm font-medium leading-relaxed text-foreground/50 dark:text-slate-400 sm:text-base">Buat alasan sempurna dan meyakinkan dalam sekejap.</p>
      </div>

      {/* Form Create Reason */}
      <FormCreateReason onSuccess={({ reason, scenario, style }) => setResult({ reason, scenario, style })} />

      {/* Result */}
      {result && (
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <div className="text-xl font-semibold flex items-center gap-2">
                <Sparkles className=" size-5" /> Hasil Ngeles
              </div>
            </CardTitle>
            <CardDescription>
              Alasan yang dihasilkan untuk <span className="font-semibold">{result.scenario}</span> dengan gaya <span className="font-semibold">{result.style}.</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>"{result.reason}"</p>
          </CardContent>
          <CardFooter className="space-x-2">
            <Button variant={'secondary'}>
              <FaCopy className="size-4"></FaCopy> Salin
            </Button>
            <Button variant={'secondary'} size={'icon'}>
              <FaWhatsapp className="size-4"></FaWhatsapp>
            </Button>
          </CardFooter>
        </Card>
      )}
    </section>
  )
}
