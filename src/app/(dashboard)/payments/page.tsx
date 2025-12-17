'use client';

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import { PaymentsOverview } from "@/components/payments/PaymentsOverview";
import { TransactionsTable } from "@/components/payments/TransactionsTable";
import { PayoutsManager } from "@/components/payments/PayoutsManager";
import { RefundModal } from "@/components/payments/RefundModal";
import { FinancialCharts } from "@/components/payments/FinancialCharts";

export default function PaymentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Payments & Financials</h2>
                    <p className="text-muted-foreground">Overview of transaction volume, refunds, and payouts.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                    </Button>
                </div>
            </div>

            <PaymentsOverview />

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview & Analytics</TabsTrigger>
                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
                    <TabsTrigger value="payouts">Payouts</TabsTrigger>
                    <TabsTrigger value="refunds">Refunds</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    <FinancialCharts />
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-4">Recent Transactions</h3>
                        <TransactionsTable />
                    </div>
                </TabsContent>

                <TabsContent value="transactions">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <TransactionsTable />
                    </div>
                </TabsContent>

                <TabsContent value="payouts">
                    <PayoutsManager />
                </TabsContent>

                <TabsContent value="refunds" className="space-y-6">
                    <div className="flex justify-between items-center bg-red-50 p-4 rounded-lg border border-red-100">
                        <div>
                            <h3 className="text-red-900 font-semibold">Manual Refund Processing</h3>
                            <p className="text-red-700 text-sm">Use this for special cases or support escalations only.</p>
                        </div>
                        <RefundModal />
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-4">Refund History</h3>
                        <TransactionsTable />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
