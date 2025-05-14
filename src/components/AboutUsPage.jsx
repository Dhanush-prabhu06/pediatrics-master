"use client";
import React from "react";
import {
  Heart,
  Award,
  Calendar,
  Star,
  ArrowRight,
  Users,
  BookOpen,
  Target,
  Coffee,
  Smile,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function AboutUsPage({ setCurrentPage }) {
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
                Dedicated to{" "}
                <span className="text-pink-600">Nurturing Families</span>
              </h1>
              <p className="text-lg text-purple-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                Meet our passionate team of pediatric specialists committed to
                providing exceptional care for mothers and their little ones.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Siri with patients"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 p-3 rounded-xl">
                    <Heart size={24} className="text-pink-600" />
                  </div>
                  <div>
                    <p className="text-purple-900 font-semibold">15+ Years</p>
                    <p className="text-sm text-purple-600">
                      Of compassionate care
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                Dr. Siri's Pediatric Practice was founded in 2008 with a simple
                mission: to provide comprehensive, compassionate care for
                mothers and their children. What began as a small, single-doctor
                practice has grown into a trusted healthcare destination for
                families throughout the region.
              </p>
              <p className="text-lg text-purple-700 mb-8 leading-relaxed">
                Dr. Siri, with her specialized training in maternal-fetal
                medicine and pediatrics, recognized the need for integrated care
                that supported mothers from pregnancy through their child's
                early years. This vision of continuous, connected care has
                guided our practice's growth and remains our foundation today.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                  <p className="text-pink-600 text-2xl font-bold">2,000+</p>
                  <p className="text-purple-700 text-sm">Happy Families</p>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                  <p className="text-pink-600 text-2xl font-bold">15+</p>
                  <p className="text-purple-700 text-sm">Years Experience</p>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                  <p className="text-pink-600 text-2xl font-bold">12</p>
                  <p className="text-purple-700 text-sm">Expert Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Meet Our Dedicated Team
            </h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto">
              Our multidisciplinary team brings together expertise in
              pediatrics, maternal health, lactation, and early childhood
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Siri Akka",
                role: "Founder & Lead Pediatrician",
                image:
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                bio: "With over 15 years of experience, Dr. Siri specializes in maternal-fetal medicine and pediatric care for infants and young children.",
              },
              {
                name: "Dr. Maya Rodriguez",
                role: "Pediatrician",
                image:
                  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                bio: "Dr. Rodriguez brings 8 years of pediatric experience with special focus on newborn care and developmental milestones.",
              },
              {
                name: "Sarah Johnson",
                role: "Certified Nurse-Midwife",
                image:
                  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                bio: "Sarah has assisted in over 500 births and provides exceptional prenatal and postpartum care for our mothers.",
              },
              {
                name: "Emily Chen",
                role: "Lactation Consultant",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                bio: "As an IBCLC-certified consultant, Emily helps new mothers navigate breastfeeding challenges with compassion and expertise.",
              },
              {
                name: "Dr. James Wilson",
                role: "Pediatric Nutritionist",
                image:
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                bio: "Dr. Wilson specializes in infant and childhood nutrition, helping families establish healthy eating patterns from day one.",
              },
              {
                name: "Lisa Thompson",
                role: "Child Development Specialist",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                bio: "With a background in early childhood education, Lisa conducts developmental assessments and provides guidance for parents.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-100"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pink-600 mb-4">{member.role}</p>
                  <p className="text-purple-700 mb-4">{member.bio}</p>
                  <button className="text-purple-700 font-medium flex items-center hover:text-pink-600 transition-colors">
                    Read more <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Mission and Values */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-pink-200 rounded-full opacity-50 -mr-32 -mt-32"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-200 rounded-full opacity-50 -ml-32 -mb-32"></div>

            <div className="relative">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-purple-900 mb-4">
                  Our Mission & Values
                </h2>
                <p className="text-lg text-purple-700 max-w-3xl mx-auto">
                  Every decision we make is guided by our commitment to
                  providing the best possible care for mothers and children.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Target className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-purple-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-purple-700 mb-4">
                    To provide compassionate, comprehensive care that supports
                    the health and wellbeing of mothers and their children from
                    pregnancy through early childhood, empowering families with
                    knowledge, resources, and exceptional medical care.
                  </p>
                  <p className="text-purple-700">
                    We strive to create a nurturing environment where every
                    mother feels heard, supported, and confident in the care of
                    her child.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Heart className="text-pink-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-purple-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-purple-700 mb-4">
                    To be the premier pediatric and maternal care provider,
                    recognized for excellence in comprehensive family-centered
                    healthcare that nurtures both the physical and emotional
                    wellbeing of our patients.
                  </p>
                  <p className="text-purple-700">
                    We envision a community where every child has the
                    opportunity to thrive under the care of informed, supported
                    parents and caregivers.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Compassion",
                    description:
                      "We treat each family with kindness, empathy and understanding.",
                    icon: <Heart className="text-pink-500" size={24} />,
                  },
                  {
                    title: "Excellence",
                    description:
                      "We strive for the highest standards in medical care and patient service.",
                    icon: <Award className="text-purple-500" size={24} />,
                  },
                  {
                    title: "Integrity",
                    description:
                      "We practice medicine with honesty, transparency and ethical standards.",
                    icon: <Shield className="text-pink-500" size={24} />,
                  },
                  {
                    title: "Innovation",
                    description:
                      "We embrace new approaches and technologies to enhance patient care.",
                    icon: <Lightbulb className="text-purple-500" size={24} />,
                  },
                  {
                    title: "Inclusivity",
                    description:
                      "We welcome and respect families of all backgrounds and compositions.",
                    icon: <Users className="text-pink-500" size={24} />,
                  },
                  {
                    title: "Education",
                    description:
                      "We empower families with knowledge to make informed health decisions.",
                    icon: <BookOpen className="text-purple-500" size={24} />,
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-purple-100"
                  >
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-purple-700">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              What Our Families Say
            </h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto">
              Read about the experiences of the families we've had the privilege
              to serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Dr. Siri has been caring for my two children since they were born. Her gentle approach and medical expertise give me complete peace of mind.",
                name: "Jessica Miller",
                role: "Mother of two",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
              },
              {
                quote:
                  "The lactation support I received was life-changing. Emily helped me overcome challenges I didn't think I could get through.",
                name: "Nina Thompson",
                role: "First-time mom",
                image:
                  "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
              },
              {
                quote:
                  "When we had concerns about our son's development, the team was thorough, supportive, and connected us with exactly the resources we needed.",
                name: "Marcus Johnson",
                role: "Father",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100"
              >
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      fill="#EC4899"
                      size={18}
                      className="text-pink-500 mr-1"
                    />
                  ))}
                </div>
                <p className="text-purple-800 mb-8 italic">
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

        {/* Call to Action */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 shadow-xl text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Experience the compassionate care and support that thousands of
              families trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-700 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                Schedule a Visit <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                Meet Our Team <Users size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

function Shield({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function Lightbulb({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18h6"></path>
      <path d="M10 22h4"></path>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
    </svg>
  );
}
