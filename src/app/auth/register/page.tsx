"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css"; // Import styles for toast
import api from "app/utils/api";

export enum Role {
  Admin = "Admin",
  Recycler = "Recycler",
  Organization = "Organization",
  Citizen = "Citizen",
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role: Role;
}

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterPayload>();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: RegisterPayload) => {
    try {
      await api.post("/auth/register", data); // Send data to the backend
      toast.success("Registration Successful!", {
        position: "top-right",
      });
      setTimeout(() => {
        router.push("/auth/login"); // Redirect to login after 3 seconds
      }, 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
      toast.error(err.response?.data?.message || "Registration failed", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black px-4">
      {/* Toast Container */}
      <ToastContainer />

      <form
        className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
          Register
        </h1>

        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`w-full px-4 py-2 mt-1 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg bg-gray-50 text-black focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500 shadow-sm`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`w-full px-4 py-2 mt-1 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg bg-gray-50 text-black focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500 shadow-sm`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: 8 })}
            className={`w-full px-4 py-2 mt-1 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-lg bg-gray-50 text-black focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500 shadow-sm`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message || "Password must be at least 8 characters long"}
            </p>
          )}
        </div>

        {/* Role Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className={`w-full px-4 py-2 mt-1 border ${
              errors.role ? "border-red-500" : "border-gray-300"
            } rounded-lg bg-gray-50 text-black focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500 shadow-sm`}
          >
            <option value="">Select Role</option>
            {Object.values(Role).map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
