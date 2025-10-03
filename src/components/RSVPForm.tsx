"use client";

import { useState, useTransition } from "react";
import { submitRSVP, type RSVPFormData } from "@/lib/actions";

export default function RSVPForm() {
  const [formData, setFormData] = useState<RSVPFormData>({
    firstname: "",
    lastname: "",
    are_you_coming: true,
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
          text: "RSVP წარმატებით გაიგზავნა! მადლობა თქვენი პასუხისთვის.",
        });
        setFormData({ firstname: "", lastname: "", are_you_coming: true });
      } else {
        setMessage({
          type: "error",
          text: result.error || "RSVP-ის გაგზავნა ვერ მოხერხდა",
        });
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-amber-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-amber-300">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-800 font-serif">
        ქორწილის RSVP
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-yellow-700 mb-1"
          >
            სახელი *
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
            disabled={isPending}
            className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-yellow-900 placeholder-yellow-400"
            placeholder="შეიყვანეთ თქვენი სახელი"
          />
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-yellow-700 mb-1"
          >
            გვარი *
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
            disabled={isPending}
            className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-yellow-900 placeholder-yellow-400"
            placeholder="შეიყვანეთ თქვენი გვარი"
          />
        </div>

        <div>
          <label
            htmlFor="are_you_coming"
            className="block text-sm font-medium text-yellow-700 mb-2"
          >
            მოვალ ქორწილში? *
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="are_you_coming"
                value="true"
                checked={formData.are_you_coming === true}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    are_you_coming: e.target.value === "true",
                  }))
                }
                disabled={isPending}
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-yellow-300 disabled:cursor-not-allowed"
              />
              <span className="text-sm font-medium text-yellow-700">
                კი, მოვალ
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="are_you_coming"
                value="false"
                checked={formData.are_you_coming === false}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    are_you_coming: e.target.value === "true",
                  }))
                }
                disabled={isPending}
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-yellow-300 disabled:cursor-not-allowed"
              />
              <span className="text-sm font-medium text-yellow-700">
                არა, ვერ მოვალ
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={
            isPending || !formData.firstname.trim() || !formData.lastname.trim()
          }
          className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-3 px-6 rounded-xl hover:from-yellow-700 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg font-semibold"
        >
          {isPending ? "გაიგზავნება..." : "RSVP გაგზავნა"}
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
