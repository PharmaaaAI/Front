const ContactUs = () => {
  const StoreLocation = ({ country, address, phone, email }) => (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{country}</h3>
      <p className="text-gray-600 mt-1">{address}</p>
      <p className="text-gray-600 mt-1">{phone}</p>
      <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
        {email}
      </a>
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're here to help and answer any question you might have. We look
          forward to hearing from you.
        </p>
      </div>

      <hr className="mb-16 border-gray-200" />

      <div className="grid md:grid-cols-2 gap-16">
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our team is distributed globally to stay at the forefront of
              medical and technological innovation. While we primarily operate
              remotely, we have central offices for our core research and
              development teams.
            </p>
          </div>

          <div className="space-y-8">
            <StoreLocation
              country="United States"
              address="New York"
              phone="+1 234 567 890"
              email="contact@pharma.ai"
            />
            <StoreLocation
              country="United Kingdom"
              address="London"
              phone="+99 234 567 890"
              email="contact@pharma.ai"
            />
          </div>
        </div>

        <div>
          <p className="text-gray-600 mb-6">
            Have a question about our technology, partnerships, or career
            opportunities? Fill out the form below, and a member of our team
            will get back to you shortly.
          </p>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-400 transition-all duration-300 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
