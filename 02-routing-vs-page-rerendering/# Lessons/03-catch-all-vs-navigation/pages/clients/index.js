import Link from 'next/link'

function ClientsPage() {
  const clients = [
    { id: '123', name: 'Joe' },
    { id: '234', name: 'Doe' },
  ]

  return (
    <div>
      <h1>The Clients Page /clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* Method 1: react way */}
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}

            {/* Method 2: */}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id }, // query has [id] from the pathname
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
