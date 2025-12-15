import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activity = [
    {
        user: "Arsh Verma",
        action: "placed a new order",
        target: "Order #1234",
        time: "2 mins ago",
        avatar: "",
        initials: "AV"
    },
    {
        user: "Burger King",
        action: "updated their menu",
        target: "Whopper Meal",
        time: "15 mins ago",
        avatar: "",
        initials: "BK"
    },
    {
        user: "Delivery Partner 01",
        action: "completed delivery",
        target: "Order #1230",
        time: "1 hour ago",
        avatar: "",
        initials: "DP"
    },
    {
        user: "Support System",
        action: "flagged high traffic",
        target: "Server Load",
        time: "2 hours ago",
        avatar: "",
        initials: "SYS"
    }
];

export function ActivityFeed() {
    return (
        <div className="space-y-8">
            {activity.map((item, index) => (
                <div key={index} className="flex items-center">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={item.avatar} alt="Avatar" />
                        <AvatarFallback>{item.initials}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            <span className="font-semibold">{item.user}</span> {item.action}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {item.target} • {item.time}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
