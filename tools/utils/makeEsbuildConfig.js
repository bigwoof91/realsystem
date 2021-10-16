const { getExternalDeps } = require('./getExternalDeps');
const { env, isProduction } = require('./env');
const { logger } = require('./logger');

// ESbuild config
const baseEsbuildConfig = {
  color: true,
  // mainFields: ['module', 'main'],
  // Fixes issues related to SSR (website builds)
  platform: 'node',
  bundle: true,
  // Changes code to fit given target environments
  target: [
    'esnext',
    'es2020',
    'chrome58',
    'firefox57',
    'safari11',
    'edge18',
    'node12',
  ],
  minify: isProduction,
  define: {
    'process.env.NODE_ENV': `"${env}"`,
  },
  inject: [`${__dirname}/../reactShim.js`],
  logLevel: 'error',
  sourcemap: 'external',
  /**
   * resolves https://github.com/evanw/esbuild/issues/1088
   */
  treeShaking: 'ignore-annotations',
};

const shouldWatch = (pkg = {}) =>
  !isProduction
    ? {
        // eslint-disable-next-line no-unused-vars
        onRebuild(err, _result) {
          if (err) throw err;
          logger.blue(`${pkg.name} rebundled!`);
        },
      }
    : false;

/**
 *
 * @param {object} customConfig
 * @param {object} pkgJson
 * @returns {object}
 */
const makeEsbuildConfig = (pkgJson, overrides = {}) => {
  getExternalDeps;
  return {
    ...baseEsbuildConfig,
    entryPoints: [pkgJson['main:dev']],
    watch: shouldWatch(pkgJson),
    external: getExternalDeps(pkgJson),
    ...overrides,
  };
};

module.exports = {
  baseEsbuildConfig,
  makeEsbuildConfig,
};
