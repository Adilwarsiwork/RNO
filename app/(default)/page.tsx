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
