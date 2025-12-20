'use client';

import { X, Mail, Phone, MapPin, Shield, Ban, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserActivityTimeline } from './UserActivityTimeline';

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: string;
    registeredOn: string;
}

interface UserDetailModalProps {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
}

export function UserDetailModal({ user, isOpen, onClose }: UserDetailModalProps) {
    if (!isOpen || !user) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden z-10 flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200 flex items-start justify-between bg-gray-50">
                    <div className="flex gap-4">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl font-bold border-2 border-white shadow-sm">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                            <div className="flex items-center gap-2 mt-1">
                                <Badge variant={user.status === 'Active' ? 'default' : 'secondary'} className={user.status === 'Active' ? 'bg-green-100 text-green-700 hover:bg-green-200' : ''}>
                                    {user.status}
                                </Badge>
                                <span className="text-sm text-gray-500">ID: {user.id}</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <Tabs defaultValue="profile" className="w-full">
                        <TabsList className="mb-6 w-full justify-start border-b rounded-none bg-transparent p-0 h-auto">
                            <TabsTrigger value="profile" className="data-[state=active]:border-b-2 data-[state=active]:border-red-600 rounded-none px-4 py-2 border-b-2 border-transparent">Profile</TabsTrigger>
                            <TabsTrigger value="activity" className="data-[state=active]:border-b-2 data-[state=active]:border-red-600 rounded-none px-4 py-2 border-b-2 border-transparent">Activity Period</TabsTrigger>
                            <TabsTrigger value="documents" className="data-[state=active]:border-b-2 data-[state=active]:border-red-600 rounded-none px-4 py-2 border-b-2 border-transparent">Documents</TabsTrigger>
                        </TabsList>

                        <TabsContent value="profile" className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Email</label>
                                    <p className="flex items-center gap-2 text-gray-900 font-medium">
                                        <Mail className="w-4 h-4 text-gray-400" /> {user.email}
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Phone</label>
                                    <p className="flex items-center gap-2 text-gray-900 font-medium">
                                        <Phone className="w-4 h-4 text-gray-400" /> {user.phone}
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Location</label>
                                    <p className="flex items-center gap-2 text-gray-900 font-medium">
                                        <MapPin className="w-4 h-4 text-gray-400" /> New Delhi, India
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Registered On</label>
                                    <p className="flex items-center gap-2 text-gray-900 font-medium">
                                        <Shield className="w-4 h-4 text-gray-400" /> {user.registeredOn}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                <h4 className="font-semibold text-blue-900 mb-2">Account Notes</h4>
                                <p className="text-sm text-blue-800">
                                    User flagged for high order cancellations last month. Currently clear status.
                                </p>
                            </div>
                        </TabsContent>

                        <TabsContent value="activity">
                            <UserActivityTimeline />
                        </TabsContent>

                        <TabsContent value="documents">
                            <div className="text-center py-8 text-gray-500 border-2 border-dashed rounded-lg">
                                No Key Documents Uploaded
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center rounded-b-xl">
                    <Button variant="ghost" className="text-gray-500 hover:text-gray-700">
                        Reset Password
                    </Button>
                    <div className="flex gap-2">
                        {user.status === 'Blocked' ? (
                            <Button className="bg-green-600 hover:bg-green-700">Unblock User</Button>
                        ) : (
                            <Button variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50 hover:text-orange-700">
                                <Ban className="w-4 h-4 mr-2" /> Block
                            </Button>
                        )}
                        <Button variant="destructive">
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
