import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  const GA_TRACKING_ID = process.env.GATSBY_GA_ID;

  if (!GA_TRACKING_ID) return;

  setHeadComponents([
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      key="ga-script"
    />,
    <script
      key="ga-inline-script"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}', {
            anonymize_ip: true,
          });
        `,
      }}
    />,
  ]);
};
