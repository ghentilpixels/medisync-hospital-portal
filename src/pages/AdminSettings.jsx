import React from "react";
import { Card, Button, Input } from "../components/UI";
import { Shield, SlidersHorizontal } from "lucide-react";

export const AdminSettings = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">System Settings</h1>
        <p className="text-slate-500">
          Update admin preferences and hospital configuration options.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <Shield size={24} className="text-emerald-600" />
            <div>
              <h2 className="text-lg font-bold text-slate-900">Security</h2>
              <p className="text-sm text-slate-500">
                Manage login, password, and access controls.
              </p>
            </div>
          </div>
          <Input label="Notification Email" placeholder="admin@medisync.com" />
          <Input label="Support Phone" placeholder="+1 (555) 123-4567" />
          <Input label="System Timezone" placeholder="America/New_York" />
          <Button>Save Settings</Button>
        </Card>

        <Card className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={24} className="text-blue-600" />
            <div>
              <h2 className="text-lg font-bold text-slate-900">Preferences</h2>
              <p className="text-sm text-slate-500">
                Configure dashboard and alert behavior.
              </p>
            </div>
          </div>
          <Input label="Alert Threshold" placeholder="Example: 90%" />
          <Input label="Default Report View" placeholder="Daily / Weekly" />
          <Button variant="outline">Reset to Defaults</Button>
        </Card>
      </div>
    </div>
  );
};
