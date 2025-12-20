"use client"

import { Bold, Italic, List, Link as LinkIcon, Image as ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface RichTextEditorProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    className?: string
}

export function RichTextEditor({ value, onChange, placeholder, className }: RichTextEditorProps) {
    // Note: This is an implementation simulation. 
    // In a real app, this would wrap Tiptap or similar.
    // Here we provide the UI and just use a textarea for the content.

    return (
        <div className={cn("border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2", className)}>
            <div className="flex items-center gap-1 p-1 border-b bg-muted/40">
                <Button variant="ghost" size="sm" aria-label="Toggle bold" className="h-8 w-8 p-0">
                    <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" aria-label="Toggle italic" className="h-8 w-8 p-0">
                    <Italic className="h-4 w-4" />
                </Button>
                <div className="w-px h-4 bg-border mx-1" />
                <Button variant="ghost" size="sm" aria-label="Toggle list" className="h-8 w-8 p-0">
                    <List className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" aria-label="Toggle link" className="h-8 w-8 p-0">
                    <LinkIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" aria-label="Insert image" className="h-8 w-8 p-0">
                    <ImageIcon className="h-4 w-4" />
                </Button>
            </div>
            <Textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="min-h-[150px] border-0 rounded-none focus-visible:ring-0 resize-none p-4"
            />
        </div>
    )
}
