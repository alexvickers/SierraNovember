export const onRouteUpdate = ({ location }) => {
  if (typeof window.gtag === "function") {
    window.gtag("config", process.env.GATSBY_GA_ID, {
      page_path: location.pathname,
    });
  }
};
