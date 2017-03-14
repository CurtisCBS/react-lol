let webpack = require('webpack');
let plugin

if(process.env.NODE_ENV == "production"){
  plugin = new webpack.ProvidePlugin({
    'httpProxy': '../common/httpProxy.js',
    'axios':'../common/axios.js'
  });
}
else{
  plugin = new webpack.ProvidePlugin({
    'httpProxy': '../common/devHttpProxy.js',
    'axios':'../common/axios.js'
  });
}
module.exports = plugin;
