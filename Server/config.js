'use strict';

// SERVER - CONFIG FILE

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/react-universal';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL;
exports.PORT = process.env.PORT || 8080;

exports.AUTH0_DOMAIN = process.env.AUTH0_DOMAIN || 'taylor-auth.auth0.com';
exports.AUTH0_API_AUDIENCE = process.env.AUTH0_API_AUDIENCE || 'https://api-react-goal-tracker.com';

// STRIPE API KEYS
exports.stripePublishableKey = 'pk_test_YKmWpGEng6wIUHEsJL6H6Nfr';
exports.stripeSecretKey = 'sk_test_E92tFiQ0uCxQUFKZ4kNRFsjv';