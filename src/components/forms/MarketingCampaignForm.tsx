"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DateRangePicker } from "@/components/common/DateRangePicker"
import { Combobox } from "@/components/ui/combobox"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
import { FileUploader } from "@/components/ui/file-uploader"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
    campaignName: z.string().min(2, {
        message: "Campaign name must be at least 2 characters.",
    }),
    type: z.string({
        required_error: "Please select a campaign type.",
    }),
    audience: z.string({
        required_error: "Please select a target audience.",
    }),
    dateRange: z.object({
        from: z.date(),
        to: z.date().optional()
    }, { required_error: "Please select a date range." }).refine((data) => !!data.from, "Start date is required."),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    assets: z.any().optional(), // File validation is complex in client-side only schemas
})

const audienceOptions = [
    { value: "all_users", label: "All Users" },
    { value: "new_users", label: "New Users (Last 30 Days)" },
    { value: "churned_users", label: "Churned Users" },
    { value: "high_value", label: "High Value Customers" },
    { value: "restaurant_partners", label: "Restaurant Partners" },
]

export function MarketingCampaignForm() {
    const { toast } = useToast()

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            campaignName: "",
            description: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        toast({
            title: "Campaign Created",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 code">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="campaignName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Campaign Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Summer Sale 2024" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Campaign Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="email">Email Blast</SelectItem>
                                        <SelectItem value="push">Push Notification</SelectItem>
                                        <SelectItem value="sms">SMS</SelectItem>
                                        <SelectItem value="in_app">In-App Banner</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    The channel used for this campaign.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="audience"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Target Audience</FormLabel>
                                <Combobox
                                    options={audienceOptions}
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Select audience..."
                                />
                                <FormDescription>
                                    Who should receive this campaign?
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dateRange"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Duration</FormLabel>
                                <DateRangePicker
                                    date={field.value}
                                    onDateChange={field.onChange}
                                />
                                <FormDescription>
                                    When should this campaign run?
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Campaign Content</FormLabel>
                            <FormControl>
                                <RichTextEditor
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Write your campaign message details here..."
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="assets"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Creative Assets</FormLabel>
                            <FormControl>
                                <FileUploader
                                    value={field.value}
                                    onChange={field.onChange}
                                    accept="image/*,application/pdf"
                                />
                            </FormControl>
                            <FormDescription>
                                Upload banner images or PDF briefs.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Create Campaign</Button>
            </form>
        </Form>
    )
}
