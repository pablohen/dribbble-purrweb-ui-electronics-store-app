const site = `https://${process.env.VERCEL_URL}`;
const siteName = 'Electronics Store App';
const description =
  'Based on https://dribbble.com/shots/16309555-Electronics-Store-App, by Purrweb UI.';
const nextSeo = {
  defaultTitle: siteName,
  titleTemplate: `%s | ${siteName}`,
  description,
  openGraph: {
    type: 'website',
    locale: 'en-US',
    site_name: siteName,
    description,
  },
};

export default nextSeo;
