import RSVPForm from "@/components/RSVPForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-purple-100/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Wedding Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                ნუკი & ლევანი
              </h1>
            </div>

            <div className="text-6xl md:text-8xl font-serif text-rose-300/30 mb-4">
              ❦
            </div>

            <p className="text-xl md:text-2xl text-gray-600 font-light">
              23 ოქტომბერი, 2025
            </p>
          </div>

          {/* Main Invitation Text */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto">
            <div className="text-center space-y-6 text-gray-800 leading-relaxed">
              <p className="text-lg md:text-xl">
                თუ ეს წერილი თქვენს ინბოქსში აღმოაჩინეთ, ესეიგი, იმდენად
                ძვირფასი ხართ ჩვენთვის,
              </p>

              <p className="text-lg md:text-xl font-medium">
                რომ ჩვენი ბედნიერი დღე
                <br />
                თქვენთან ერთად გვინდა აღვნიშნოთ!
              </p>

              <div className="my-8">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
                <div className="text-3xl text-rose-400 my-2">✧</div>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
              </div>

              <p className="text-xl md:text-2xl font-semibold text-rose-600">
                სწორედ ამიტომ, გეპატიჟებით ჩვენს ქორწილში - 23 ოქტომბერს!
              </p>

              <p className="text-lg md:text-xl">
                ბევრი ვიცეკვოთ, ვიმღეროთ, კარგად გავერთოთ და ერთად ვაქციოთ ეს
                დღე დაუვიწყარ მოგონებად!
              </p>

              <div className="bg-rose-50 rounded-2xl p-6 mt-8 border border-rose-200">
                <p className="text-lg md:text-xl font-medium text-rose-700">
                  გთხოვთ, არაუგვიანეს 10 ოქტომბრისა, შეგვატყობინოთ შეძლებთ თუ
                  არა დასწრებას.
                </p>
              </div>

              <p className="text-base md:text-lg text-gray-600 mt-6">
                ფოტოებისა და ვიდეოების გადაღება შეგიძლიათ, მაგრამ უმორჩილესად
                გთხოვთ, არ ატვირთოთ ისინი სოციალურ ქსელებში.
                <br />
                დავტოვოთ ეს დღე პირად მოგონებად 🥰
              </p>

              <div className="mt-8 pt-6 border-t border-rose-200">
                <p className="text-lg md:text-xl font-medium text-rose-600">
                  დიდი სიყვარულით
                </p>
                <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                  ნუკი & ლევანი
                </p>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-gradient-to-r from-purple-100 to-rose-100 rounded-2xl shadow-lg p-8 md:p-10 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              ღონისძიების დეტალები
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl mb-4">⛪</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    ჯვრისწერა
                  </h3>
                  <p className="text-lg text-gray-600 mb-1">14:00</p>
                  <p className="text-base text-gray-500">
                    ყოველთა წმინდანთა ტაძარი
                    <br />
                    კიბალჩიჩის აღმართი
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl mb-4">🍽️</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    რესტორანი
                  </h3>
                  <p className="text-lg text-gray-600 mb-1">17:00</p>
                  <p className="text-base text-gray-500">
                    ლისი მერე
                    <br />
                    მწვანე დარბაზი
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RSVP Form */}
          <div className="flex justify-center mb-16">
            <RSVPForm />
          </div>

          {/* Decorative Footer */}
          <footer className="text-center">
            <div className="text-4xl text-rose-300/50 mb-4">✧ ✧ ✧</div>
            <p className="text-gray-500 italic">
              ჩვენი სიხარულის ნაწილი გახდით
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
