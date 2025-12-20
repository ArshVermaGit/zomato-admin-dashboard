"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const hours = Array.from({ length: 24 }, (_, i) => i)
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

// Mock intensity data (0-4 scale)
const generateHeatmapData = () => {
    return days.map(_day => {
        return hours.map(hour => {
            // Peak hours around lunch (12-14) and dinner (19-21)
            let intensity = 0
            if ((hour >= 12 && hour <= 14) || (hour >= 19 && hour <= 21)) {
                intensity = Math.floor(Math.random() * 3) + 2 // 2-4 (High)
            } else if (hour >= 22 || hour <= 5) {
                intensity = Math.floor(Math.random() * 2) // 0-1 (Low)
            } else {
                intensity = Math.floor(Math.random() * 3) // 0-2 (Med)
            }
            return intensity
        })
    })
}

const data = generateHeatmapData()

const getColor = (intensity: number) => {
    switch (intensity) {
        case 0: return "bg-gray-100"
        case 1: return "bg-green-200"
        case 2: return "bg-green-300"
        case 3: return "bg-green-400"
        case 4: return "bg-green-500"
        default: return "bg-gray-100"
    }
}

export function HeatmapChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Peak Order Times</CardTitle>
                <CardDescription>
                    Hourly heat map of order density by day of week.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2 overflow-x-auto pb-4">
                    {/* Header Row (Hours) */}
                    <div className="flex">
                        <div className="w-12 shrink-0"></div> {/* Spacer for Days */}
                        {hours.map(hour => (
                            <div key={hour} className="w-8 flex justify-center text-[10px] text-muted-foreground">
                                {hour}
                            </div>
                        ))}
                    </div>

                    {/* Data Rows */}
                    {days.map((day, dIndex) => (
                        <div key={day} className="flex items-center">
                            <div className="w-12 text-xs font-medium text-muted-foreground shrink-0">{day}</div>
                            {hours.map((hour, hIndex) => (
                                <div key={hour} className="w-8 h-8 p-0.5">
                                    <div
                                        className={cn(
                                            "w-full h-full rounded-sm hover:ring-2 ring-emerald-500 transition-all cursor-pointer",
                                            getColor(data[dIndex][hIndex])
                                        )}
                                        title={`${day} @ ${hour}:00 - Intensity: ${data[dIndex][hIndex]}`}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4 justify-end">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-4 h-4 bg-gray-100 rounded-sm"></div>
                        <div className="w-4 h-4 bg-green-200 rounded-sm"></div>
                        <div className="w-4 h-4 bg-green-300 rounded-sm"></div>
                        <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                    </div>
                    <span>More</span>
                </div>
            </CardContent>
        </Card>
    )
}
