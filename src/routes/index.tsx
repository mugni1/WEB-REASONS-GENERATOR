import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<section className="container max-w-2xl mx-auto py-10 p-4">
			<div className="flex items-center justify-between">
				<Button variant={'outline'} size={'sm'}>
					14.000 Di Buat
				</Button>
				<Button variant={'outline'}>Bantuan</Button>
			</div>
			<h1 className="text-4xl font-bold mb-4 text-center">Ngeles</h1>
			<Button variant={'outline'}>Click me</Button>
		</section>
	)
}
