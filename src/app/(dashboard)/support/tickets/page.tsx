import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockTickets } from "@/lib/mock-data";
import { Search, Filter, Plus } from "lucide-react";
import Link from "next/link";

export default function TicketsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Support Tickets</h2>
                    <p className="text-muted-foreground">Manage customer support requests.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create Ticket
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>All Tickets</CardTitle>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search tickets..."
                                    className="pl-8 w-[250px]"
                                />
                            </div>
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Ticket ID</TableHead>
                                <TableHead>Subject</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Priority</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Assigned To</TableHead>
                                <TableHead>Last Updated</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockTickets.map((ticket) => (
                                <TableRow key={ticket.id}>
                                    <TableCell className="font-medium">{ticket.id}</TableCell>
                                    <TableCell>{ticket.subject}</TableCell>
                                    <TableCell>{ticket.customerName}</TableCell>
                                    <TableCell>{ticket.type}</TableCell>
                                    <TableCell>
                                        <Badge variant={ticket.priority === "Critical" || ticket.priority === "High" ? "destructive" : "secondary"}>
                                            {ticket.priority}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{ticket.status}</Badge>
                                    </TableCell>
                                    <TableCell>{ticket.assignedTo}</TableCell>
                                    <TableCell>{new Date(ticket.lastUpdated).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm" asChild>
                                            <Link href={`/support/tickets/${ticket.id}`}>View</Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
