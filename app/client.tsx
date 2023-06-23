import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "kbgpbmgs",
  dataset: "production",
  token:
    "skpYMr8HxVh8rTP8RcJf1gTecUg6294lIy8Epp484VpzpHUqiFeHh9sQehavq2LjbvF5TEWLCk4xeGoAR4D8m2sBZUtIQxNrA6RBJLoYYRwrKHBeqO1Znd4ejmaydNzqc3soLXME4TAJ9BQODn0QGazAqGO1BUA7kCLELqjCsugfWFzOM3tt",
  useCdn: false,
  apiVersion: "1",
});

export async function getPosts(Data: string | any) {
  let result;

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
  result = await client.fetch(query);

  return result;
}
