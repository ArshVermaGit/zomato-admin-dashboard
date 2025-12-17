'use client';

import { DollarSign, Wallet, ArrowDownLeft, AlertOctagon } from 'lucide-react';

export function PaymentsOverview() {
    const metrics = [
        { title: 'Total Revenue', value: '₹12.5M', change: '+12%', sub: 'vs last month', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
        { title: 'Processing Payouts', value: '₹4.2L', change: 'Due Today', sub: '18 Partners', icon: Wallet, color: 'text-blue-600', bg: 'bg-blue-100' },
        { title: 'Refund Rate', value: '1.2%', change: '-0.3%', sub: 'Improved', icon: ArrowDownLeft, color: 'text-purple-600', bg: 'bg-purple-100' },
        { title: 'Disputed Amount', value: '₹12k', change: '4 Cases', sub: 'Action Required', icon: AlertOctagon, color: 'text-red-600', bg: 'bg-red-100' },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                    <div key={metric.title} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-lg ${metric.bg}`}>
                                <Icon className={`w-5 h-5 ${metric.color}`} />
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${metric.color === 'text-green-600' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                {metric.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                        <p className="text-sm text-gray-500 mt-1">{metric.title} • {metric.sub}</p>
                    </div>
                );
            })}
        </div>
    );
}
