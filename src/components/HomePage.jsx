"use client";
import React from "react";
import {
  Heart,
  CalendarCheck,
  MessageCircle,
  Baby,
  Award,
  Mail,
  ArrowRight,
  Phone,
  MapPin,
  Users,
  BookOpen,
  Clock,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

import Siri from "../assets/SiriPhoto.png";

export default function HomePage({ setCurrentPage }) {
  return (
    <div className="bg-rose-50 min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-70"></div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-6 leading-tight">
                  Nurturing Every Step of Your{" "}
                  <span className="text-pink-600">Motherhood Journey</span>
                </h1>
                <p className="text-lg text-purple-700 mb-8 leading-relaxed">
                  Compassionate pediatric care for expectant mothers and
                  newborns, providing the support, guidance, and expert care you
                  deserve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center">
                    Book a Consultation{" "}
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                  <button className="bg-white text-purple-700 border-2 border-purple-200 font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:border-purple-300 transition-all flex items-center justify-center">
                    Call Now <Phone size={18} className="ml-2" />
                  </button>
                </div>
                <div className="mt-8 flex items-center text-pink-700">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 rounded-full border-2 border-white bg-pink-${i}00 flex items-center justify-center text-white font-bold`}
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">Trusted by 2,000+ mothers</div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Heart
                          key={i}
                          size={14}
                          fill="#EC4899"
                          className="text-pink-500"
                        />
                      ))}
                      <span className="ml-1 text-sm">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mother and baby"
                  className="relative w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-3 rounded-xl">
                      <Heart size={24} className="text-pink-600" />
                    </div>
                    <div>
                      <p className="text-purple-900 font-semibold">24/7 Care</p>
                      <p className="text-sm text-purple-600">
                        Always here for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Specialized Care for Every Stage
            </h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto">
              From pregnancy to postpartum, we provide comprehensive care and
              support tailored to your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prenatal Care",
                description:
                  "Expert guidance and monitoring throughout your pregnancy journey",
                icon: <CalendarCheck className="text-pink-500" size={24} />,
                color: "bg-pink-50",
                accent: "border-pink-200",
              },
              {
                title: "Newborn Care",
                description:
                  "Gentle and attentive care for your precious new arrival",
                icon: <Baby className="text-purple-500" size={24} />,
                color: "bg-purple-50",
                accent: "border-purple-200",
              },
              {
                title: "Lactation Support",
                description:
                  "Expert guidance to help you navigate breastfeeding challenges",
                icon: <Heart className="text-rose-500" size={24} />,
                color: "bg-rose-50",
                accent: "border-rose-200",
              },
              {
                title: "Postpartum Wellness",
                description:
                  "Comprehensive physical and emotional support after birth",
                icon: <Award className="text-fuchsia-500" size={24} />,
                color: "bg-fuchsia-50",
                accent: "border-fuchsia-200",
              },
              {
                title: "Parenting Resources",
                description:
                  "Educational materials and workshops for confident parenting",
                icon: <BookOpen className="text-pink-500" size={24} />,
                color: "bg-pink-50",
                accent: "border-pink-200",
              },
              {
                title: "Community Support",
                description:
                  "Connect with other mothers in our supportive community",
                icon: <Users className="text-purple-500" size={24} />,
                color: "bg-purple-50",
                accent: "border-purple-200",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`${service.color} border-l-4 ${service.accent} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all`}
              >
                <div className="bg-white w-12 h-12 rounded-xl shadow-sm flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-purple-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Dr. Siri Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">
                  Meet Dr. Siri
                </h2>
                <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                  With over 15 years of specialized experience in maternal and
                  pediatric care, Dr. Siri has dedicated her career to
                  supporting mothers through every step of their journey.
                </p>
                <p className="text-lg text-purple-700 mb-8 leading-relaxed">
                  Her gentle approach and deep expertise in both prenatal and
                  newborn care have made her a trusted resource for thousands of
                  families.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                    <p className="text-pink-600 text-2xl font-bold">15+</p>
                    <p className="text-purple-700 text-sm">Years Experience</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                    <p className="text-pink-600 text-2xl font-bold">2,000+</p>
                    <p className="text-purple-700 text-sm">Happy Mothers</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                    <p className="text-pink-600 text-2xl font-bold">24/7</p>
                    <p className="text-purple-700 text-sm">Support</p>
                  </div>
                </div>
                <button className="bg-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-purple-700 transition-all self-start flex items-center">
                  Learn More About Dr. Siri{" "}
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
              <div className="relative h-full min-h-[400px] lg:min-h-0">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Siri"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Words from Our Community
            </h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto">
              Hear from mothers who have experienced our compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emma Thompson",
                role: "First-time Mother",
                quote:
                  "Dr. Siri's guidance during my pregnancy was invaluable. Her calm and compassionate approach made me feel supported every step of the way.",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
              },
              {
                name: "Sophie Williams",
                role: "Mother of Twins",
                quote:
                  "The postpartum support I received was exceptional. The team understood my unique challenges with twins and provided practical, caring advice.",
                image:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
              },
              {
                name: "Maya Rodriguez",
                role: "Mother of 3",
                quote:
                  "I've been bringing all my children to Dr. Siri since they were born. Her expertise and genuine care for my family have been consistent for years.",
                image:
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Heart
                      key={i}
                      fill="#EC4899"
                      size={16}
                      className="text-pink-500 mr-1"
                    />
                  ))}
                </div>
                <p className="text-purple-800 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-medium text-purple-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-pink-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources & Classes */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-pink-200 rounded-full opacity-50 -mr-32 -mt-32"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-200 rounded-full opacity-50 -ml-32 -mb-32"></div>

            <div className="relative">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-purple-900 mb-4">
                  Upcoming Workshops & Resources
                </h2>
                <p className="text-lg text-purple-800 max-w-3xl mx-auto">
                  Join our community events and access valuable resources
                  designed for new and expecting mothers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">
                      Upcoming Workshops
                    </h3>
                    <div className="space-y-4 mt-4">
                      {[
                        {
                          title: "Breastfeeding Basics",
                          date: "May 15, 2023",
                          time: "10:00 AM - 11:30 AM",
                        },
                        {
                          title: "Newborn Sleep Techniques",
                          date: "May 22, 2023",
                          time: "2:00 PM - 3:30 PM",
                        },
                        {
                          title: "Postpartum Self-Care",
                          date: "June 5, 2023",
                          time: "11:00 AM - 12:30 PM",
                        },
                      ].map((workshop, index) => (
                        <div
                          key={index}
                          className="flex items-start py-3 border-b border-pink-100 last:border-0"
                        >
                          <div className="bg-pink-100 p-3 rounded-lg mr-4">
                            <CalendarCheck
                              size={20}
                              className="text-pink-600"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-purple-900">
                              {workshop.title}
                            </h4>
                            <div className="flex items-center text-sm text-purple-700 mt-1">
                              <Clock size={14} className="mr-1" />
                              {workshop.date}, {workshop.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                      View All Workshops{" "}
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">
                      Free Resources
                    </h3>
                    <div className="space-y-4 mt-4">
                      {[
                        {
                          title: "Essential Newborn Care Guide",
                          type: "PDF Guide",
                          icon: (
                            <BookOpen size={20} className="text-purple-600" />
                          ),
                        },
                        {
                          title: "Healthy Pregnancy Nutrition Plan",
                          type: "Meal Planner",
                          icon: <Heart size={20} className="text-purple-600" />,
                        },
                        {
                          title: "Postpartum Recovery Checklist",
                          type: "Checklist",
                          icon: <Award size={20} className="text-purple-600" />,
                        },
                      ].map((resource, index) => (
                        <div
                          key={index}
                          className="flex items-start py-3 border-b border-purple-100 last:border-0"
                        >
                          <div className="bg-purple-100 p-3 rounded-lg mr-4">
                            {resource.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-purple-900">
                              {resource.title}
                            </h4>
                            <p className="text-sm text-purple-700 mt-1">
                              {resource.type}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                      Download Resources{" "}
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <h2 className="text-3xl font-bold mb-6">We're Here For You</h2>
                <p className="text-lg mb-8 opacity-90">
                  Have questions or need support? Our caring team is just a
                  message away.
                </p>

                <div className="space-y-6">
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
                  <p className="font-medium mb-4">
                    24/7 Emergency Support Available
                  </p>
                  <button className="bg-white text-purple-700 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center">
                    Call Emergency Line <Phone size={16} className="ml-2" />
                  </button>
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
                        How Can We Help?
                      </label>
                      <textarea
                        className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all h-32 resize-none"
                        placeholder="Tell us how we can support you..."
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                        Send Message{" "}
                        <MessageCircle size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
