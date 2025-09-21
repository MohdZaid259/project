import type React from "react"
import { Search, Bell, BarChart3, MapPin, Package, TrendingUp, Calendar, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Input } from "../components/ui/input"

const sidebarItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: MapPin, label: "Tourist Attractions" },
  { icon: Package, label: "Travel Packages" },
  { icon: TrendingUp, label: "Analytics" },
  { icon: Calendar, label: "Bookings" },
  { icon: Settings, label: "Settings" },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-screen bg-background overflow-hidden">
      {/* Top Navigation */}
      <header className="border-b border-border bg-card">
        <div className="flex h-14 items-center px-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7 rounded-lg bg-secondary flex items-center justify-center">
                <MapPin className="h-4 w-4 text-secondary-foreground" />
              </div>
              <span className="text-lg font-bold">Jharkhand Tourism</span>
            </div>
          </div>

          <div className="flex-1 flex justify-center px-6">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search destinations, packages..." className="pl-10 bg-muted/50 h-9" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-secondary rounded-full"></span>
            </button>
            <Avatar className="h-7 w-7">
              <AvatarImage src="/admin-avatar.png" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex mt-4 h-[calc(100vh-3.5rem)]">
        {/* Sidebar */}
        <aside className="w-56 border-r border-border bg-card">
          <nav className="p-3 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors text-sm ${
                  item.active
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
