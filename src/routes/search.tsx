import { useRouteData } from 'solid-app-router'

export function routeData({ location }) {
  console.log(location.search)
  return { name: 'Jane' }
}

export default function Search() {
  const data = useRouteData<ReturnType<typeof routeData>>()

  console.log({ data })

  return <div>Hello World</div>
}
