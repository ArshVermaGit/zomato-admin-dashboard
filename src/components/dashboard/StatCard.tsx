import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
    stat: {
        name: string;
        value: string;
        change: string;
        changeType: string;
        icon: LucideIcon;
        color: string;
    };
}

export function StatCard({ stat }: StatCardProps) {
    const Icon = stat.icon;
    const isPositive = stat.changeType === 'positive';

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'
                    }`}>
                    {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    <span>{stat.change}</span>
                </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.name}</p>
        </div>
    );
}
