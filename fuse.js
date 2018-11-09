const {
  FuseBox,
  QuantumPlugin,
  WebIndexPlugin,
} = require('fuse-box')
const { context, task } = require('fuse-box/sparky')

context(
  class {
    getConfig() {
      return FuseBox.init({
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
          this.isProduction && QuantumPlugin(),
        ],
      })
    }
  }
)

task('default', async (context) => {
  const fuse = context.getConfig()

  const app = fuse
    .bundle('app')
    .instructions(' > AppRoot.tsx')
    .hmr()
    .watch()

    fuse.dev({
      root: 'dist',
      fallback: 'index.html',
    })

  await fuse.run()
})

task('dist', async (context) => {
  context.isProduction = true

  const fuse = context.getConfig()
  fuse
    .bundle('app')
    .instructions(' > AppRoot.tsx ')

  await fuse.run()
})

task('test', async (context) => {
  context.isProduction = true

  const fuse = context.getConfig()
  fuse
    .bundle('app')
    .instructions(' > AppRoot.tsx ')

  fuse.dev({
    root: 'dist',
    fallback: 'index.html',
  })

  await fuse.run()
})
