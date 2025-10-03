import RSVPForm from "@/components/RSVPForm";
import EventDetailsWithMap from "@/components/EventDetailsWithMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-purple-100/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Wedding Header */}
          <div className="text-center mb-5">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-yellow-700">
                ნუკი & ლევანი
              </h1>
            </div>

            <p className="text-xl md:text-5xl text-yellow-700 font-bold">
              <span className="text-7xl">23</span> ოქტომბერი, 2025
            </p>
          </div>

          {/* Main Invitation Text */}
          <div className="bg-amber-50/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto">
            <div className="text-center space-y-6 text-yellow-700 leading-relaxed">
              <div className="my-8">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
                <div className="text-3xl text-yellow-600 my-2">✧</div>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
              </div>

              <p className="text-xl md:text-4xl font-semibold text-yellow-700">
                გეპატიჟებით ქორწილში!
                <br />
                ჩვენი ბედნიერების გასაზიარებლად!
              </p>

              <div className="my-8">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
                <div className="text-3xl text-yellow-600 my-2">✧</div>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
              </div>

              <div className="mt-8 pt-6 border-t border-yellow-300">
                <p className="text-lg md:text-xl font-medium text-yellow-700">
                  სიყვარულით
                </p>
                <p className="text-2xl md:text-3xl font-bold text-yellow-800 mt-2">
                  ნუკი&ლევანი
                </p>
                <div className="flex justify-center">
                  <div className="mt-8 animate-bounce">
                    <svg
                      className="w-8 h-8 mx-auto text-yellow-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </div>
                  <div className="mt-8 animate-bounce">
                    <svg
                      className="w-8 h-8 mx-auto text-yellow-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </div>
                  <div className="mt-8 animate-bounce">
                    <svg
                      className="w-8 h-8 mx-auto text-yellow-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Icon */}
          <div className="mt-8 animate-bounce">
            <svg
              className="w-8 h-8 mx-auto text-yellow-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          {/* Event Details */}
          <EventDetailsWithMap />

          {/* RSVP Notice */}
          <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-bold text-red-600 text-center">
              გთხოვთ არაუგვიანეს 12 ოქტომბრისა გვაცნობოთ, ქვემოთ აღნიშნული
              ფორმის საშუალებით დასწრების ან არ დასწრების შესახებ
            </p>
          </div>

          <div className="mt-8 animate-bounce">
            <svg
              className="w-8 h-8 mx-auto text-yellow-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          {/* RSVP Form */}
          <div className="flex justify-center mb-12">
            <RSVPForm />
          </div>

          {/* Social Media Notice */}
          <div className="bg-amber-900/90 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-4xl mx-auto border-4 border-amber-800">
            <p className="text-base md:text-lg text-amber-100 font-bold text-center flex items-center justify-center gap-3 flex-wrap">
              <span>
                📸 პ.ს. თხოვნა გვაქვს, ფოტოები და ვიდეოები არ ატვირთოთ სოციალურ
                ქსელებში
              </span>
              {/* Facebook Icon */}
              <svg
                className="w-6 h-6 text-amber-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              {/* Instagram Icon */}
              <svg
                className="w-6 h-6 text-amber-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </p>
          </div>

          {/* Decorative Footer */}
          <footer className="text-center">
            <div className="text-4xl text-yellow-500/50 mb-4">✧ ✧ ✧</div>
            <p className="text-yellow-700 italic text-lg">
              ჩვენი სიხარულის ნაწილი გახდით
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
