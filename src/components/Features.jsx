import {
  FaShippingFast,
  FaCreditCard,
  FaUsers,
  FaRupeeSign,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast />,
    title: "Fast Service",
    desc: "Quick delivery and setup, ensuring you enjoy your new furniture without delay.",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    icon: <FaCreditCard />,
    title: "Secure Payments",
    desc: "Safe and reliable payment options for a worry-free shopping experience.",
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    desc: "Our skilled team provides personalized advice to help you choose the perfect furniture.",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    icon: <FaRupeeSign />,
    title: "Affordable Prices",
    desc: "High-quality furniture at prices that fit your budget.",
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    icon: <FaShieldAlt />,
    title: "90 Days Warranty",
    desc: "Enjoy peace of mind with our comprehensive 90-day warranty on all products.",
    bg: "bg-cyan-100",
    color: "text-cyan-600",
  },
  {
    icon: <FaAward />,
    title: "Award Winning",
    desc: "Recognized for excellence in design and customer satisfaction.",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#0b2c48] relative inline-block">
          Why Choose Us
          <span className="block w-16 h-1 bg-orange-400 mx-auto mt-2"></span>
        </h2>

        <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
          Discover the Perfect Blend of Style, Comfort, and Durability in Every
          Piece of Our Furniture.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition"
            >
              <div
                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl ${item.bg} ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0b2c48]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
