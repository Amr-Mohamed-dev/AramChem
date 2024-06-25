const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to Aramchemeg
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-6">
          Innovative solutions for a better tomorrow
        </p>
        <a
          href="#services"
          className="bg-blue-600 text-white px-6 py-3 rounded-full"
        >
          Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
