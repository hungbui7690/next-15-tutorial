/*
  Adding Catch-All Routes
  - pages/blog/[id].js
    # /blog/123/abc -> 404


------------------------

  1. pages/blog/[...id].js
    # catch all
    # /blog/123/abc
    # router.query = { id: ['123', 'abc'] }

    # /blog/what/ever/you/want
    # router.query = { id: ['what', 'ever', 'you', 'want'] }


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Navigating with the Link Component
  2. pages/index.js
    -> Next Link


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Navigating To Dynamic Routes
  3. pages/clients/index.js
      <Link href={`/clients/${client.id}`}>{client.name}</Link>

      <Link
        href={{
          pathname: '/clients/[id]',
          query: { id: client.id },
        }}
      >
        {client.name}
      </Link>


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Navigating Programmatically
  4. /clients/[id]/index.js.js
    -> router.push('/clients/123/projecta')


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Custom 404
  5. pages/404.js 


*/
