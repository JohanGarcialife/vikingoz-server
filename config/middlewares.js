module.exports = [
  'strapi::errors', 
  'strapi::cors',
  //cors:{ loaded: true, load: [Getter], initialize: [Function: initialize] },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", ],
          "img-src": ["'self'", "data:", "blob:","https://res.cloudinary.com" ],
          "media-src": ["'self'", "data:", "blob:"],
          upgradeInsecureRequests: null,
           },
           
           }
  },
  }
];
