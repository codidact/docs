/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Codidact Docs',
  tagline: 'Q&A by the community, for the community',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'codidact', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Codidact Docs',
      logo: {
        alt: 'Codidact Logo',
        src: 'img/logo.svg',
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Codidact Meta',
              href: 'https://meta.codidact.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/7jf8UzS',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/codidact',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/codidact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Codidact Foundation CIC`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/codidact/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/codidact/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};