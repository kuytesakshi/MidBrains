import { FaCheckCircle } from "react-icons/fa";

const About = () =>{
    return (
        <section className="py-20 bg-white">
          <div className="flex ml-160 mt-3 mb-2">
          <span className="w-10 h-1 bg-orange-500"></span>
        </div>  
            <div className="text-center mb-5">
                <h2 className="text-4xl font-bold text-[#0f1a24] relative inline-block">About Us</h2>
        
        <div className="flex ml-210  mt-3">
          <span className="w-10 h-1 bg-orange-500"></span>
        </div>  
        <div className="text-center">
            <p className="text-gray-500 text-lg">About Vijay Laxmi Home Furniture</p>
        </div>
                      
            </div> 
        {/* <div className="flex ml-225 mt-3">
          <span className="w-10 h-1 bg-orange-500"></span>
        </div>   */}
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
            alt="Home furniture"
            className="w-full h-full object-cover"
          />

          {/* Orange Overlay Box */}
          <div className="absolute bottom-0 left-0 right-0 bg-orange-500/90 text-white p-6 text-center">
            <h3 className="text-2xl font-bold mb-3">
              Home furniture Service
            </h3>

            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-orange-500 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-3xl font-bold text-[#0f1a24] mb-6">
            Top-Quality Furniture for Beautiful Homes
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Discover top-quality furniture in Pune that combines style and
            comfort. Our selection features modern designs and classic pieces
            to fit every home. From luxurious sofas to elegant dining sets, we
            offer the best options for your living space. Explore our diverse
            collection and find the perfect furniture to enhance your home
            decor.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 text-gray-600 mb-8">
            {[
              "Exceptional Craftsmanship and Quality Standards.",
              "Diverse Collection for Every Home Style.",
              "Dedicated to Personalized Customer Service.",
              "Luxury Furniture at Affordable Prices.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-teal-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition">
            Know More
          </button>
        </div>
      </div>
              
        </section>
    )
}
export default About