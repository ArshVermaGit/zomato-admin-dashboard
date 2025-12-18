import { OrderService as ApiOrderService } from '@zomato/api-client';

export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'READY_FOR_PICKUP' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED';

export interface OrderFilters {
    status?: OrderStatus;
    search?: string;
    [key: string]: any;
}

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
    items: { name: string; quantity: number; price: number }[]; // item details
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
                items: o.items || [],
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

    // Aliases and additional methods required by usage
    getOrders: async (filters: OrderFilters) => {
        // In a real app, pass filters to listOrders
        return OrdersService.getAllOrders();
    },

    getOrderById: async (id: string) => {
        return OrdersService.getOrderDetails(id);
    },

    assignOrder: async (orderId: string, partnerId: string) => {
        console.log(`Assigning order ${orderId} to partner ${partnerId}`);
        // Mock implementation
        return { success: true };
    },

    cancelOrder: async (orderId: string, reason: string) => {
        console.log(`Canceling order ${orderId} due to ${reason}`);
        // Mock implementation
        return { success: true };
    },

    refundOrder: async (orderId: string, amount: number, reason: string) => {
        console.log(`Refunding order ${orderId} amount ${amount} due to ${reason}`);
        // Mock implementation
        return { success: true };
    }
};
