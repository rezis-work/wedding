"use client";

import { useState, useTransition } from "react";
import { submitRSVP, type RSVPFormData } from "@/lib/actions";

export default function RSVPForm() {
  const [formData, setFormData] = useState<RSVPFormData>({
    firstname: "",
    lastname: "",
    is_coming: true,
  });
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    startTransition(async () => {
      const result = await submitRSVP(formData);

      if (result.success) {
        setMessage({
          type: "success",
          text: "RSVP submitted successfully! Thank you for responding.",
        });
        setFormData({ firstname: "", lastname: "", is_coming: true });
      } else {
        setMessage({
          type: "error",
          text: result.error || "Failed to submit RSVP",
        });
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Wedding RSVP
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
            disabled={isPending}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
            disabled={isPending}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Enter your last name"
          />
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="is_coming"
            name="is_coming"
            checked={formData.is_coming}
            onChange={handleInputChange}
            disabled={isPending}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded disabled:cursor-not-allowed"
          />
          <label
            htmlFor="is_coming"
            className="text-sm font-medium text-gray-700"
          >
            I will be attending the wedding
          </label>
        </div>

        <button
          type="submit"
          disabled={
            isPending || !formData.firstname.trim() || !formData.lastname.trim()
          }
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? "Submitting..." : "Submit RSVP"}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-3 rounded-md ${
            message.type === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
