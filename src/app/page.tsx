import RSVPForm from "@/components/RSVPForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            You're Invited!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Join us in celebrating our special day
          </p>
          <p className="text-lg text-gray-500">
            Please RSVP by filling out the form below
          </p>
        </div>

        {/* RSVP Form */}
        <div className="flex justify-center">
          <RSVPForm />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500">
          <p>Thank you for being part of our celebration!</p>
        </footer>
      </div>
    </div>
  );
}
