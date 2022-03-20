import { AuthConfig } from "angular-oauth2-oidc";

export const authCodeFlowConfig: AuthConfig = {
  issuer: "https://xxxxxxxxxxxxxxxxx.com/oidc/2",
  redirectUri: "http://localhost:4200/eims/home",
  clientId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  responseType: "id_token token",
  scope: "profile",
  showDebugInformation: true,
};
