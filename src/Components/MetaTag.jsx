import React from "react";
import { Helmet } from "react-helmet";

const MetaTag = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@2.37.0/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
    </div>
  );
};

export default MetaTag;
