import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SimpleBarChart, StatusPieChart } from "@/components/dashboard/analytics/charts/ChartComponents";
import { mockOrdersByStatus, mockOrdersByTime } from "@/lib/mock-data";

export function OrdersAnalytics() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Orders by Time of Day</CardTitle>
                    <CardDescription>Peak ordering hours analysis</CardDescription>
                </CardHeader>
                <CardContent>
                    <SimpleBarChart data={mockOrdersByTime} dataKey="orders" color="#E23744" />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Order Status Distribution</CardTitle>
                    <CardDescription>Breakdown of order outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                    <StatusPieChart data={mockOrdersByStatus} />
                </CardContent>
            </Card>
        </div>
    );
}
