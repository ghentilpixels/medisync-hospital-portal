import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Badge, Button } from "../components/UI";
import { ArrowLeft, Clock, Users, Stethoscope } from "lucide-react";
import { deleteDoctor, getDoctorById } from "../data/doctors";

export const AdminDoctorDetails = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  const doctor = getDoctorById(doctorId);

  const handleDelete = () => {
    if (
      window.confirm(
        `Delete ${doctor.name} from doctor management? This cannot be undone.`,
      )
    ) {
      deleteDoctor(doctorId);
      navigate("/admin/doctors");
    }
  };

  if (!doctor) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Doctor not found</h1>
        <p className="text-slate-500 mt-2">
          The requested doctor profile could not be located.
        </p>
        <Link to="/admin/doctors">
          <Button className="mt-6">Back to Doctors</Button>
        </Link>
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold text-slate-900 mt-4">
            {doctor.name}
          </h1>
          <p className="text-slate-500">Doctor profile and schedule details.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge variant={doctor.status === "Active" ? "success" : "warning"}>
            {doctor.status}
          </Badge>
          <Link to={`/admin/doctors/${doctor.id}/edit`}>
            <Button variant="outline">Edit Profile</Button>
          </Link>
          <Button variant="danger" onClick={handleDelete}>
            Delete Doctor
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Specialty
              </h2>
              <p className="text-slate-600 mt-2">{doctor.specialty}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
              <p className="text-slate-600 mt-2">{doctor.email}</p>
              <p className="text-slate-600">{doctor.phone}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Assigned Unit
              </h2>
              <p className="text-slate-600 mt-2">{doctor.unit}</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Users size={18} className="text-emerald-600" />
              <span>{doctor.patients} patients assigned</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Clock size={18} className="text-emerald-600" />
              <span>{doctor.availability}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope size={24} className="text-slate-700" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Experience
                </h3>
              </div>
              <p className="text-slate-600">{doctor.experience}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Today's Notes
              </h3>
              <p className="text-sm text-slate-600 leading-7">
                Review and confirm the doctor’s assigned appointments before the
                day starts.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
