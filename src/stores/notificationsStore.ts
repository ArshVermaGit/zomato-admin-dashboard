import { create } from 'zustand';

interface Notification {
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    read: boolean;
    timestamp: Date;
}

interface NotificationsState {
    notifications: Notification[];
    unreadCount: number;
    addNotification: (notification: Omit<Notification, 'id' | 'read' | 'timestamp'>) => void;
    markAsRead: (id: string) => void;
    markAllAsRead: () => void;
    clearNotifications: () => void;
}

export const useNotificationsStore = create<NotificationsState>((set, get) => ({
    notifications: [
        { id: '1', title: 'New Order', message: 'Order ORD-001 placed', type: 'info', read: false, timestamp: new Date() },
        { id: '2', title: 'System Update', message: 'Dashboard updated', type: 'success', read: true, timestamp: new Date(Date.now() - 3600000) },
    ],
    unreadCount: 1,
    addNotification: (notification) => {
        const newNotification: Notification = {
            ...notification,
            id: Date.now().toString(),
            read: false,
            timestamp: new Date(),
        };
        set((state) => ({
            notifications: [newNotification, ...state.notifications],
            unreadCount: state.unreadCount + 1,
        }));
    },
    markAsRead: (id) => set((state) => ({
        notifications: state.notifications.map(n => n.id === id ? { ...n, read: true } : n),
        unreadCount: Math.max(0, state.unreadCount - 1),
    })),
    markAllAsRead: () => set((state) => ({
        notifications: state.notifications.map(n => ({ ...n, read: true })),
        unreadCount: 0,
    })),
    clearNotifications: () => set({ notifications: [], unreadCount: 0 }),
}));
