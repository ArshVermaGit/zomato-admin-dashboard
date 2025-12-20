'use client';

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function RestaurantAnalytics() {
    const weeklyRevenue = [
        { name: 'Mon', revenue: 12000 },
        { name: 'Tue', revenue: 15500 },
        { name: 'Wed', revenue: 11000 },
        { name: 'Thu', revenue: 18000 },
        { name: 'Fri', revenue: 25000 },
        { name: 'Sat', revenue: 32000 },
        { name: 'Sun', revenue: 28000 },
    ];

    const orderTrends = [
        { name: 'Week 1', orders: 150 },
        { name: 'Week 2', orders: 180 },
        { name: 'Week 3', orders: 160 },
        { name: 'Week 4', orders: 210 },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Revenue</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={weeklyRevenue}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" fontSize={12} stroke="#888" />
                            <YAxis fontSize={12} stroke="#888" tickFormatter={(value) => `₹${value / 1000}k`} />
                            <Tooltip
                                formatter={(value: number) => [`₹${value}`, 'Revenue']}
                                contentStyle={{ borderRadius: '8px' }}
                            />
                            <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Growth</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={orderTrends}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" fontSize={12} stroke="#888" />
                            <YAxis fontSize={12} stroke="#888" />
                            <Tooltip contentStyle={{ borderRadius: '8px' }} />
                            <Line type="monotone" dataKey="orders" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
