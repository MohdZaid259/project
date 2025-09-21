import { TrendingUp, Users, MapPin, IndianRupee } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

type ChangeType = "positive" | "negative" | "neutral"

const stats: {
  title: string
  value: string
  change: string
  changeType: ChangeType
  icon: React.ElementType
  description: string
}[] = [
  {
    title: "Total Visitors",
    value: "1.2M+",
    change: "+12.5%",
    changeType: "positive",
    icon: Users,
    description: "from last year",
  },
  {
    title: "Ongoing Bookings",
    value: "18,450",
    change: "+8.2%",
    changeType: "positive",
    icon: TrendingUp,
    description: "active bookings",
  },
  {
    title: "Top Destination",
    value: "350K",
    change: "Ranchi/Netarhat",
    changeType: "neutral",
    icon: MapPin,
    description: "visitors this year",
  },
  {
    title: "Tourism Revenue",
    value: "₹120 Cr",
    change: "+15.3%",
    changeType: "positive",
    icon: IndianRupee,
    description: "total revenue",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pb-3">
            <div className="text-xl font-bold">{stat.value}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  stat.changeType === "positive"
                    ? "bg-secondary/20 text-emerald-500"
                    : stat.changeType === "negative"
                    ? "bg-destructive/20 text-destructive"
                    : "bg-muted text-emerald-500"
                }`}
              >
                {stat.change}
              </span>
              <span>{stat.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
