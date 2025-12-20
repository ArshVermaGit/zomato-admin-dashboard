"use client"

import { Search, Filter, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"

const logs = [
    { id: 1, action: "User Login", user: "admin@zomato.com", details: "Successful login from IP 192.168.1.1", timestamp: new Date(Date.now() - 1000 * 60 * 5), type: "info" },
    { id: 2, action: "Update Settings", user: "admin@zomato.com", details: "Changed 'Maintenance Mode' to OFF", timestamp: new Date(Date.now() - 1000 * 60 * 60), type: "warning" },
    { id: 3, action: "Delete User", user: "manager@zomato.com", details: "Deleted user 'test_user_01'", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), type: "destructive" },
    { id: 4, action: "API Key Generated", user: "tech@zomato.com", details: "Generated new Staging Key", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), type: "success" },
    { id: 5, action: "Refund Processed", user: "support@zomato.com", details: "Refunded Order #ORD-9921", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25), type: "info" },
]

export function SystemLogs() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search logs..." className="pl-8" />
                </div>
                <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Action</TableHead>
                            <TableHead>User</TableHead>
                            <TableHead>Details</TableHead>
                            <TableHead>Timestamp</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {logs.map((log) => (
                            <TableRow key={log.id}>
                                <TableCell className="font-medium">
                                    <Badge variant={
                                        log.type === 'destructive' ? 'destructive' :
                                            log.type === 'warning' ? 'default' : // default badge is primary (black/white), can be used for warning or make a custom one
                                                log.type === 'success' ? 'outline' : 'secondary'
                                    }>
                                        {log.action}
                                    </Badge>
                                </TableCell>
                                <TableCell>{log.user}</TableCell>
                                <TableCell className="text-muted-foreground text-sm flex items-center gap-2">
                                    <FileText className="h-3 w-3" />
                                    {log.details}
                                </TableCell>
                                <TableCell className="text-sm text-muted-foreground">
                                    {formatDistanceToNow(log.timestamp, { addSuffix: true })}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
