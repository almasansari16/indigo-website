// 'use client'
// import { useState } from "react";
// import NewsLatterBox from "./NewsLatterBox";
// import { sendMail } from "@/lib/mail";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle sending email
//   const handleSendMail = async (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page
//     await sendMail({
//       to: formData.email, // Use the email from form input
//       name: formData.name, // Use the name from form input
//       subject: `Quotation Request for ${product.productName}`,
//       body: `
//         <h1>Quotation Request</h1>
//         <p>Product: ${product.productName}</p>
//         <p>Name: ${formData.name}</p>
//         <p>Email: ${formData.email}</p>
//         <p>Message: ${formData.message}</p>
//       `,
//     });

//     alert("Quotation request sent successfully!");
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };
//   return (
//     <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div
//               className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
//               data-wow-delay=".15s
//               "
//             >
//               {/* <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
//                 Need Help? Open a Ticket
//               </h2> */}
//               <p className="mb-12 text-base font-medium text-body-color">
//                 Our marketing team will get back to you ASAP via email.
//               </p>
//               <form>
//                 <div className="-mx-4 flex flex-wrap">
//                   <div className="w-full px-4 md:w-1/2">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="name"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your name"
//                         className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4 md:w-1/2">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="email"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Email
//                       </label>
//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="message"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Message
//                       </label>
//                       <textarea
//                         name="message"
//                         rows={5}
//                         placeholder="Enter your Message"
//                         className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="w-full px-4">
//                     <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
//             {/* <NewsLatterBox /> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



// // // Os6H-c0XSg73PhtHr PUBLIC KEY
// // // service_c6028g9 SERVICE ID
// // // template_pni90c6 template id


'use client';
import { useState } from 'react';
import { sendMail } from '@/lib/mail'; // Ensure this function is implemented

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendMail = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    setIsSubmitting(true);
    setStatus('');
    try {
      await sendMail({
        to: 'indigotextile377@gmail.com', // Replace with the email where you want the mail to be sent
        name: formData.name, // Include the sender's name
        subject: `New Message from ${formData.name}`, // A dynamic subject line
        body: `
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        `,
      });
      setStatus('Your message was sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset the form
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <p className="mb-12 text-base font-medium text-body-color">
                Our marketing team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSendMail}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Enter your Message"
                        required
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                  </div>
                </div>
              </form>
              {status && <p className="mt-4 text-center">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
