import { useRouter } from 'next/router'

function EventDetailPage() {
  const router = useRouter()
  console.log(router.query.eventId)

  return <p>Event Detail Page</p>
}

export default EventDetailPage
