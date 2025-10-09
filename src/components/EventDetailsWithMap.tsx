"use client";

export default function EventDetailsWithMap() {
  return (
    <div className="bg-amber-100/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 mb-12 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-700 mb-8 font-serif">
        ღონისძიების დეტალები:
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="text-center h-full">
          <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col justify-between">
            <div className="text-3xl mb-4">⛪</div>
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">
              ჯვრისწერა 14:00
            </h3>
            <a
              href="https://maps.app.goo.gl/H99CcK7C1u2TurUYA?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-yellow-700 hover:text-yellow-900 underline decoration-yellow-500 hover:decoration-yellow-700 transition-colors"
            >
              ჩუღურეთის ყველათწმინდა, მისამართი: ელენე ახვლედიანის აღმართი N6ა
              (ყოფილი კიბალჩიჩის აღმართი)
            </a>
          </div>
        </div>

        <div className="text-center h-full">
          <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col justify-between">
            <div className="text-3xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">
              რესტორანი 17:00
            </h3>
            <a
              href="https://maps.app.goo.gl/Tz8JAWCxCZPBDrB87?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-yellow-700 hover:text-yellow-900 underline decoration-yellow-500 hover:decoration-yellow-700 transition-colors block"
            >
              რესტორანი ლისი მერე
            </a>
            <p className="text-base text-yellow-700 mt-2">(მწვანე დარბაზი)</p>
          </div>
        </div>
      </div>

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
  );
}
