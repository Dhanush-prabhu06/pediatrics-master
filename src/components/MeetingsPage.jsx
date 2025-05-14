"use client";
import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Plus,
  Search,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function MeetingsPage({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState("upcoming");

  const meetings = [
    {
      id: 1,
      title: "Child Nutrition Workshop",
      time: "9:00 AM - 9:30 AM",
      date: "Today",
      participants: 15,
      location: "Main Conference Room",
    },
    {
      id: 2,
      title: "Parenting Tips Seminar",
      time: "11:00 AM - 12:00 PM",
      date: "Today",
      participants: 20,
      location: "Virtual Meeting",
    },
    {
      id: 3,
      title: "Immunization Awareness Session",
      time: "2:00 PM - 3:30 PM",
      date: "Tomorrow",
      participants: 25,
      location: "Boardroom",
    },
    {
      id: 4,
      title: "Sleep Training for Babies",
      time: "10:00 AM - 11:30 AM",
      date: "May 5, 2025",
      participants: 18,
      location: "Meeting Room 3",
    },
  ];

  return (
    <div className="bg-rose-50 min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-purple-900">
              Workshops & Events
            </h1>
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-all">
              <Plus size={20} />
              <span>New Workshop</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-8 flex items-center">
            <Search size={24} className="text-pink-400 mr-3" />
            <input
              className="flex-1 outline-none text-purple-800 placeholder-purple-400 text-lg"
              placeholder="Search workshops..."
            />
          </div>

          {/* Tabs */}
          <div className="flex mb-6 border-b border-purple-200">
            <button
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === "upcoming"
                  ? "text-pink-600 border-b-4 border-pink-500"
                  : "text-purple-400"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === "past"
                  ? "text-pink-600 border-b-4 border-pink-500"
                  : "text-purple-400"
              }`}
              onClick={() => setActiveTab("past")}
            >
              Past
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === "recurring"
                  ? "text-pink-600 border-b-4 border-pink-500"
                  : "text-purple-400"
              }`}
              onClick={() => setActiveTab("recurring")}
            >
              Recurring
            </button>
          </div>

          {/* Meetings List */}
          <div className="space-y-6">
            {meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-purple-100"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-900">
                      {meeting.title}
                    </h3>
                    <div className="flex items-center text-purple-700 mt-2">
                      <Calendar size={20} className="mr-2 text-pink-500" />
                      <span>{meeting.date}</span>
                    </div>
                    <div className="flex items-center text-purple-700 mt-2">
                      <Clock size={20} className="mr-2 text-pink-500" />
                      <span>{meeting.time}</span>
                    </div>
                    <div className="flex items-center text-purple-700 mt-2">
                      <Users size={20} className="mr-2 text-pink-500" />
                      <span>{meeting.participants} participants</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-purple-500 hover:text-pink-600 mr-3">
                      <MoreHorizontal size={24} />
                    </button>
                    <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full p-3">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-purple-500 text-sm">
                  {meeting.location}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left border border-purple-100">
              <div className="flex items-center text-purple-800 font-medium mb-2">
                <Calendar size={24} className="mr-3 text-pink-500" />
                View Calendar
              </div>
              <p className="text-purple-600 text-sm">
                See your schedule at a glance
              </p>
            </button>
            <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left border border-purple-100">
              <div className="flex items-center text-purple-800 font-medium mb-2">
                <Users size={24} className="mr-3 text-pink-500" />
                Manage Participants
              </div>
              <p className="text-purple-600 text-sm">
                Add or remove workshop attendees
              </p>
            </button>
            <button className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left border border-purple-100">
              <div className="flex items-center text-purple-800 font-medium mb-2">
                <Clock size={24} className="mr-3 text-pink-500" />
                Workshop History
              </div>
              <p className="text-purple-600 text-sm">
                Review past workshop details
              </p>
            </button>
          </div>
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
