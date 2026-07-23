import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import {
	FaBriefcase,
	FaChartSimple,
	FaCircleInfo,
	FaCircleUser,
	FaFaceLaugh,
	FaGraduationCap,
	FaGuaraniSign,
	FaHouse,
	FaRobot,
	FaUsers,
	FaWandMagicSparkles,
} from 'react-icons/fa6'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { generateReasonSchema } from '@/schema/reason.schema'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	const items = [
		{ label: 'Kerja', value: 'work', icon: <FaBriefcase className="text-primary" /> },
		{ label: 'Sekolah', value: 'school', icon: <FaGraduationCap className="text-primary" /> },
		{ label: 'Nongkrong', value: 'hangOut', icon: <FaUsers className="text-primary" /> },
		{ label: 'Acara Keluarga', value: 'familyEvent', icon: <FaHouse className="text-primary" /> },
	]
	const form = useForm({
		defaultValues: {
			myName: '',
			targetName: '',
			language: 'id',
			reason: 'work',
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
							<form.Field
								name="reason"
								children={(field) => {
									const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
									const selectedItem = items.find((item) => item.value === field.state.value)
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel htmlFor={field.name}>Alasan (Opsional)</FieldLabel>
											<Select value={field.state.value} onValueChange={(val: any) => field.handleChange(val)}>
												<SelectTrigger className="w-full" aria-invalid={isInvalid}>
													{selectedItem ? (
														<span className="flex items-center gap-2">
															{selectedItem.icon && <span className="flex items-center justify-center size-4">{selectedItem.icon}</span>}
															<span>{selectedItem.label}</span>
														</span>
													) : (
														<SelectValue placeholder="Pilih Alasan" />
													)}
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														{items.map((item) => (
															<SelectItem key={item.value} value={item.value}>
																{item.icon && <span className="flex items-center justify-center size-4">{item.icon}</span>}
																<span>{item.label}</span>
															</SelectItem>
														))}
													</SelectGroup>
												</SelectContent>
											</Select>
											{isInvalid && <FieldError errors={field.state.meta.errors} />}
										</Field>
									)
								}}
							/>
							<form.Field
								name="style"
								children={(field) => {
									const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel htmlFor={field.name}>Tingkat Absurditas</FieldLabel>
											<ToggleGroup variant={'outline'} size="lg" onValueChange={(val: any) => field.handleChange(val[0])}>
												<ToggleGroupItem value="normal" aria-invalid={isInvalid}>
													<FaCircleUser className="size-4 text-primary mr-1" /> Normal
												</ToggleGroupItem>
												<ToggleGroupItem value="stupid" aria-invalid={isInvalid}>
													<FaFaceLaugh className="size-4 text-primary" /> Lucu
												</ToggleGroupItem>
												<ToggleGroupItem value="absurd" aria-invalid={isInvalid}>
													<FaRobot className="size-4 text-primary mr-1" /> Absurd
												</ToggleGroupItem>
											</ToggleGroup>
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
