import React from "react";
import Navbar from "@/component/molecules/Navbar";
import Footer from "@/component/molecules/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-blue-500">{children}</main>
      <Footer />
    </>
  );
}
