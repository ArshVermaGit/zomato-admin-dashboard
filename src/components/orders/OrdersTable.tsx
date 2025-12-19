'use client';


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal, Eye } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Order } from '@/services/ordersService';

interface OrdersTableProps {
    orders: Order[];
    onSelectOrder: (order: Order) => void;
    selectedOrderIds: string[];
    onToggleSelect: (orderId: string) => void;
    onToggleSelectAll: (checked: boolean) => void;
}

export function OrdersTable({
    orders,
    onSelectOrder,
    selectedOrderIds,
    onToggleSelect,
    onToggleSelectAll
}: OrdersTableProps) {

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'DELIVERED': return 'success';
            case 'OUT_FOR_DELIVERY': return 'warning';
            case 'PICKED_UP': return 'secondary';
            case 'READY_FOR_PICKUP': return 'secondary';
            case 'PREPARING': return 'secondary';
            case 'CONFIRMED': return 'secondary';
            case 'PENDING': return 'warning';
            case 'CANCELLED': return 'destructive';
            default: return 'secondary';
        }
    };

    const allSelected = orders.length > 0 && selectedOrderIds.length === orders.length;

    return (
        <div className="rounded-md border bg-white shadow-sm overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">
                            <Checkbox
                                checked={allSelected}
                                onCheckedChange={(checked) => onToggleSelectAll(checked as boolean)}
                            />
                        </TableHead>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Restaurant</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={8} className="text-center h-32 text-muted-foreground">
                                No orders found matching your filters.
                            </TableCell>
                        </TableRow>
                    ) : (
                        orders.map((order) => (
                            <TableRow key={order.id} className="hover:bg-gray-50 transition-colors">
                                <TableCell>
                                    <Checkbox
                                        checked={selectedOrderIds.includes(order.id)}
                                        onCheckedChange={() => onToggleSelect(order.id)}
                                    />
                                </TableCell>
                                <TableCell className="font-medium">
                                    <button
                                        onClick={() => onSelectOrder(order)}
                                        className="text-red-600 hover:text-red-700 hover:underline"
                                    >
                                        #{order.id.slice(0, 8).toUpperCase()}
                                    </button>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900">
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-900">{order.customer.name}</span>
                                        <span className="text-xs text-gray-500">{order.customer.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium text-gray-900">{order.restaurant.name}</div>
                                </TableCell>
                                <TableCell className="font-medium">₹{order.totalAmount}</TableCell>
                                <TableCell>
                                    <Badge variant={getStatusColor(order.status) as any} className="uppercase text-[10px] px-2 py-0.5">
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 w-8 p-0 text-gray-500 hover:text-red-600"
                                            onClick={() => onSelectOrder(order)}
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0 text-gray-500">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-48">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem onClick={() => onSelectOrder(order)}>
                                                    View Details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>Assign Driver</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-destructive font-medium">
                                                    Cancel Order
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
