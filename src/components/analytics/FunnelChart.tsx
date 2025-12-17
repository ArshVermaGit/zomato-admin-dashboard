"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
    { stage: "App Open", users: 12000, fill: "#3b82f6" }, // Blue-500
    { stage: "View Restaurant", users: 8500, fill: "#60a5fa" }, // Blue-400
    { stage: "Add to Cart", users: 4200, fill: "#93c5fd" }, // Blue-300
    { stage: "Checkout", users: 3100, fill: "#bae6fd" }, // Blue-200
    { stage: "Purchase", users: 2800, fill: "#10b981" }, // Emerald-500
]

export function FunnelChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>User Conversion Funnel</CardTitle>
                <CardDescription>
                    Tracking user journey from app open to purchase.
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={data}
                            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
                        >
                            <XAxis type="number" hide />
                            <YAxis
                                dataKey="stage"
                                type="category"
                                width={120}
                                tick={{ fontSize: 12 }}
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Bar dataKey="users" radius={[0, 4, 4, 0]}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
