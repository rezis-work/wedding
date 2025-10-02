import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

async function getSupabaseClient() {
  const cookieStore = await cookies();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Missing Supabase environment variables. Please check your .env.local file."
    );
  }

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}

export async function signInWithPassword(email: string, password: string) {
  try {
    const supabase = await getSupabaseClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Supabase auth error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Unexpected error in signInWithPassword:", error);
    return { success: false, error: "Connection error" };
  }
}

export async function signOut() {
  const supabase = await getSupabaseClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Supabase sign out error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function getUser() {
  try {
    const supabase = await getSupabaseClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      // Don't log "Auth session missing" errors as they're expected when not logged in
      if (!error.message?.includes("Auth session missing")) {
        console.error("Supabase get user error:", error);
      }
      return null;
    }

    return user;
  } catch (error) {
    // Handle any unexpected errors
    console.error("Unexpected error in getUser:", error);
    return null;
  }
}

export async function isAdmin(user: any) {
  // Check if user has admin role or is the specific admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@wedding.com";
  return user?.email === adminEmail || user?.user_metadata?.role === "admin";
}
