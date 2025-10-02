"use client";

import { useState, useEffect } from "react";
import { getGuests } from "@/lib/actions";
import { Guest } from "@/types/database";

export default function AdminDashboard() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [filteredGuests, setFilteredGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAttending, setFilterAttending] = useState<
    "all" | "attending" | "not-attending"
  >("all");

  useEffect(() => {
    loadGuests();
  }, []);

  useEffect(() => {
    filterGuests();
  }, [guests, searchTerm, filterAttending]);

  const loadGuests = async () => {
    setLoading(true);
    const result = await getGuests();

    if (result.success && result.data) {
      setGuests(result.data);
    } else {
      setError(result.error || "Failed to load guests");
    }
    setLoading(false);
  };

  const filterGuests = () => {
    let filtered = [...guests];

    // Filter by search term (first name or last name)
    if (searchTerm) {
      filtered = filtered.filter(
        (guest) =>
          guest.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          guest.lastname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by attendance
    if (filterAttending === "attending") {
      filtered = filtered.filter((guest) => guest.is_coming);
    } else if (filterAttending === "not-attending") {
      filtered = filtered.filter((guest) => !guest.is_coming);
    }

    setFilteredGuests(filtered);
  };

  const attendingCount = guests.filter((guest) => guest.is_coming).length;
  const notAttendingCount = guests.filter((guest) => !guest.is_coming).length;

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-gray-600">Loading guests...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <div className="text-red-800">{error}</div>
        <button
          onClick={loadGuests}
          className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">👥</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Guests
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {guests.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">✅</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Attending
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {attendingCount}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">❌</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Not Attending
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {notAttendingCount}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Search by name
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search first name or last name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="filter"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Filter by attendance
            </label>
            <select
              id="filter"
              value={filterAttending}
              onChange={(e) =>
                setFilterAttending(
                  e.target.value as "all" | "attending" | "not-attending"
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All guests</option>
              <option value="attending">Attending</option>
              <option value="not-attending">Not attending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Guests Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Guest List ({filteredGuests.length} guests)
          </h3>
        </div>

        {filteredGuests.length === 0 ? (
          <div className="px-4 py-8 text-center text-gray-500">
            {guests.length === 0
              ? "No guests have RSVPed yet."
              : "No guests match your search criteria."}
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {filteredGuests.map((guest) => (
              <li key={guest.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            guest.is_coming ? "bg-green-400" : "bg-red-400"
                          }`}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {guest.firstname} {guest.lastname}
                        </div>
                        <div className="text-sm text-gray-500">
                          RSVPed on{" "}
                          {new Date(guest.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          guest.is_coming
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {guest.is_coming ? "Attending" : "Not Attending"}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Refresh Button */}
      <div className="flex justify-end">
        <button
          onClick={loadGuests}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Refresh Data
        </button>
      </div>
    </div>
  );
}
