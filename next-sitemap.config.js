/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ashfakyeafi.github.io/test-portfolio",
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://ashfakyeafi.github.io/test-portfolio"}/sitemap.xml`,
      `${process.env.SITE_URL || "https://ashfakyeafi.github.io/test-portfolio"}/server-sitemap.xml`,
    ],
  },
};
