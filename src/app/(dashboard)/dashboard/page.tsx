'use client';

import {
    Package,
    DollarSign,
    Users,
    Store
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentOrdersWidget } from '@/components/dashboard/RecentOrdersWidget';
import { TopRestaurantsWidget } from '@/components/dashboard/TopRestaurantsWidget';
import { LiveOrdersMap } from '@/components/dashboard/LiveOrdersMap';

export default function DashboardHome() {
    const stats = [
        {
            name: 'Total Orders',
            value: '2,845',
            change: '+12.5%',
            changeType: 'positive',
            icon: Package,
            color: 'bg-blue-500',
        },
        {
            name: 'Revenue',
            value: '₹4,52,320',
            change: '+8.2%',
            changeType: 'positive',
            icon: DollarSign,
            color: 'bg-green-500',
        },
        {
            name: 'Active Users',
            value: '12,432',
            change: '+5.4%',
            changeType: 'positive',
            icon: Users,
            color: 'bg-purple-500',
        },
        {
            name: 'Restaurants',
            value: '234',
            change: '+3',
            changeType: 'positive',
            icon: Store,
            color: 'bg-orange-500',
        },
    ];

    const ordersData = [
        { name: 'Mon', orders: 245 },
        { name: 'Tue', orders: 312 },
        { name: 'Wed', orders: 289 },
        { name: 'Thu', orders: 356 },
        { name: 'Fri', orders: 423 },
        { name: 'Sat', orders: 512 },
        { name: 'Sun', orders: 398 },
    ];

    const revenueData = [
        { name: 'Week 1', revenue: 45000 },
        { name: 'Week 2', revenue: 52000 },
        { name: 'Week 3', revenue: 48000 },
        { name: 'Week 4', revenue: 61000 },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                    <p className="text-sm text-gray-600 mt-1">
                        Welcome back! Here's what's happening today.
                    </p>
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                </select>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <StatCard key={stat.name} stat={stat} />
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Orders Chart */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Orders This Week</h3>
                        <button className="text-sm text-red-500 hover:text-red-600 font-medium">
                            View Details →
                        </button>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={ordersData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                                <YAxis stroke="#6b7280" fontSize={12} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px'
                                    }}
                                />
                                <Bar dataKey="orders" fill="#e23744" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Revenue Chart */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
                        <button className="text-sm text-red-500 hover:text-red-600 font-medium">
                            View Details →
                        </button>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                                <YAxis stroke="#6b7280" fontSize={12} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#10b981"
                                    strokeWidth={3}
                                    dot={{ fill: '#10b981', r: 4 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Recent Activity & Top Items */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Orders */}
                <RecentOrdersWidget />

                {/* Top Restaurants */}
                <TopRestaurantsWidget />
            </div>

            {/* Live Map */}
            <LiveOrdersMap />
        </div>
    );
}
