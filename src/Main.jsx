import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import LegalDocuments from "./components/LegalDocuments/LegalDocuments";
import LegalServices from "./components/LegalServices/LegalServices";
import SubscriptionPlans from "./components/SubscriptionPlans/SubscriptionPlans";
const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legalservices" element={<LegalServices />} />
          <Route path="/legaldocuments" element={<LegalDocuments />} />
          <Route path="/subscriptionplans" element={<SubscriptionPlans />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Main;
