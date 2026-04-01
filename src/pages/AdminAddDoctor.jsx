import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Input } from "../components/UI";
import { ArrowLeft, UserPlus, Mail, Phone, Stethoscope } from "lucide-react";
import { addDoctor } from "../data/doctors";

export const AdminAddDoctor = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    name: "",
    specialty: "",
    email: "",
    phone: "",
    status: "Active",
    unit: "General Medicine",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDoctor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const savedDoctor = addDoctor(doctor);
    navigate(`/admin/doctors/${savedDoctor.id}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Link
            to="/admin/doctors"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
          >
            <ArrowLeft size={18} /> Back to Doctors
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 mt-4">Add Doctor</h1>
          <p className="text-slate-500">
            Create a new doctor profile for the hospital staff directory.
          </p>
        </div>
        <Button variant="secondary">
          <UserPlus size={18} className="mr-2" /> New Profile
        </Button>
      </div>

      <Card className="p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Full Name"
              name="name"
              placeholder="Dr. Alex Carter"
              value={doctor.name}
              onChange={handleChange}
            />
            <Input
              label="Specialty"
              name="specialty"
              placeholder="Cardiology"
              value={doctor.specialty}
              onChange={handleChange}
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="alex.carter@medisync.com"
              value={doctor.email}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              name="phone"
              placeholder="(555) 123-4567"
              value={doctor.phone}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Status"
              name="status"
              placeholder="Active"
              value={doctor.status}
              onChange={handleChange}
            />
            <Input
              label="Assigned Unit"
              name="unit"
              placeholder="General Medicine"
              value={doctor.unit}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit">Save Doctor</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/doctors")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
