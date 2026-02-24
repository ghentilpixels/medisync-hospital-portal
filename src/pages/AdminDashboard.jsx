import React from "react";
import { Card, Button, Badge } from "../components/UI";
import { useAuth } from "../context/AuthContext";
import {
  Users,
  UserPlus,
  Calendar,
  Activity,
  TrendingUp,
  Settings,
  ShieldAlert,
} from "lucide-react";

export const AdminDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      label: "Total Doctors",
      value: "48",
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Active Patients",
      value: "2,492",
      icon: Activity,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Revenue (MTD)",
      value: "$142,500",
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "System Alerts",
      value: "2",
      icon: ShieldAlert,
      color: "bg-red-50 text-red-600",
    },
  ];

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Hospital Administration
          </h1>
          <p className="text-slate-500">
            Overview of hospital operations and staff management.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Settings size={18} className="mr-2" /> Settings
          </Button>
          <Button>
            <UserPlus size={18} className="mr-2" /> Add Staff
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <Badge
                variant={stat.label === "System Alerts" ? "error" : "neutral"}
              >
                {stat.label === "System Alerts" ? "Action Required" : "+12%"}
              </Badge>
            </div>
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {stat.value}
            </h3>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">
              Recent Staff Activity
            </h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mr-3">
                    <UserIcon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Dr. Sarah Jenkins
                    </p>
                    <p className="text-xs text-slate-500">
                      Updated schedule for April
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-400">2h ago</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">
              Hospital Capacity
            </h2>
            <Button variant="ghost" size="sm">
              Details
            </Button>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">General Ward</span>
                <span className="font-bold text-slate-900">85%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className="bg-emerald-500 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">ICU Units</span>
                <span className="font-bold text-slate-900">42%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "42%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">Emergency Room</span>
                <span className="font-bold text-slate-900">92%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const UserIcon = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
