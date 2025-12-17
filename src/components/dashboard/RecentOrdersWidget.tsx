export function RecentOrdersWidget() {
    const recentOrders = [
        { id: 'ZOM12345', restaurant: 'Pizza Hut', amount: 450, status: 'delivered' },
        { id: 'ZOM12344', restaurant: 'KFC', amount: 680, status: 'preparing' },
        { id: 'ZOM12343', restaurant: 'Subway', amount: 320, status: 'pending' },
        { id: 'ZOM12342', restaurant: 'Burger King', amount: 550, status: 'delivered' },
        { id: 'ZOM12341', restaurant: 'Dominos', amount: 1200, status: 'cancelled' },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                <button className="text-sm text-red-500 hover:text-red-600 font-medium">
                    View All →
                </button>
            </div>
            <div className="space-y-3">
                {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                            <p className="font-medium text-gray-900">#{order.id}</p>
                            <p className="text-sm text-gray-600">{order.restaurant}</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-gray-900">₹{order.amount}</p>
                            <span className={`text-xs px-2 py-1 rounded-full uppercase ${order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                                    order.status === 'preparing' ? 'bg-yellow-100 text-yellow-700' :
                                        order.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                                            'bg-orange-100 text-orange-700'
                                }`}>
                                {order.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
