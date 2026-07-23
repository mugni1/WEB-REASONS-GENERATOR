import FormCreateReason from '@/components/content/FormCreateReason'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { FaChartSimple, FaCircleInfo } from 'react-icons/fa6'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [reason, setReason] = useState<string>('')

  return (
    <section className="container max-w-2xl mx-auto py-10 space-y-8 p-4">
      {/* header  */}
      <div className="flex items-center justify-between">
        <Button variant={'outline'} size={'sm'}>
          <FaChartSimple className="size-3 text-primary mr-1" />
          <span className="font-semibold">14.000</span>
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
      <FormCreateReason onSuccess={setReason} />

      {/* Result */}
      {reason && (
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Hasil</CardTitle>
            <CardDescription>Berikut adalah alasan yang dihasilkan</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{reason}</p>
          </CardContent>
        </Card>
      )}
    </section>
  )
}
