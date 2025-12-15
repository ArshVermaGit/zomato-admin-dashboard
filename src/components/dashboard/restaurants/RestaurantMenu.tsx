import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";

export function RestaurantMenu() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Menu Items</CardTitle>
                    <CardDescription>Manage current menu items and prices.</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit Menu
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-4">Recommended</h4>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="flex justify-between items-center p-4 border rounded-lg">
                                <div>
                                    <p className="font-semibold">Special Thali</p>
                                    <p className="text-sm text-muted-foreground">Veg thali with 2 sabzi</p>
                                </div>
                                <div className="font-bold">₹250</div>
                            </div>
                            <div className="flex justify-between items-center p-4 border rounded-lg">
                                <div>
                                    <p className="font-semibold">Butter Chicken</p>
                                    <p className="text-sm text-muted-foreground">Half plate</p>
                                </div>
                                <div className="font-bold">₹380</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
