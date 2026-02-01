import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AdminOrders = () => {
    const { axios, currency } = useAppContext()
    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        try {
            const { data } = await axios.get('/api/admin/orders')
            if (data.success) {
                setOrders(data.orders)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [fetchOrders])

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{order._id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.userId?.name || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {order.items?.map(item => item.productId?.name).join(', ') || 'N/A'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{currency}{order.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminOrders