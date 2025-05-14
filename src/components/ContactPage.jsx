"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  Calendar,
  Users,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function ContactPage({ setCurrentPage }) {
  return (
    <div className="bg-rose-50 min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-70"></div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-6 leading-tight">
                We're Here <span className="text-pink-600">For You</span>
              </h1>
              <p className="text-lg text-purple-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                Have questions or need support? Our caring team is just a
                message away and ready to assist you with anything you need.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information & Form */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg mb-10 opacity-90">
                  Feel free to reach out to us through any of these channels. We
                  strive to respond to all inquiries within 24 hours.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Call us at</p>
                      <p className="font-medium">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Email us at</p>
                      <p className="font-medium">care@drsiri.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Find us at</p>
                      <p className="font-medium">
                        123 Main Street, City, State 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Office hours</p>
                      <p className="font-medium">
                        Mon-Fri: 8am-6pm, Sat: 9am-1pm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="font-medium mb-4">Follow us on social media</p>
                  <div className="flex space-x-4">
                    {[
                      { icon: <Facebook size={20} />, label: "Facebook" },
                      { icon: <Instagram size={20} />, label: "Instagram" },
                      { icon: <Youtube size={20} />, label: "YouTube" },
                      { icon: <Twitter size={20} />, label: "Twitter" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-purple-900 mb-6">
                  Send Us a Message
                </h3>
                <form>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">
                        Subject
                      </label>
                      <select className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all">
                        <option>General Inquiry</option>
                        <option>Appointment Scheduling</option>
                        <option>Service Information</option>
                        <option>Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-purple-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all h-32 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                        Send Message{" "}
                        <MessageCircle size={16} className="ml-2" />
                      </button>
                      <p className="text-sm text-purple-600 text-center mt-3">
                        We respect your privacy and will never share your
                        information.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-purple-100">
              <h3 className="text-xl font-bold text-purple-900">
                Find Our Location
              </h3>
              <p className="text-purple-700">
                Conveniently located in the heart of the city
              </p>
            </div>
            <div className="h-96 bg-purple-100 relative">
              {/* This would be replaced by an actual map component in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-purple-700 bg-white px-4 py-2 rounded-lg shadow-md">
                  Interactive map would be displayed here
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start">
                <MapPin
                  className="text-pink-600 mr-2 mt-1 flex-shrink-0"
                  size={18}
                />
                <p className="text-purple-800">
                  123 Main Street, City, State 12345 - Across from Central Park,
                  with convenient parking available in the adjacent structure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Support Options */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Quick Support Options
            </h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto">
              Need immediate assistance? Choose the option that works best for
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Schedule an Appointment",
                description:
                  "Book a consultation with Dr. Siri or one of our specialists",
                icon: <Calendar className="text-pink-600" size={24} />,
                action: "Book Now",
                onClick: () => setCurrentPage && setCurrentPage("meetings"),
              },
              {
                title: "24/7 Parent Helpline",
                description: "Emergency support available for urgent concerns",
                icon: <Phone className="text-purple-600" size={24} />,
                action: "Call Now",
                onClick: () => {},
              },
              {
                title: "Join Parent Support Group",
                description: "Connect with other parents in our community",
                icon: <Users className="text-pink-600" size={24} />,
                action: "Join Group",
                onClick: () => setCurrentPage && setCurrentPage("social"),
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border border-purple-100"
              >
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-purple-700 mb-6">{option.description}</p>
                <button
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center"
                  onClick={option.onClick}
                >
                  {option.action} <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-purple-700 max-w-3xl mx-auto">
                Find quick answers to common questions about our services and
                policies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "What insurance plans do you accept?",
                  answer:
                    "We accept most major insurance plans including BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, and Medicare. Please contact our office for specific insurance verification.",
                },
                {
                  question: "How do I schedule an appointment?",
                  answer:
                    "You can schedule an appointment by calling our office, using our online booking system, or through the patient portal. We offer same-day appointments for urgent concerns.",
                },
                {
                  question: "What should I bring to my first appointment?",
                  answer:
                    "Please bring your insurance card, photo ID, list of current medications, medical records if available, and completed new patient forms (available on our website).",
                },
                {
                  question: "Do you offer virtual appointments?",
                  answer:
                    "Yes, we offer telehealth appointments for certain types of visits. These can be scheduled through our online portal or by calling our office.",
                },
                {
                  question: "What is your cancellation policy?",
                  answer:
                    "We request at least 24 hours notice for appointment cancellations. Late cancellations or no-shows may incur a fee as outlined in our office policies.",
                },
                {
                  question: "How can I access my child's medical records?",
                  answer:
                    "You can access your child's medical records through our secure patient portal. For complete records or special requests, please contact our office directly.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-purple-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-lg text-purple-800 mb-4">
                Still have questions?
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center">
                Contact Our Support Team{" "}
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 shadow-xl text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for parenting tips, health
              information, and clinic updates.
            </p>
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  className="flex-grow p-3 rounded-full border-2 border-white bg-transparent placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your email address"
                />
                <button className="bg-white text-purple-700 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center whitespace-nowrap">
                  Subscribe Now <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
              <p className="text-sm mt-4 opacity-80">
                We respect your privacy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
