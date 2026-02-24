import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { PatientDashboard } from './pages/PatientDashboard';
import { PatientAppointments } from './pages/PatientAppointments';
import { PatientRecords } from './pages/PatientRecords';
import { DoctorDashboard } from './pages/DoctorDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { DoctorSearch } from './pages/DoctorSearch';
import { BookingPage } from './pages/BookingPage';
import { UnauthorizedPage } from './pages/UnauthorizedPage';
import { VideoConsultPage } from './pages/VideoConsultPage';
import { UserRole } from './types';

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
            <Route path="/" element={<Navigate to="/login" replace />} />
            
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
                <ProtectedRoute allowedRoles={[UserRole.PATIENT, UserRole.DOCTOR]}>
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

            {/* Admin Routes */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Receptionist Routes */}
            <Route 
              path="/receptionist" 
              element={
                <ProtectedRoute allowedRoles={[UserRole.RECEPTIONIST]}>
                  <div className="p-8 text-center">
                    <h1 className="text-2xl font-bold">Receptionist Dashboard</h1>
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
