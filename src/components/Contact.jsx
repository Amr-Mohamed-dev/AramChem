const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          Contact Us
        </h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="email"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              id="message"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full w-full md:w-auto">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
