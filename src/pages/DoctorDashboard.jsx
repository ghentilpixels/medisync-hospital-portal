import React from "react";
import { Card, Button, Badge } from "../components/UI";
import { useAuth } from "../context/AuthContext";
import {
  Users,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { AppointmentStatus } from "../types";

export const DoctorDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      label: "Total Patients",
      value: "1,284",
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Appointments Today",
      value: "12",
      icon: Calendar,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Pending Requests",
      value: "5",
      icon: Clock,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  const todayAppointments = [
    {
      id: "1",
      patientName: "Alice Freeman",
      time: "09:00 AM",
      type: "IN_PERSON",
      status: AppointmentStatus.CONFIRMED,
      reason: "Regular checkup",
    },
    {
      id: "2",
      patientName: "Bob Vance",
      time: "10:30 AM",
      type: "VIDEO",
      status: AppointmentStatus.CONFIRMED,
      reason: "Follow up on medication",
    },
    {
      id: "3",
      patientName: "Charlie Day",
      time: "11:45 AM",
      type: "IN_PERSON",
      status: AppointmentStatus.PENDING,
      reason: "Chest pain",
    },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Doctor's Portal</h1>
        <p className="text-slate-500">
          Good morning, {user?.name}. You have 12 appointments today.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {stat.value}
                </h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Today's Schedule
            </h2>
            <Button variant="outline" size="sm">
              View Full Calendar
            </Button>
          </div>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Patient
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {todayAppointments.map((apt) => (
                    <tr
                      key={apt.id}
                      className="hover:bg-slate-50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-slate-900">
                          {apt.time}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mr-3">
                            <UserIcon size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">
                              {apt.patientName}
                            </p>
                            <p className="text-xs text-slate-500">
                              {apt.reason}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="neutral">
                          {apt.type.replace("_", " ")}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={
                            apt.status === AppointmentStatus.CONFIRMED
                              ? "success"
                              : "warning"
                          }
                        >
                          {apt.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                            title="Confirm"
                          >
                            <CheckCircle size={18} />
                          </button>
                          <button
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            title="Cancel"
                          >
                            <XCircle size={18} />
                          </button>
                          <button
                            className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg"
                            title="View Details"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-bold text-slate-900">Recent Messages</h2>
          <Card className="p-4 space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                  <UserIcon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      Patient #{i}042
                    </h4>
                    <span className="text-[10px] text-slate-400">12m ago</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">
                    I have a question about my prescription...
                  </p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full text-xs">
              View All Messages
            </Button>
          </Card>

          <Card className="p-6 bg-emerald-600 text-white">
            <div className="flex items-center mb-4">
              <MessageSquare size={20} className="mr-2" />
              <h4 className="font-bold">Consultation Notes</h4>
            </div>
            <p className="text-sm text-emerald-100 mb-4">
              Quickly record notes during your consultations. They'll be
              automatically synced to patient records.
            </p>
            <Button
              variant="secondary"
              className="w-full bg-white text-emerald-600 hover:bg-emerald-50 border-none"
            >
              Open Notepad
            </Button>
          </Card>
        </div>
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
