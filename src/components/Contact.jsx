
// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { Send, CheckCircle, AlertCircle } from 'lucide-react';

// // ←←← REPLACE THESE 3 VALUES AFTER SIGNING UP AT EMAILJS.COM ←←←
// const EMAILJS_USER_ID = 'Bw0YFQmU7cYJ_y533';        // e.g., user_abc123xyz
// const EMAILJS_SERVICE_ID = 'service_lu3fpve';              // e.g., service_gmail123
// const EMAILJS_TEMPLATE_ID = 'template_0pci28x';            // e.g., template_contact123

// const Contact = ({ isDark }) => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
//   const [statusMessage, setStatusMessage] = useState('');

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus('sending');
//     setStatusMessage('');

//     // Initialize only once (safe to call multiple times)
//     emailjs.init(EMAILJS_USER_ID);

//     const templateParams = {
//       from_name: formData.name,
//       from_email: formData.email,
//       message: formData.message,
//       to_email: 'maheshphatangare420@gmail.com', // ← your receiving email
//     };

//     emailjs
//       .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
//       .then(
//         (result) => {
//           setStatus('success');
//           setStatusMessage('Thank you! Your message has been sent successfully. I\'ll reply soon ❤️');
//           setFormData({ name: '', email: '', message: '' });
//           // Auto hide success after 8 seconds
//           setTimeout(() => setStatus(''), 8000);
//         },
//         (error) => {
//           setStatus('error');
//           setStatusMessage('Oops! Something went wrong. Please email me directly: maheshphatangare420@gmail.com');
//           console.error(error);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="relative py-20 px-6">
//       <div className="max-w-2xl mx-auto">
//         <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
//           isDark ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'
//         } bg-clip-text text-transparent`}>
//           Get In Touch
//         </h2>

//         <div className={`rounded-3xl p-8 md:p-12 shadow-2xl ${
//           isDark ? 'bg-white/5 border border-white/10' : 'bg-white/90 border border-gray-200'
//         }`}>
//           <form onSubmit={sendEmail} className="space-y-7">
//             <div>
//               <input
//                 type="text"
//                 required
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className={`w-full px-6 py-4 rounded-2xl font-medium transition-all focus:outline-none focus:ring-4 ${
//                   isDark
//                     ? 'bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400/30'
//                     : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/30'
//                 }`}
//               />
//             </div>

//             <div>
//               <input
//                 type="email"
//                 required
//                 placeholder="your@email.com"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className={`w-full px-6 py-4 rounded-2xl font-medium transition-all focus:outline-none focus:ring-4 ${
//                   isDark
//                     ? 'bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-purple-400 focus:ring-purple-400/30'
//                     : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/30'
//                 }`}
//               />
//             </div>

//             <div>
//               <textarea
//                 rows="5"
//                 required
//                 placeholder="Your message here..."
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className={`w-full px-6 py-4 rounded-2xl font-medium transition-all focus:outline-none focus:ring-4 resize-none ${
//                   isDark
//                     ? 'bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-pink-400 focus:ring-pink-400/30'
//                     : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/30'
//                 }`}
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={status === 'sending'}
//               className={`w-full py-5 rounded-2xl font-bold text-white text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl ${
//                 isDark
//                   ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400'
//                   : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
//               } disabled:opacity-70 disabled:cursor-not-allowed`}
//             >
//               {status === 'sending' ? (
//                 <>Sending...</>
//               ) : (
//                 <>
//                   Send Message <Send size={22} />
//                 </>
//               )}
//             </button>

//             {/* Status Messages */}
//             {status === 'success' && (
//               <div className="flex items-center gap-3 text-green-400 bg-green-400/10 px-6 py-4 rounded-2xl border border-green-400/30 animate-pulse">
//                 <CheckCircle size={28} />
//                 <span className="font-medium">{statusMessage}</span>
//               </div>
//             )}

