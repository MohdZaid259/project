import { DashboardLayout } from "./dashboard-layout"
import { StatsCards } from "./stats-cards"
import { ChartsSection } from "./charts-section"
import { RecentBookingsTable } from "./recent-bookings-table"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-balance">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome to Jharkhand Tourism Analytics</p>
          </div>
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Export Report
          </button>
        </div>

        <StatsCards />
        <ChartsSection />
        <RecentBookingsTable />
      </div>
    </DashboardLayout>
  )
}
