const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@body-background': '#0d2235'
           },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
