import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api';

export function useAuth() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const logout = async () => {
        try {
            setIsLoading(true);
            await apiClient.post('/auth/logout');
            router.push('/login');
            router.refresh();
        } catch (error) {
            console.error('Logout failed', error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        logout,
        isLoading
    };
}
