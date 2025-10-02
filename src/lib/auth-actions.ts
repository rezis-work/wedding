"use server";

import { signInWithPassword, signOut, getUser, isAdmin } from "./supabase-auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("MISSING_CREDENTIALS");
  }

  try {
    // Sign in with Supabase
    const result = await signInWithPassword(email, password);

    if (!result.success) {
      throw new Error("INVALID_CREDENTIALS");
    }

    // Get the user from the result
    const user = result.data?.user;

    // Check if user is admin
    if (!user || !(await isAdmin(user))) {
      await signOut(); // Sign out if not admin
      throw new Error("INVALID_CREDENTIALS");
    }

    // Return success instead of redirecting
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    throw error;
  }
}

export async function logoutAction() {
  await signOut();
  revalidatePath("/admin");
  // Return success instead of redirecting
  return { success: true };
}
