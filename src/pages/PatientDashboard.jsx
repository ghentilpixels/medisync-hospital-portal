import React from "react";
import { Card, Button, Badge } from "../components/UI";
import { useAuth } from "../context/AuthContext";
import {
  Calendar,
  Clock,
  FileText,
  Search,
  Video,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AppointmentStatus } from "../types";

export const PatientDashboard = () => {
  const { user } = useAuth();

  const upcomingAppointments = [
    {
      id: "1",
      doctorName: "Dr. Emily Smith",
      specialty: "Cardiologist",
      date: "2024-03-25",
      time: "10:00 AM",
      status: AppointmentStatus.CONFIRMED,
      type: "IN_PERSON",
    },
    {
      id: "2",
      doctorName: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "2024-03-28",
      time: "02:30 PM",
      status: AppointmentStatus.PENDING,
      type: "VIDEO",
    },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">
          Welcome back, {user?.name}
        </h1>
        <p className="text-slate-500">
          Here's what's happening with your health today.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-emerald-600 text-white border-none">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-emerald-100 text-sm font-medium">
                Need a consultation?
              </p>
              <h3 className="text-xl font-bold mt-1">Book an Appointment</h3>
            </div>
            <div className="p-2 bg-white/20 rounded-lg">
              <Calendar size={24} />
            </div>
          </div>
          <Link to="/doctors">
            <Button
              variant="secondary"
              className="mt-6 w-full bg-white text-emerald-600 hover:bg-emerald-50 border-none"
            >
              Find a Doctor <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">
                Health Records
              </p>
              <h3 className="text-xl font-bold mt-1 text-slate-900">
                Medical History
              </h3>
            </div>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <FileText size={24} />
            </div>
          </div>
          <Link to="/patient/records">
            <Button variant="outline" className="mt-6 w-full">
              View Records
            </Button>
          </Link>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Virtual Care</p>
              <h3 className="text-xl font-bold mt-1 text-slate-900">
                Video Consult
              </h3>
            </div>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Video size={24} />
            </div>
          </div>
          <Link to="/video-consult">
            <Button variant="outline" className="mt-6 w-full">
              Join Waiting Room
            </Button>
          </Link>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Upcoming Appointments
            </h2>
            <Link
              to="/patient/appointments"
              className="text-sm text-emerald-600 hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="space-y-4">
            {upcomingAppointments.map((apt) => (
              <Card
                key={apt.id}
                className="p-4 hover:border-emerald-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <UserIcon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {apt.doctorName}
                      </h4>
                      <p className="text-sm text-slate-500">{apt.specialty}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-slate-600 mb-1">
                      <Calendar size={14} className="mr-1" /> {apt.date}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock size={14} className="mr-1" /> {apt.time}
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge
                      variant={
                        apt.status === AppointmentStatus.CONFIRMED
                          ? "success"
                          : "warning"
                      }
                    >
                      {apt.status}
                    </Badge>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                      {apt.type.replace("_", " ")}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-bold text-slate-900">Quick Actions</h2>
          <Card className="p-4 space-y-3">
            <button className="w-full flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors text-slate-700">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-md mr-3">
                <Search size={18} />
              </div>
              <span className="text-sm font-medium">
                Search for Specialists
              </span>
            </button>
            <button className="w-full flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors text-slate-700">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-md mr-3">
                <FileText size={18} />
              </div>
              <span className="text-sm font-medium">
                Request Prescription Refill
              </span>
            </button>
            <button className="w-full flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors text-slate-700">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-md mr-3">
                <Clock size={18} />
              </div>
              <span className="text-sm font-medium">
                Reschedule Appointment
              </span>
            </button>
          </Card>

          <Card className="p-4 bg-slate-900 text-white">
            <h4 className="font-bold mb-2">Health Tip of the Day</h4>
            <p className="text-sm text-slate-400">
              Drinking at least 8 glasses of water a day helps maintain your
              energy levels and keeps your skin healthy.
            </p>
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
