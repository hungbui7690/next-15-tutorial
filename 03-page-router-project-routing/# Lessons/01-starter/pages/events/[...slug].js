import { useRouter } from 'next/router'

function FilteredEventsPage() {
  const router = useRouter()
  console.log(router.query.slug)

  return (
    <div>
      <h1>FilteredEventsPage</h1>
    </div>
  )
}

export default FilteredEventsPage
