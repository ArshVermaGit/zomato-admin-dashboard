'use client';

import {
    CheckCircle2,
    XCircle,
    Clock,
    ShoppingBag,
    AlertTriangle
} from 'lucide-react';

interface ActivityItem {
    id: string;
    type: 'order' | 'login' | 'support' | 'warning';
    title: string;
    description: string;
    timestamp: string;
}

const MOCK_ACTIVITY: ActivityItem[] = [
    { id: '1', type: 'order', title: 'Placed Order #1234', description: 'From Pizza Hut • ₹450', timestamp: '2 mins ago' },
    { id: '2', type: 'login', title: 'Login Detected', description: 'New device (iPhone 13) • Delhi', timestamp: '2 days ago' },
    { id: '3', type: 'support', title: 'Support Ticket #987', description: 'Resolved: Payment Issue', timestamp: '1 week ago' },
    { id: '4', type: 'warning', title: 'Account Flagged', description: 'Suspicious login attempt', timestamp: '1 month ago' },
];

export function UserActivityTimeline() {
    const getIcon = (type: ActivityItem['type']) => {
        switch (type) {
            case 'order': return <ShoppingBag className="w-4 h-4 text-blue-500" />;
            case 'login': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
            case 'support': return <Clock className="w-4 h-4 text-orange-500" />;
            case 'warning': return <AlertTriangle className="w-4 h-4 text-red-500" />;
            default: return <CheckCircle2 className="w-4 h-4 text-gray-500" />;
        }
    };

    return (
        <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Recent Activity</h3>
            <div className="relative pl-6 border-l border-gray-200 space-y-8">
                {MOCK_ACTIVITY.map((item) => (
                    <div key={item.id} className="relative">
                        <div className="absolute -left-[31px] w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                            {getIcon(item.type)}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">{item.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                            <span className="text-[10px] text-gray-400 mt-1 block">{item.timestamp}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
