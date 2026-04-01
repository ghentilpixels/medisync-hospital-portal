import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Card, Button, Input } from "../components/UI";
import { ArrowLeft } from "lucide-react";
import { getDoctorById, updateDoctor } from "../data/doctors";

export const AdminEditDoctor = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = getDoctorById(doctorId);

  const [formData, setFormData] = useState(
    doctor || {
      name: "",
      specialty: "",
      email: "",
      phone: "",
      status: "Active",
      unit: "",
    },
  );

  if (!doctor) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Doctor not found</h1>
        <p className="text-slate-500 mt-2">
          We could not find the requested doctor profile.
        </p>
        <Link to="/admin/doctors">
          <Button className="mt-6">Back to Doctors</Button>
        </Link>
      </div>
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDoctor(doctorId, formData);
    navigate(`/admin/doctors/${doctorId}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Link
            to={`/admin/doctors/${doctorId}`}
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
          >
            <ArrowLeft size={18} /> Back to Profile
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 mt-4">
            Edit Doctor
          </h1>
          <p className="text-slate-500">
            Update the doctor profile details and save any changes.
          </p>
        </div>
      </div>

      <Card className="p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Full Name"
              name="name"
              placeholder="Dr. Alex Carter"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              label="Specialty"
              name="specialty"
              placeholder="Cardiology"
              value={formData.specialty}
              onChange={handleChange}
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="alex.carter@medisync.com"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              name="phone"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Status"
              name="status"
              placeholder="Active"
              value={formData.status}
              onChange={handleChange}
            />
            <Input
              label="Assigned Unit"
              name="unit"
              placeholder="Cardiac Care"
              value={formData.unit}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit">Save Changes</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(`/admin/doctors/${doctorId}`)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
