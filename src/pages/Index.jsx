import { useLoaderData } from "react-router-dom"

export function loader(){

  return "From Loader"

} // This loader is very similar to a useEffect. It's not exactly the same, but it's very similar and it's a function that will be executed when the component load and is ideal for loading a state or for querying some API and getting some result that you want to display in a component.


function Index() {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage your Clients</p>
    </>
  )
}

export default Index