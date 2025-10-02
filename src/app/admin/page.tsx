import AdminDashboard from "@/components/AdminDashboard";
import LogoutButton from "@/components/LogoutButton";
import { getUser, isAdmin } from "@/lib/supabase-auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  // Authentication is now handled at the page level
  try {
    const user = await getUser();

    if (!user || !(await isAdmin(user))) {
      redirect("/admin/login");
    }
  } catch (error) {
    // If there's any auth error, redirect to login
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              ქორწილის ადმინისტრატორის დაშოფორდი
            </h1>
            <p className="mt-2 text-gray-600">
              სტუმრების RSVP-ების მართვა და ნახვა
            </p>
          </div>

          <LogoutButton />
        </div>

        <AdminDashboard />
      </div>
    </div>
  );
}
