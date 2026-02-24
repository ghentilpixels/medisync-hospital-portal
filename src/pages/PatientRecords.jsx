import React from "react";
import { Card, Button, Badge } from "../components/UI";
import { FileText, Download, Eye, Calendar, User } from "lucide-react";

export const PatientRecords = () => {
  const records = [
    {
      id: "1",
      date: "2024-02-15",
      diagnosis: "Seasonal Allergies",
      doctor: "Dr. Sarah Johnson",
      type: "Consultation Note",
    },
    {
      id: "2",
      date: "2024-01-10",
      diagnosis: "Annual Physical Examination",
      doctor: "Dr. Michael Chen",
      type: "Lab Report",
    },
    {
      id: "3",
      date: "2023-11-22",
      diagnosis: "Mild Hypertension",
      doctor: "Dr. Emily Smith",
      type: "Prescription",
    },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Medical Records</h1>
        <p className="text-slate-500">
          Access your health history, lab results, and prescriptions.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {records.map((record) => (
          <Card key={record.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900">
                      {record.diagnosis}
                    </h3>
                    <Badge variant="neutral">{record.type}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1.5" /> {record.date}
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1.5" /> {record.doctor}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Eye size={16} className="mr-2" /> View
                </Button>
                <Button variant="outline" size="sm">
                  <Download size={16} className="mr-2" /> Download
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-slate-900 text-white text-center">
        <h3 className="text-xl font-bold mb-2">Need to share your records?</h3>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">
          You can securely export your entire medical history as a
          password-protected PDF to share with other healthcare providers.
        </p>
        <Button
          variant="secondary"
          className="bg-white text-slate-900 hover:bg-slate-100 border-none"
        >
          Export Full History
        </Button>
      </Card>
    </div>
  );
};
