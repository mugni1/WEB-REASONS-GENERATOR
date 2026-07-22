// src/routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

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
			{/* Tempat komponen halaman anak di-render */}
			<Outlet />
		</>
	)
}
