const esbuild = require('esbuild');

const watch = process.argv.includes('--watch');
const minify = process.argv.includes('--minify');

const buildOptions = {
  entryPoints: ['./src/extension.ts'],
  bundle: true,
  outfile: 'out/extension.js',
  external: ['vscode'],
  format: 'cjs',
  platform: 'node',
  target: 'node14',
  sourcemap: true,
  minify: minify,
};

if (watch) {
  esbuild.context(buildOptions).then(context => {
    context.watch();
    console.log('Watching for changes...');
  }).catch((error) => {
    console.error('Watch build failed:', error);
    process.exit(1);
  });
} else {
  esbuild.build(buildOptions).then(() => {
    console.log('Build complete');
  }).catch((error) => {
    console.error('Build failed:', error);
    process.exit(1);
  });
}