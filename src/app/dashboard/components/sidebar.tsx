"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "context/AuthContext";

export default function Sidebar() {
  const { isAdmin, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setIsOpen(false); // Close the sidebar after logout
    router.push("/"); // Redirect to home
  };

  if (!isAdmin) {
    return null; // Sidebar only visible for Admin users
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg"
      >
        {/* Hamburger Icon */}
        <div className="space-y-1">
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-green-700 text-white w-64 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="flex items-center justify-between p-4 border-b border-green-600">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            ✕
          </button>
        </div>
        <ul className="space-y-4 p-6">
          <li>
            <Link
              href="/admin/users"
              className="block p-2 rounded hover:bg-green-600"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/admin/recycle-centers"
              className="block p-2 rounded hover:bg-green-600"
            >
              Recycle Centers
            </Link>
          </li>
          <li>
            <Link
              href="/admin/reports"
              className="block p-2 rounded hover:bg-green-600"
            >
              Reports
            </Link>
          </li>
          <li>
            <Link
              href="/admin/events"
              className="block p-2 rounded hover:bg-green-600"
            >
              Events
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="block w-full text-left p-2 rounded hover:bg-red-600 bg-red-500 text-white"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
