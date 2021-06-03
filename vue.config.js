module.exports = {
  // ...
  pluginOptions: {
    vite: {
      /**
       * Plugin[]
       * @default []
       */
      plugins: [], // other vite plugins list, will be merge into this plugin\'s underlying vite.config.ts
      /**
       * you can enable jsx support by setting { jsx: true }
       * @see {@link https://github.com/underfin/vite-plugin-vue2#options}
       * @default {}
       */
      vitePluginVue2Options: {
        jsx: true
      },
      /**
       * @vitejs/plugin-vue-jsx Options
       * @see {@link https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx#options}
       * @default {}
       */
      vitePluginVue3Options: {
      },
      /**
       * Vite UserConfig.optimizeDeps options
       * recommended set `include` for speedup page-loaded time
       * @default {}
       */
      optimizeDeps: {}
    }
  }
}
