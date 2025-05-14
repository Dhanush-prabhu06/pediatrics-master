"use client";
/*
  PediatricsApp - Main component that handles routing between pages
  
  Available pages:
  - home: HomePage.jsx - Main landing page with information about the practice
  - services: ServicesPage.jsx - Details about services offered
  - about: AboutUsPage.jsx - Information about Dr. Siri and the team
  - resources: ResourcesPage.jsx - Educational resources and materials
  - contact: ContactPage.jsx - Contact information and form
  - social: SocialMediaPage.jsx - Social media content and links
  - meetings: MeetingsPage.jsx - Workshops and appointments
  - profile: ProfilePage.jsx - User profile and account settings
  - admin: AdminPage.jsx - Admin dashboard (restricted access)
*/
import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Plus,
  Search,
  MoreHorizontal,
  ChevronRight,
  Home,
  User,
  Settings,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Edit,
  Camera,
  Link,
  Shield,
  Bell,
  LogOut,
} from "lucide-react";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import AboutUsPage from "./AboutUsPage";
import ResourcesPage from "./ResourcesPage";
import ContactPage from "./ContactPage";
import SocialMediaPage from "./SocialMediaPage";
import MeetingsPage from "./MeetingsPage";
import ProfilePage from "./ProfilePage";
import AdminPage from "./AdminPage";

export default function PediatricsApp() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "services":
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutUsPage setCurrentPage={setCurrentPage} />;
      case "resources":
        return <ResourcesPage setCurrentPage={setCurrentPage} />;
      case "contact":
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case "social":
        return <SocialMediaPage setCurrentPage={setCurrentPage} />;
      case "meetings":
        return <MeetingsPage setCurrentPage={setCurrentPage} />;
      case "profile":
        return <ProfilePage setCurrentPage={setCurrentPage} />;
      case "admin":
        return <AdminPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">{renderPage()}</main>
    </div>
  );
}
