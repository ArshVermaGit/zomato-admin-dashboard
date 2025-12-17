"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { WizardDialog } from "@/components/common/WizardDialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function NewUserWizard() {
    const [open, setOpen] = useState(false)
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "customer"
    })

    const handleFinish = () => {
        setOpen(false)
        toast({
            title: "User Created",
            description: `Successfully created user ${formData.name} as a ${formData.role}.`,
        })
        setFormData({ name: "", email: "", role: "customer" }) // Reset
    }

    const steps = [
        {
            title: "Personal Information",
            content: (
                <div className="space-y-4">
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>
            )
        },
        {
            title: "Role Selection",
            content: (
                <RadioGroup value={formData.role} onValueChange={(val) => setFormData({ ...formData, role: val })} className="grid gap-4">
                    <div>
                        <RadioGroupItem value="customer" id="customer" className="peer sr-only" />
                        <Label
                            htmlFor="customer"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            Customer
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem value="delivery" id="delivery" className="peer sr-only" />
                        <Label
                            htmlFor="delivery"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            Delivery Partner
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem value="restaurant" id="restaurant" className="peer sr-only" />
                        <Label
                            htmlFor="restaurant"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            Restaurant Partner
                        </Label>
                    </div>
                </RadioGroup>
            )
        },
        {
            title: "Review & Confirm",
            content: (
                <div className="space-y-2 rounded-lg border p-4 bg-muted/50">
                    <div className="flex justify-between">
                        <span className="font-medium">Name:</span>
                        <span>{formData.name || "-"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Email:</span>
                        <span>{formData.email || "-"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Role:</span>
                        <span className="capitalize">{formData.role}</span>
                    </div>
                </div>
            )
        }
    ]

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Add User
            </Button>
            <WizardDialog
                open={open}
                onOpenChange={setOpen}
                title="Create New User"
                steps={steps}
                onFinish={handleFinish}
            />
        </>
    )
}
