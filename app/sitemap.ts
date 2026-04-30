export const baseUrl = "https://www.emilywillis.co.uk/";

export default async function sitemap() {
  let routes = ["", "about", "oasen", "zophos", "gooville", "cautionary-tales-for-children"].map((route) => ({
    url: `${baseUrl}${route}`,
  }));

  return [...routes];
}
