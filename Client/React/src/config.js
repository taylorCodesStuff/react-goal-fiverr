// CLIENT - REACT - CONFIG FILE
export const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN || 'taylor-auth.auth0.com';
export const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID || 'ObiJNi6NdYHErZQvxnhtebAicZnh3mcw';
export const AUTH0_API_AUDIENCE = process.env.REACT_APP_AUTH0_API_AUDIENCE || 'https://api-react-goal-tracker.com';
export const AUTH0_LOGIN_REDIRECT_URL = process.env.REACT_APP_AUTH0_LOGIN_REDIRECT_URL || 'http://localhost:3000/callback';
export const AUTH0_LOGOUT_REDIRECT_URL = process.env.REACT_APP_AUTH0_LOGOUT_REDIRECT_URL || 'http://localhost:3000/';

//App server
export const APP_SERVER_URL = process.env.REACT_APP_APP_SERVER_URL || 'http://localhost:8080';
//Asset links
export const ELECTRON_APP_MAC_DOWNLOAD_URL = 'https://www.dropbox.com/s/uamywmwrnjctmsg/react-todo-universal-0.2.7.dmg?raw=1';
export const ELECTRON_APP_WIN_DOWNLOAD_URL = 'https://www.dropbox.com/s/zwzuevd69vgityj/react-todo-universal%20Setup%200.2.7.exe?raw=1';
export const REACT_UNIVERSAL_REPO_URL = 'https://github.com/by12380/react-universal';

export const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_YKmWpGEng6wIUHEsJL6H6Nfr';
export const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_E92tFiQ0uCxQUFKZ4kNRFsjv';