import NavbarComponent from "./dashboard/components/navbar";
import Sidebar from "./dashboard/components/sidebar";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AuthProvider>
          <NavbarComponent />
          <Sidebar /> {/* Sidebar is now a floating hamburger menu */}
          <main className="p-6">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
