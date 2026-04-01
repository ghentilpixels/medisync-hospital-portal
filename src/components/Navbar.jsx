import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserRole } from "../types";
import { LogOut, User as UserIcon, Bell, Menu, X } from "lucide-react";
import { cn } from "../utils";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = {
    [UserRole.PATIENT]: [
      { name: "Dashboard", href: "/patient" },
      { name: "Find Doctors", href: "/doctors" },
      { name: "My Appointments", href: "/patient/appointments" },
      { name: "Medical Records", href: "/patient/records" },
    ],
    [UserRole.DOCTOR]: [
      { name: "Dashboard", href: "/doctor" },
      { name: "My Schedule", href: "/doctor/schedule" },
      { name: "Patients", href: "/doctor/patients" },
    ],
    [UserRole.RECEPTIONIST]: [
      { name: "Dashboard", href: "/receptionist" },
      { name: "All Appointments", href: "/receptionist/appointments" },
      { name: "Check-in", href: "/receptionist/check-in" },
    ],
    [UserRole.ADMIN]: [
      { name: "Dashboard", href: "/admin" },
      { name: "Manage Doctors", href: "/admin/doctors" },
      { name: "Hospital Stats", href: "/admin/stats" },
    ],
  };

  const currentLinks = user ? navLinks[user.role] : [];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-emerald-600 tracking-tight">
                MediSync
              </span>
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-4">
              {currentLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-600 hover:text-emerald-600",
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors">
              <Bell size={20} />
            </button>
            <div className="flex items-center space-x-3 border-l border-slate-200 pl-4">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">
                  {user?.name}
                </p>
                <p className="text-xs text-slate-500 capitalize">
                  {user?.role.toLowerCase()}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {currentLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
