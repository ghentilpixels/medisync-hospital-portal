import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Badge, Input } from "../components/UI";
import { Search, HeartPulse, UserPlus } from "lucide-react";

const initialPatients = [
  {
    id: "1",
    name: "Avery Brooks",
    age: 32,
    condition: "Hypertension",
    lastVisit: "Mar 22, 2024",
    status: "Active",
  },
  {
    id: "2",
    name: "Jordan Lee",
    age: 27,
    condition: "Dermatology",
    lastVisit: "Mar 19, 2024",
    status: "Active",
  },
  {
    id: "3",
    name: "Mia Patel",
    age: 45,
    condition: "Diabetes",
    lastVisit: "Mar 12, 2024",
    status: "Follow-up",
  },
];

export const DoctorPatients = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatients = patients.filter((patient) =>
    `${patient.name} ${patient.condition}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  const handleAddPatient = () => {
    const name = window.prompt("Enter patient name:", "New Patient");
    if (!name) return;

    const condition = window.prompt("Enter condition:", "General Checkup");
    if (!condition) return;

    const age = window.prompt("Enter age:", "30");
    if (!age) return;

    setPatients((prev) => [
      ...prev,
      {
        id: String(prev.length + 1),
        name,
        age: Number(age),
        condition,
        lastVisit: "Today",
        status: "Active",
      },
    ]);
  };

  const handleViewRecord = (patient) => {
    window.alert(
      `Patient: ${patient.name}\nCondition: ${patient.condition}\nAge: ${patient.age}\nLast visit: ${patient.lastVisit}`,
    );
  };

  const handleMessage = (patient) => {
    const message = window.prompt(
      `Message to ${patient.name}:`,
      "Hello, I wanted to follow up on your care plan.",
    );
    if (!message) return;

    window.alert(`Message sent to ${patient.name}`);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Patients</h1>
          <p className="text-slate-500">
            View your active patients and clinical history at a glance.
          </p>
        </div>
        <Link to="/doctor">
          <Button variant="outline" size="sm">
            Back to Dashboard
          </Button>
        </Link>
      </header>

      <Card className="p-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="flex flex-1 items-center gap-2 text-slate-500">
            <Search size={18} />
            <Input
              placeholder="Search patients..."
              className="max-w-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="secondary" size="sm" onClick={handleAddPatient}>
            <UserPlus size={16} className="mr-2" /> Add Patient
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {patient.name}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  {patient.condition}
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
                  <span>Age {patient.age}</span>
                  <span>Last visit {patient.lastVisit}</span>
                </div>
              </div>
              <Badge
                variant={patient.status === "Active" ? "success" : "warning"}
              >
                {patient.status}
              </Badge>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleViewRecord(patient)}
              >
                View Record
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleMessage(patient)}
              >
                Message
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
