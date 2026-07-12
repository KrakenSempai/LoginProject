export const environment = {
  production: true,
  okta: {
    issuer: 'https://{yourOktaDomain}/oauth2/default',
    clientId: '{yourClientId}',
    redirectUri: 'https://your-production-domain.com/login/callback',
    postLogoutRedirectUri: 'https://your-production-domain.com',
    scopes: ['openid', 'profile', 'email'],
  },
};