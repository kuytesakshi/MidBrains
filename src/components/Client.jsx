import { FaCheck, FaSmile, FaTrophy } from "react-icons/fa";

const Client = () => {
  return (
    <section
      className="relative w-full h-[35vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://vijaylaxmifurniture.in/images/layout_img/slide1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#29bddae3]"></div>

   
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-white">

          
          <div className="flex items-center gap-6 justify-center">
            <div className="bg-white text-[#29bdda] w-20 h-20 rounded-full flex items-center justify-center text-3xl">
              <FaCheck />
            </div>
            <div>
              <h3 className="text-4xl font-bold">1500</h3>
              <p className="text-lg">Project Complete</p>
            </div>
          </div>

          
          <div className="flex items-center gap-6 justify-center">
            <div className="bg-white text-[#29bdda] w-20 h-20 rounded-full flex items-center justify-center text-3xl">
              <FaSmile />
            </div>
            <div>
              <h3 className="text-4xl font-bold">980</h3>
              <p className="text-lg">Happy Clients</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-6 justify-center">
            <div className="bg-white text-[#29bdda] w-20 h-20 rounded-full flex items-center justify-center text-3xl">
              <FaTrophy />
            </div>
            <div>
              <h3 className="text-4xl font-bold">250</h3>
              <p className="text-lg">Awards Won</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Client;
