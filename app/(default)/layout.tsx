"use client";

import { store } from "store/store";
import { Provider } from "react-redux";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/usedTypedSelector";
import { NewsData } from "@/types/sanity-client-type";
import { getAllNews } from "@/store/features/Slice";

import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <Provider store={store}>
        <main className="grow">
          <PageIllustration />

          {children}
        </main>

        <Footer />
      </Provider>
    </>
  );
}
