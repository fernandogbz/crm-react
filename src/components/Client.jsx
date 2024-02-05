function Client({client}) {

    const {id, name, phone, email, company} = client;

    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-2xl text-gray-800">{client.name}</p>
                <p>{company}</p>
            </td>
        </tr>
    )
}

export default Client