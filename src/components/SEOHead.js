import * as React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export const SeoHead = ({
  pageTitle,
  pageDescription,
  lang = "en",
  bodyClass = "",
}) => {
  const { title, description, author, image } = useSiteMetadata();
  const fullTitle = pageTitle ? `${pageTitle} | ${title}` : title;
  const metaDescription = pageDescription || description;

  return (
    <>
      <html lang={lang} />
      <body className={bodyClass} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </>
  );
};
