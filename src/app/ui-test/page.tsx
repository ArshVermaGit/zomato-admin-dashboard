'use client';

import { Button, RestaurantCard } from '@zomato/ui';
import { colors } from '@zomato/design-tokens';
import { Text } from 'react-native';

export default function UITestPage() {
    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ fontFamily: 'sans-serif', marginBottom: 20 }}>Shared UI Library Test</h1>

            <div style={{ marginBottom: 40, border: '1px solid #ddd', padding: 20, borderRadius: 8 }}>
                <h2 style={{ marginBottom: 10 }}>React Native Button in Next.js</h2>
                {/* Render Button */}
                <Button onPress={() => alert('Button Clicked!')}>
                    Click Me (Shared Component)
                </Button>
            </div>

            <div style={{ marginBottom: 40, border: '1px solid #ddd', padding: 20, borderRadius: 8, maxWidth: 400 }}>
                <h2 style={{ marginBottom: 10 }}>Restaurant Card</h2>
                {/* Render RestaurantCard */}
                <RestaurantCard
                    restaurant={{
                        id: '1',
                        name: 'Pizza Hut',
                        coverImage: 'https://b.zmtcdn.com/data/pictures/chains/4/10624/d6c810606798835848bb210165158226.jpg',
                        rating: 4.5,
                        cuisineTypes: ['Italian', 'Pizza'],
                        preparationTime: 30,
                        costForTwo: 500,
                        distance: '2.5 km',
                        offers: '50% OFF',
                        status: 'Active',
                        location: 'Connaught Place',
                    } as unknown as Parameters<typeof RestaurantCard>[0]['restaurant']}
                    onPress={() => alert('Card Pressed')}
                />
            </div>

            <div style={{ marginTop: 20 }}>
                <Text style={{ color: colors.primary.zomato_red, fontSize: 20, fontWeight: 'bold' }}>
                    This text uses basic React Native primitives and Design Token colors!
                </Text>
            </div>
        </div>
    );
}
