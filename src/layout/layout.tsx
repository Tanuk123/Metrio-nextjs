import { Footer } from "@/screens/footer/footer";
import { Header } from "@/screens/header/header";
import { Sidebar } from "@/screens/sidebar/sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
