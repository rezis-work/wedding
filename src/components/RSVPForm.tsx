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
    <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-rose-200">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
        ქორწილის RSVP
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700 mb-1"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder-gray-500"
            placeholder="შეიყვანეთ თქვენი სახელი"
          />
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700 mb-1"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder-gray-500"
            placeholder="შეიყვანეთ თქვენი გვარი"
          />
        </div>

        <div>
          <label
            htmlFor="are_you_coming"
            className="block text-sm font-medium text-gray-700 mb-2"
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
                className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 disabled:cursor-not-allowed"
              />
              <span className="text-sm font-medium text-gray-700">
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
                className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 disabled:cursor-not-allowed"
              />
              <span className="text-sm font-medium text-gray-700">
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
          className="w-full bg-gradient-to-r from-rose-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-rose-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
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
