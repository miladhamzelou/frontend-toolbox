import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import inlineSvg from 'rollup-plugin-inline-svg';

import pkg from './package.json';

const config = {
  input: 'index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      globals: { 'styled-components': 'styled' },
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      globals: { 'styled-components': 'styled' },
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', 'prop-types', 'styled-components', 'isomorphic-unfetch', 'polished'],
  plugins: [
    peerDepsExternal(),
    postcss({ extract: true, plugins: [autoprefixer] }),
    inlineSvg(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    localResolve(),
    resolve({
      extensions: ['.js', '.json', '.jsx'],
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType'],
        'node_modules/stylis/stylis.min': ['Stylis'],
      },
    }),
    filesize(),
  ],
};

export default config;
