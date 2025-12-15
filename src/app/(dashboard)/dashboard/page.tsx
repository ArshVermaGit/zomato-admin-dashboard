import { DollarSign, ShoppingBag, Users, Store } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/charts/RevenueChart";
import { OrderStatusChart } from "@/components/dashboard/charts/OrderStatusChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { SystemAlerts } from "@/components/dashboard/SystemAlerts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
    {
        title: 'Total Revenue',
        value: '₹45,231.89',
        icon: DollarSign,
        trend: '+20.1%',
        trendDirection: 'up' as const
    },
    {
        title: 'Active Orders',
        value: '2,350',
        icon: ShoppingBag,
        trend: '+18.1%',
        trendDirection: 'up' as const
    },
    {
        title: 'Total Users',
        value: '12,234',
        icon: Users,
        trend: '+9%',
        trendDirection: 'up' as const
    },
    {
        title: 'Restaurants',
        value: '573',
        icon: Store,
        trend: '+2',
        trendDirection: 'up' as const
    },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
            </div>

            {/* Top Metrics Row */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                    <MetricCard key={metric.title} {...metric} />
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Revenue Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <RevenueChart />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-3">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Orders by Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <OrderStatusChart />
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Bottom Row: Activity & Alerts */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ActivityFeed />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-3">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>System Alerts</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <SystemAlerts />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
