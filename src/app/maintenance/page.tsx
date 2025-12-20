import { Button } from "@/components/ui/button"
import { Construction, RefreshCcw } from "lucide-react"

export default function MaintenancePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-20 rounded-full animate-pulse"></div>
                <Construction className="h-24 w-24 text-yellow-600 relative z-10" />
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                Under Maintenance
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-lg text-center leading-relaxed">
                We&apos;re currently performing scheduled maintenance to improve our services.
                We&apos;ll be back online shortly.
            </p>

            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 rounded-full border shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                    </span>
                    Estimated completion: 30 minutes
                </div>

                <Button
                    className="mt-4"
                    variant="outline"
                    onClick={() => window.location.reload()}
                >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Check Status
                </Button>
            </div>
        </div>
    )
}
