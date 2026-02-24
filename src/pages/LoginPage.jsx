import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button, Input, Card } from "../components/UI";
import { UserRole } from "../types";
import { toast } from "react-hot-toast";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock users for demo purposes
      const mockUsers = {
        "patient@example.com": {
          id: "1",
          name: "John Patient",
          email: "patient@example.com",
          role: UserRole.PATIENT,
        },
        "doctor@example.com": {
          id: "2",
          name: "Dr. Smith",
          email: "doctor@example.com",
          role: UserRole.DOCTOR,
        },
        "admin@example.com": {
          id: "3",
          name: "Admin User",
          email: "admin@example.com",
          role: UserRole.ADMIN,
        },
        "staff@example.com": {
          id: "4",
          name: "Sarah Staff",
          email: "staff@example.com",
          role: UserRole.RECEPTIONIST,
        },
      };

      const user = mockUsers[email];

      if (user && password === "password") {
        login("mock-jwt-token", user);
        toast.success(`Welcome back, ${user.name}!`);

        const dashboardMap = {
          [UserRole.PATIENT]: "/patient",
          [UserRole.DOCTOR]: "/doctor",
          [UserRole.ADMIN]: "/admin",
          [UserRole.RECEPTIONIST]: "/receptionist",
        };

        navigate(dashboardMap[user.role]);
      } else {
        toast.error("Invalid credentials. Try patient@example.com / password");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-emerald-600">MediSync</h1>
          <p className="mt-2 text-slate-600">Hospital Management Portal</p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-slate-600">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                Remember me
              </label>
              <a href="#" className="text-emerald-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full" isLoading={isLoading}>
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-emerald-600 font-medium hover:underline"
            >
              Register as Patient
            </Link>
          </div>
        </Card>

        <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 text-xs text-emerald-800">
          <p className="font-bold mb-1">
            Demo Credentials (password: password):
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Patient: patient@example.com</li>
            <li>Doctor: doctor@example.com</li>
            <li>Admin: admin@example.com</li>
            <li>Staff: staff@example.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
