import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Calendar } from "lucide-react";
import { OverviewSection } from "@/components/dashboard/analytics/sections/OverviewSection";
import { OrdersAnalytics } from "@/components/dashboard/analytics/sections/OrdersAnalytics";

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h2>
                    <p className="text-muted-foreground">Comprehensive insights into platform performance.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">
                        <Calendar className="mr-2 h-4 w-4" />
                        Last 7 Days
                    </Button>
                    <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Export Report
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="orders">Orders</TabsTrigger>
                    <TabsTrigger value="revenue">Revenue</TabsTrigger>
                    <TabsTrigger value="customers">Customers</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <OverviewSection />
                </TabsContent>

                <TabsContent value="orders" className="space-y-4">
                    <OrdersAnalytics />
                </TabsContent>

                <TabsContent value="revenue">
                    <div className="flex items-center justify-center p-12 text-muted-foreground border border-dashed rounded-lg">
                        Revenue Analytics Module (Coming Soon)
                    </div>
                </TabsContent>

                <TabsContent value="customers">
                    <div className="flex items-center justify-center p-12 text-muted-foreground border border-dashed rounded-lg">
                        Customer Analytics Module (Coming Soon)
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
