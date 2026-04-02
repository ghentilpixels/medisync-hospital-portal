import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Layout } from "./components/Layout";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { PatientDashboard } from "./pages/PatientDashboard";
import { PatientAppointments } from "./pages/PatientAppointments";
import { PatientRecords } from "./pages/PatientRecords";
import { DoctorDashboard } from "./pages/DoctorDashboard";
import { DoctorSchedule } from "./pages/DoctorSchedule";
import { DoctorPatients } from "./pages/DoctorPatients";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminDoctors } from "./pages/AdminDoctors";
import { AdminAddDoctor } from "./pages/AdminAddDoctor";
import { AdminDoctorDetails } from "./pages/AdminDoctorDetails";
import { AdminEditDoctor } from "./pages/AdminEditDoctor";
import { AdminStats } from "./pages/AdminStats";
import { AdminSettings } from "./pages/AdminSettings";
import { DoctorSearch } from "./pages/DoctorSearch";
import { BookingPage } from "./pages/BookingPage";
import { HomePage } from "./components/HomePage";
import { UnauthorizedPage } from "./pages/UnauthorizedPage";
import { VideoConsultPage } from "./pages/VideoConsultPage";
import { UserRole } from "./types";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          {/* Protected Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            {/* Patient Routes */}
            <Route
              path="/patient"
              element={
                <ProtectedRoute allowedRoles={[UserRole.PATIENT]}>
                  <PatientDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/patient/appointments"
              element={
                <ProtectedRoute allowedRoles={[UserRole.PATIENT]}>
                  <PatientAppointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/patient/records"
              element={
                <ProtectedRoute allowedRoles={[UserRole.PATIENT]}>
                  <PatientRecords />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctors"
              element={
                <ProtectedRoute allowedRoles={[UserRole.PATIENT]}>
                  <DoctorSearch />
                </ProtectedRoute>
              }
            />
            <Route
              path="/book/:doctorId"
              element={
                <ProtectedRoute allowedRoles={[UserRole.PATIENT]}>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/video-consult"
              element={
                <ProtectedRoute
                  allowedRoles={[UserRole.PATIENT, UserRole.DOCTOR]}
                >
                  <VideoConsultPage />
                </ProtectedRoute>
              }
            />

            {/* Doctor Routes */}
            <Route
              path="/doctor"
              element={
                <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
                  <DoctorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/schedule"
              element={
                <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
                  <DoctorSchedule />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/patients"
              element={
                <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
                  <DoctorPatients />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/doctors/new"
              element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                  <AdminAddDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/doctors/:doctorId"
              element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                  <AdminDoctorDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/doctors/:doctorId/edit"
              element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                  <AdminEditDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                  <AdminDoctors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/stats"
              element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                  <AdminStats />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                  <AdminSettings />
                </ProtectedRoute>
              }
            />

            {/* Receptionist Routes */}
            <Route
              path="/receptionist"
              element={
                <ProtectedRoute allowedRoles={[UserRole.RECEPTIONIST]}>
                  <div className="p-8 text-center">
                    <h1 className="text-2xl font-bold">
                      Receptionist Dashboard
                    </h1>
                    <p className="text-slate-500 mt-2">Coming soon...</p>
                  </div>
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
