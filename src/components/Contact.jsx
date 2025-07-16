import React from 'react';
import '../App.css';
function Contact() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto contact-card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Or reach me at:</p>
          <a href="mailto:maheshphatangare420@gmail.com" className="text-blue-600 hover:underline">
            maheshphatangare420@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;