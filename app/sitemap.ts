export const baseUrl = 'https://emilywillis.co.uk/'

export default async function sitemap() {
  let routes = ['', '/work', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
