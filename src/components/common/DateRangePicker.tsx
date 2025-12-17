"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface DateRangePickerProps {
    date?: {
        from?: Date
        to?: Date
    }
    onDateChange?: (date: { from?: Date; to?: Date }) => void
}

export function DateRangePicker({ date, onDateChange }: DateRangePickerProps) {
    const [fromDate, setFromDate] = React.useState<string>(
        date?.from ? format(date.from, "yyyy-MM-dd") : ""
    )
    const [toDate, setToDate] = React.useState<string>(
        date?.to ? format(date.to, "yyyy-MM-dd") : ""
    )

    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setFromDate(val)
        if (onDateChange) {
            onDateChange({
                from: val ? new Date(val) : undefined,
                to: toDate ? new Date(toDate) : undefined,
            })
        }
    }

    const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setToDate(val)
        if (onDateChange) {
            onDateChange({
                from: fromDate ? new Date(fromDate) : undefined,
                to: val ? new Date(val) : undefined,
            })
        }
    }

    return (
        <div className={cn("grid gap-2")}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-[260px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date range</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-4" align="end">
                    <div className="flex flex-col gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Date Range</h4>
                            <p className="text-sm text-muted-foreground">Select the timeframe for analytics.</p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <Label htmlFor="from">From</Label>
                                <Input
                                    id="from"
                                    type="date"
                                    value={fromDate}
                                    onChange={handleFromChange}
                                    className="h-8"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <Label htmlFor="to">To</Label>
                                <Input
                                    id="to"
                                    type="date"
                                    value={toDate}
                                    onChange={handleToChange}
                                    className="h-8"
                                />
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
