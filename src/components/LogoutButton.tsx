"use client";

import { useState, useTransition } from "react";
import { logoutAction } from "@/lib/auth-actions";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLogout = async () => {
    startTransition(async () => {
      try {
        const result = await logoutAction();
        if (result?.success) {
          window.location.href = "/admin/login";
        }
      } catch (error) {
        console.error("Logout error:", error);
        // Still redirect even if there's an error
        window.location.href = "/admin/login";
      }
    });
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isPending}
      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {isPending ? "გასვლა..." : "გასვლა"}
    </button>
  );
}
