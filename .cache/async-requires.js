// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("./../../../node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-chapter-js": () => import("./../../../src/templates/chapter.js" /* webpackChunkName: "component---src-templates-chapter-js" */)
}

