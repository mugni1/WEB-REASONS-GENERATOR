// src/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
	component: RootComponent,
})

function RootComponent() {
	return (
		<>
			{/* <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
				<Link to="/" activeProps={{ style: { fontWeight: 'bold' } }}>
					Home
				</Link>
				<Link to="/about" activeProps={{ style: { fontWeight: 'bold' } }}>
					About
				</Link>
			</nav>

			<hr /> */}
			{/* Tempat kompon
			en halaman anak di-render */}
			<main className="z-99 bg-foreground/5 backdrop-blur-xs min-h-svh">
				<Outlet />
			</main>
			<div className="fixed z-0 bottom-10 translate-x-10 right-0 aspect-square w-4/12 md:w-2/12 rounded-full bg-primary-foreground blur-xs"></div>
			<div className="fixed z-0 top-10 -translate-x-10 left-0 aspect-square w-4/12 md:w-2/12 rounded-full bg-primary/20 blur-xs "></div>
		</>
	)
}
