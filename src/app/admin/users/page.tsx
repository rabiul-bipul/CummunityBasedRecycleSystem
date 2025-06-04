'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAuthToken, fetchAdminUsers, toggleUserStatus } from 'app/utils/api';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]); // Explicitly typed as User[]
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]); // Explicitly typed as User[]
  const [loading, setLoading] = useState<boolean>(true); // Boolean loading state
  const [search, setSearch] = useState<string>(''); // String for search input
  const [roleFilter, setRoleFilter] = useState<string>(''); // String for role filter

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken');

      if (!token) {
        toast.error('Unauthorized! Redirecting to login...');
        return;
      }

      try {
        setAuthToken(token);

        // Fetch users from the API
        const data: User[] = await fetchAdminUsers();
        setUsers(data);
        setFilteredUsers(data); // Initialize filtered users
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter users based on search and role filter
    const filtered = users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesRole = roleFilter ? user.role === roleFilter : true;

      return matchesSearch && matchesRole;
    });

    setFilteredUsers(filtered);
  }, [search, roleFilter, users]);

  const handleToggleStatus = async (userId: number) => {
    try {
      const updatedUser: User = await toggleUserStatus(userId);

      // Update the user status in the local state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, isActive: updatedUser.isActive } : user
        )
      );

      toast.success(
        `User has been ${updatedUser.isActive ? 'activated' : 'deactivated'}.`
      );
    } catch (error) {
      console.error('Error toggling user status:', error);
      toast.error('Failed to update user status.');
    }
  };

  if (loading) {
    return <p className="text-center text-gray-700">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-green-600">User List</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-1/3 text-black"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-1/4 text-black"
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Recycler">Recycler</option>
          <option value="Organization">Organization</option>
          <option value="Citizen">Citizen</option>
        </select>
      </div>

      {/* Users Table */}
      <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-black">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">SL</th>
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Active</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.isActive ? 'Yes' : 'No'}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleToggleStatus(user.id)}
                  className={`px-3 py-1 text-white rounded ${
                    user.isActive
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {user.isActive ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
          {filteredUsers.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="text-center text-gray-500 py-4 border border-gray-300"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
