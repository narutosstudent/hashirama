import type { SearchResponse } from '~/types'

import { useRouteData } from 'solid-app-router'
import { For } from 'solid-js'
import { createServerResource } from 'solid-start/server'

const SERP_API = import.meta.env.VITE_SERP_API
const ENGINE = 'google'
const NUMBER_OF_RESULTS = 10

const searchBaseUrl = `https://serpapi.com/search.json?engine=${ENGINE}&api_key=${SERP_API}&num=${NUMBER_OF_RESULTS}`

export function routeData() {
  return createServerResource(async (_, { request }) => {
    const query = new URL(request.url).searchParams.get('query')

    const searchFullUrl = `${searchBaseUrl}&q=${query}`

    const response = await fetch(searchFullUrl)
    const searchResults = (await response.json()) as SearchResponse

    return { searchResults }
  })
}

export default function Search() {
  // @ts-ignore
  const data: ReturnType<typeof routeData> = useRouteData()

  const searchResults = data()?.searchResults

  const searchValue = searchResults?.search_parameters?.q
  const organicResults = searchResults?.organic_results

  return (
    <main class="flex h-full w-full flex-col items-center">
      <h1 class="mt-10 text-6xl">Results</h1>
      <h2 class="mt-6 text-4xl">Your results searching for {searchValue}</h2>
      <ul class="mt-8 flex flex-col items-center [row-gap:50px]">
        <For each={organicResults} fallback={<div>Loading...</div>}>
          {({ snippet, title, link }) => (
            <li class="flex flex-col items-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                class="text-2xl font-bold text-black underline"
              >
                <h3>{title}</h3>
              </a>
              <p class="mt-2 text-center text-xl [max-width:70ch]">{snippet}</p>
            </li>
          )}
        </For>
      </ul>
    </main>
  )
}
