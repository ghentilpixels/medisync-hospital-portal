/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const UserRole = {
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
  RECEPTIONIST: 'RECEPTIONIST',
  ADMIN: 'ADMIN',
};

export const AppointmentStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
};

// The interfaces that previously existed here were only for TypeScript
// and are documented below for reference. JavaScript does not enforce
// these shapes at runtime.
//
// User: { id, email, name, role, avatar? }
// Doctor: extends User with specialty, bio, education, experience,
//         rating, consultationFee, availability.
// Appointment: { id, patientId, patientName, doctorId, doctorName,
//                doctorSpecialty, date, timeSlot, status, reason?, notes?,
//                paymentStatus, type }
// MedicalRecord: { id, patientId, date, diagnosis, treatment, doctorName, attachments? }
