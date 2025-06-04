"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [randomFact, setRandomFact] = useState<any>(null);
  const router = useRouter();
  const { login } = useAuth();

  const facts = [
    {
      text: "Recycling one aluminum can saves enough energy to power a TV for 3 hours.",
      image: "https://via.placeholder.com/300?text=Recycling+Fact+1",
    },
    {
      text: "Plastic bottles take up to 450 years to decompose in landfills.",
      image: "https://via.placeholder.com/300?text=Recycling+Fact+2",
    },
    {
      text: "Recycling one ton of paper saves 17 trees and 7,000 gallons of water.",
      image: "https://via.placeholder.com/300?text=Recycling+Fact+3",
    },
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[randomIndex]);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError(null);
    setPasswordError(null);
    setServerError(null);

    if (!email) {
      setEmailError("Email is required.");
      return;
    }

    if (!password) {
      setPasswordError("Password is required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setServerError(errorData.message || "Invalid email or password.");
        return;
      }

      const data = await response.json();
      login(data.access_token);
      router.push("/dashboard");
    } catch (error) {
      setServerError("Something went wrong. Please try again.");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 bg-white shadow-lg rounded-lg p-10">
        {/* Left: Login Form */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">
            Login
          </h1>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 mt-1 border ${
                emailError ? "border-red-500" : "border-gray-300"
              } rounded-lg bg-gray-50 text-black focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500 shadow-sm`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 mt-1 border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } rounded-lg bg-gray-50 text-black focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500 shadow-sm`}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Server Error Message */}
          {serverError && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md text-center mb-6">
              {serverError}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md"
          >
            Login
          </button>
        </div>

        {/* Right: Random Fact */}
        <div className="flex flex-col justify-center items-center bg-gray-50 rounded-md p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-8">
            Did You Know?
          </h2>
          {randomFact && (
            <div className="text-center">
              <img
                src={randomFact.image}
                alt="Fact Image"
                className="w-56 h-56 object-cover rounded-full mx-auto mb-6 shadow-lg"
              />
              <p className="text-gray-700 text-lg">{randomFact.text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
