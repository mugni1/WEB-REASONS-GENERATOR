import FormCreateReason from '@/components/content/FormCreateReason'
import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { FaChartSimple, FaCircleInfo } from 'react-icons/fa6'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="container max-w-2xl mx-auto py-10 p-4">
      <div className="flex items-center justify-between mb-4">
        <Button variant={'outline'} size={'sm'}>
          <FaChartSimple className="size-3 text-primary mr-1" />
          <span className="font-semibold">14.000</span>
          <span className="text-foreground/50">Di Buat</span>
        </Button>
        <Button variant={'outline'} size={'sm'}>
          <FaCircleInfo className="size-3 text-primary mr-1" /> Bantuan
        </Button>
      </div>
      <div className="mb-2 flex items-center gap-3 justify-center">
        <div className="h-px w-6 bg-linear-to-r from-transparent to-primary/30"></div>
        <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">Generator Alasan Terbaik</span>{' '}
        <div className="h-px w-6 bg-linear-to-l from-transparent to-primary/30"></div>
      </div>
      <div className="flex flex-col items-center mb-8 gap-4">
        <h1 className="text-6xl font-bold text-center text-foreground">Ngeles</h1>
        <p className="max-w-md text-sm font-medium leading-relaxed text-foreground/50 dark:text-slate-400 sm:text-base">Buat alasan sempurna dan meyakinkan dalam sekejap.</p>
      </div>
      <FormCreateReason />
    </section>
  )
}
