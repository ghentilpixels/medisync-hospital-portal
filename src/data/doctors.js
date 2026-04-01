const STORAGE_KEY = "medisync-doctors";

const initialDoctors = [
  {
    id: "1",
    name: "Dr. Emily Smith",
    specialty: "Cardiology",
    status: "Active",
    email: "emily.smith@medisync.com",
    phone: "+1 (555) 234-5678",
    patients: 312,
    experience: "12 years",
    availability: "Mon - Fri, 9am - 5pm",
    unit: "Cardiac Care",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    status: "On Leave",
    email: "michael.chen@medisync.com",
    phone: "+1 (555) 987-6543",
    patients: 189,
    experience: "8 years",
    availability: "Tue - Thu, 10am - 4pm",
    unit: "Skin & Allergy",
  },
  {
    id: "3",
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrics",
    status: "Active",
    email: "sarah.johnson@medisync.com",
    phone: "+1 (555) 456-7890",
    patients: 240,
    experience: "15 years",
    availability: "Mon - Sat, 8am - 2pm",
    unit: "Pediatric Care",
  },
];

const loadDoctors = () => {
  if (typeof window === "undefined") return initialDoctors;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return initialDoctors;

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : initialDoctors;
  } catch {
    return initialDoctors;
  }
};

const saveDoctors = (doctors) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(doctors));
};

export const getDoctors = () => loadDoctors();

export const getDoctorById = (id) =>
  getDoctors().find((doctor) => doctor.id === id);

export const addDoctor = (doctor) => {
  const existingDoctors = loadDoctors();
  const nextId = String(
    Math.max(0, ...existingDoctors.map((item) => Number(item.id))) + 1,
  );
  const newDoctor = {
    id: nextId,
    patients: 0,
    experience: "1 year",
    availability: "Mon - Fri, 9am - 5pm",
    unit: doctor.unit || "General Medicine",
    ...doctor,
  };
  const updatedDoctors = [...existingDoctors, newDoctor];
  saveDoctors(updatedDoctors);
  return newDoctor;
};

export const updateDoctor = (id, updates) => {
  const existingDoctors = loadDoctors();
  const updatedDoctors = existingDoctors.map((doctor) =>
    doctor.id === id ? { ...doctor, ...updates } : doctor,
  );
  saveDoctors(updatedDoctors);
  return updatedDoctors.find((doctor) => doctor.id === id);
};

export const deleteDoctor = (id) => {
  const existingDoctors = loadDoctors();
  const updatedDoctors = existingDoctors.filter((doctor) => doctor.id !== id);
  saveDoctors(updatedDoctors);
  return updatedDoctors;
};
