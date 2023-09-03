const settings = {
  name: "chakra-react",
  state: {
    frontity: {
      url: "https://winadreamwp.vdiaz.dev/",
      title: "The best prizes and rewards for football fans only ",
      description: "| Win a Dream",
    },
  },
  packages: [
    {
      name: "frontity-chakra-theme",
      state: {
        theme: {
          lang: "en",
          menu: [],
          socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"],
            ["instagram", "https://www.instagram.com/frontity/"],
            ["tiktok", "https://www.tiktok.com/frontity/"],
            ["linkedin", "https://www.linkedin.com/frontity/"],
          ],
          featured: {
            showOnArchive: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          homepage: "home",
          postsPage: "blog",
          url: "https://winadreamwp.vdiaz.dev/",
          params: {
            per_page: 8,
          },
          redirections: "404",
          postTypes: [
            {
              type: "the-dream-prize",
              endpoint: "the-dream-prize",
              archive: "/the-dream-prize",
            },
            {
              type: "partners",
              endpoint: "partners",
              archive: "/partners",
            },
            {
              type: "ambassadors",
              endpoint: "ambassadors",
              archive: "/ambassadors",
            },
            {
              type: "post",
              endpoint: "posts",
              archive: "/blog",
            },
            {
              type: "rewards",
              endpoint: "rewards",
              archive: "/rewards",
            },
            {
              type: "monthly-rewards",
              endpoint: "monthly-rewards",
              archive: "/monthly-rewards",
            },
            {
              type: "projects",
              endpoint: "projects",
              archive: "/projects",
            },
            {
              type: "news",
              endpoint: "news",
              archive: "/news",
            },
          ],
          taxonomies: [],
        },
      },
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "GTM-WBKB39S",
        },
        analytics: {
          pageviews: { googleTagManagerAnalytics: true },
          events: { googleTagManagerAnalytics: true },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
  ],
};

export default settings;
