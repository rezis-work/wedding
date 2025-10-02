"use server";

import { createClient } from "@supabase/supabase-js";

// Create a server-side Supabase client for database operations
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(supabaseUrl, supabaseKey);
}

import { revalidatePath } from "next/cache";

export interface RSVPFormData {
  firstname: string;
  lastname: string;
  are_you_coming: boolean;
}

export async function submitRSVP(formData: RSVPFormData) {
  try {
    // Validate input
    if (!formData.firstname.trim() || !formData.lastname.trim()) {
      return {
        success: false,
        error: "First name and last name are required",
      };
    }

    // Insert into database
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("weeding-guests")
      .insert([
        {
          firstname: formData.firstname.trim(),
          lastname: formData.lastname.trim(),
          are_you_coming: formData.are_you_coming,
        },
      ])
      .select();

    if (error) {
      console.error("Database error:", error);
      return {
        success: false,
        error: "Failed to submit RSVP. Please try again.",
      };
    }

    // Revalidate the admin page if it exists
    revalidatePath("/admin");

    return {
      success: true,
      data: data[0],
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}

export async function getGuests() {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("weeding-guests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Database error:", error);
      return {
        success: false,
        error: "Failed to fetch guests",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}
