"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface WizardStep {
    title: string
    content: React.ReactNode
}

interface WizardDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    steps: WizardStep[]
    onFinish: () => void
}

export function WizardDialog({
    open,
    onOpenChange,
    title,
    steps,
    onFinish,
}: WizardDialogProps) {
    const [currentStep, setCurrentStep] = useState(0)

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
        } else {
            onFinish()
            setCurrentStep(0) // Reset for next time
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
                    </DialogDescription>
                </DialogHeader>

                {/* Progress Indicator */}
                <div className="flex gap-2">
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "h-1 flex-1 rounded-full transition-colors",
                                index <= currentStep ? "bg-primary" : "bg-muted"
                            )}
                        />
                    ))}
                </div>

                <div className="py-4">
                    {steps[currentStep].content}
                </div>

                <DialogFooter className="flex justify-between sm:justify-between">
                    <Button
                        variant="outline"
                        onClick={handleBack}
                        disabled={currentStep === 0}
                    >
                        Back
                    </Button>
                    <Button onClick={handleNext}>
                        {currentStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
