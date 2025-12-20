"use client"

import { MoreHorizontal, Shield, Plus } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const roles = [
    { id: "r1", name: "Super Admin", users: 3, description: "Full access to all resources", type: "system" },
    { id: "r2", name: "Support Agent", users: 12, description: "Manage tickets, View orders/users", type: "custom" },
    { id: "r3", name: "Content Moderator", users: 5, description: "Manage restaurant menus and approvals", type: "custom" },
    { id: "r4", name: "Finance Manager", users: 2, description: "View and process payments/refunds", type: "custom" },
]

export function RolesPermissions() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-medium">Roles & Permissions</h3>
                    <p className="text-sm text-muted-foreground">Manage access control for your team members.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Role
                </Button>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Role Name</TableHead>
                                <TableHead>Users</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {roles.map((role) => (
                                <TableRow key={role.id}>
                                    <TableCell className="font-medium flex items-center gap-2">
                                        <Shield className="h-4 w-4 text-primary" />
                                        {role.name}
                                    </TableCell>
                                    <TableCell>{role.users}</TableCell>
                                    <TableCell>{role.description}</TableCell>
                                    <TableCell>
                                        {role.type === "system" ? (
                                            <Badge variant="secondary">System</Badge>
                                        ) : (
                                            <Badge variant="outline">Custom</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>View Permissions</DropdownMenuItem>
                                                <DropdownMenuItem>Manage Users</DropdownMenuItem>
                                                {role.type !== "system" && (
                                                    <>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem>Edit Role</DropdownMenuItem>
                                                        <DropdownMenuItem className="text-red-600">Delete Role</DropdownMenuItem>
                                                    </>
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
