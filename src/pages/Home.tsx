type SubmitEvent = Event & {
  submitter: HTMLElement
} & {
  currentTarget: HTMLFormElement
  target: Element
}

export const Home = () => {
  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault()

    console.log(event.currentTarget.search.value)
  }

  return (
    <main class="flex h-full w-full flex-col items-center">
      <h1 class="mt-10 text-6xl">Hashirama</h1>
      <h2 class="mt-6 text-4xl">Search for anything.</h2>
      <form
        onSubmit={handleSubmit}
        class="mt-10 flex flex-row [column-gap:40px]"
      >
        <label for="search" class="sr-only">
          Search
        </label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="How was the weather today?"
          class="h-12 w-[450px] rounded-sm bg-black pl-2 text-xl text-white placeholder:text-inherit placeholder:opacity-60 focus:shadow-sm focus:shadow-gray-600"
          required
        />
        <button
          type="submit"
          class="rounded-sm bg-black py-1 px-8 text-xl text-white shadow-sm shadow-gray-600"
        >
          Search
        </button>
      </form>
    </main>
  )
}
