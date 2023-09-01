import { Footer } from "@/pages/footer/footer";
import { Header } from "@/pages/header/header";
import { Sidebar } from "@/pages/sidebar/sidebar";
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
