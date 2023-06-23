// "use client";

// import { useState, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "@/store/usedTypedSelector";
// import { NewsData } from "@/types/sanity-client-type";
// import { getAllNews } from "@/store/features/Slice";

// export const NewsFetch = () => {
//   const [allNews, setAllNewss] = useState<NewsData[] | any>("Hello");
//   Redux fetching start
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(getAllNews());
//     console.log("console here");/
//   }, [dispatch]);

//   const { news, error, loading } = useAppSelector((state) => state);

//   console.log(allNews);
//   console.log(news);
//   return news;
//   Redux fetching end
// };
