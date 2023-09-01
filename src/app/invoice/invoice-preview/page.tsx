import React from "react";
import Layout from "../../layout";
import { InvoicePreview } from "@/pages/layout/invoice-preview/invoice-preview";

const InvoicePreviewPage = () => {
  return (
    <div>
      <Layout>
        <InvoicePreview />
      </Layout>
    </div>
  );
};

export default InvoicePreviewPage;