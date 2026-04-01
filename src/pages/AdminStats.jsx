import React from "react";
import { Card, Badge } from "../components/UI";
import {
  Activity,
  Clock,
  BarChart3,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

export const AdminStats = () => {
  const metrics = [
    {
      label: "Monthly Admissions",
      value: "1,820",
      icon: Activity,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Average Stay",
      value: "4.3 days",
      icon: Clock,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Bed Occupancy",
      value: "87%",
      icon: BarChart3,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Patient Satisfaction",
      value: "94%",
      icon: HeartPulse,
      color: "bg-pink-50 text-pink-600",
    },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">
          Hospital Statistics
        </h1>
        <p className="text-slate-500">
          Keep track of operational performance and critical hospital health.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${metric.color}`}>
                <metric.icon size={20} />
              </div>
              <Badge variant="info">Live</Badge>
            </div>
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="text-3xl font-bold text-slate-900 mt-3">
              {metric.value}
            </p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Key Insights</h2>
            <p className="text-slate-500">
              Review recent trends and alerts for hospital capacity and care
              quality.
            </p>
          </div>
          <Badge variant="success">Stable</Badge>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>ER wait time</span>
            <span className="font-semibold text-slate-900">28 mins</span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Staff utilization</span>
            <span className="font-semibold text-slate-900">73%</span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Medication stock alerts</span>
            <span className="font-semibold text-slate-900">3 items</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
