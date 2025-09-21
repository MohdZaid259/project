"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const monthlyVisitors = [
  { month: "Jan", visitors: 85000 },
  { month: "Feb", visitors: 92000 },
  { month: "Mar", visitors: 108000 },
  { month: "Apr", visitors: 125000 },
  { month: "May", visitors: 140000 },
  { month: "Jun", visitors: 95000 },
  { month: "Jul", visitors: 88000 },
  { month: "Aug", visitors: 102000 },
  { month: "Sep", visitors: 118000 },
  { month: "Oct", visitors: 135000 },
  { month: "Nov", visitors: 148000 },
  { month: "Dec", visitors: 162000 },
]

const topDestinations = [
  { name: "Ranchi", visitors: 180000 },
  { name: "Netarhat", visitors: 280000 },
  { name: "Betla", visitors: 120000 },
  { name: "Deoghar", visitors: 195000 },
  { name: "Patratu", visitors: 165000 },
]

const touristTypes = [
  { name: "Domestic", value: 85, color: "#10b981" }, // emerald-500
  { name: "International", value: 15, color: "#6ee7b7" }, // emerald-300
]

const seasonalTrends = [
  { season: "Jan", summer: 45000, monsoon: 25000, winter: 85000 },
  { season: "Feb", summer: 48000, monsoon: 22000, winter: 92000 },
  { season: "Mar", summer: 65000, monsoon: 18000, winter: 108000 },
  { season: "Apr", summer: 85000, monsoon: 15000, winter: 125000 },
  { season: "May", summer: 105000, monsoon: 12000, winter: 140000 },
  { season: "Jun", summer: 45000, monsoon: 35000, winter: 95000 },
  { season: "Jul", summer: 35000, monsoon: 45000, winter: 88000 },
  { season: "Aug", summer: 38000, monsoon: 42000, winter: 102000 },
  { season: "Sep", summer: 55000, monsoon: 28000, winter: 118000 },
  { season: "Oct", summer: 75000, monsoon: 20000, winter: 135000 },
  { season: "Nov", summer: 68000, monsoon: 15000, winter: 148000 },
  { season: "Dec", summer: 52000, monsoon: 12000, winter: 162000 },
]

export function ChartsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Monthly Visitors Growth */}
      <Card className="col-span-2">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Monthly Visitors Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyVisitors}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-muted-foreground" fontSize={12} />
              <YAxis className="text-muted-foreground" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value) => [new Intl.NumberFormat().format(value as number), "Visitors"]}
              />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Destinations */}
      {/* Top Destinations */}
<Card>
  <CardHeader className="pb-3">
    <CardTitle className="text-lg">Top 5 Destinations</CardTitle>
  </CardHeader>
  <CardContent>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={topDestinations} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          type="number"
          className="text-muted-foreground"
          fontSize={12}
          tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
        />
        <YAxis
          dataKey="name"
          type="category"
          className="text-muted-foreground"
          fontSize={12}
          width={80} // widened so names fit
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
          }}
          formatter={(value) => [new Intl.NumberFormat().format(value as number), "Visitors"]}
        />
        <Bar dataKey="visitors" fill="#10b981" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </CardContent>
</Card>


      {/* Tourist Types Distribution */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Tourist Types Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={touristTypes}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
                labelLine={false}
              >
                {touristTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value) => [`${value}%`, "Percentage"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Seasonal Tourism Trends */}
      <Card className="col-span-2">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Seasonal Tourism Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={seasonalTrends}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="season" className="text-muted-foreground" fontSize={12} />
              <YAxis
                className="text-muted-foreground"
                fontSize={12}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value) => [new Intl.NumberFormat().format(value as number), "Visitors"]}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="winter"
                stackId="1"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.8}
                name="Winter"
              />
              <Area
                type="monotone"
                dataKey="summer"
                stackId="1"
                stroke="#34d399"
                fill="#34d399"
                fillOpacity={0.7}
                name="Summer"
              />
              <Area
                type="monotone"
                dataKey="monsoon"
                stackId="1"
                stroke="#6ee7b7"
                fill="#6ee7b7"
                fillOpacity={0.6}
                name="Monsoon"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
