import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import processors from "./components/styles/processors";

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
      user_token: null,
      admin_token: null,
      user_display_name: "",
      user_email: "",
      user_nicename: "",
      user_ip: "",
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
        buttonpurpleA: "rgba(78, 66, 217, 0)",
        tamkeen800A: "rgba(30, 42, 59, 0.2)",
        tamkeen800A2: "rgba(30, 42, 59, 0.8)",
        loginRigth: "#150f35",
        loginLeft: "#150f35",
        principal: {
          500: "#8684b1",
          700: "#4C43CD",
        },
        primary: {
          0: "#dee4ed",
          50: "#e9f5f2",
          100: "#d4dcd9",
          200: "#bbc3be",
          300: "#a1aba5",
          400: "#87938b",
          500: "#6d7972",
          600: "#475569",
          700: "#4c43cd",
          800: "#150f35",
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
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state, actions }) => {
        state.theme.isSearchModalOpen = true;
        //GTM EVENT
        function SearchFormMobileEvent() {
          actions.analytics.event({
            name: "genericEvent",
            payload: {
              category: "mobile search",
              action: "",
              label: "",
            },
          });
        }
        //GTM EVENT
        function SearchFormEvent() {
          actions.analytics.event({
            name: "genericEvent",
            payload: {
              category: "search",
              action: "",
              label: "",
            },
          });
        }
        if (state.theme.isMobile) {
          return SearchFormMobileEvent();
        } else {
          return SearchFormEvent();
        }
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      },
      afterCSR: async ({ state, libraries, actions }) => {
        if (localStorage.getItem("Credentials")) {
          const getCredentials = localStorage.getItem("Credentials");
          const credentials = JSON.parse(getCredentials);
          state.theme.user_token = credentials.token;
          state.theme.user_display_name = credentials.user_display_name;
          state.theme.user_email = credentials.user_email;
          state.theme.user_nicename = credentials.user_nicename;
          state.theme.isLogin = true;
          state.theme.isInvalid = { status: false };
        }
      },
      fetchToken:
        ({ state, actions }) =>
        async (value) => {
          /* 				console.log("Funcion fetchToken en index.js: ");
                      console.log('Datos enviados desde el formulario de login');
                      console.table(value); */
          //GTM EVENT
          const LoginSubmitEvent = () =>
            actions.analytics.event({
              name: "genericEvent",
              payload: {
                category: "login",
                action: "completed",
                label: "",
              },
            });
          const res = await fetch(`${state.source.api}jwt-auth/v1/token`, {
            method: "POST",
            headers: new Headers({
              "Content-Type": "application/json",
            }),
            body: JSON.stringify({
              username: value[0],
              password: value[1],
            }),
            redirect: "follow",
          });
          const token = await res.json();
          if (token.token) {
            state.theme.user_token = token.token;
            localStorage.setItem("Credentials", JSON.stringify(token));
            state.theme.isLogin = true;
            state.theme.isInvalid = { status: false };
            const getCredentials = localStorage.getItem("Credentials");
            const credentials = JSON.parse(getCredentials);
            state.theme.user_token = credentials.token;
            state.theme.user_display_name = credentials.user_display_name;
            state.theme.user_email = credentials.user_email;
            state.theme.user_nicename = credentials.user_nicename;
            state.theme.user_id = credentials.user_id;
            //GTM EVENT
            LoginSubmitEvent();
            fetch(`${state.source.api}wp/v2/users/me`, {
              method: "GET",
              headers: new Headers({
                Authorization: "Bearer " + state.theme.user_token,
                "Content-Type": "application/json",
              }),
              redirect: "follow",
            })
              .then((res) => res.json())
              .then((txt) => {
                state.theme.user_id = txt.id;
                state.theme.user_meta = {
                  country: txt.meta?.country,
                  gender: txt.meta?.gender,
                  birth_date: txt.meta?.birth_date,
                  address: txt.meta?.address,
                  postal_code: txt.meta?.postal_code,
                  phone_number: txt.meta?.phone_number,
                  club: txt.meta?.club,
                  national_team: txt.meta?.national_team,
                  current_player: txt.meta?.current_player,
                  legend_player: txt.meta?.legend_player,
                  avatar_bgimage: txt.meta?.avatar_bgimage,
                  shirt_size: txt.meta?.shirt_size,
                  follow_matches: txt.meta?.follow_matches,
                  avatar_bgimage: txt.meta?.avatar_bgimage,
                };
                localStorage.setItem(
                  "UserInfo",
                  JSON.stringify(state.theme.user_meta)
                );
              })
              .catch((err) => console.error(err));
            //HOME REDIRECT
            actions.router.set("/");
          } else if (token.data.status === 403) {
            state.theme.user_token = {};
            localStorage.removeItem("Credentials");
            state.theme.isLogin = false;
            state.theme.isInvalid = {
              status: true,
              code: token.code,
              message: token.message,
              error:
                "Sorry, invalid credentials. Try again or recover your password",
            };
          }
        },
      registerUser:
        ({ state, actions }) =>
        async (value) => {
          fetch("http://api.ipify.org/?format=json")
            .then((ipResponse) => ipResponse.json())
            .then((ip) => {
              state.theme.user_ip = ip?.ip;
            });
          fetch(
            "https://dnnq0r5ct6.execute-api.eu-west-3.amazonaws.com/pre/registerHsUser",
            {
              method: "POST",
              body: JSON.stringify({
                properties: {
                  email: value[2],
                  firstname: value[0],
                  lastname: value[1],
                },
              }),
              redirect: "follow",
            }
          )
            .then((response) => {
              response.json().then((hsResult) => {
                fetch(`${state.source.api}wp/v2/users`, {
                  method: "POST",
                  headers: new Headers({
                    Authorization: "Bearer " + state.theme.admin_token,
                    "Content-Type": "application/json",
                  }),
                  body: JSON.stringify({
                    username: value[2],
                    last_name: value[0] + " " + value[1],
                    email: value[2],
                    password: value[3],
                    nickname: value[0],
                    description: value[4],
                    roles: ["subscriber"],
                    meta: {
                      hubspot_user_id: hsResult?.id,
                      user_ip: state?.theme?.user_ip,
                    },
                  }),
                  redirect: "follow",
                })
                  .then((res) => res.json())
                  .then((token) => {
                    const registerEvent = () =>
                      actions.analytics.event({
                        name: "genericEvent",
                        payload: {
                          category: "form",
                          action: "register",
                          label: "",
                        },
                      });
                    if (token.code) {
                      if (token.status === 500 || 400) {
                        state.theme.isExist = {
                          exist: true,
                          code: token.code,
                          message:
                            "Sorry, that email address is already associated with an existing account",
                          params: token.params,
                        };
                        state.theme.isRegister = {};
                      }
                    } else if (token.id > 0) {
                      state.theme.isExist = {};
                      state.theme.isRegister = {
                        register: true,
                        email: token.email,
                        name: token.name,
                        first_name: token.first_name,
                        last_name: token.last_name,
                        username: token.username,
                        fan_code: token.description,
                        id: token.id,
                      };
                      registerEvent();
                      /*  actions.router.set("/login"); */
                    }
                  })
                  .catch((err) => console.error(err));
                //GTM EVENT
              });
            })
            .catch((error) => console.log("error", error));
        },
      getUser: ({ state }) => {
        fetch(`${state.source.api}wp/v2/users/me`, {
          method: "GET",
          headers: new Headers({
            Authorization: "Bearer " + state.theme.user_token,
            "Content-Type": "application/json",
          }),
          redirect: "follow",
        })
          .then((res) => res.json())
          .then((txt) => {
            state.theme.user_id = txt.id;
            state.theme.user_meta = {
              country: txt.meta?.country,
              gender: txt.meta?.gender,
              birth_date: txt.meta?.birth_date,
              address: txt.meta?.address,
              postal_code: txt.meta?.postal_code,
              phone_number: txt.meta?.phone_number,
              club: txt.meta?.club,
              national_team: txt.meta?.national_team,
              current_player: txt.meta?.current_player,
              legend_player: txt.meta?.legend_player,
              shirt_size: txt.meta?.shirt_size,
              follow_matches: txt.meta?.follow_matches,
              avatar_bgimage: txt.meta?.avatar_bgimage,
            };
          })
          .catch((err) => console.error(err));
      },
      updateUser:
        ({ state, actions }) =>
        async (value) => {
          /*           console.log(txt.meta); */

          fetch(`${state.source.api}wp/v2/users/me`, {
            method: "POST",
            headers: new Headers({
              Authorization: "Bearer " + value.token,
              "Content-Type": "application/json",
            }),
            body: JSON.stringify({
              meta: value.meta,
            }),
            redirect: "follow",
          })
            .then((res) => res.json())
            .then((txt) => {
              const meta = txt.meta;
              const updateUserHubspot = () => {
                //UPDATE
                fetch(
                  "https://dnnq0r5ct6.execute-api.eu-west-3.amazonaws.com/pre/updateHsUser/",
                  {
                    method: "POST",
                    body: JSON.stringify({
                      properties: {
                        phone: txt.meta?.phone_number,
                      },
                      userId: txt.meta?.hubspot_user_id,
                    }),
                    redirect: "follow",
                  }
                )
                  .then((response) => console.log(response))
                  .catch((error) => console.log("error", error));
              };

              state.theme.user_meta = {
                country: meta?.country,
                gender: meta?.gender,
                birth_date: meta?.birth_date,
                address: meta?.address,
                postal_code: meta?.postal_code,
                phone_number: meta?.phone_number,
                club: meta?.club,
                national_team: meta?.national_team,
                current_player: meta?.current_player,
                legend_player: meta?.legend_player,
                shirt_size: meta?.shirt_size,
                follow_matches: meta?.follow_matches,
                hubspot_user_id: meta?.hubspot_user_id,
                avatar_bgimage: meta?.avatar_bgimage,
                user_ip: meta?.user_ip,
              };
              localStorage.setItem("UserInfo", JSON.stringify(txt.meta));
              updateUserHubspot();
            })
            .catch((err) => console.error(err));
        },
      uploadImgToS3:
        ({ state, actions }) =>
        async (value) => {
          fetch(
            "https://dnnq0r5ct6.execute-api.eu-west-3.amazonaws.com/pre/upload",
            {
              method: "POST",
              body: JSON.stringify({
                image: value.image,
                name: value.name,
                type: value.type,
                user: value.user,
              }),
              redirect: "follow",
            }
          )
            .then((response) => {
              response.json().then((hsResult) => {
                state.theme.user_meta.avatar_bgimage = hsResult.Location;

                fetch(`${state.source.api}wp/v2/users/me`, {
                  method: "POST",
                  headers: new Headers({
                    Authorization: "Bearer " + state.theme.user_token,
                    "Content-Type": "application/json",
                  }),
                  body: JSON.stringify({
                    meta: state.theme.user_meta,
                  }),
                  redirect: "follow",
                })
                  .then((res) => res.json())
                  .then((txt) => {
                    const meta = txt.meta;
                    state.theme.user_meta = {
                      country: meta?.country,
                      gender: meta?.gender,
                      birth_date: meta?.birth_date,
                      address: meta?.address,
                      postal_code: meta?.postal_code,
                      phone_number: meta?.phone_number,
                      club: meta?.club,
                      national_team: meta?.national_team,
                      current_player: meta?.current_player,
                      legend_player: meta?.legend_player,
                      shirt_size: meta?.shirt_size,
                      follow_matches: meta?.follow_matches,
                      hubspot_user_id: meta?.hubspot_user_id,
                      avatar_bgimage: meta?.avatar_bgimage,
                    };
                    localStorage.setItem("UserInfo", JSON.stringify(txt.meta));
                  })
                  .catch((err) => console.error(err));
              });
            })
            .catch((error) => console.log("error", error));
        },
      deleteUser:
        ({ state, actions }) =>
        async (value) => {
          const deleteUserHubspot = () => {
            //DELETE
            fetch(
              "https://dnnq0r5ct6.execute-api.eu-west-3.amazonaws.com/pre/deleteHsUser/",
              {
                method: "POST",
                body: JSON.stringify({
                  userId: state.theme.user_meta.hubspot_user_id,
                }),
                redirect: "follow",
              }
            )
              .then((response) => console.log(response))
              .catch((error) => console.log("error", error));
          };

          const res = await fetch(
            `${state.source.api}wp/v2/users/${state.theme.user_id}`,
            {
              method: "DELETE",
              headers: new Headers({
                Authorization: "Bearer " + state.theme.admin_token,
                "Content-Type": "application/json",
              }),
              body: JSON.stringify({
                force: true,
                reassign: 1,
              }),
            }
          );
          const response = await res.json();
          /* console.log(response); */
          if (response?.deleted === true) {
            deleteUserHubspot();
            localStorage.removeItem("Credentials");
            localStorage.removeItem("UserInfo");
            setTimeout(() => {
              state.theme.isLogin = false;
            }, 500);
          } else {
            /* console.log("ERROR"); */
          }
          /*   if (token.code) {
                  if (token.id > 0) {
                    state.theme.isExist = {};
                    state.theme.isRegister = {
                      register: true,
                      email: token.email,
                      name: token.name,
                      first_name: token.first_name,
                      last_name: token.last_name,
                      username: token.username,
                      fan_code: token.description,
                    };
                    registerEvent();
                    actions.router.set("/login");
                  } else {
                    state.theme.isExist = {
                      exist: true,
                      code: token.code,
                      message: token.message,
                      params: token.params,
                    };
                    state.theme.isRegister = {};
                  }
                          },*/
        },

      resetPassword:
        ({ state, actions }) =>
        async (value) => {
          const res = await fetch(
            `${state.source.api}bdpwr/v1/reset-password`,
            {
              method: "POST",
              headers: new Headers({
                "Content-Type": "application/json",
              }),
              body: JSON.stringify({
                email: value,
              }),
              redirect: "follow",
            }
          );
          const response = await res.json();

          if (response.data.status === 500) {
            state.theme.resetPassword = response;
            state.theme.badEmail = true;
            state.theme.sendYouEmail = false;

            /* 		{
                              "code": "no_email",
                              "message": "You must provide an email address.",
                              "data": {
                                  "status": 400
                              }
                          } */
          } else if (response.data.status === 200) {
            /* 	{
                              "data": {
                                  "status": 200
                              },
                              "message": "A password reset email has been sent to your email address."
                          } */
            state.theme.resetPassword = response;
            state.theme.badEmail = false;
            state.theme.sendYouEmail = true;
          }
        },

      resetNewPassword:
        ({ state, actions }) =>
        async (value) => {
          const emailValue = value[0];
          const codeValue = value[1];
          const passwordlValue = value[2];
          const res = await fetch(`${state.source.api}bdpwr/v1/set-password`, {
            method: "POST",
            headers: new Headers({
              "Content-Type": "application/json",
            }),
            body: JSON.stringify({
              email: emailValue,
              code: codeValue,
              password: passwordlValue,
            }),
            redirect: "follow",
          });
          const response = await res.json();
          /*        console.log(response);
                console.log(response.data.status); */
          if (response.data.status === 400) {
            state.theme.successfullyPassword = false;
            state.theme.sendResetPassword = response;
          } else if (response.data.status === 500) {
            state.theme.successfullyPassword = false;
            state.theme.sendResetPassword = response;
          } else if (response.data.status === 200) {
            state.theme.successfullyPassword = true;
            state.theme.sendResetPassword = response;
            /*  actions.router.set("/login"); */
          }
        },

      setSearchValue:
        ({ state }) =>
        (value) => {
          state.theme.searchValue = value;
        },
    },
  },
  libraries: {
    html2react: {
      // Add a processor to html2react so it processes the <img> tags
      // inside the content HTML. You can add your own processors too.
      processors: [image, ...processors],
    },
  },
};

import { fetch } from "frontity";

export default chakraTheme;
