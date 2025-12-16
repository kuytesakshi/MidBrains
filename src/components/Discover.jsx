const Discover = () => {
  return (
    <section
      className="relative w-full h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://vijaylaxmifurniture.in/images/layout_img/slide1.jpg')",
      }}
    >
      {/* Bluish Overlay */}
      <div className="absolute inset-0 bg-[#29bddae3]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          {/* Left Text */}
          <div>
            <p className="text-white text-3xl leading-snug font-medium">
              Discover exquisite furniture pieces at Vijay Laxmi Home Furniture,
              where quality meets craftsmanship.
            </p>
          </div>

          {/* Right Text */}
          <div>
            <p className="text-white text-base leading-relaxed">
              At Vijay Laxmi Home Furniture, we offer a wide range of stylish and
              comfortable furniture designed to elevate your living spaces.
              Our collection is crafted with attention to detail, ensuring
              durability and elegance.
              <br /><br />
              Visit us to explore a variety of options that cater to your unique
              taste. We are dedicated to bringing you the finest furniture that
              adds a touch of luxury to your home.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Discover;
