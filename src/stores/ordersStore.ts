import { create } from 'zustand';
import { mockOrders } from '@/lib/mock-data';

interface OrdersState {
    orders: typeof mockOrders;
    filters: {
        status: string | null;
        dateRange: { from: Date | null; to: Date | null };
        search: string;
    };
    selectedOrderId: string | null;
    page: number;
    pageSize: number;
    setOrders: (orders: typeof mockOrders) => void;
    setFilter: <K extends keyof OrdersState['filters']>(key: K, value: OrdersState['filters'][K]) => void;
    resetFilters: () => void;
    selectOrder: (orderId: string | null) => void;
    setPage: (page: number) => void;
    addOrder: (order: typeof mockOrders[0]) => void;
    updateOrderStatus: (orderId: string, status: string) => void;
}

const initialFilters = {
    status: null,
    dateRange: { from: null, to: null },
    search: '',
};

export const useOrdersStore = create<OrdersState>((set) => ({
    orders: mockOrders,
    filters: initialFilters,
    selectedOrderId: null,
    page: 1,
    pageSize: 10,
    setOrders: (orders) => set({ orders }),
    setFilter: (key, value) => set((state) => ({
        filters: { ...state.filters, [key]: value }
    })),
    resetFilters: () => set({ filters: initialFilters }),
    selectOrder: (orderId) => set({ selectedOrderId: orderId }),
    setPage: (page) => set({ page }),
    addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
    updateOrderStatus: (orderId, status) => set((state) => ({
        orders: state.orders.map(o => o.id === orderId ? { ...o, status } : o)
    })),
}));
