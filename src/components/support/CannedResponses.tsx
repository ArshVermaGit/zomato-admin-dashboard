"use client"

import * as React from "react"
import { MessageSquarePlus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const responses = [
    {
        id: "cr1",
        title: "Greeting - General",
        content: "Hi there! Thanks for reaching out to Zomato Support. My name is [Agent Name], and I'm here to help.",
    },
    {
        id: "cr2",
        title: "Apology - Late Delivery",
        content: "I sincerely apologize for the delay in your delivery. I understand how frustrating this is. I'm contacting the rider now to get an update.",
    },
    {
        id: "cr3",
        title: "Refund Processed",
        content: "I've gone ahead and processed a full refund for this order. You should see it reflect in your source account within 5-7 business days.",
    },
    {
        id: "cr4",
        title: "Restaurant Unavailable",
        content: "It looks like the restaurant is currently offline or not accepting orders. Would you like some recommendations for similar places nearby?",
    },
]

export function CannedResponses() {
    const [open, setOpen] = React.useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" title="Canned Responses">
                    <MessageSquarePlus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Canned Responses</DialogTitle>
                    <DialogDescription>
                        Select a template to insert into your reply.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search responses..." className="pl-8" />
                    </div>
                    <ScrollArea className="h-[300px] rounded-md border p-4">
                        <div className="space-y-2">
                            {responses.map((response) => (
                                <div
                                    key={response.id}
                                    className="flex flex-col gap-1 p-2 hover:bg-muted rounded-md cursor-pointer transition-colors"
                                    onClick={() => setOpen(false)} // Interact mock
                                >
                                    <span className="font-medium text-sm">{response.title}</span>
                                    <span className="text-xs text-muted-foreground line-clamp-2">{response.content}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    )
}
