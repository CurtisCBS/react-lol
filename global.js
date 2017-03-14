let webpack = require('webpack');
let plugin

if(process.env.NODE_ENV == "production"){
  plugin = new webpack.ProvidePlugin({
    'httpProxy': '../common/httpProxy.js'
  });
}
else{
  plugin = new webpack.ProvidePlugin({
    'httpProxy': '../common/devHttpProxy.js'
  });
}
module.exports = plugin;
