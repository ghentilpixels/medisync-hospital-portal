import React from "react";
import { Card, Button } from "../components/UI";
import { ShieldAlert, Home } from "lucide-react";
import { Link } from "react-router-dom";

export const UnauthorizedPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="p-8 max-w-md text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-50 text-red-600 mb-6">
          <ShieldAlert size={32} />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Access Denied
        </h1>
        <p className="text-slate-500 mb-8">
          You don't have permission to access this page. If you believe this is
          an error, please contact the hospital administrator.
        </p>
        <Link to="/">
          <Button className="w-full">
            <Home size={18} className="mr-2" /> Back to Home
          </Button>
        </Link>
      </Card>
    </div>
  );
};
