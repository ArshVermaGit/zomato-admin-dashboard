import DashboardLayout from '@/components/layout/DashboardLayout';
import { WebSocketProvider } from '@/contexts/WebSocketContext';
import { QueryProvider } from '@/providers/QueryProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <QueryProvider>
            <WebSocketProvider>
                <DashboardLayout>
                    {children}
                </DashboardLayout>
            </WebSocketProvider>
        </QueryProvider>
    );
}
