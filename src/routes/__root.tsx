// src/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Sparkles } from 'lucide-react'

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
      <main className="relative z-10 bg-foreground/5 backdrop-blur-xs min-h-svh">
        <Outlet />
      </main>
      <div className="fixed z-0 bottom-10 translate-x-10 right-0 aspect-square w-4/12 md:w-2/12 rounded-full bg-primary-foreground blur-xs"></div>
      <div className="fixed z-0 top-10 -translate-x-10 left-0 aspect-square w-4/12 md:w-2/12 rounded-full bg-primary/20 blur-xs "></div>

      {/* footer  */}
      <footer className="container max-w-2xl mx-auto py-4 space-y-1 p-4">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="size-3 text-primary"></Sparkles>
          <span className="text-sm font-black tracking-[0.3em] text-primary uppercase">Ngeles</span> <span className="text-primary/50">|</span>
          <span className="text-sm font-black tracking-[0.3em] text-primary uppercase">Mugni</span>
          <Sparkles className="size-3 text-primary"></Sparkles>
        </div>
        <p className="text-center text-xs font-medium text-foreground/50">copyright {new Date().getFullYear()} All Rights Reserved</p>
      </footer>
    </>
  )
}
