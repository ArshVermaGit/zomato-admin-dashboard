"use client"

import * as React from "react"
import { Upload, X, File as FileIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FileUploaderProps {
    value?: File | null
    onChange: (file: File | null) => void
    accept?: string
    className?: string
}

export function FileUploader({ value, onChange, accept, className }: FileUploaderProps) {
    const [isDragging, setIsDragging] = React.useState(false)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        const files = e.dataTransfer.files
        if (files.length > 0) {
            onChange(files[0])
        }
    }

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            onChange(files[0])
        }
    }

    const removeFile = () => {
        onChange(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    return (
        <div className={cn("w-full", className)}>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept={accept}
                onChange={handleFileSelect}
            />

            {value ? (
                <div className="flex items-center justify-between p-4 border rounded-md bg-muted/30">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                            <FileIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium truncate max-w-[200px]">{value.name}</span>
                            <span className="text-xs text-muted-foreground">{(value.size / 1024).toFixed(1)} KB</span>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={removeFile}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            ) : (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={cn(
                        "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-md cursor-pointer transition-colors",
                        isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
                    )}
                >
                    <div className="p-3 bg-muted rounded-full mb-3">
                        <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="text-center space-y-1">
                        <p className="text-sm font-medium">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    </div>
                </div>
            )}
        </div>
    )
}
