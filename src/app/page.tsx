import { Footer } from "@/pages/footer/footer";
import { Header } from "@/pages/header/header";
import { InvoicePreview } from "@/pages/layout/invoice-preview/invoice-preview";
import { InvoiceList } from "@/pages/layout/invoice/invoice-list";
import { Sidebar } from "@/pages/sidebar/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="row ">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <Header />
        <InvoiceList />
        <Footer />
      </div>
    </div>
  );
}
