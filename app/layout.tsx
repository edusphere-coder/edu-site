import "./globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "EdusphereCourses",
  description: "Welcome to EduSphere! We offer professional, job-oriented training and certification programs designed to help you build real-world skills and secure great career opportunities. All our programs include mentor support, practical sessions",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
