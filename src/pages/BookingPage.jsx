import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Badge } from "../components/UI";
import {
  Calendar as CalendarIcon,
  Clock,
  ChevronLeft,
  Info,
  Video,
  MapPin,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { formatCurrency } from "../utils";

export const BookingPage = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("2024-03-25");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [consultationType, setConsultationType] = useState("IN_PERSON");
  const [reason, setReason] = useState("");

  // Mock doctor data
  const doctor = {
    id: doctorId,
    name: "Dr. Emily Smith",
    specialty: "Cardiology",
    fee: 150,
    location: "Main Hospital, Wing A",
  };

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ];

  const handleBook = async () => {
    if (!selectedSlot) return toast.error("Please select a time slot");

    toast.loading("Processing booking...");
    await new Promise((r) => setTimeout(r, 1500));
    toast.dismiss();

    toast.success("Appointment booked successfully!");
    navigate("/patient/appointments");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-slate-500 hover:text-emerald-600 transition-colors"
      >
        <ChevronLeft size={20} /> Back to search
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Select Date & Time
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Available Dates
                </label>
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {[
                    "2024-03-25",
                    "2024-03-26",
                    "2024-03-27",
                    "2024-03-28",
                    "2024-03-29",
                  ].map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`flex flex-col items-center justify-center min-w-[80px] p-3 rounded-xl border transition-all ${
                        selectedDate === date
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "bg-white border-slate-200 text-slate-600 hover:border-emerald-500"
                      }`}
                    >
                      <span className="text-xs uppercase font-bold opacity-70">
                        {new Date(date).toLocaleDateString("en-US", {
                          weekday: "short",
                        })}
                      </span>
                      <span className="text-lg font-bold">
                        {new Date(date).getDate()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                        selectedSlot === slot
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "bg-white border-slate-200 text-slate-600 hover:border-emerald-500"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Consultation Details
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Consultation Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setConsultationType("IN_PERSON")}
                    className={`flex items-center justify-center p-4 rounded-xl border transition-all ${
                      consultationType === "IN_PERSON"
                        ? "bg-emerald-50 border-emerald-600 text-emerald-700"
                        : "bg-white border-slate-200 text-slate-600 hover:border-emerald-500"
                    }`}
                  >
                    <MapPin size={20} className="mr-2" />
                    <div className="text-left">
                      <p className="font-bold">In-Person</p>
                      <p className="text-xs opacity-70">At the hospital</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setConsultationType("VIDEO")}
                    className={`flex items-center justify-center p-4 rounded-xl border transition-all ${
                      consultationType === "VIDEO"
                        ? "bg-emerald-50 border-emerald-600 text-emerald-700"
                        : "bg-white border-slate-200 text-slate-600 hover:border-emerald-500"
                    }`}
                  >
                    <Video size={20} className="mr-2" />
                    <div className="text-left">
                      <p className="font-bold">Video Call</p>
                      <p className="text-xs opacity-70">Online consultation</p>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Reason for Visit (Optional)
                </label>
                <textarea
                  className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none min-h-[100px]"
                  placeholder="Briefly describe your symptoms or reason for booking..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 sticky top-24">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Booking Summary
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <UserIcon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {doctor.name}
                  </p>
                  <p className="text-xs text-emerald-600 font-medium">
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center text-sm text-slate-600">
                  <CalendarIcon size={16} className="mr-2 text-slate-400" />
                  {new Date(selectedDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Clock size={16} className="mr-2 text-slate-400" />
                  {selectedSlot || "Not selected"}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  {consultationType === "IN_PERSON" ? (
                    <MapPin size={16} className="mr-2 text-slate-400" />
                  ) : (
                    <Video size={16} className="mr-2 text-slate-400" />
                  )}
                  {consultationType === "IN_PERSON"
                    ? "In-Person Visit"
                    : "Video Consultation"}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-sm text-slate-500">Consultation Fee</span>
                <span className="text-lg font-bold text-slate-900">
                  {formatCurrency(doctor.fee)}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg flex items-start mb-6">
              <Info
                size={16}
                className="text-blue-600 mr-2 mt-0.5 flex-shrink-0"
              />
              <p className="text-[11px] text-blue-700">
                You can reschedule or cancel this appointment up to 24 hours
                before the scheduled time.
              </p>
            </div>

            <Button className="w-full" size="lg" onClick={handleBook}>
              Confirm Booking
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
