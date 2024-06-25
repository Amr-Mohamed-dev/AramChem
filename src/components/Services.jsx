const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Consulting</h3>
              <p>Expert advice to help you achieve your business goals.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <p>Custom software solutions tailored to your needs.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <p>24/7 support to ensure your business runs smoothly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
