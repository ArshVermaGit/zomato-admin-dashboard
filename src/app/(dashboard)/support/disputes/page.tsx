import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockDisputes } from "@/lib/mock-data";
import { Search, Filter } from "lucide-react";
import Link from "next/link";

export default function DisputesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Disputes</h2>
                    <p className="text-muted-foreground">Resolve disputes between parties.</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Active Disputes</CardTitle>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search disputes..."
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
                                <TableHead>Dispute ID</TableHead>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Parties Involved</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Created On</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockDisputes.map((dispute) => (
                                <TableRow key={dispute.id}>
                                    <TableCell className="font-medium">{dispute.id}</TableCell>
                                    <TableCell>{dispute.orderId}</TableCell>
                                    <TableCell>{dispute.type}</TableCell>
                                    <TableCell>{dispute.parties.join(" vs ")}</TableCell>
                                    <TableCell>₹{dispute.amount}</TableCell>
                                    <TableCell>
                                        <Badge variant={dispute.status === "Open" ? "destructive" : "success"}>
                                            {dispute.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{new Date(dispute.createdOn).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm" asChild>
                                            <Link href={`/support/disputes/${dispute.id}`}>Resolve</Link>
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
