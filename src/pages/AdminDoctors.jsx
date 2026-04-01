import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Badge } from "../components/UI";
import { useAuth } from "../context/AuthContext";
import { Users, UserPlus } from "lucide-react";
import { doctors } from "../data/doctors";

export const AdminDoctors = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Doctor Management
          </h1>
          <p className="text-slate-500">
            Managed by {user?.name || "Hospital Admin"}, review and update
            doctor profiles.
          </p>
        </div>
        <Link to="/admin/doctors/new">
          <Button variant="secondary">
            <UserPlus size={18} className="mr-2" /> Add Doctor
          </Button>
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {doctor.name}
                </h2>
                <p className="text-sm text-slate-500">{doctor.specialty}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant={doctor.status === "Active" ? "success" : "warning"}
                >
                  {doctor.status}
                </Badge>
                <Link to={`/admin/doctors/${doctor.id}`}>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <Users size={16} className="text-emerald-600" />
              <span>{doctor.patients} patients assigned</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
