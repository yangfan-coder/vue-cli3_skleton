const path = require('path')
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname,'./shell'),
        staticDir: path.resolve(__dirname, './dist'),
        routes: ['/', '/about'],
        port: '8989',
          text: {
            color: '#EEEEEE',
          },
          image: {
            shape: 'rect', // `rect` | `circle`
            color: '#EFEFEF',
            shapeOpposite: []
          },
          button: {
            color: 'red',
            excludes: []
          },
          svg: {
            color: '#EFEFEF',
            shape: 'circle', // circle | rect
            shapeOpposite: []
          },
          pseudo: {
            color: '#EFEFEF', // or transparent
            shape: 'circle' // circle | rect
          },
          device: 'iPhone 8 Plus',
          debug: false,
          minify: {
            minifyCSS: {
              level: 2
            },
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: false
          },
          defer: 5000,
          excludes: [],
          remove: [],
          hide: [],
          grayBlock: [],
          cookies: [],
          cssUnit: 'vw',
          decimal: 4,
          logLevel: 'info',
          quiet: false,
          noInfo: false,
          logTime: true
      })
    ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].minify = false
        return args
      })
  }
}
