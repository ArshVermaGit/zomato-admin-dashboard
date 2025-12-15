import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';

interface UIState {
    sidebarCollapsed: boolean;
    theme: Theme;
    activePage: string;
    modalOpen: { [key: string]: boolean };
    toggleSidebar: () => void;
    setSidebarCollapsed: (collapsed: boolean) => void;
    setTheme: (theme: Theme) => void;
    setActivePage: (page: string) => void;
    openModal: (modalId: string) => void;
    closeModal: (modalId: string) => void;
}

export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
            sidebarCollapsed: false,
            theme: 'system',
            activePage: 'dashboard',
            modalOpen: {},
            toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
            setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
            setTheme: (theme) => set({ theme }),
            setActivePage: (page) => set({ activePage: page }),
            openModal: (modalId) => set((state) => ({ modalOpen: { ...state.modalOpen, [modalId]: true } })),
            closeModal: (modalId) => set((state) => ({ modalOpen: { ...state.modalOpen, [modalId]: false } })),
        }),
        {
            name: 'admin-ui-storage',
        }
    )
);
