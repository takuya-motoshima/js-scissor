require('esbuild').build({
  target: 'es2020',
  platform: 'browser',
  entryPoints: require('glob').sync('./src/**/*.js'),
  outdir: 'dist',
  bundle: true,
  minify: false,
  sourcemap: false
}).catch(() => process.exit(1));