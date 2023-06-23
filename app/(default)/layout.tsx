"use client";

import { store } from "store/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { NewsData } from "types/sanity-client-type";

import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";
import { getAllNews } from "@/store/features/Slice";
import { get } from "http";
import { getNews } from "@/sanity/sanity-client";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allNews, setAllNews] = useState<NewsData[] | any>();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  useEffect(() => {
    async function newsFetch() {
      let News = await getNews();
      console.log(News);
    }
    newsFetch();
  }, []);
  console.log(allNews);

  return (
    <>
      <main className="grow">
        <PageIllustration />

        {children}
      </main>

      <Footer />
    </>
  );
}
