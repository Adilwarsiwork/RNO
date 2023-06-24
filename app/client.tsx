// import { createClient, groq, type ClientConfig } from "next-sanity";
import { createClient, type ClientConfig } from "@sanity/client";
import { NewsData } from "@/types/sanity-client-type";

// export default createClient({
//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.SANITY_DATASET,
//   token: process.env.SANITY_TOKEN,
//   useCdn: false,
//   apiVersion: "1",
// });

const config: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: "2023-06-24",
};

const client = createClient(config);

export async function getPosts(Data: string | any) {
  let result: NewsData[];

  const query = `*[_type=="news"]{newsTitle,
            newsLongDescription,
            newsShortDescription,
            "id":_id,
            "type":_type,
            "slug":slug.current,
            "createdAt":_createdAt,
            "video":video.asset->,
            "newsImage":newsImage.asset->url,
            "newsCategory":newsCatagory->catagoryName,
            "Catagory" : newsCatagory->}`;

  const data = await client.fetch(query);

  // result = await client.fetch(query);

  return data;
}
