"use client";
import {
  Plus,
  Edit,
  Trash2,
  Users,
  Calendar,
  ChevronRight,
  BarChart,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AdminPage() {
  const workshops = [
    {
      id: 1,
      title: "Child Nutrition Workshop",
      participants: 25,
      date: "June 15, 2023",
    },
    {
      id: 2,
      title: "Parenting Tips Seminar",
      participants: 40,
      date: "June 22, 2023",
    },
    {
      id: 3,
      title: "Immunization Awareness",
      participants: 18,
      date: "July 5, 2023",
    },
    {
      id: 4,
      title: "Sleep Training for Babies",
      participants: 30,
      date: "July 12, 2023",
    },
  ];

  const totalParticipants = workshops.reduce(
    (sum, workshop) => sum + workshop.participants,
    0
  );

  // No-op function for setCurrentPage as this is a standalone page
  const setCurrentPage = (page: string) => {};

  return (
    <div className="bg-rose-50 min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-purple-900">
            Admin Dashboard
          </h1>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-all">
            <Plus size={20} />
            <span>New Workshop</span>
          </button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div className="flex items-center mb-2">
              <div className="bg-purple-100 p-3 rounded-lg mr-3">
                <Calendar size={20} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-purple-900">
                Total Workshops
              </h3>
            </div>
            <p className="text-3xl font-bold text-pink-600">
              {workshops.length}
            </p>
            <p className="text-purple-600 text-sm mt-2">
              {workshops.length} scheduled events
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div className="flex items-center mb-2">
              <div className="bg-pink-100 p-3 rounded-lg mr-3">
                <Users size={20} className="text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-purple-900">
                Total Participants
              </h3>
            </div>
            <p className="text-3xl font-bold text-pink-600">
              {totalParticipants}
            </p>
            <p className="text-purple-600 text-sm mt-2">Across all workshops</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div className="flex items-center mb-2">
              <div className="bg-purple-100 p-3 rounded-lg mr-3">
                <BarChart size={20} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-purple-900">
                Avg. Attendance
              </h3>
            </div>
            <p className="text-3xl font-bold text-pink-600">
              {Math.round(totalParticipants / workshops.length)}
            </p>
            <p className="text-purple-600 text-sm mt-2">Per workshop</p>
          </div>
        </div>

        {/* Workshops List */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-purple-900">Workshops</h2>
            <button className="text-purple-700 hover:text-pink-600 flex items-center">
              View All <ChevronRight size={16} className="ml-1" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-purple-100">
                  <th className="p-4 text-purple-900 font-semibold">
                    Workshop
                  </th>
                  <th className="p-4 text-purple-900 font-semibold">Date</th>
                  <th className="p-4 text-purple-900 font-semibold">
                    Participants
                  </th>
                  <th className="p-4 text-purple-900 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {workshops.map((workshop) => (
                  <tr
                    key={workshop.id}
                    className="border-b border-purple-50 hover:bg-purple-50 transition-colors"
                  >
                    <td className="p-4 text-purple-800 font-medium">
                      {workshop.title}
                    </td>
                    <td className="p-4 text-purple-700">{workshop.date}</td>
                    <td className="p-4 text-purple-700">
                      {workshop.participants}
                    </td>
                    <td className="p-4">
                      <button className="text-purple-600 hover:text-pink-600 p-1 mr-2">
                        <Edit size={18} />
                      </button>
                      <button className="text-pink-600 hover:text-pink-700 p-1">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-6">
            {[
              {
                action: "New workshop created",
                item: "Sleep Training for Babies",
                time: "2 hours ago",
                user: "Admin",
              },
              {
                action: "Workshop updated",
                item: "Parenting Tips Seminar",
                time: "1 day ago",
                user: "Admin",
              },
              {
                action: "New participant registered",
                item: "Immunization Awareness",
                time: "2 days ago",
                user: "Sarah Johnson",
              },
              {
                action: "Workshop cancelled",
                item: "Baby First Aid",
                time: "3 days ago",
                user: "Admin",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex border-b border-purple-50 pb-4 last:border-0 last:pb-0"
              >
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  {activity.user === "Admin" ? (
                    <Edit size={16} className="text-purple-600" />
                  ) : (
                    <Users size={16} className="text-pink-600" />
                  )}
                </div>
                <div>
                  <p className="text-purple-900 font-medium">
                    {activity.action}
                  </p>
                  <p className="text-purple-700">{activity.item}</p>
                  <p className="text-sm text-purple-500 mt-1">
                    {activity.time} by {activity.user}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
