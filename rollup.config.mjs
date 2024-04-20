
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

const plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    terser({
      keep_classnames: true,
      keep_fnames: true,
    }),
  );
}

const API_LEVELS = ['1.0', '2.0', '3.0'];
const modules = [
  'alarm.js',
  'app-service.js',
  'app.js',
  'ble.js',
  'bleTransferFile.js',
  'device.js',
  'display.js',
  'fs.js',
  'i18n.js',
  'interaction.js',
  'media.js',
  'notification.js',
  'page.js',
  'router.js',
  'sensor.js',
  'settings.js',
  'storage.js',
  'ui.js',
  'user.js',
  'utils.js',
  'zml/common/data.js',
  'zml/common/device-polyfill.js',
  'zml/device/zml-app.js',
  'zml/device/zml-page.js',
  'zml/side/zml-side-service.js',
];

const exports = [];
const inputs = {};

API_LEVELS.forEach(apiLevel => {
  inputs[apiLevel] = [];
});

modules.forEach(module => {
  API_LEVELS.forEach(apiLevel => {
    inputs[apiLevel].push('lib/api/' + apiLevel + '/' + module);
  });
});

API_LEVELS.forEach(apiLevel => {
  exports.push({
    input: inputs[apiLevel],
    output: {
      dir: 'dist/' + apiLevel,
      format: 'es',
      plugins,
    },
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
      }),
      nodeResolve(),
      commonjs(),
    ],
    treeshake: false,
  });
});

export default exports;

// Alias({
//   entries: [
//     {find: 'lib/api/': 'lib/api/' + apiLevel + ""},
//     {find: './promise.js', replacement: './promise-1.0.js'},
//     {find: './buffer.js', replacement: './buffer-1.0.js'},
//   ],
// }),
