"use client"

import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"

interface Message {
    id: string
    sender: {
        name: string
        role: "User" | "Agent" | "System"
        avatar?: string
    }
    content: string
    timestamp: Date
    internal?: boolean
}

const mockMessages: Message[] = [
    {
        id: "m1",
        sender: { name: "John Doe", role: "User" },
        content: "Hi, I ordered food 2 hours ago and it still shows as 'Preparing'. Can you help?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
        id: "m2",
        sender: { name: "System", role: "System" },
        content: "Ticket priority automatically upgraded to High due to delay.",
        timestamp: new Date(Date.now() - 1000 * 60 * 55),
        internal: true,
    },
    {
        id: "m3",
        sender: { name: "Sarah (Support)", role: "Agent", avatar: "/avatars/01.png" },
        content: "Hello John, I'm so sorry for the delay. Let me check the status with the restaurant right away.",
        timestamp: new Date(Date.now() - 1000 * 60 * 10),
    },
]

export function ConversationThread() {
    return (
        <div className="flex flex-col space-y-4 p-4">
            {mockMessages.map((message) => (
                <div
                    key={message.id}
                    className={cn(
                        "flex w-max max-w-[75%] flex-col gap-2 rounded-lg p-3 text-sm",
                        message.sender.role === "Agent"
                            ? "ml-auto bg-primary text-primary-foreground"
                            : message.sender.role === "System"
                                ? "mx-auto bg-muted text-muted-foreground italic text-center w-full max-w-full"
                                : "bg-muted"
                    )}
                >
                    {message.sender.role !== "System" && (
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">{message.sender.name}</span>
                            <span className="text-xs opacity-70">{formatDistanceToNow(message.timestamp, { addSuffix: true })}</span>
                        </div>
                    )}

                    <div className={cn(message.sender.role === "System" && "text-xs")}>
                        {message.content}
                    </div>
                </div>
            ))}
        </div>
    )
}
