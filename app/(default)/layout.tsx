"use client";

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
  const [allNews, setAllNewss] = useState<NewsData[] | any>("Hello");

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  //Redux fetching start
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllNews());
    // console.log("console here");
  }, [dispatch]);

  const { news, error, loading } = useAppSelector((state) => state);

  // console.log(allNews);
  console.log(news);
  //Redux fetching end

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
