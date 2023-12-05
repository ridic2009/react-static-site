import React from "react";

import styles from "./scss/app.module.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";
import Hiring from "./pages/Hiring";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/gallery"} element={<Gallery />} />
            <Route path={"/hiring"} element={<Hiring />} />
            <Route path={"/services"} element={<Services />} />
            <Route path={"/contacts"} element={<Contacts />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
      </main>
      <Footer />
    </>
  );
}
