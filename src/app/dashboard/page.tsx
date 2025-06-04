'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAuthToken } from 'app/utils/api';

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const validateAccess = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        toast.error('Unauthorized! Redirecting to login...');
        router.push('/auth/login');
        return;
      }

      try {
        const payload: any = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
        const currentTime = Math.floor(Date.now() / 1000);

        if (payload.exp < currentTime) {
          toast.error('Session expired! Redirecting to login...');
          localStorage.removeItem('accessToken');
          router.push('/auth/login');
          return;
        }

        if (payload.role !== 'Admin') {
          toast.error('Access denied! Redirecting to login...');
          router.push('/auth/login');
          return;
        }

        setAuthToken(token); // Set token for API calls (if needed)
      } catch (error) {
        console.error('Error decoding token:', error);
        toast.error('Invalid token. Redirecting to login...');
        router.push('/auth/login');
      }
    };

    validateAccess();
  }, [router]);

  return (
    <div className="container mx-auto p-8 text-center text-black">
      <h1 className="text-3xl font-bold text-green-600">Welcome to the Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
