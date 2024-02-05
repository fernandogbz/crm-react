function Client({client}) {

    const {id, name, phone, email, company} = client;

  return (
    <tr>
        <td className="p-6">
        {client.name}
        </td>
    </tr>
  )
}

export default Client