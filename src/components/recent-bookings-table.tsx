import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const recentBookings = [
  {
    id: "BK001",
    tourist: "Rajesh Kumar",
    destination: "Netarhat Hill Station",
    date: "2024-01-15",
    amount: "₹12,500",
    status: "confirmed",
  },
  {
    id: "BK002",
    tourist: "Priya Sharma",
    destination: "Betla National Park",
    date: "2024-01-14",
    amount: "₹8,750",
    status: "pending",
  },
  {
    id: "BK003",
    tourist: "Amit Singh",
    destination: "Ranchi City Tour",
    date: "2024-01-14",
    amount: "₹6,200",
    status: "confirmed",
  },
  {
    id: "BK004",
    tourist: "Sunita Devi",
    destination: "Deoghar Temple Circuit",
    date: "2024-01-13",
    amount: "₹9,800",
    status: "confirmed",
  },
]

export function RecentBookingsTable() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Recent Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-medium text-muted-foreground text-sm">Booking ID</th>
                <th className="text-left py-2 px-3 font-medium text-muted-foreground text-sm">Tourist Name</th>
                <th className="text-left py-2 px-3 font-medium text-muted-foreground text-sm">Destination</th>
                <th className="text-left py-2 px-3 font-medium text-muted-foreground text-sm">Date</th>
                <th className="text-left py-2 px-3 font-medium text-muted-foreground text-sm">Amount</th>
                <th className="text-left py-2 px-3 font-medium text-muted-foreground text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-2 px-3 font-mono text-sm">{booking.id}</td>
                  <td className="py-2 px-3 font-medium text-sm">{booking.tourist}</td>
                  <td className="py-2 px-3 text-muted-foreground text-sm">{booking.destination}</td>
                  <td className="py-2 px-3 text-muted-foreground text-sm">{booking.date}</td>
                  <td className="py-2 px-3 font-semibold text-sm">{booking.amount}</td>
                  <td className="py-2 px-3">
                    <Badge
                      variant={
                        booking.status === "confirmed"
                          ? "default"
                          : booking.status === "pending"
                            ? "secondary"
                            : "destructive"
                      }
                      className={`text-xs ${
                        booking.status === "confirmed"
                          ? "bg-emerald-400 text-secondary-foreground"
                          : booking.status === "pending"
                            ? "bg-muted text-muted-foreground"
                            : "bg-destructive text-destructive-foreground"
                      }`}
                    >
                      {booking.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
