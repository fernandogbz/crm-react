function Client({client}) {

    const {id, name, phone, email, company} = client;

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{client.name}</p>
                <p>{company}</p>
            </td>

            <td className="p-6">
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Phone: </span>{phone}</p>
            </td>

            <td className="p-6 flex gap-3">
                <button 
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                >
                        Edit
                </button>
                <button 
                    type="button"
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                >
                        Delete
                </button>
            </td>
        </tr>
    )
}

export default Client