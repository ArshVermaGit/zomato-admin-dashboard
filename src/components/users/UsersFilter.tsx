'use client';

import { Filter, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

interface UsersFilterProps {
    onFilterChange: (filters: Record<string, unknown>) => void;
}

export function UsersFilter({ onFilterChange: _onFilterChange }: UsersFilterProps) {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <Button variant="outline" onClick={() => setIsOpen(true)}>
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
            </Button>
        );
    }

    return (
        <div className="absolute z-10 top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl p-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Filter Users</h4>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="text-xs font-medium text-gray-700 uppercase mb-1 block">Account Status</label>
                    <select className="w-full text-sm border-gray-300 rounded-md">
                        <option>All Statuses</option>
                        <option>Active</option>
                        <option>Pending</option>
                        <option>Blocked</option>
                    </select>
                </div>

                <div>
                    <label className="text-xs font-medium text-gray-700 uppercase mb-1 block">Registration Date</label>
                    <Input type="date" className="text-sm" />
                </div>

                <div>
                    <label className="text-xs font-medium text-gray-700 uppercase mb-1 block">Region</label>
                    <select className="w-full text-sm border-gray-300 rounded-md">
                        <option>All Regions</option>
                        <option>North Delhi</option>
                        <option>South Mumbai</option>
                        <option>Bangalore Central</option>
                    </select>
                </div>

                <div className="pt-2 flex gap-2">
                    <Button variant="secondary" className="flex-1" size="sm">Reset</Button>
                    <Button className="flex-1 bg-red-600 hover:bg-red-700" size="sm">Apply</Button>
                </div>
            </div>
        </div>
    );
}
