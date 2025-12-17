'use client';

import { FileText, Download, Check, X, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DocumentApproval() {
    const documents = [
        { id: 1, name: 'FSSAI License', type: 'PDF', size: '2.5 MB', status: 'Verified', uploadedAt: '12 Dec, 2024' },
        { id: 2, name: 'GST Certificate', type: 'PDF', size: '1.2 MB', status: 'Pending', uploadedAt: '15 Dec, 2024' },
        { id: 3, name: 'PAN Card', type: 'Image', size: '3.1 MB', status: 'Pending', uploadedAt: '15 Dec, 2024' },
    ];

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Legal Documents</h3>
            <div className="grid gap-4">
                {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">{doc.name}</h4>
                                <p className="text-sm text-gray-500">{doc.type} • {doc.size} • Uploaded {doc.uploadedAt}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Badge variant={doc.status === 'Verified' ? 'default' : 'secondary'} className={
                                doc.status === 'Verified' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                            }>
                                {doc.status}
                            </Badge>

                            <div className="flex items-center gap-2 border-l pl-4 border-gray-200">
                                <Button variant="ghost" size="icon">
                                    <Eye className="w-4 h-4 text-gray-500" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Download className="w-4 h-4 text-gray-500" />
                                </Button>
                                {doc.status === 'Pending' && (
                                    <>
                                        <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                                            <X className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                                            <Check className="w-4 h-4" />
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