//             {status === 'error' && (
//               <div className="flex items-center gap-3 text-red-400 bg-red-400/10 px-6 py-4 rounded-2xl border border-red-400/30">
//                 <AlertCircle size={28} />
//                 <span className="font-medium">{statusMessage}</span>
//               </div>
//             )}
//           </form>

//           {/* Fallback Email */}
//           <div className={`mt-10 pt-8 border-t ${isDark ? 'border-white/10' : 'border-gray-300'} text-center`}>
//             <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
//               Or email me directly:
//             </p>
//             <a
//               href="mailto:maheshphatangare420@gmail.com"
//               className={`font-bold ${isDark ? 'text-cyan-400' : 'text-purple-600'} hover:underline`}
//             >
//               maheshphatangare420@gmail.com
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';

// ←←← REPLACE THESE WITH YOUR OWN ←←←
const EMAILJS_USER_ID = 'Bw0YFQmU7cYJ_y533';
const EMAILJS_SERVICE_ID = 'service_lu3fpve';
const EMAILJS_TEMPLATE_ID = 'template_0pci28x';

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.init(EMAILJS_USER_ID);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'maheshphatangare420@gmail.com',
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => {
        setStatus('success');
        setStatusMessage("Thank you! I've received your message. I'll reply soon! ✨");
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 8000);
      })
      .catch((error) => {
        setStatus('error');
        setStatusMessage('Something went wrong. Please try again or email me directly.');
        console.error(error);
      });
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Info */}
          <div className="space-y-10">
            <div>
              <h2 className={`text-5xl md:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Let's Work Together
              </h2>
              <p className={`mt-4 text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Have a project in mind? Want to collaborate? Or just say hello!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className={`p-4 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                  <Mail size={28} className={isDark ? 'text-cyan-400' : 'text-purple-600'} />
                </div>
                <div>
                  <p className="font-medium text-lg">Email Me</p>
                  <a href="mailto:maheshphatangare420@gmail.com" className="text-lg hover:underline text-purple-500">
                    maheshphatangare420@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className={`p-4 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                  <MapPin size={28} className={isDark ? 'text-cyan-400' : 'text-purple-600'} />
                </div>
                <div>
                  <p className="font-medium text-lg">Location</p>
                  <p className="text-lg">Nashik, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl ${isDark ? 'bg-white/5' : 'bg-gray-50'} border ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
              <p className="italic text-lg leading-relaxed">
                "I'm currently open to new opportunities and exciting projects."
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`rounded-3xl p-10 md:p-12 shadow-2xl relative ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-100'}`}>
            
            <form onSubmit={sendEmail} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`px-6 py-4 rounded-2xl transition-all focus:outline-none focus:ring-2 ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-cyan-400' 
                      : 'bg-gray-50 border border-gray-300 focus:border-purple-500'
                  }`}
                />
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`px-6 py-4 rounded-2xl transition-all focus:outline-none focus:ring-2 ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-cyan-400' 
                      : 'bg-gray-50 border border-gray-300 focus:border-purple-500'
                  }`}
                />
              </div>

              <textarea
                rows="6"
                required
                placeholder="Tell me about your project or just say hi..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-6 py-4 rounded-3xl transition-all focus:outline-none focus:ring-2 resize-none ${
                  isDark 
                    ? 'bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-cyan-400' 
                    : 'bg-gray-50 border border-gray-300 focus:border-purple-500'
                }`}
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500' 
                    : 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white'
                }`}
              >
                {status === 'sending' ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message <Send size={22} />
                  </>
                )}
              </button>
            </form>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-6 flex items-center gap-3 text-green-500 bg-green-500/10 p-5 rounded-2xl border border-green-500/30">
                <CheckCircle size={28} />
                <p className="font-medium">{statusMessage}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-6 flex items-center gap-3 text-red-500 bg-red-500/10 p-5 rounded-2xl border border-red-500/30">
                <AlertCircle size={28} />
                <p className="font-medium">{statusMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;