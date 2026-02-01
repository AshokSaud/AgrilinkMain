import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AdminUsers = () => {
    const { axios } = useAppContext()
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const { data } = await axios.get('/api/admin/users')
            if (data.success) {
                setUsers(data.users)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const deleteUser = async (id) => {
        try {
            const { data } = await axios.post('/api/admin/delete-user', { id })
            if (data.success) {
                toast.success(data.message)
                fetchUsers()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map(user => (
                            <tr key={user._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminUsers