import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AdminSellers = () => {
    const { axios } = useAppContext()
    const [sellers, setSellers] = useState([])

    const fetchSellers = async () => {
        try {
            const { data } = await axios.get('/api/admin/sellers')
            if (data.success) {
                setSellers(data.sellers)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const deleteSeller = async (id) => {
        try {
            const { data } = await axios.post('/api/admin/delete-seller', { id })
            if (data.success) {
                toast.success(data.message)
                fetchSellers()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchSellers()
    }, [fetchSellers])

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Sellers</h1>
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
                        {sellers.map(seller => (
                            <tr key={seller._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{seller.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{seller.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={() => deleteSeller(seller._id)}
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

export default AdminSellers