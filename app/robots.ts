import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://pixelbytesolutions.in/sitemap.xml",
    host: "https://pixelbytesolutions.in",
  };
}
