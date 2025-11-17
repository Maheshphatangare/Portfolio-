// import React from 'react';
// import '../App.css';
// function Contact() {
//   return (
//     <section className="py-8">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
//       <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto contact-card">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h3>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-medium">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Your Name"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Your Email"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="message" className="block text-gray-700 font-medium">
//               Message
//             </label>
//             <textarea
//               id="message"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               rows="4"
//               placeholder="Your Message"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Send Message
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-gray-600">Or reach me at:</p>
//           <a href="mailto:maheshphatangare420@gmail.com" className="text-blue-600 hover:underline">
//             maheshphatangare420@gmail.com
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
// src/components/Contact.jsx
import { Mail, Send } from 'lucide-react';

const Contact = ({ formData, setFormData, handleSubmit, isDark }) => {
  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all text-white placeholder-gray-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all text-white placeholder-gray-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all text-white placeholder-gray-500 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Send Message
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
         
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 mb-3">Or reach me directly at:</p>
            <a
              href="mailto:maheshphatangare420@gmail.com"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail size={20} />
              maheshphatangare420@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;