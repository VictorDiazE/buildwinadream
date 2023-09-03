import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import processors from "./components/styles/processors";
import getLogo from "./components/handlers/getLogo";
import menuHandler from "./components/handlers/menu-handler";
import fetchToken from "./components/handlers/fetchToken";
import allCategoriesHandler from "./components/handlers/allCategoriesHandler";
import packageClient from "./client";

// Custom handler for ACF options
const acfOptionsHandler = {
  pattern: "acf-options-page",
  func: async ({ route, state, libraries }) => {
    // 1. Get ACF option page from REST API.
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/options`,
    });
    const option = await response.json();

    // 2. Add data to `source`.
    const data = state.source.get(route);
    Object.assign(data, { ...option, isAcfOptionsPage: true });
  },
};

// Custom handler for ACF Partners Archive Options
const acfPartnersArchiveHandler = {
  pattern: "archive-partners",
  func: async ({ route, state, libraries }) => {
    // 1. Get ACF option page from REST API.
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/archive-partners`,
    });
    const archive = await response.json();

    // 2. Add data to `source`.
    const data = state.source.get(route);
    Object.assign(data, { ...archive, isAcfOptionsPage: true });
  },
};

// Custom handler for ACF Ambassador Archive Options
const acfAmbassadorsArchiveHandler = {
  pattern: "archive-ambassadors",
  func: async ({ route, state, libraries }) => {
    // 1. Get ACF option page from REST API.
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/archive-ambassadors`,
    });
    const archive = await response.json();

    // 2. Add data to `source`.
    const data = state.source.get(route);
    Object.assign(data, { ...archive, isAcfOptionsPage: true });
  },
};

// Custom handler for MEDIA ARCHIVE
const acfMediaArchiveHandler = {
  pattern: "media-archive",
  func: async ({ route, state, libraries }) => {
    // 1. Get ACF option page from REST API.
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/media-archive`,
    });
    const MediaArchive = await response.json();

    // 2. Add data to `source`.
    const data = state.source.get(route);
    Object.assign(data, { ...MediaArchive, isAcfOptionsPage: true });
  },
};

