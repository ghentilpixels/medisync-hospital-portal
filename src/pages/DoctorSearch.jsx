import React, { useState } from "react";
import { Card, Button, Input, Badge } from "../components/UI";
import { Search, Filter, Star, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils";

export const DoctorSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const specialties = [
    "All",
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "General Medicine",
    "Orthopedics",
  ];

  const doctors = [
    {
      id: "1",
      name: "Dr. Emily Smith",
      specialty: "Cardiology",
      rating: 4.9,
      reviews: 124,
      experience: 12,
      fee: 150,
      availability: "Today",
      location: "Main Hospital, Wing A",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      rating: 4.8,
      reviews: 89,
      experience: 8,
      fee: 120,
      availability: "Tomorrow",
      location: "Clinic Center, Floor 2",
    },
    {
      id: "3",
      name: "Dr. Sarah Johnson",
      specialty: "Pediatrics",
      rating: 5.0,
      reviews: 210,
      experience: 15,
      fee: 100,
      availability: "Mar 26",
      location: "Children Wing, Wing C",
    },
    {
      id: "4",
      name: "Dr. Robert Wilson",
      specialty: "Neurology",
      rating: 4.7,
      reviews: 56,
      experience: 20,
      fee: 200,
      availability: "Mar 27",
      location: "Main Hospital, Wing B",
    },
  ];

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = specialty === "All" || doc.specialty === specialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Find a Specialist
          </h1>
          <p className="text-slate-500">
            Book an appointment with our world-class doctors.
          </p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <Input
            placeholder="Search by doctor name or specialty..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {specialties.map((s) => (
            <button
              key={s}
              onClick={() => setSpecialty(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                specialty === s
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-500"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doc) => (
          <Card key={doc.id} className="flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="h-16 w-16 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                  <UserIcon size={32} />
                </div>
                <div className="flex items-center bg-amber-50 text-amber-700 px-2 py-1 rounded-lg text-xs font-bold">
                  <Star
                    size={14}
                    className="mr-1 fill-amber-500 stroke-amber-500"
                  />
                  {doc.rating}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900">{doc.name}</h3>
              <p className="text-emerald-600 text-sm font-medium mb-4">
                {doc.specialty}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-slate-500">
                  <MapPin size={14} className="mr-2" /> {doc.location}
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar size={14} className="mr-2" /> Next available:{" "}
                  <span className="ml-1 font-medium text-slate-900">
                    {doc.availability}
                  </span>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <Star size={14} className="mr-2" /> {doc.experience} years
                  experience
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Consultation Fee
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    {formatCurrency(doc.fee)}
                  </p>
                </div>
                <Link to={`/book/${doc.id}`}>
                  <Button>Book Now</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 text-slate-400 mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No doctors found</h3>
          <p className="text-slate-500">
            Try adjusting your search or specialty filter.
          </p>
        </div>
      )}
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
