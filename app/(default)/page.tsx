"use client";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/usedTypedSelector";
import { NewsData } from "@/types/sanity-client-type";
import { getAllNews } from "@/store/features/Slice";

export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Process from "@/components/process";
import FeaturesHome from "@/components/features";
import Tabs from "@/components/tabs";
import Target from "@/components/target";
import News from "@/components/news";
import Newsletter from "@/components/newsletter";
import Newsvideos from "@/components/Newsvideos";

export default function Home() {
  const [allNews, setAllNewss] = useState<NewsData[] | any>("Hello");
  //Redux fetching start
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllNews());
    // console.log("console here");
  }, [dispatch]);
  //Redux fetching end

  const { news, error, loading } = useAppSelector((state) => state);

  // console.log(allNews);
  console.log(news);
  //Redux fetching end

  return (
    <>
      <Hero />
      <Process />
      <Newsvideos />
      <FeaturesHome />
      <Tabs />
      <Target />
      <News />
      <Newsletter />
    </>
  );
}
