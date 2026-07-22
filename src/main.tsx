// src/main.tsx
import './index.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import route tree yang dibuat otomatis oleh plugin TanStack
import { routeTree } from './routeTree.gen'
import { Toaster } from 'sonner'

// Inisialisasi router
export const router = createRouter({ routeTree })

// Register tipe router untuk full TypeScript type-safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<StrictMode>
			<RouterProvider router={router} />
			<Toaster position="top-center" richColors />
		</StrictMode>,
	)
}
