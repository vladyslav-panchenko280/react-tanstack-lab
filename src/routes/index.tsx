import { createFileRoute } from '@tanstack/react-router'
import App from '../features/home'

export const Route = createFileRoute('/')({
  component: App,
})

