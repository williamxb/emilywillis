export const baseUrl = 'https://emilywillis.co.uk/'

export default async function sitemap() {
  let routes = ['', '/about', '/contact', '/oasen', '/zophos', '/keep-dancing'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
