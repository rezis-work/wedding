"use server";

import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface RSVPFormData {
  firstname: string;
  lastname: string;
  is_coming: boolean;
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
    const { data, error } = await supabase
      .from("weeding-guests")
      .insert([
        {
          firstname: formData.firstname.trim(),
          lastname: formData.lastname.trim(),
          is_coming: formData.is_coming,
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
