import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { FaChartSimple, FaCircleInfo, FaWandMagicSparkles } from 'react-icons/fa6'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { generateReasonSchema } from '@/schema/reason.schema'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	const form = useForm({
		defaultValues: {
			myName: '',
			targetName: '',
			language: 'id',
			reason: 'school',
			style: 'normal',
		},
		validators: {
			onSubmit: generateReasonSchema,
		},
		onSubmit: async ({ value }) => {
			console.log(value)
			toast.success('Form submitted successfully')
		},
	})
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

			<Card className="shadow-xl">
				<CardHeader>
					<CardTitle className="text-xl font-bold">Buat Alasanmu</CardTitle>
					<CardDescription>Pilih skenario, tentukan tingkat absurditas, biarkan Ngeles bekerja.</CardDescription>
				</CardHeader>

				<CardContent>
					<form
						id="generate-reason-form"
						onSubmit={(e) => {
							console.log('anjay')
							e.preventDefault()
							form.handleSubmit()
						}}
					>
						<FieldGroup>
							<form.Field
								name="targetName"
								children={(field) => {
									const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel htmlFor={field.name}>Nama Teman / Target (Opsional)</FieldLabel>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder="Kosongkan unguk alasan umum"
												autoComplete="off"
											/>
											{isInvalid && <FieldError errors={field.state.meta.errors} />}
										</Field>
									)
								}}
							/>
							<form.Field
								name="myName"
								children={(field) => {
									const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel htmlFor={field.name}>Nama Anda (Opsional)</FieldLabel>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder="Kosongkan unguk alasan umum"
												autoComplete="off"
											/>
											{isInvalid && <FieldError errors={field.state.meta.errors} />}
										</Field>
									)
								}}
							/>
						</FieldGroup>
					</form>
				</CardContent>

				<CardFooter>
					<Button form="generate-reason-form" className={'w-full'} size={'lg'} type="submit">
						<FaWandMagicSparkles className="mr-1" /> Buat Alasan
					</Button>
				</CardFooter>
			</Card>
		</section>
	)
}
