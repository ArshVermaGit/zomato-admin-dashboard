"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockOrders, mockDeliveryPartners, mockRestaurants } from "@/lib/mock-data";
import { MapPin, Bike, Package, Utensils, ExternalLink } from "lucide-react";

// This page provides a placeholder for the Live Operations Map.
// Full Mapbox integration requires a valid NEXT_PUBLIC_MAPBOX_TOKEN in .env.local

export default function LiveMapPage() {
    const activeOrders = mockOrders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled');
    const activePartners = mockDeliveryPartners.filter(dp => dp.status === 'Active');
    const activeRestaurants = mockRestaurants.filter(r => r.status === 'Active');

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Live Operations Map</h2>
                    <p className="text-muted-foreground">Real-time view of active orders, delivery partners, and restaurants.</p>
                </div>
                <Badge variant="outline" className="text-orange-600 border-orange-300 bg-orange-50">
                    <MapPin className="h-3 w-3 mr-1" /> Map Feature
                </Badge>
            </div>

            {/* Map Placeholder */}
            <Card className="h-[400px] flex items-center justify-center bg-slate-100 dark:bg-slate-800 border-dashed">
                <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 mx-auto text-muted-foreground/50" />
                    <div>
                        <h3 className="font-semibold text-lg">Mapbox Integration Required</h3>
                        <p className="text-sm text-muted-foreground max-w-md mx-auto">
                            To enable the interactive map, add your Mapbox token to <code className="bg-muted px-1 rounded">.env.local</code> as <code className="bg-muted px-1 rounded">NEXT_PUBLIC_MAPBOX_TOKEN</code>.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <a href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" /> Get Mapbox Token
                        </a>
                    </Button>
                </div>
            </Card>

            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                        <Package className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{activeOrders.length}</div>
                        <p className="text-xs text-muted-foreground">Currently in progress</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Online Partners</CardTitle>
                        <Bike className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{activePartners.length}</div>
                        <p className="text-xs text-muted-foreground">Available for delivery</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Restaurants</CardTitle>
                        <Utensils className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{activeRestaurants.length}</div>
                        <p className="text-xs text-muted-foreground">Currently accepting orders</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
