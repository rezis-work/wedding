import { redirect } from "next/navigation";
import AdminDashboard from "@/components/AdminDashboard";

// Simple authentication check - in production, you'd want proper auth
function checkAuth() {
  // For demo purposes, we'll use a simple password
  // In production, implement proper authentication
  return true;
}

export default function AdminPage() {
  if (!checkAuth()) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Wedding Admin Dashboard
          </h1>
          <p className="mt-2 text-gray-600">Manage and view guest RSVPs</p>
        </div>

        <AdminDashboard />
      </div>
    </div>
  );
}
