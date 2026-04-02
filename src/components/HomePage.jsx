import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./UI";
import {
  Heart,
  Stethoscope,
  Users,
  CalendarDays,
  ShieldCheck,
  Video,
} from "lucide-react";

const features = [
  {
    Icon: Stethoscope,
    title: "Smart scheduling",
    description:
      "Book appointments in seconds and keep your care team in sync across every visit.",
  },
  {
    Icon: Video,
    title: "Telehealth ready",
    description:
      "Secure video consultations for patients and doctors whenever care can’t wait.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure records",
    description:
      "Protect patient data with modern hospital-grade security and patient privacy controls.",
  },
  {
    Icon: Users,
    title: "Team collaboration",
    description:
      "One platform for administrators, physicians, receptionists, and patients.",
  },
];

export const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-emerald-600 to-emerald-400 opacity-20 blur-3xl" />
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-200">
                Trusted healthcare operations in one portal
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  MediSync makes hospital workflows smarter, faster, and more
                  human.
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl">
                  Empower patients, doctors, and administrators with a unified
                  care experience built for modern healthcare teams.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/login">
                  <Button className="min-w-[160px]" size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="lg" className="min-w-[160px]">
                    Create account
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-3xl font-semibold text-slate-900">500+</p>
                  <p className="mt-2 text-sm text-slate-500">Active doctors</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-3xl font-semibold text-slate-900">2k+</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Patients onboarded
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-3xl font-semibold text-slate-900">98%</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Appointment satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-xl rounded-[2rem] bg-white/80 p-8 shadow-2xl ring-1 ring-slate-200 backdrop-blur-xl">
                <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                    <CalendarDays size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Next availability
                    </p>
                    <p className="text-sm text-slate-500">
                      Dr. Emily Smith • Cardiology
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-5">
                  <div className="rounded-3xl border border-slate-200 p-4">
                    <p className="text-sm text-slate-500">Today</p>
                    <div className="mt-3 flex items-center justify-between text-sm text-slate-800">
                      <p>09:00 AM • Video consult</p>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                        Confirmed
                      </span>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-slate-200 p-4 bg-slate-50">
                    <p className="text-sm text-slate-500">Tomorrow</p>
                    <div className="mt-3 flex items-center justify-between text-sm text-slate-800">
                      <p>10:30 AM • In-person</p>
                      <span className="rounded-full bg-slate-200 px-3 py-1 text-slate-700">
                        Open
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Built for every care role
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                One platform for patients, doctors, and hospital admins.
              </h2>
              <p className="mt-6 text-lg text-slate-600 max-w-2xl">
                MediSync helps teams reduce manual coordination, accelerate
                patient access, and keep care moving with a polished, modern
                experience.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <feature.Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-4xl bg-slate-900 px-8 py-12 text-white shadow-2xl sm:px-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                  Elevate care
                </p>
                <h3 className="mt-4 text-2xl font-bold">
                  Modern healthcare operations that feel effortless.
                </h3>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  Streamline scheduling, reduce no-shows, and keep clinical
                  teams aligned.
                </p>
                <p>
                  Patients get faster access and doctors keep their workflow in
                  one place.
                </p>
              </div>
              <div className="flex items-end">
                <Link to="/login">
                  <Button
                    className="w-full bg-white text-slate-900 hover:bg-slate-100"
                    size="lg"
                  >
                    Start now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
