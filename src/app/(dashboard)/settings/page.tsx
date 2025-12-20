"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GeneralSettings } from "@/components/settings/GeneralSettings"
import { RolesPermissions } from "@/components/settings/RolesPermissions"
import { NotificationSettings } from "@/components/settings/NotificationSettings"
import { IntegrationSettings } from "@/components/settings/IntegrationSettings"
import { SystemLogs } from "@/components/settings/SystemLogs"

export default function SettingsPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
            </div>
            <Tabs defaultValue="general" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="integrations">Integrations</TabsTrigger>
                    <TabsTrigger value="logs">System Logs</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="space-y-4">
                    <GeneralSettings />
                </TabsContent>
                <TabsContent value="roles" className="space-y-4">
                    <RolesPermissions />
                </TabsContent>
                <TabsContent value="notifications" className="space-y-4">
                    <NotificationSettings />
                </TabsContent>
                <TabsContent value="integrations" className="space-y-4">
                    <IntegrationSettings />
                </TabsContent>
                <TabsContent value="logs" className="space-y-4">
                    <SystemLogs />
                </TabsContent>
            </Tabs>
        </div>
    )
}
