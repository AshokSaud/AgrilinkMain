import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import AdminUsers from './AdminUsers'
import AdminSellers from './AdminSellers'
import AdminProducts from './AdminProducts'
import AdminOrders from './AdminOrders'

const AdminLayout = () => {
    const [activeTab, setActiveTab] = useState('users')

    const tabs = [
        { id: 'users', label: 'Users' },
        { id: 'sellers', label: 'Sellers' },
        { id: 'products', label: 'Products' },
        { id: 'orders', label: 'Orders' }
    ]

    const renderContent = () => {
        switch (activeTab) {
            case 'users':
                return <AdminUsers />
            case 'sellers':
                return <AdminSellers />
            case 'products':
                return <AdminProducts />
            case 'orders':
                return <AdminOrders />
            default:
                return <AdminUsers />
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex">
                <div className="w-64 bg-white shadow-md min-h-screen">
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
                        <nav className="space-y-2">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                                        activeTab === tab.id
                                            ? 'bg-primary text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="flex-1 p-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout