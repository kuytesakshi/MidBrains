import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "https://vijaylaxmifurniture.in/images/layout_img/slide1.jpg",
    title: "Vijay Laxmi Home Furniture",
    subtitle: "All your furniture needs, in one place",
  },
  {
    image: "https://vijaylaxmifurniture.in/images/layout_img/slide2.jpg",
    title: "Vijay Laxmi Home Furniture",
    subtitle: "All your furniture needs, in one place",
  },
  {
    image: "https://vijaylaxmifurniture.in/images/layout_img/slide3.jpg",
    title: "Vijay Laxmi Home Furniture",
    subtitle: "All your furniture needs, in one place",
  },
];

const DURATION = 10000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimateKey((k) => k + 1); // restart animations
    }, DURATION);

    return () => clearTimeout(timer);
  }, [current]);

  const prevIndex = current === 0 ? slides.length - 1 : current - 1;
  const nextIndex = current === slides.length - 1 ? 0 : current + 1;

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Timer line */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gray-300 z-40">
        <div
          key={animateKey}
          className="h-full bg-teal-400"
          style={{ animation: `progress ${DURATION}ms linear forwards` }}
        />
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-out
            ${index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105"}
          `}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />

          {/* Banner */}
          {index === current && (
            <div
              key={animateKey}
              className="relative z-20 h-full flex items-center justify-center"
            >
              <div className="bg-white animate-bg border-[6px] border-orange-500 animate-border px-14 py-8 text-center animate-text">
                <h1 className="text-4xl font-bold text-[#0f1a24] animate-title">
                  {slide.title}
                </h1>
                <p className="mt-2 tracking-widest uppercase text-sm text-gray-600 animate-subtitle">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          )}

          
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={() => setCurrent(prevIndex)}
        className="group absolute left-6 top-1/2 -translate-y-1/2 z-30
                   w-14 h-14 hover:w-20 hover:h-20
                   transition-all duration-300 ease-out
                   rounded-full border-2 border-white overflow-hidden"
      >
        <FaChevronLeft className="absolute inset-0 m-auto text-white text-xl z-10" />
        <img
          src={slides[prevIndex].image}
          className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:hidden" />
      </button>

      {/* Next button */}
      <button
        onClick={() => setCurrent(nextIndex)}
        className="group absolute right-6 top-1/2 -translate-y-1/2 z-30
                   w-14 h-14 hover:w-20 hover:h-20
                   transition-all duration-300 ease-out
                   rounded-full border-2 border-white overflow-hidden"
      >
        <FaChevronRight className="absolute inset-0 m-auto text-white text-xl z-10" />
        <img
          src={slides[nextIndex].image}
          className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:hidden" />
      </button>
       {/* Thumbnails */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-30">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setProgressKey((k) => k + 1);
            }}
            className={`w-12 h-12 rounded-full overflow-hidden border-2
              ${index === current ? "border-orange-500 scale-110" : "border-white"}
            `}
          >
            <img src={slide.image} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      {/* CSS */}
      <style>
        {`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }

          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-banner {
            animation: slideDown 0.9s ease-out forwards;
          }

          .animate-title {
            animation: slideDown 0.9s ease-out forwards;
            animation-delay: 0.2s;
          }

          .animate-subtitle {
            animation: slideDown 0.9s ease-out forwards;
            animation-delay: 0.9s;
          }
            @keyframes jumpDown {
  0% {
    opacity: 0;
    transform: translateY(-60px);
  }
  70% {
    opacity: 1;
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* 1️⃣ Text first */
.animate-text {
  animation: jumpDown 0.6s ease-out forwards;
}

/* 2️⃣ White background */
.animate-bg {
  animation: jumpDown 0.6s ease-out forwards;
  animation-delay: 0.35s;
}

/* 3️⃣ Orange border */
.animate-border {
  animation: jumpDown 0.6s ease-out forwards;
  animation-delay: 0.55s;
}

        `}
      </style>
    </section>
  );
};

export default Hero;
    