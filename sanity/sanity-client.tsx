import { NewsData } from "@/types/sanity-client-type";
import { createClient, groq } from "next-sanity";

export async function getNews(): Promise<NewsData[]> {
  const client = createClient({
    projectId: "kbgpbmgs",
    dataset: "production",
    token:
      "skpYMr8HxVh8rTP8RcJf1gTecUg6294lIy8Epp484VpzpHUqiFeHh9sQehavq2LjbvF5TEWLCk4xeGoAR4D8m2sBZUtIQxNrA6RBJLoYYRwrKHBeqO1Znd4ejmaydNzqc3soLXME4TAJ9BQODn0QGazAqGO1BUA7kCLELqjCsugfWFzOM3tt",
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: "1",
  });

  return client.fetch(
    groq`*[_type=="news"]{newsTitle,
       newsLongDescription,
       newsShortDescription,
       "id":_id,
       "type":_type,
       "slug":slug.current,
       "createdAt":_createdAt,
       "video":video.asset->,
       "newsImage":newsImage.asset->url,
       "newsCategory":newsCatagory->catagoryName,
       "Catagory" : newsCatagory->}`
  );
}
