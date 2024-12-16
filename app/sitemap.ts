export const baseUrl = "https://www.emilywillis.co.uk/";

export default async function sitemap() {
  let routes = ["", "about", "oasen", "zophos", "keep-dancing", "cautionary-tales-for-children"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(1723420800000).toISOString().split("T")[0],
  }));

  return [...routes];
}
