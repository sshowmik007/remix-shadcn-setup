import type { MetaFunction } from "@remix-run/node";


import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import { DashboardLayout } from "~/components/dashboard/dashboard-layout";
import { StatCard } from "~/components/dashboard/stat-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to the dashboard" },
  ];
};

export default function Index() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      
        <StatCard
          title="Total Users"
          value="1,234"
          icon={<Users className="h-6 w-6" />}
          description="+12% from last month"
        />
        <StatCard
          title="Revenue"
          value="$45,231"
          icon={<DollarSign className="h-6 w-6" />}
          description="+8% from last month"
        />
        <StatCard
          title="Orders"
          value="456"
          icon={<ShoppingCart className="h-6 w-6" />}
          description="+23% from last month"
        />
        <StatCard
          title="Growth"
          value="+15%"
          icon={<TrendingUp className="h-6 w-6" />}
          description="Compared to last year"
        />
      </div>
    </DashboardLayout>
  );
}