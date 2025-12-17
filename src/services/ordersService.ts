import { OrderService as ApiOrderService } from '@zomato/api-client';

export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'READY_FOR_PICKUP' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED';

export interface Order {
    id: string;
    customer: {
        name: string;
        email?: string;
    };
    restaurant: {
        name: string;
    };
    totalAmount: number;
    status: OrderStatus;
    items: number; // item count
    createdAt: string;
}

export const OrdersService = {
    getAllOrders: async (): Promise<Order[]> => {
        try {
            const orders = await ApiOrderService.listOrders({});
            return orders.map((o: any) => ({
                id: o.id,
                customer: {
                    name: o.user?.name || 'Unknown',
                    email: o.user?.email,
                },
                restaurant: {
                    name: o.restaurant?.name || 'Unknown',
                },
                totalAmount: o.totalAmount,
                status: o.status,
                items: o.items?.length || 0,
                createdAt: o.createdAt,
            }));
        } catch (error) {
            console.error('Failed to fetch orders', error);
            // Fallback for demo if API fails
            return [];
        }
    },

    getOrderDetails: async (orderId: string) => {
        try {
            return await ApiOrderService.findOne(orderId);
        } catch (error) {
            console.error('Failed to fetch order details', error);
            throw error;
        }
    },
};
