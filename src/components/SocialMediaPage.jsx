"use client";
import { useState } from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Heart,
  MessageCircle,
  Share,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function SocialMediaPage({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState("all");

  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Baby's First Bath: Tips & Techniques",
      description:
        "Learn the safest and most comfortable ways to bathe your newborn with these expert tips.",
      likes: 145,
      comments: 23,
      platform: "instagram",
      date: "2 days ago",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Breastfeeding Basics for New Mothers",
      description:
        "Our latest video covers everything you need to know about breastfeeding as a new mother.",
      likes: 230,
      comments: 45,
      platform: "youtube",
      date: "5 days ago",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sleep Training Methods That Actually Work",
      description:
        "Struggling with your baby's sleep schedule? Check out these proven methods to help your little one sleep through the night.",
      likes: 189,
      comments: 37,
      platform: "facebook",
      date: "1 week ago",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Nutrition Guide for Expectant Mothers",
      description:
        "What you eat during pregnancy affects your baby's development. Here's a comprehensive nutrition guide.",
      likes: 215,
      comments: 52,
      platform: "twitter",
      date: "2 weeks ago",
    },
  ];

  const filteredPosts =
    activeTab === "all"
      ? posts
      : posts.filter((post) => post.platform === activeTab);

  return (
    <div className="bg-rose-50 min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-purple-900 mb-4">
            Social Media
          </h1>
          <p className="text-lg text-purple-700">
            Stay connected with our latest updates and helpful content across
            platforms.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            {
              name: "Instagram",
              icon: <Instagram className="text-white" size={24} />,
              color: "from-purple-500 to-pink-500",
              username: "@dr.siri.pediatrics",
              followers: "15.2K followers",
            },
            {
              name: "YouTube",
              icon: <Youtube className="text-white" size={24} />,
              color: "from-pink-500 to-rose-500",
              username: "Dr. Siri Pediatrics",
              followers: "10.8K subscribers",
            },
            {
              name: "Facebook",
              icon: <Facebook className="text-white" size={24} />,
              color: "from-purple-600 to-indigo-600",
              username: "Dr. Siri Pediatrics",
              followers: "25.4K followers",
            },
            {
              name: "Twitter",
              icon: <Twitter className="text-white" size={24} />,
              color: "from-blue-500 to-purple-500",
              username: "@drsiripediatrics",
              followers: "8.6K followers",
            },
          ].map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100"
            >
              <div
                className={`bg-gradient-to-r ${platform.color} p-4 flex items-center`}
              >
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-3">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {platform.name}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-purple-900 font-medium">
                  {platform.username}
                </p>
                <p className="text-purple-600 text-sm">{platform.followers}</p>
                <button className="mt-3 w-full py-2 border border-purple-200 rounded-full text-purple-700 hover:bg-purple-50 transition-colors text-sm font-medium">
                  Follow Us
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100 mb-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: "all", label: "All Posts" },
              {
                id: "instagram",
                label: "Instagram",
                icon: <Instagram size={16} />,
              },
              { id: "youtube", label: "YouTube", icon: <Youtube size={16} /> },
              {
                id: "facebook",
                label: "Facebook",
                icon: <Facebook size={16} />,
              },
              { id: "twitter", label: "Twitter", icon: <Twitter size={16} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-4 font-medium flex items-center ${
                  activeTab === tab.id
                    ? "text-pink-600 border-b-2 border-pink-500"
                    : "text-purple-700 hover:text-purple-900"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon && <span className="mr-2">{tab.icon}</span>}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {post.platform === "instagram" && (
                    <Instagram size={18} className="text-pink-600 mr-2" />
                  )}
                  {post.platform === "youtube" && (
                    <Youtube size={18} className="text-pink-600 mr-2" />
                  )}
                  {post.platform === "facebook" && (
                    <Facebook size={18} className="text-pink-600 mr-2" />
                  )}
                  {post.platform === "twitter" && (
                    <Twitter size={18} className="text-pink-600 mr-2" />
                  )}
                  <span className="text-purple-600 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-purple-700 mb-4">{post.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-purple-600 hover:text-pink-600">
                      <Heart size={18} className="mr-1" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center text-purple-600 hover:text-pink-600">
                      <MessageCircle size={18} className="mr-1" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <button className="text-purple-600 hover:text-pink-600">
                    <Share size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Stay Updated with Our Latest Content
            </h2>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter to receive updates, parenting tips,
              and exclusive content directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-3 rounded-full border-2 border-white bg-transparent placeholder-white placeholder-opacity-75 text-white focus:outline-none"
              />
              <button className="bg-white text-purple-700 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
