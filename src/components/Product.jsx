const products = [
  {
    name: "Sofa",
    image:
      "https://vijaylaxmifurniture.in/images/layout_img/ser1.jpg",
    bg: "bg-[#0f1a24]",
  },
  {
    name: "Bed",
    image:
      "https://vijaylaxmifurniture.in/images/layout_img/ser2.png",
    bg: "bg-[#0f1a24]",
  },
  {
    name: "TV Unit",
    image:
      "https://vijaylaxmifurniture.in/images/layout_img/ser3.jpg",
    bg: "bg-[#0f1a24]",
  },
   {
    name: "Cupboard",
    image:
      "https://vijaylaxmifurniture.in/images/layout_img/ser4.jpg",
    bg: "bg-[#0f1a24]",
  },
   {
    name: "Table & Chair",
    image:
      "https://vijaylaxmifurniture.in/images/layout_img/ser5.jpg",
    bg: "bg-[#0f1a24]",
  },
   {
    name: "Kitchen Storage",
    image:
      "https://vijaylaxmifurniture.in/images/layout_img/ser6.jpg",
    bg: "bg-[#0f1a24]",
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-white">
        <div className="flex ml-150 mt-3 mb-2">
            <span className="w-12 h-1 bg-orange-500"></span>
        </div>
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0f1a24]">
          Our Products
        </h2>

        <div className="flex ml-220 mt-3 mb-2">
          <span className="w-12 h-1 bg-orange-500"></span>
        </div>

        <p className="text-gray-500 text-lg">
          Explore Our Elegant Furniture Products
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="group overflow-hidden">
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Bottom Label */}
            <div
              className={`${product.bg} text-white text-center py-4 text-xl font-semibold group-hover:bg-orange-500`}
            >
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
