// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Catalysis Network",
  tagline: "Unified Access to ETH, BTC & SOL-backed Economic Security",
  favicon: "favicon.ico",

  // Set the production url of your site here
  url: "https://docs.catalysis.network",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "0xcatalysis", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/0xcatalysis/docs/edit/main/",
        },
        blog: false, // Disable the blog plugin
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/catalysis.png",
      navbar: {
        title: "",
        style: "primary",
        logo: {
          alt: "Catalysis Logo",
          src: "img/catalysis.png",
        },
        items: [
          {
            href: "https://blog.catalysis.network",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/0xcatalysis",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [

          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://x.com/0xcatalysis",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/ZBCT7fADaq",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://catalysis.medium.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/0xcatalysis",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Catalysis Labs`,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true, // disable dark mode switch
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'og:image', content: 'https://docs.catalysis.network/img/catalysis.png?v=2' },
        { name: 'twitter:image', content: 'https://docs.catalysis.network/img/catalysis.png?v=2' }
      ],
    }),
  stylesheets: [
    {
      href: '/fonts/satoshi.css',
      type: 'text/css',
    }
  ],
  trailingSlash: true,
};

export default config;
