import React from "react";
import { Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";

interface IAppAuth0Provider extends React.ComponentPropsWithoutRef<"base"> {}

const auth0Config: Auth0ProviderOptions = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
  authorizationParams: {
    display: "popup",
    redirect_uri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
    scope:
      "openid read:current_user update:current_user_metadata offline_access profile email",
  },
  useRefreshTokens: true,
  cacheLocation: "localstorage",
};

function AppAuth0Provider(props: IAppAuth0Provider) {
  return <Auth0Provider {...auth0Config}>{props.children}</Auth0Provider>;
}

export default AppAuth0Provider;
