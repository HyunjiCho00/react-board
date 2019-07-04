// next.config.js
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
module.exports = withSass(withCSS());

/* With CSS Modules */
// module.exports = withCSS({ cssModules: true })

/* With additional configuration on top of CSS Modules */
/*
module.exports = withCSS({
  cssModules: true,
  webpack: function (config) {
    return config;
  }
});
*/
