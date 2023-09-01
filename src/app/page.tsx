import { Footer } from "@/screens/footer/footer";
import { Header } from "@/screens/header/header";
import { InvoicePreview } from "@/screens/layout/invoice-preview/invoice-preview";
import { InvoiceList } from "@/screens/layout/invoice/invoice-list";
import { Sidebar } from "@/screens/sidebar/sidebar";
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
