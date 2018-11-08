const { FuseBox, WebIndexPlugin } = require('fuse-box')

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es6',
  useTypescriptCompiler: true,
  output: 'dist/$name.js',
  sourceMaps: true,
  alias: {
    'react-native': 'react-native-web',
  },
  plugins: [
    WebIndexPlugin({
      template: 'web/index.html',
    }),
  ],
})

fuse.dev({
  root: 'dist',
  fallback: 'index.html',
})

fuse
  .bundle('app')
  .instructions(' > AppRoot.tsx')
  .hmr()
  .watch()

fuse.run()
