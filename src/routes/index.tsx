import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<section className="container mx-auto py-10">
			<Button variant={'outline'}>Click me</Button>
		</section>
	)
}
