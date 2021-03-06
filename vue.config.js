const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { port: 9998 },
  configureWebpack: {
    output: {
      libraryTarget: 'system'
    },
    externals: [
      'element-plus',
      'vue',
      'moment',
      'org/auth'
    ]
  }
})
