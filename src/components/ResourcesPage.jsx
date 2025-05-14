"use client";
import React from "react";
import {
  BookOpen,
  FileText,
  Video,
  Calendar,
  ArrowRight,
  Download,
  ExternalLink,
  Play,
  Clock,
  Heart,
  Star,
  Users,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function ResourcesPage({ setCurrentPage }) {
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
                Knowledge is <span className="text-pink-600">Empowerment</span>
              </h1>
              <p className="text-lg text-purple-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                Access our collection of trusted resources, workshops, and
                educational materials designed to support you throughout your
                motherhood journey.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-lg overflow-hidden">
              <div className="p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">
                  New Parent Essentials
                </h2>
                <p className="mb-6 text-pink-100">
                  Our most comprehensive guide for navigating the first year of
                  parenthood. Download this free resource packed with expert
                  advice.
                </p>
                <button className="bg-white text-purple-700 font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center">
                  Download Guide <Download size={18} className="ml-2" />
                </button>
              </div>
              <div className="h-48 md:h-auto bg-purple-200">
                <img
                  src={require("../assets/kyle-nieber-GVmWNaaT_84-unsplash.jpg")}
                  alt="Mother with newborn baby"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100">
                <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Video className="text-pink-600" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  Breastfeeding Basics
                </h3>
                <p className="text-purple-700 mb-4">
                  A comprehensive video series on breastfeeding techniques and
                  common challenges.
                </p>
                <button className="text-purple-700 font-medium flex items-center hover:text-pink-600 transition-colors">
                  Watch videos <ArrowRight size={16} className="ml-2" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100">
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="text-purple-600" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  Upcoming Workshops
                </h3>
                <p className="text-purple-700 mb-4">
                  Join our in-person and virtual workshops led by pediatric
                  specialists.
                </p>
                <button
                  className="text-purple-700 font-medium flex items-center hover:text-pink-600 transition-colors"
                  onClick={() => setCurrentPage && setCurrentPage("meetings")}
                >
                  View schedule <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Browse Resources by Category
            </h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto">
              Find the information you need, organized by stage and topic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pregnancy",
                icon: <Heart className="text-pink-500" size={24} />,
                resources: [
                  "Trimester-by-trimester guides",
                  "Nutrition during pregnancy",
                  "Managing pregnancy discomfort",
                  "Birth plan templates",
                  "Hospital bag checklist",
                ],
                color: "bg-pink-50",
                border: "border-pink-200",
              },
              {
                title: "Newborn Care",
                icon: <BookOpen className="text-purple-500" size={24} />,
                resources: [
                  "Newborn sleep patterns",
                  "Feeding schedules & guidance",
                  "Diapering & bathing basics",
                  "Understanding baby cues",
                  "Developmental milestones",
                ],
                color: "bg-purple-50",
                border: "border-purple-200",
              },
              {
                title: "Postpartum Wellness",
                icon: <Heart className="text-pink-500" size={24} />,
                resources: [
                  "Physical recovery tips",
                  "Emotional wellbeing resources",
                  "Partner support guides",
                  "Return to work planning",
                  "Self-care strategies",
                ],
                color: "bg-pink-50",
                border: "border-pink-200",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`${category.color} border ${category.border} rounded-2xl p-6 shadow-md`}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white w-14 h-14 rounded-xl shadow-sm flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-purple-900">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {category.resources.map((resource, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-pink-500 mr-2 mt-1">•</div>
                      <span className="text-purple-800">{resource}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white text-purple-700 border border-purple-100 font-medium py-2 px-6 rounded-full shadow-sm hover:shadow-md transition-all flex items-center justify-center">
                  View Resources <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-900 mb-4">
                Downloadable Resources
              </h2>
              <p className="text-lg text-purple-700 max-w-3xl mx-auto">
                Free guides, checklists, and templates to help you stay
                organized and informed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Baby's First Year Milestone Tracker",
                  type: "PDF Guide",
                  icon: <FileText className="text-purple-600" size={20} />,
                  downloads: "3.2k",
                },
                {
                  title: "Breastfeeding Journal & Tracker",
                  type: "Printable Template",
                  icon: <FileText className="text-pink-600" size={20} />,
                  downloads: "2.8k",
                },
                {
                  title: "Newborn Sleep Schedule Guide",
                  type: "PDF Guide",
                  icon: <FileText className="text-purple-600" size={20} />,
                  downloads: "4.5k",
                },
                {
                  title: "Pregnancy Nutrition Meal Planner",
                  type: "PDF Template",
                  icon: <FileText className="text-pink-600" size={20} />,
                  downloads: "2.1k",
                },
                {
                  title: "Baby-Proofing Home Checklist",
                  type: "PDF Checklist",
                  icon: <FileText className="text-purple-600" size={20} />,
                  downloads: "1.9k",
                },
                {
                  title: "Postpartum Recovery Plan",
                  type: "PDF Guide",
                  icon: <FileText className="text-pink-600" size={20} />,
                  downloads: "3.7k",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-md border border-purple-100 flex"
                >
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-purple-900 mb-1">
                      {resource.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-purple-700">{resource.type}</p>
                      <p className="text-xs text-pink-600">
                        {resource.downloads} downloads
                      </p>
                    </div>
                    <button className="mt-2 text-purple-700 text-sm font-medium flex items-center hover:text-pink-600 transition-colors">
                      Download <Download size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center">
                View All Resources <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Library */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Educational Video Library
            </h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto">
              Watch expert demonstrations and advice on various aspects of
              maternal and infant care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Breastfeeding Positions & Latch Techniques",
                duration: "18:24",
                thumbnail:
                  "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                views: "15.2k",
              },
              {
                title: "Newborn Bathing Demonstration",
                duration: "12:05",
                thumbnail:
                  "https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                views: "10.8k",
              },
              {
                title: "Baby Sleep Tips from Sleep Specialists",
                duration: "22:30",
                thumbnail:
                  "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                views: "19.3k",
              },
              {
                title: "Baby-Led Weaning Introduction",
                duration: "15:47",
                thumbnail:
                  "https://images.unsplash.com/photo-1596797038530-2c107aa8e0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                views: "8.7k",
              },
              {
                title: "Postpartum Exercise Routine",
                duration: "28:15",
                thumbnail:
                  "https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                views: "12.4k",
              },
              {
                title: "Understanding Baby's Developmental Milestones",
                duration: "20:33",
                thumbnail:
                  "https://images.unsplash.com/photo-1565548058679-92505f4fad1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                views: "14.9k",
              },
            ].map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-purple-100"
              >
                <div className="relative h-48">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <Clock size={14} className="mr-1" />
                    <span className="text-sm">{video.duration}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-80 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
                      <Play
                        fill="#D946EF"
                        size={20}
                        className="text-pink-600 ml-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    {video.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <button className="text-purple-700 text-sm font-medium flex items-center hover:text-pink-600 transition-colors">
                      Watch now <ExternalLink size={14} className="ml-1" />
                    </button>
                    <p className="text-xs text-purple-600">
                      {video.views} views
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center">
              Browse All Videos <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Upcoming Workshops */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <h2 className="text-3xl font-bold mb-6">Upcoming Workshops</h2>
                <p className="text-lg mb-8 opacity-90">
                  Join our expert-led sessions designed to equip you with
                  practical knowledge and skills for your parenting journey.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Breastfeeding Basics",
                      date: "May 15, 2023",
                      time: "10:00 AM - 11:30 AM",
                      location: "Online (Zoom)",
                    },
                    {
                      title: "Newborn Sleep Techniques",
                      date: "May 22, 2023",
                      time: "2:00 PM - 3:30 PM",
                      location: "Main Office",
                    },
                    {
                      title: "Postpartum Self-Care",
                      date: "June 5, 2023",
                      time: "11:00 AM - 12:30 PM",
                      location: "Online (Zoom)",
                    },
                  ].map((workshop, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4 flex-shrink-0">
                        <Calendar size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{workshop.title}</h3>
                        <p className="text-sm opacity-90 mt-1">
                          {workshop.date}, {workshop.time}
                        </p>
                        <p className="text-sm opacity-80">
                          {workshop.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="mt-8 bg-white text-purple-700 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center"
                  onClick={() => setCurrentPage && setCurrentPage("meetings")}
                >
                  View All Workshops <ArrowRight size={16} className="ml-2" />
                </button>
              </div>

              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-purple-900 mb-6">
                  Register for a Workshop
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
                        Select Workshop
                      </label>
                      <select className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all">
                        <option>Breastfeeding Basics (May 15)</option>
                        <option>Newborn Sleep Techniques (May 22)</option>
                        <option>Postpartum Self-Care (June 5)</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                        Register Now <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Community Support */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-purple-800 mb-8 max-w-3xl mx-auto">
              Connect with other parents, share experiences, and access
              exclusive resources through our supportive community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {[
                { name: "Facebook Group", members: "2.3k members" },
                { name: "Monthly Meetups", members: "Local groups" },
                { name: "Parent Forum", members: "24/7 support" },
              ].map((group, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full px-6 py-3 shadow-md flex items-center"
                >
                  <Users className="text-pink-600 mr-2" size={18} />
                  <div className="text-left">
                    <p className="font-medium text-purple-900">{group.name}</p>
                    <p className="text-xs text-purple-700">{group.members}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center">
              Learn More <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
