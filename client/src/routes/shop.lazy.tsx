import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/shop')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/shop"!</div>
}