const acfRewardsArchiveHandler = {
  pattern: "archive-rewards",
  func: async ({ route, state, libraries }) => {
    // 1. Get ACF option page from REST API.
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/archive-rewards`,
    });
    const archive = await response.json();

    // 2. Add data to `source`.
    const data = state.source.get(route);
    Object.assign(data, { ...archive, isAcfOptionsPage: true });
  },
};

const chakraTheme = {
  name: "frontity-chakra-theme",
  roots: {
    // In Frontity, any package can add React components to the site.
    // We use roots for that, scoped to the "theme" namespace.
    theme: Theme,
  },
  state: {
    // State is where the packages store their default settings and other
    // relevant state. It is scoped to the "theme" namespace.
    theme: {
      /**
       * The logo can be a text or an image url
       * logo : "Frontity"
       * logo: "https://uploads-ssl.webflow.com/5be00771820599586e6bd032/5be0223588110a6dbcac2d05_image.svg",
       */
      /* isInvalid: {status: null }, */
      admin_token: null,
      user_token: null,
      user_display_name: "",
      user_email: "",
      user_nicename: "",
      isLogin: false,
      posts: [],
      sticky: [],
      searchValue: "",
      joinPost: {},
      rewards: [],
      rewardsOfThisMonth: [],
      projects: [],
      allCategories: [],
      isMobile: null,
      logo: {},
      showBackgroundPattern: true,
      showSocialLinks: true,
      scroll: {
        top: false,
        hero: false,
      },
      /**
			 * socialLinks: [
				["pinterest", "https://www.pinterest.com/frontity/"],
				["facebook", "https://www.instagram.com/frontity/"],
				["twitter", "https://www.twitter.com/frontity/"]
			  ],
			 */
      socialLinks: [],
      menu: [],
      menuUrl: "all-pages",
      featured: {
        showOnArchive: true,
        showOnPost: true,
      },
      colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#FFFFFF",
        buttonpurple: "#4c43cd",
        buttonpurpleA: "rgba(76, 67, 205, 0)",
        tamkeen800A: "rgba(76, 67, 205, 0.2)",
        tamkeen800A2: "rgba(76, 67, 205, 0.8)",
        loginRigth: "#130E3E",
        loginLeft: "#334155",
        principal: {
          500: "#867DE9",
          700: "#4C43CD",
        },
        primary: {
          0: "#F6F5FA",
          50: "#e9f5f2",
          100: "#d4dcd9",
          200: "#bbc3be",
          300: "#a1aba5",
          400: "#87938b",
          500: "#6d7972",
          600: "#475569",
          700: "#4c43cd",
          800: "#1E293B",
          900: "#272727",
        },
        tamkeen: {
          0: "#dee4ed",
          50: "#FFFFFF",
          100: "#dee4ed",
          200: "#dee4ed",
          300: "#dee4ed",
          400: "#8684b1",
          500: "#8684b1",
          600: "#475569",
          700: "#150f35",
          800: "#150f35",
          900: "#150f35", // 900: "#0F172A"
        },
      },
      fontSizes: {
        xs: "0.75rem", // 12px
        sm: "0.875rem",
        md: "1.019rem", // 14px
        lg: "1.021rem", // 16.33px
        xl: "1.166rem", // 18.66px
        "2xl": "1.555rem", // 24.88px
        "3xl": "2.073", // 33.16px
        "4xl": "2.763rem", // 44.2px
        "5xl": "3rem",
        "6xl": "3.683rem", // 58.92px
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "6.25rem", // 100px
      },
      fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      lineHeights: {
        normal: "normal",
        none: 1,
        shorter: 1.25,
        short: 1.375,
        base: 1.5,
        tall: 1.625,
        taller: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      letterSpacings: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      boxShadow: {
        normal: "0 0 0 3px #4C43CD",
      },
      isSearchModalOpen: false,
      isMobileMenuOpen: false,
      autoPreFetch: "all",
    },
    source: {
      data: {
        "/admin/": {
          isAdmin: true,
          isReady: true,
        },
      },
    },
  },
  // Actions are functions that modify the state or deal with other parts of
  // Frontity like libraries.
  actions: {
    theme: {
      ...packageClient.actions.theme,

      beforeSSR: async ({ state, actions, libraries }) => {
        const idlogo = await libraries.source.api.get({ endpoint: `/` });
        const numberlogo = await idlogo.json();
        const number = numberlogo.site_logo;

        await actions.source.fetch(state.router.link);
        await Promise.all([
          actions.source.fetch(`/menu/nav-menu/`),
          actions.source.fetch("acf-options-page"),
          actions.source.fetch("/ambassadors/"),
          actions.source.fetch("/our-ambassadors/"),
          actions.source.fetch("/rewards/"),
          actions.source.fetch("/monthly-rewards/"),
          actions.source.fetch("/partners/"),
          actions.source.fetch("archive-partners/"),
          actions.source.fetch("archive-rewards/"),
          actions.source.fetch("media-archive/"),
          actions.source.fetch("/blog/"),
          actions.source.fetch("/news/"),
          actions.source.fetch("/projects/"),
          actions.source.fetch("all-categories"),
          actions.source.fetch(`/image/${number}`),
          actions.source.fetch(`/faq/`),
          actions.source.fetch(`/fetchToken`),
        ]);
      },
    },
  },
  libraries: {
    html2react: {
      // Add a processor to html2react so it processes the <img> tags
      // inside the content HTML. You can add your own processors too.
      processors: [image, ...processors],
    },

    source: {
      handlers: [
        acfOptionsHandler,
        acfPartnersArchiveHandler,
        acfRewardsArchiveHandler,
        acfMediaArchiveHandler,
        acfAmbassadorsArchiveHandler,
        allCategoriesHandler,
        getLogo,
        menuHandler,
        fetchToken,
      ],
    },
  },
};

export default chakraTheme;
