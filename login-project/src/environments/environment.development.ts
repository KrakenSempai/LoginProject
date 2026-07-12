export const environment = {
  production: false,
  okta: {
    issuer: 'https://dev-c1zu3ltnob25cs7p.us.auth0.com/oauth2/default',
    clientId: 'Nu2jvSfZgkLumicewqNbNYVcODhkWcst',
    redirectUri: 'http://localhost:4200/login/callback',
    postLogoutRedirectUri: 'http://localhost:4200',
    scopes: ['openid', 'profile', 'email'],
  },
};