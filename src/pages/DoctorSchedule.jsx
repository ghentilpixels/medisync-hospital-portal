import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Badge, Button } from "../components/UI";
import { Calendar, Clock, MapPin, Video, CheckCircle } from "lucide-react";
import { AppointmentStatus } from "../types";

const initialSchedule = [
  {
    id: "1",
    patientName: "Alice Freeman",
    time: "09:00 AM",
    date: "2024-04-01",
    type: "IN_PERSON",
    status: AppointmentStatus.CONFIRMED,
    location: "Clinic Room 2",
  },
  {
    id: "2",
    patientName: "Bob Vance",
    time: "10:30 AM",
    date: "2024-04-01",
    type: "VIDEO",
    status: AppointmentStatus.PENDING,
    location: "Online",
  },
  {
    id: "3",
    patientName: "Charlie Day",
    time: "11:45 AM",
    date: "2024-04-01",
    type: "IN_PERSON",
    status: AppointmentStatus.COMPLETED,
    location: "Clinic Room 1",
  },
];

export const DoctorSchedule = () => {
  const [schedule, setSchedule] = useState(initialSchedule);

  const getBadgeVariant = (status) => {
    if (status === AppointmentStatus.CONFIRMED) return "success";
    if (status === AppointmentStatus.PENDING) return "warning";
    if (status === AppointmentStatus.COMPLETED) return "info";
    return "error";
  };

  const handleManage = (item) => {
    if (item.status === AppointmentStatus.PENDING) {
      const approve = window.confirm(
        `Approve appointment with ${item.patientName}?`,
      );
      if (!approve) return;

      setSchedule((prev) =>
        prev.map((appt) =>
          appt.id === item.id
            ? { ...appt, status: AppointmentStatus.CONFIRMED }
            : appt,
        ),
      );
      window.alert("Appointment approved.");
      return;
    }

    window.alert(
      `${item.patientName} appointment is ${item.status.toLowerCase()}.`,
    );
  };

  const handleDetails = (item) => {
    window.alert(
      `Patient: ${item.patientName}\nDate: ${item.date}\nTime: ${item.time}\nType: ${item.type.replace("_", " ")}\nLocation: ${item.location}\nStatus: ${item.status}`,
    );
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Schedule</h1>
          <p className="text-slate-500">
            Review your upcoming appointments and manage your calendar.
          </p>
        </div>
        <Link to="/doctor">
          <Button variant="outline" size="sm">
            Back to Dashboard
          </Button>
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {schedule.map((item) => (
          <Card key={item.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-slate-500 uppercase tracking-wide">
                    {item.date}
                  </span>
                  <Badge variant={getBadgeVariant(item.status)}>
                    {item.status}
                  </Badge>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {item.patientName}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mt-3">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {item.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {item.type.replace("_", " ")}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {item.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleManage(item)}
                >
                  <CheckCircle size={16} className="mr-2" /> Manage
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDetails(item)}
                >
                  Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
