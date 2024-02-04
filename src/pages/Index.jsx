import { useLoaderData } from "react-router-dom"

export function loader(){

  const clients = [
    {        
      id: 1,
      nombre: 'Juan',
      telefono: 102013313,
      email: "juan@correo.com",
      empresa: 'Google'
  },
  {
      id: 2,
      nombre: 'Karen',
      telefono: 138198313,
      email: "karen@correo.com",
      empresa: 'Facebook'
  },
  {
      id: 3,
      nombre: 'Josue',
      telefono: 31983913,
      email: "josue@correo.com",
      empresa: 'Linkedin'
  },
  {
      id: 4,
      nombre: 'Miguel',
      telefono: 319381983,
      email: "miguel@correo.com",
      empresa: 'X'
  },
  {
      id: 5,
      nombre: 'Pedro',
      telefono: 1398198938,
      email: "pedro@correo.com",
      empresa: 'Tesla'
    },
];

  return clients;

} // This loader is very similar to a useEffect. It's not exactly the same, but it's very similar and it's a function that will be executed when the component load and is ideal for loading a state or for querying some API and getting some result that you want to display in a component.


function Index() {

  const clients = useLoaderData();
  console.log(clients)

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage your Clients</p>
    </>
  )
}

export default Index