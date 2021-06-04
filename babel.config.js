module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry',
        jsx: {
        // vite need false and vue-cli need true
          injectH: !process.env.USE_VITE
        }
      }
    ]
  ]
}
