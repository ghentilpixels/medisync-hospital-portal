import React from "react";
import { Card, Badge, Button } from "../components/UI";
import { Calendar, Clock, MapPin, Video, MoreVertical } from "lucide-react";
import { AppointmentStatus } from "../types";

export const PatientAppointments = () => {
  const appointments = [
    {
      id: "1",
      doctorName: "Dr. Emily Smith",
      specialty: "Cardiologist",
      date: "2024-03-25",
      time: "10:00 AM",
      status: AppointmentStatus.CONFIRMED,
      type: "IN_PERSON",
      location: "Main Hospital, Wing A",
    },
    {
      id: "2",
      doctorName: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "2024-03-28",
      time: "02:30 PM",
      status: AppointmentStatus.PENDING,
      type: "VIDEO",
      location: "Online",
    },
    {
      id: "3",
      doctorName: "Dr. Sarah Johnson",
      specialty: "Pediatrician",
      date: "2024-02-15",
      time: "11:00 AM",
      status: AppointmentStatus.COMPLETED,
      type: "IN_PERSON",
      location: "Children Wing, Wing C",
    },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">My Appointments</h1>
        <p className="text-slate-500">
          Manage your upcoming and past consultations.
        </p>
      </header>

      <div className="space-y-4">
        {appointments.map((apt) => (
          <Card key={apt.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                  <UserIcon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{apt.doctorName}</h3>
                  <p className="text-sm text-emerald-600 font-medium mb-2">
                    {apt.specialty}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1.5" /> {apt.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1.5" /> {apt.time}
                    </div>
                    <div className="flex items-center">
                      {apt.type === "VIDEO" ? (
                        <Video size={14} className="mr-1.5" />
                      ) : (
                        <MapPin size={14} className="mr-1.5" />
                      )}
                      {apt.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-4 md:pt-0">
                <div className="flex flex-col items-end">
                  <Badge
                    variant={
                      apt.status === AppointmentStatus.CONFIRMED
                        ? "success"
                        : apt.status === AppointmentStatus.PENDING
                          ? "warning"
                          : apt.status === AppointmentStatus.COMPLETED
                            ? "info"
                            : "error"
                    }
                  >
                    {apt.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  {apt.status === AppointmentStatus.PENDING ||
                  apt.status === AppointmentStatus.CONFIRMED ? (
                    <>
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" size="sm">
                      View Summary
                    </Button>
                  )}
                  <button className="p-2 text-slate-400 hover:text-slate-600">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
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
