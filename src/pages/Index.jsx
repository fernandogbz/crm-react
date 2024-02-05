import { useLoaderData } from "react-router-dom"

export function loader(){

  const clients = [
    {        
      id: 1,
      name: 'Juan',
      phone: 102013313,
      email: "juan@correo.com",
      company: 'Google'
  },
  {
      id: 2,
      name: 'Karen',
      phone: 138198313,
      email: "karen@correo.com",
      company: 'Facebook'
  },
  {
      id: 3,
      name: 'Josue',
      phone: 31983913,
      email: "josue@correo.com",
      company: 'Linkedin'
  },
  {
      id: 4,
      name: 'Miguel',
      phone: 319381983,
      email: "miguel@correo.com",
      company: 'X'
  },
  {
      id: 5,
      name: 'Pedro',
      phone: 1398198938,
      email: "pedro@correo.com",
      company: 'Tesla'
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

      {clients.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text text-white">
            <tr>
              <th className="p-2">Clients</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
            <tbody>
              {clients.map(client => (
                <tr>
                  <td>
                    {client.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </thead>
        </table>
      ) : (
        <p className="text-center mt-10">There are not clients yet</p>
      )}
    </>
  )
}

export default Index