"use client"

import { FileDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

const availableMetrics = [
    { id: "revenue", label: "Total Revenue" },
    { id: "orders", label: "Order Volume" },
    { id: "active_users", label: "Active Users" },
    { id: "avg_order_value", label: "Average Order Value" },
    { id: "churn_rate", label: "Churn Rate" },
    { id: "refunds", label: "Refunds & Cancellations" },
]

export function ReportsBuilder() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Create Custom Report</CardTitle>
                    <CardDescription>Configure parameters to generate a specific data export.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="report-name">Report Name</Label>
                        <Input id="report-name" placeholder="E.g., Monthly Revenue Breakdown" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Time Period</Label>
                            <Select defaultValue="last-30-days">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select period" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                                    <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                                    <SelectItem value="this-quarter">This Quarter</SelectItem>
                                    <SelectItem value="custom">Custom Range</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label>Format</Label>
                            <Select defaultValue="csv">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select format" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="csv">CSV</SelectItem>
                                    <SelectItem value="pdf">PDF</SelectItem>
                                    <SelectItem value="excel">Excel</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Include Metrics</Label>
                        <div className="grid grid-cols-2 gap-2">
                            {availableMetrics.map((metric) => (
                                <div key={metric.id} className="flex items-center space-x-2">
                                    <Checkbox id={metric.id} />
                                    <Label htmlFor={metric.id} className="text-sm font-normal">
                                        {metric.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator className="my-2" />

                    <Button className="w-full">
                        <FileDown className="mr-2 h-4 w-4" />
                        Generate Report
                    </Button>
                </CardContent>
            </Card>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Reports</CardTitle>
                        <CardDescription>Personally generated reports in the last 7 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                    <div className="space-y-1">
                                        <p className="font-medium text-sm">Revenue_Q3_{i}.csv</p>
                                        <p className="text-xs text-muted-foreground">Generated on Oct {10 + i}, 2024</p>
                                    </div>
                                    <Button variant="ghost" size="sm">Download</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
