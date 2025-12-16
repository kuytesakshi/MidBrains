const Contact = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <span className="w-12 h-1 bg-orange-400"></span>
          </div>

          <h2 className="text-4xl font-bold text-[#0b2c4d]">
            Contact Us
          </h2>

          <div className="flex justify-center mt-3">
            <span className="w-12 h-1 bg-orange-400"></span>
          </div>

          <p className="text-gray-500 mt-4">
            Get in Touch with Us for Any Queries or Support
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-black px-4 py-4 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="border border-black px-4 py-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-black px-4 py-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="border border-black px-4 py-4 focus:outline-none"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Message"
            rows="6"
            className="w-full border border-black px-4 py-4 focus:outline-none"
          ></textarea>

          {/* Captcha */}
          <div>
            <p className="font-semibold text-gray-600 mb-3">
              Enter Captcha
            </p>

            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-100 px-6 py-4 text-3xl tracking-widest font-bold text-gray-600 rounded">
                CEJMQ
              </div>

              <button
                type="button"
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Reload
              </button>
            </div>

            <input
              type="text"
              placeholder="cejmq"
              className="border border-gray-300 px-4 py-3 w-64 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-[#0aa6b4] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#088f9b] transition"
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
