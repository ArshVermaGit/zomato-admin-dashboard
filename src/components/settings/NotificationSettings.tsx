"use client"

import { Mail, MessageSquare, Bell, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

const templates = [
    { id: "t1", name: "Order Confirmation", channel: "Email", active: true },
    { id: "t2", name: "Password Reset", channel: "Email", active: true },
    { id: "t3", name: "Delivery Partner Assigned", channel: "Push", active: true },
    { id: "t4", name: "Refund Processed", channel: "Email", active: true },
    { id: "t5", name: "OTP Verification", channel: "SMS", active: true },
]

export function NotificationSettings() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Email Provider</CardTitle>
                        <CardDescription>Configure SMTP or SendGrid settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label>Provider</Label>
                            <Select defaultValue="sendgrid">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select provider" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="smtp">SMTP</SelectItem>
                                    <SelectItem value="sendgrid">SendGrid</SelectItem>
                                    <SelectItem value="ses">Amazon SES</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label>API Key</Label>
                            <Input type="password" value="SG.xxxxxxxxxxxxxx" />
                        </div>
                        <div className="grid gap-2">
                            <Label>From Email</Label>
                            <Input value="notifications@zomato.com" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>SMS Gateway</CardTitle>
                        <CardDescription>Configure Twilio or MSG91 settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label>Provider</Label>
                            <Select defaultValue="twilio">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select provider" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="twilio">Twilio</SelectItem>
                                    <SelectItem value="msg91">MSG91</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label>Account SID</Label>
                            <Input type="password" value="ACxxxxxxxxxxxxxx" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>Notification Templates</CardTitle>
                        <CardDescription>Manage content for system notifications.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[400px]">
                            <div className="space-y-4">
                                {templates.map(template => (
                                    <div key={template.id} className="flex items-center justify-between p-3 border rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-secondary rounded-full">
                                                {template.channel === "Email" ? <Mail className="h-4 w-4" /> :
                                                    template.channel === "SMS" ? <MessageSquare className="h-4 w-4" /> :
                                                        <Bell className="h-4 w-4" />}
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{template.name}</p>
                                                <p className="text-xs text-muted-foreground">{template.channel} • {template.active ? "Active" : "Inactive"}</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon">
                                            <Edit2 className="h-3 w-3" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
