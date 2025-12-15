import { PaymentMetrics } from "@/components/dashboard/payments/PaymentMetrics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Download, FileText } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

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

            <PaymentMetrics />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Quick Links</CardTitle>
                        <CardDescription>Manage specific financial areas</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <h3 className="font-semibold mb-2 flex items-center">
                                Transactions <ArrowRight className="ml-auto h-4 w-4" />
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">View and filter all incoming transaction logs.</p>
                            <Link href="/payments/transactions" className="text-primary text-sm font-medium hover:underline">Go to Transactions</Link>
                        </div>
                        <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <h3 className="font-semibold mb-2 flex items-center">
                                Payouts <ArrowRight className="ml-auto h-4 w-4" />
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">Manage payouts for restaurants and delivery partners.</p>
                            <Link href="/payments/payouts" className="text-primary text-sm font-medium hover:underline">Go to Payouts</Link>
                        </div>
                        <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <h3 className="font-semibold mb-2 flex items-center">
                                Refunds <ArrowRight className="ml-auto h-4 w-4" />
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">Process and approve pending refund requests.</p>
                            <Link href="/payments/refunds" className="text-primary text-sm font-medium hover:underline">Go to Refunds</Link>
                        </div>
                        <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <h3 className="font-semibold mb-2 flex items-center">
                                Commission Settings <ArrowRight className="ml-auto h-4 w-4" />
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">Adjust default commission rates and fees.</p>
                            <Link href="/settings" className="text-primary text-sm font-medium hover:underline">Go to Settings</Link>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Latest financial events</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center">
                                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                                        <FileText className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">Payout Processed</p>
                                        <p className="text-xs text-muted-foreground">
                                            Rolex Restaurant - ₹45,000
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium text-sm text-muted-foreground">2h ago</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
