import React from "react";

import { allPosts } from "contentlayer/generated";
import PostItem from "@/components/post-item";

const Newsvideos = () => {
  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  const featuredPost = allPosts[0];
  const posts = allPosts.slice(1);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-5 pb-12 md:pt-3 md:pb-20"></div>

        {/*  Articles list */}
        <div className="max-w-sm mx-auto md:max-w-none">
          {/*  Section title */}
          <h4
            className="h4 pb-6 mb-10 border-b border-gray-700"
            data-aos="fade-up"
          >
            Latest articles
          </h4>

          {/*  Articles container */}
          <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            {posts.map((post, postIndex) => (
              <PostItem key={postIndex} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsvideos;
