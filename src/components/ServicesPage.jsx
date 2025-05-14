"use client";
import React from "react";
import {
  Heart,
  Baby,
  Award,
  MessageCircle,
  Calendar,
  Clock,
  BookOpen,
  ArrowRight,
  Shield,
  Users,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function ServicesPage({ setCurrentPage }) {
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
                Comprehensive{" "}
                <span className="text-pink-600">Pediatric Services</span>
              </h1>
              <p className="text-lg text-purple-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                From pregnancy through early childhood, we provide specialized
                care tailored to each stage of your family's journey.
              </p>
            </div>
          </div>
        </div>

        {/* Main Services Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Prenatal Care",
                description:
                  "Expert guidance and monitoring throughout your pregnancy journey. We provide comprehensive prenatal checkups, ultrasounds, genetic testing, personalized birth plans, and nutritional guidance to ensure a healthy pregnancy.",
                icon: <Calendar className="text-pink-500" size={28} />,
                color: "bg-pink-50",
                border: "border-pink-200",
                features: [
                  "Regular prenatal checkups",
                  "Nutritional counseling",
                  "Birth plan development",
                  "Gestational diabetes screening",
                  "Pregnancy complication management",
                ],
              },
              {
                title: "Newborn Care",
                description:
                  "Gentle and attentive care for your precious new arrival. Our comprehensive newborn services include well-baby visits, growth monitoring, breastfeeding support, immunizations, and developmental screening.",
                icon: <Baby className="text-purple-500" size={28} />,
                color: "bg-purple-50",
                border: "border-purple-200",
                features: [
                  "Newborn screening tests",
                  "Well-baby checkups",
                  "Growth and development monitoring",
                  "Immunization schedules",
                  "Jaundice monitoring and treatment",
                ],
              },
              {
                title: "Lactation Support",
                description:
                  "Expert guidance to help you navigate breastfeeding challenges. Our certified lactation consultants provide personalized support to help you establish a successful breastfeeding relationship with your baby.",
                icon: <Heart className="text-rose-500" size={28} />,
                color: "bg-rose-50",
                border: "border-rose-200",
                features: [
                  "One-on-one breastfeeding sessions",
                  "Latch technique guidance",
                  "Milk supply management",
                  "Pumping strategies",
                  "Relief for common breastfeeding issues",
                ],
              },
              {
                title: "Postpartum Wellness",
                description:
                  "Comprehensive physical and emotional support after birth. We understand the challenges of the postpartum period and offer services to support your recovery and adjustment to parenthood.",
                icon: <Award className="text-fuchsia-500" size={28} />,
                color: "bg-fuchsia-50",
                border: "border-fuchsia-200",
                features: [
                  "Postpartum recovery monitoring",
                  "Mental health screening",
                  "Physical healing support",
                  "New parent counseling",
                  "Baby care education",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`${service.color} border ${service.border} rounded-2xl p-8 shadow-md`}
              >
                <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-purple-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-purple-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-pink-500 mr-2 mt-1">•</div>
                      <span className="text-purple-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 bg-white border border-purple-200 text-purple-700 font-medium py-2 px-6 rounded-full shadow-sm hover:shadow-md transition-all flex items-center">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Additional Specialized Services
            </h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto">
              Beyond our core services, we offer specialized care to meet all
              your family's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Developmental Screenings",
                description:
                  "Regular assessments to ensure your child is meeting important milestones.",
                icon: <Shield className="text-pink-500" size={20} />,
              },
              {
                title: "Immunization Services",
                description:
                  "Complete vaccination schedules following the latest medical guidelines.",
                icon: <Shield className="text-purple-500" size={20} />,
              },
              {
                title: "Sick Child Visits",
                description:
                  "Same-day appointments available for unexpected illnesses.",
                icon: <Heart className="text-pink-500" size={20} />,
              },
              {
                title: "Nutrition Counseling",
                description:
                  "Expert advice on infant and child nutrition for optimal growth.",
                icon: <Award className="text-purple-500" size={20} />,
              },
              {
                title: "Family Planning",
                description: "Resources and guidance for growing your family.",
                icon: <Users className="text-pink-500" size={20} />,
              },
              {
                title: "Parenting Classes",
                description:
                  "Educational workshops on various aspects of child care.",
                icon: <BookOpen className="text-purple-500" size={20} />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-pink-100"
              >
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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

        {/* Service Packages */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl overflow-hidden shadow-lg p-8 lg:p-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-purple-900 mb-4">
                Care Packages for Every Family
              </h2>
              <p className="text-lg text-purple-700 max-w-3xl mx-auto">
                Choose the perfect care plan that fits your family's needs and
                stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Expecting Parents",
                  price: "$299",
                  description: "Complete prenatal care package",
                  features: [
                    "Monthly prenatal checkups",
                    "2 scheduled ultrasounds",
                    "Nutritional counseling",
                    "Childbirth preparation classes",
                    "24/7 on-call support",
                  ],
                  cta: "Best for first pregnancies",
                },
                {
                  name: "New Family",
                  price: "$349",
                  highlight: true,
                  description: "Comprehensive newborn & postpartum care",
                  features: [
                    "Weekly newborn checkups (first month)",
                    "Lactation support (3 sessions)",
                    "Postpartum care (3 visits)",
                    "24/7 new parent helpline",
                    "Baby care essentials class",
                  ],
                  cta: "Most popular choice",
                },
                {
                  name: "Growing Family",
                  price: "$199",
                  description: "Ongoing pediatric care package",
                  features: [
                    "Quarterly well-child visits",
                    "All recommended immunizations",
                    "Developmental assessments",
                    "Nutritional guidance",
                    "Parenting support resources",
                  ],
                  cta: "Perfect for children 1-5 years",
                },
              ].map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white ring-4 ring-pink-200"
                      : "bg-white border border-purple-100"
                  }`}
                >
                  <div className="text-center pb-4">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        pkg.highlight ? "text-white" : "text-purple-900"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <div className="flex justify-center items-end">
                      <span
                        className={`text-3xl font-bold ${
                          pkg.highlight ? "text-white" : "text-pink-600"
                        }`}
                      >
                        {pkg.price}
                      </span>
                      <span
                        className={
                          pkg.highlight ? "text-pink-100" : "text-purple-700"
                        }
                      >
                        /package
                      </span>
                    </div>
                    <p
                      className={`mt-2 ${
                        pkg.highlight ? "text-pink-100" : "text-purple-700"
                      }`}
                    >
                      {pkg.description}
                    </p>
                  </div>
                  <div className="border-t border-b py-4 my-4 border-opacity-20 border-purple-200">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div
                            className={`mr-2 ${
                              pkg.highlight ? "text-pink-200" : "text-pink-500"
                            }`}
                          >
                            •
                          </div>
                          <span
                            className={
                              pkg.highlight ? "text-white" : "text-purple-800"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 text-center">
                    <button
                      className={`w-full py-3 px-6 rounded-full font-medium shadow-md transition-all ${
                        pkg.highlight
                          ? "bg-white text-purple-700 hover:shadow-lg"
                          : "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg"
                      }`}
                    >
                      Select Package
                    </button>
                    <p
                      className={`mt-2 text-sm ${
                        pkg.highlight ? "text-pink-100" : "text-purple-600"
                      }`}
                    >
                      {pkg.cta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 shadow-xl text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Schedule Your Appointment?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Our team is ready to provide the exceptional care your family
              deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-700 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                Book a Consultation <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                View All Services <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
