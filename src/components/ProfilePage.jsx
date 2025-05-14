"use client";
import { useState } from "react";
import {
  User,
  Settings,
  Calendar,
  Bell,
  Edit,
  Camera,
  Shield,
  LogOut,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function ProfilePage({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="bg-rose-50 min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
                      S
                    </div>
                    <button className="absolute bottom-0 right-0 bg-pink-500 p-2 rounded-full text-white">
                      <Camera size={16} />
                    </button>
                  </div>
                  <h2 className="text-xl font-semibold text-purple-900">
                    Sarah Johnson
                  </h2>
                  <p className="text-purple-500 text-sm">sarah.j@example.com</p>
                </div>
              </div>
              <div className="border-t border-purple-100">
                <ul>
                  {[
                    {
                      name: "Profile",
                      icon: <User size={18} />,
                      id: "profile",
                    },
                    {
                      name: "Settings",
                      icon: <Settings size={18} />,
                      id: "settings",
                    },
                    {
                      name: "Appointments",
                      icon: <Calendar size={18} />,
                      id: "appointments",
                    },
                    {
                      name: "Notifications",
                      icon: <Bell size={18} />,
                      id: "notifications",
                    },
                    {
                      name: "Privacy",
                      icon: <Shield size={18} />,
                      id: "privacy",
                    },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        className={`flex items-center w-full px-6 py-3 hover:bg-purple-50 ${
                          activeTab === item.id
                            ? "text-pink-600 bg-purple-50 border-l-4 border-pink-500"
                            : "text-purple-700"
                        }`}
                        onClick={() => setActiveTab(item.id)}
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-purple-100">
                <button
                  className="flex items-center text-purple-700 hover:text-pink-600"
                  onClick={() => setCurrentPage && setCurrentPage("home")}
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-6">
              {activeTab === "profile" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900">
                      Personal Information
                    </h2>
                    <button className="text-pink-600 hover:text-pink-700 flex items-center">
                      <Edit size={18} className="mr-1" /> Edit
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-purple-600 mb-1">
                        Full Name
                      </label>
                      <p className="text-purple-900">Sarah Johnson</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-purple-600 mb-1">
                        Email
                      </label>
                      <p className="text-purple-900">sarah.j@example.com</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-purple-600 mb-1">
                        Phone
                      </label>
                      <p className="text-purple-900">(555) 123-4567</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-purple-600 mb-1">
                        Date of Birth
                      </label>
                      <p className="text-purple-900">May 12, 1985</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-purple-900 mb-4 border-t border-purple-100 pt-6">
                    Parental Information
                  </h3>

                  <div className="mb-8">
                    <h4 className="text-md font-medium text-purple-800 mb-3">
                      Children
                    </h4>
                    {[
                      {
                        name: "Emily Johnson",
                        age: "5 years",
                        gender: "Female",
                      },
                      { name: "Noah Johnson", age: "2 years", gender: "Male" },
                    ].map((child, index) => (
                      <div
                        key={index}
                        className="bg-purple-50 rounded-lg p-4 mb-2 flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium text-purple-900">
                            {child.name}
                          </p>
                          <p className="text-sm text-purple-700">
                            {child.age} • {child.gender}
                          </p>
                        </div>
                        <button className="text-pink-600 hover:text-pink-700">
                          <Edit size={16} />
                        </button>
                      </div>
                    ))}
                    <button className="mt-3 text-pink-600 font-medium hover:text-pink-700 flex items-center">
                      + Add another child
                    </button>
                  </div>

                  <h3 className="text-xl font-semibold text-purple-900 mb-4 border-t border-purple-100 pt-6">
                    Address Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-purple-600 mb-1">
                        Street Address
                      </label>
                      <p className="text-purple-900">123 Main Street</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-purple-600 mb-1">
                        City
                      </label>
                      <p className="text-purple-900">Anytown</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-purple-600 mb-1">
                        State
                      </label>
                      <p className="text-purple-900">CA</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-purple-600 mb-1">
                        Zip Code
                      </label>
                      <p className="text-purple-900">12345</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "appointments" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900">
                      Your Appointments
                    </h2>
                    <button
                      className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-4 rounded-full hover:shadow-md transition-all flex items-center"
                      onClick={() =>
                        setCurrentPage && setCurrentPage("meetings")
                      }
                    >
                      + New Appointment
                    </button>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Pediatric Checkup - Emily",
                        date: "June 15, 2023",
                        time: "10:00 AM",
                        doctor: "Dr. Siri Akka",
                      },
                      {
                        title: "Vaccination - Noah",
                        date: "June 22, 2023",
                        time: "2:30 PM",
                        doctor: "Dr. Maya Rodriguez",
                      },
                    ].map((appointment, index) => (
                      <div
                        key={index}
                        className="bg-white border border-purple-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium text-purple-900">
                              {appointment.title}
                            </h3>
                            <p className="text-sm text-purple-700 mt-1">
                              {appointment.date} at {appointment.time}
                            </p>
                            <p className="text-sm text-purple-600 mt-1">
                              With {appointment.doctor}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-purple-700 hover:text-pink-600 p-1">
                              <Edit size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(activeTab === "settings" ||
                activeTab === "notifications" ||
                activeTab === "privacy") && (
                <div className="flex items-center justify-center h-48">
                  <p className="text-purple-700 text-lg">
                    This section is under construction
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
