import { Star } from 'lucide-react';

export function TopRestaurantsWidget() {
    const restaurants = [
        { name: 'Pizza Hut', rating: 4.8, orders: 1250, revenue: '₹4.5L' },
        { name: 'KFC', rating: 4.6, orders: 980, revenue: '₹3.2L' },
        { name: 'Burger King', rating: 4.5, orders: 850, revenue: '₹2.8L' },
        { name: 'Subway', rating: 4.4, orders: 720, revenue: '₹2.1L' },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Top Restaurants</h3>
                <button className="text-sm text-red-500 hover:text-red-600 font-medium">
                    View All →
                </button>
            </div>
            <div className="space-y-4">
                {restaurants.map((rest, index) => (
                    <div key={rest.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600">
                                {index + 1}
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">{rest.name}</p>
                                <div className="flex items-center text-xs text-gray-500 gap-1">
                                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                    <span>{rest.rating}</span>
                                    <span>•</span>
                                    <span>{rest.orders} orders</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm font-semibold text-gray-900">
                            {rest.revenue}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
