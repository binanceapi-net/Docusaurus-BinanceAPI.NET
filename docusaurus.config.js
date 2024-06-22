import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'BinanceAPI.NET',
  tagline: 'High performance API/Websocket Wrapper for Binance',
  favicon: 'img/icon.ico',

  url: 'https://binanceapi-net.github.io',
  baseUrl: '/',

  organizationName: 'binanceapi-net', // Usually your GitHub org/user name.
  projectName: 'binanceapi.net', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/'
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'BinanceAPI.NET',
        logo: {
          alt: 'BinanceAPI.NET',
          src: 'img/icon.svg',
        },
        items: [
          {
            href: 'https://nuget.org/profiles/samuel',
            label: 'Get Nuget Package',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'],
      },
    }),
};

export default config;
