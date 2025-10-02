"use client";

import { useState, useTransition } from "react";
import { loginAction } from "@/lib/auth-actions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [error, setError] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    setError("");
    startTransition(async () => {
      try {
        const result = await loginAction(formData);

        // If successful, redirect to admin dashboard
        if (result?.success) {
          // Use window.location for more reliable redirect
          window.location.href = "/admin";
        } else {
          setError("შესვლა ვერ მოხერხდა");
        }
      } catch (error: any) {
        console.error("Login error:", error);

        if (error.message === "MISSING_CREDENTIALS") {
          setError("ელფოსტა და პაროლი სავალდებულოა");
        } else if (error.message === "INVALID_CREDENTIALS") {
          setError(
            "არასწორი ელფოსტა ან პაროლი - შექმენით მომხმარებელი Supabase-ში"
          );
        } else {
          setError(`სერვერის შეცდომა: ${error.message || "უცნობი შეცდომა"}`);
        }
      }
    });
  };

  return (
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form action={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            ელფოსტა
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={isPending}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="შეიყვანეთ ელფოსტა"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            პაროლი
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              required
              disabled={isPending}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="შეიყვანეთ პაროლი"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isPending ? "შესვლა..." : "შესვლა"}
          </button>
        </div>
      </form>
    </div>
  );
}
