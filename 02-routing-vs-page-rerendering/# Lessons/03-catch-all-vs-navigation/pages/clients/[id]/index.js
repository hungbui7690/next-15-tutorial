import { useRouter } from 'next/router'

function ClientProjectsPage() {
  const router = useRouter()

  console.log(router.query)

  function loadProjectHandler() {
    // load data...

    // navigate 1
    router.push('/clients/123/projecta')

    // navigate 2
    // router.push({
    //   pathname: '/clients/[id]/[clientprojectid]',
    //   query: { id: '123', clientprojectid: 'projecta' }, // query has [id] & [clientprojectid] from the pathname
    // })
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectsPage
