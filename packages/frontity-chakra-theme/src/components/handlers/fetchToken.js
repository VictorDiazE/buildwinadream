import { fetch } from "frontity";
import { config } from "dotenv";

config();

const fetchToken = {
  name: "fetchToken",
  pattern: "/fetchToken",
  func: async ({ state }) => {
    const { WP_USER } = process.env;
    const { WP_PASSWORD } = process.env;
    const { HUBSPOT_KEY } = process.env;
    state.theme.hubspot_key = HUBSPOT_KEY;

    if (!WP_USER || !WP_PASSWORD) {
      console.error("User or password not found in env.");
    }

    const myInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: WP_USER,
        password: WP_PASSWORD,
      }),
      redirect: "follow",
    };
    const res = await fetch(`${state.source.api}jwt-auth/v1/token`, myInit);
    const token = await res.json();
    /*     console.log("TOKEN --> ", token); */
    if (token.token) {
      state.theme.admin_token = token.token;
      /* state.theme.user_token = token.token; */
    }
  },
};

export default fetchToken;
